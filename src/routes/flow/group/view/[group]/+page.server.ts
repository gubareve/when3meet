import type { PageServerLoad } from './$types';
import { serializeObj } from '$lib/pb';

export const load = (async ({ params, locals }) => {
	let group = await locals.pb
		.collection('groups')
		.getOne(params.group, { expand: 'author,members' });
	let meetings = await locals.pb.collection('meetings').getList(1, 30, {
		filter: `group = "${params.group}"`,
		sort: '-created'
	});
	return {
		group: serializeObj(group),
		meetings: serializeObj(meetings.items)
	};
}) satisfies PageServerLoad;
