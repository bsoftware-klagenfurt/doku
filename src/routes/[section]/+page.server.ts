import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { listDocsBySection, listSections } from '$lib/docs';

export const load: PageServerLoad = async ({ params }) => {
	const { section } = params;
	const sections = await listSections();
	if (!sections.includes(section)) {
		throw error(404, 'Section not found');
	}

	const docs = await listDocsBySection(section);
	return { section, docs };
};
