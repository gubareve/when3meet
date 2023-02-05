import type { PageLoad } from './$types';
import { pb } from "$lib/pb";
import {redirect} from "@sveltejs/kit";

export const load = (async ({ params }) => {
    if (!pb.authStore.isValid) {
        throw redirect(303, "/");
    }
    let groups = (await pb.collection("groups").getList(1, 30, {
        filter: `members.id ?= "${pb.authStore.model!.id}"`,
        sort: "-created",
    })).items;

    return {
        groups: groups,
    };
}) satisfies PageLoad;