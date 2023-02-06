import type { PageServerLoad } from './$types';
import {serializeObj} from "$lib/pb";

export const load = (async ({ params, locals }) => {
    let meeting = await locals.pb.collection("meetings").getOne(params.meeting, {
        expand: "group",
    });
    let days = await locals.pb.collection("days").getFullList(100, {
        filter: `meeting = "${meeting.id}"`,
        sort: "day",
    })
    let schedules = await locals.pb.collection("schedules").getFullList(100, {
        filter: `day.meeting = "${meeting.id}"`,
    })
    return {
        meeting: serializeObj(meeting),
        group: serializeObj(meeting.expand.group),
        days: serializeObj(days),
        schedules: serializeObj(schedules),
    };
}) satisfies PageServerLoad;