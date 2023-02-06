<script lang="ts">
	import '$lib/datepicker.css';
	import { getHourName } from '$lib/util';
	import { pb, user } from '$lib/pb';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Card, Input } from 'flowbite-svelte';
	import Datepicker from '$lib/datepicker';
	import { Button, Helper, Label, Select } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';

	let title = '';
	let description = '';
	let group = '';
	let start = 1;
	let end = 23;

	let error = {};
	let loading = false;
	let dates: Date[];

	let days = [];
	for (let i = 0; i < 24; i++) {
		days.push({
			name: getHourName(i),
			value: i
		});
	}

	async function create() {
		loading = true;
		try {
			let res = await pb.collection('meetings').create({
				title: title,
				description: description,
				group: $page.params.group,
				start: start,
				end: end
			});
			// Create days
			await Promise.all(
				dates.map((date) => {
					return pb.collection('days').create({
						meeting: res.id,
						day: date
					});
				})
			);

			await goto('/flow/meeting/view/' + res.id);
		} catch (e) {
			error = e.data.data;
		}
		loading = false;
	}

	function dateToString(d) {
		return dayjs(d).format('dddd, MMMM D');
	}

	onMount(async () => {
		let datePicker = new Datepicker('#possible-days-switcher', {
			multiple: true,
			serialize: dateToString,
			separator: '; ',
			onChange(dt: Date[]) {
				dates = dt;
			}
		});
	});
</script>

<div class="container max-w-2xl mx-auto pt-10">
	<h1 class="text-4xl">Create a new meeting</h1>
	<form>
		<div class="my-6">
			<label
				for="default-input"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting title</label
			>
			<input
				type="text"
				id="default-input"
				bind:value={title}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
		{#if error.title}
			<Helper type="error">{error.title.message}</Helper>
		{/if}
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Meeting description</label
		>
		<textarea
			id="message"
			bind:value={description}
			rows="4"
			class="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
		{#if error.description}
			<Helper type="error">{error.description.message}</Helper>
		{/if}

		{#if error.group}
			<Helper type="error">{error.group.message}</Helper>
		{/if}

		<div class="flex flex-row">
			<div class="flex-grow">
				<Label for="$start-time-switcher" class="mb-2">Start time</Label>
				<Select
					id="start-time-switcher"
					class="mb-6"
					label="Start time"
					items={days}
					bind:value={start}
				/>
			</div>
			<div class="ml-4 flex-grow">
				<Label for="$end-time-switcher" class="mb-2">End time</Label>
				<Select
					id="end-time-switcher"
					class="mb-6"
					label="End time"
					items={days}
					bind:value={end}
				/>
			</div>
		</div>

		<div class="my-6 block">
			<Label for="#possible-days-switcher" class="mb-2">Allowed days</Label>
			<Input id="possible-days-switcher" class="mb-6 w-full" type="text" />
		</div>

		<Button color="primary" on:click={create} class="my-5 float-right" {loading} disabled={loading}
			>Create</Button
		>
	</form>
</div>

<style>
	:global(.datepicker) {
		width: 100%;
	}
</style>
