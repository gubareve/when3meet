<script lang="ts">
	import TimeView from '$lib/components/TimeView.svelte';
	import dayjs from 'dayjs';
	import TimeViewInteractive from '$lib/components/TimeViewInteractive.svelte';
	import { Button, Heading } from 'flowbite-svelte';
	import { pb } from '$lib/pb';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	function dateToString(d) {
		return dayjs(d.day).format('M/D/YYYY');
	}
	let schedule = [];

	// Make schedule
	for (let day of data.days) {
		let s = data.schedules.find((v) => v.day == day.id);
		let v = new Array(24 * 4).fill(0);
		if (s) {
			for (let ind of s.available) {
				v[ind] = 1;
			}
		}
		v.slice(data.meeting.start * 4, data.meeting.end * 4);
		schedule.push(v);
	}

	let loading = false;
	async function save() {
		loading = true;
		let promises = [];
		for (let [i, day] of schedule.entries()) {
			let vals = [];
			for (let i = 0; i < day.length; i++) {
				if (day[i] == 1) {
					vals.push(i + data.meeting.start * 4);
				}
			}

			// Check if schedule exists
			let s = data.schedules.find((v) => v.day == data.days[i].id);
			if (s) {
				// Update
				promises.push(
					pb.collection('schedules').update(s.id, {
						available: vals
					})
				);
			} else {
				promises.push(
					pb.collection('schedules').create({
						author: data.user.id,
						day: data.days[i].id,
						available: vals
					})
				);
			}
		}
		await Promise.all(promises);
		loading = false;
		await goto('/flow/meeting/view/' + data.meeting.id);
	}
</script>

<svelte:head>
	<title>Edit Schedule | When3meet</title>
</svelte:head>

<div class="container max-w-2xl mx-auto pt-10">
	<Heading class="py-2" tag="h2">Your schedule</Heading>
	<TimeViewInteractive
		interactive
		startTime={data.meeting.start}
		endTime={data.meeting.end}
		dayNames={data.days.map(dateToString)}
		bind:schedule
		initialSchedule={schedule}
	/>
	<Button class="my-4" on:click={save} disabled={loading}>Save</Button>
</div>
