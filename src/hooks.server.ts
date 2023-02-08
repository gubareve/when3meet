import type { Handle } from '@sveltejs/kit';
import { pbUrl } from '$lib/pb';
import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Before
	event.locals.pb = new PocketBase(pbUrl);
	event.locals.pb.autoCancellation(false);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (event.locals.pb.authStore.isValid) {
		if (event.url && (event.url.pathname == '/login' || event.url.pathname == '/register')) {
			throw redirect(302, '/dash');
		}

		event.locals.user = event.locals.pb.authStore.model;
	} else if (
		event.url &&
		(event.url.pathname.startsWith('/flow') || event.url.pathname == '/dash')
	) {
		if (event.route.id) {
			throw redirect(302, '/login?red=' + encodeURIComponent(event.url.pathname));
		}
		throw redirect(302, '/login');
	}

	return resolve(event);
};
