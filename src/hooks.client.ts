import { pb } from '$lib/pb';

pb.authStore.loadFromCookie(document.cookie);

pb.authStore.onChange(async () => {
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false, sameSite: "lax" });
});
