import type { LayoutServerLoad } from './$types';
import { listSections } from '$lib/docs';

export const load: LayoutServerLoad = async () => {
	const sections = await listSections();
	return { sections };
};
