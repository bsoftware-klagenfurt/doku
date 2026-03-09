import type { PageServerLoad } from './$types';
import { listDocs } from '$lib/docs';

export const load: PageServerLoad = async () => {
	const docs = await listDocs('webapps/');
	return { docs };
};
