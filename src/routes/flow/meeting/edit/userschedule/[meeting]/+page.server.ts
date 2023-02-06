import { serializeObj } from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	let meeting = await locals.pb.collection('meetings').getOne(params.meeting, {
		expand: 'group'
	});
	let days = await locals.pb.collection('days').getFullList(100, {
		filter: `meeting = "${meeting.id}"`,
		sort: 'day'
	});
	let schedules = await locals.pb.collection('schedules').getFullList(100, {
		filter: `day.meeting = "${meeting.id}" && author.id = "${locals.user!.id}"`
	});

	// Make schedule
	let schedule: number[][] = [];
	for (let day of days) {
		let s = schedules.find((v) => v.day == day.id);
		let v = new Array(24 * 4).fill(0);
		if (s) {
			for (let ind of s.available) {
				v[ind] = 1;
			}
		}
		v = v.slice(meeting.start * 4, meeting.end * 4);
		schedule.push(v);
	}

	return {
		meeting: serializeObj(meeting),
		group: serializeObj(meeting.expand.group),
		days: serializeObj(days),
		schedules: serializeObj(schedules),
		initialSchedule: schedule
	};
}) satisfies PageServerLoad;
