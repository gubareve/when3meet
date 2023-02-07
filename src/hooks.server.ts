import type { Handle } from '@sveltejs/kit';
import { pb, pbUrl } from '$lib/pb';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	// Before
	event.locals.pb = new PocketBase(pbUrl);
	event.locals.pb.autoCancellation(false);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
	}

	return resolve(event);
};
