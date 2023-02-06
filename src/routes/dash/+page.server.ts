import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { serializeObj } from '$lib/pb';

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
	let groups = (
		await locals.pb.collection('groups').getList(1, 30, {
			filter: `members.id ?= "${locals.user!.id}"`,
			sort: '-created'
		})
	).items;

	return {
		groups: serializeObj(groups)
	};
}) satisfies PageServerLoad;
