import { pb } from "$lib/pb";
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    let meeting = await pb.collection("meetings").getOne(params.meeting);
    return {
        meeting: meeting,
    };
}) satisfies PageLoad;