import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { base } from '$app/paths';
import { loadDoc } from '$lib/docs';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

function applyBaseToRootRelativeUrls(html: string): string {
	if (!base) return html;

	return html.replace(/(src|href)="([^"]+)"/g, (full, attr: string, url: string) => {
		if (!url.startsWith('/') || url.startsWith('//') || url.startsWith(`${base}/`)) {
			return full;
		}
		return `${attr}="${base}${url}"`;
	});
}

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	try {
		const doc = await loadDoc(slug);
		const processed = await remark().use(remarkHtml).process(doc.markdown);
		const html = applyBaseToRootRelativeUrls(processed.toString());
		return {
			slug,
			title: doc.title,
			description: doc.description,
			html
		};
	} catch (e: unknown) {
		throw error(404, e instanceof Error ? e.message : 'Not found');
	}
};
