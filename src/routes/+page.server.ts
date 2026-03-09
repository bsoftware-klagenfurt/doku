import type { PageServerLoad } from './$types';
import { listSections } from '$lib/docs';

export const load: PageServerLoad = async () => {
	const sections = await listSections();
	return { sections };
};
