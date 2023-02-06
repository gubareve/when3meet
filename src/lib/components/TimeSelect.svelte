<script lang="ts">
	import dayjs from 'dayjs';
	import { Card } from 'flowbite-svelte';
	import { getHourName } from '$lib/util';

	export let days;
	export let dayNames;
	export let startTime;
	export let endTime;

	$: times = Array.from({ length: endTime - startTime + 1 }, (_, i) => i + startTime);
	$: stringTimes = times.map(getHourName);

	$: subtimes = Array.from({ length: 4 * (endTime - startTime) }, (_, i) => i / 4);

	function colorFromPercent(percent: number) {
		// percent is between 0 and 1
		// #ecfdf5 = 0 to #10b981 = 1
		const r = Math.floor(0xff + (0x10 - 0xec) * percent);
		const g = Math.floor(0xff + (0xb9 - 0xfd) * percent);
		const b = Math.floor(0xff + (0x81 - 0xf5) * percent);
		return `rgb(${r}, ${g}, ${b})`;
	}
</script>

<Card class="w-full !max-w-none">
	<div class="overflow-x-scroll w-full h-auto">
		<div class="times grid columns-1 place-content-end absolute w-20 pt-4 pl-3">
			{#each stringTimes as time}
				<div class="time h-[2rem] text-right">{time}</div>
			{/each}
		</div>
		<table class="ml-24">
			<thead>
				<tr>
					{#each dayNames as day}
						<th class="w-[2rem]">{day}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each subtimes as subtime, i}
					<tr class="h-[0.5rem] row">
						{#each days as day}
							<td class="col w-96" style="background-color: {colorFromPercent(day[i])}" />
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Card>

<style>
	.row:nth-child(1) {
		@apply border-t border-emerald-800/10;
	}
	.row:nth-child(4n) {
		@apply border-b border-emerald-800/10;
	}
</style>
