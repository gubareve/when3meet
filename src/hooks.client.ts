import { pb, user } from '$lib/pb';

pb.authStore.onChange(async () => {
	user.set(pb.authStore.model);
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});
