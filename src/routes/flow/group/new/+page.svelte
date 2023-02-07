<script lang="ts">
	import { Button, Helper } from 'flowbite-svelte';
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import type { ClientResponseError } from 'pocketbase';

	let title = '';
	let description = '';
	let error: any = {};
	let loading = false;

	export let data: PageData;

	async function create(e: Event) {
		e.preventDefault();
		loading = true;
		try {
			let res = await pb.collection('groups').create({
				title: title,
				description: description,
				author: data.user!.id,
				members: [data.user!.id],
				organizers: [data.user!.id]
			});
			await goto('/flow/group/view/' + res.id);
		} catch (e) {
			error = (e as ClientResponseError).data.data;
		}
		loading = false;
	}
</script>

<div class="container max-w-2xl mx-auto pt-10">
	<h1 class="text-4xl">Create a new group</h1>
	<form>
		<div class="my-6">
			<label
				for="default-input"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group title</label
			>
			<input
				type="text"
				id="default-input"
				maxlength="30"
				bind:value={title}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			{#if error.title}
				<Helper lass="mb-2" color="red">{error.title.message}</Helper>
			{/if}
		</div>
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Group description</label
		>
		<textarea
			id="message"
			bind:value={description}
			rows="4"
			maxlength="120"
			class="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
		{#if error.description}
			<Helper class="mb-2" color="red">{error.description.message}</Helper>
		{/if}
		<Button color="primary" on:click={create} disabled={loading}>Create</Button>
	</form>
</div>
