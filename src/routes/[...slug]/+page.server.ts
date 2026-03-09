import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { loadDoc } from '$lib/docs';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	try {
		const doc = await loadDoc(slug);
		const processed = await remark().use(remarkHtml).process(doc.markdown);
		return {
			slug,
			title: doc.title,
			description: doc.description,
			html: processed.toString()
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
};
