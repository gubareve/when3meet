import PocketBase from 'pocketbase';
import {writable} from "svelte/store";

export const pb = new PocketBase('https://alert-etc-thumbs-yoga.trycloudflare.com/');
export const user = writable(pb.authStore.model);

pb.authStore.onChange(() => {
    user.set(pb.authStore.model);
})