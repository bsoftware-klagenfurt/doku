type Frontmatter = {
	title: string;
	description?: string;
};

export type DocMeta = {
	slug: string;
	title: string;
	description?: string;
};

const files = import.meta.glob<string>('../../content/docs/**/*.md', {
	query: '?raw',
	import: 'default'
});

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; bodyMarkdown: string } {
	let title = 'Untitled';
	let description: string | undefined;
	let bodyMarkdown = raw;

	if (raw.startsWith('---')) {
		const end = raw.indexOf('\n---', 3);
		if (end !== -1) {
			const fmBlock = raw.slice(3, end).trim();
			bodyMarkdown = raw.slice(end + '\n---'.length).trimStart();

			for (const line of fmBlock.split('\n')) {
				const idx = line.indexOf(':');
				if (idx === -1) continue;
				const key = line.slice(0, idx).trim();
				const value = line.slice(idx + 1).trim();
				if (key === 'title' && value) title = value;
				if (key === 'description' && value) description = value;
			}
		}
	}

	return { frontmatter: { title, description }, bodyMarkdown };
}

function normalizeSlugFromPath(path: string): string {
	// ../../content/docs/webapps/getting-started.md -> webapps/getting-started
	const marker = '/content/docs/';
	const i = path.lastIndexOf(marker);
	const rel = i >= 0 ? path.slice(i + marker.length) : path;
	return rel.replace(/\.md$/, '').replace(/^\/+/, '');
}

export async function listDocs(prefix?: string): Promise<DocMeta[]> {
	const entries = Object.entries(files);

	const metas: DocMeta[] = [];
	for (const [path, loader] of entries) {
		const slug = normalizeSlugFromPath(path);
		if (prefix && !slug.startsWith(prefix)) continue;

		const raw = await loader();
		const { frontmatter } = parseFrontmatter(raw);

		metas.push({
			slug,
			title: frontmatter.title,
			description: frontmatter.description
		});
	}

	metas.sort((a, b) => a.slug.localeCompare(b.slug));
	return metas;
}

export async function loadDoc(
	slug: string
): Promise<{ title: string; description?: string; markdown: string }> {
	for (const [path, loader] of Object.entries(files)) {
		if (normalizeSlugFromPath(path) === slug) {
			const raw = await loader();
			const { frontmatter, bodyMarkdown } = parseFrontmatter(raw);
			return { title: frontmatter.title, description: frontmatter.description, markdown: bodyMarkdown };
		}
	}
	throw new Error('DOC_NOT_FOUND');
}

