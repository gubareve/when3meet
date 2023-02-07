import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

import { PUBLIC_PB_URL } from '$env/static/public';

export const pbUrl = PUBLIC_PB_URL || 'http://127.0.0.1:8090/';

export const pb = new PocketBase(pbUrl);
pb.autoCancellation(false);

export function serializeObj(v: any): any {
	return JSON.parse(JSON.stringify(v));
}
