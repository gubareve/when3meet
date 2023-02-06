import type { LayoutServerLoad } from './$types';
import {serializeObj} from "$lib/pb";

export const load = (async ({ locals }) => {
    if (locals.user ){
        return {
            user: serializeObj(locals.user),
        }
    }
}) satisfies LayoutServerLoad;