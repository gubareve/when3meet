import { pb } from "$lib/pb";
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    let group = await pb.collection("groups").getOne(params.group, { expand: "author,members" });
    let meetings = await pb.collection("meetings").getList(1, 30, {
        filter: `group = "${params.group}"`,
        sort: "-created",
    })
    return {
        group: group,
        meetings: meetings.items,
    };
}) satisfies PageLoad;