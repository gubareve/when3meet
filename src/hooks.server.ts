import type {Handle} from "@sveltejs/kit";
import {pb, user} from "$lib/pb";

export const handle: Handle = async ({event, resolve}) => {
    // Before
    pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
    if (pb.authStore.isValid) {
        user.set(structuredClone(pb.authStore.model));
    }

    return resolve(event);
}