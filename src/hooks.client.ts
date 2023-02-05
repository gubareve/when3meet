import {pb, user} from "$lib/pb";

pb.authStore.onChange(() => {
    user.set(pb.authStore.model);
    document.cookie = pb.authStore.exportToCookie({httpOnly: false});
});