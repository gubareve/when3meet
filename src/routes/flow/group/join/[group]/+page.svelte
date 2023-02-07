<script lang="ts">
	import { pb } from '$lib/pb';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';
	import { Spinner } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(async () => {
		let group = await pb.collection('groups').getOne($page.params.group);
		if (!group.members.includes(data.user!.id)) {
			group.members.push(data.user!.id);
			await pb.collection('groups').update($page.params.group, {
				members: group.members
			});
			await invalidateAll();
		}

		await goto('/flow/group/view/' + $page.params.group);
	});
</script>

<div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
	<Spinner />
</div>
