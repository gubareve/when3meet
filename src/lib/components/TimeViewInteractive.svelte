<script lang="ts">
	import dayjs from 'dayjs';
	import { Card } from 'flowbite-svelte';
	import { getHourName } from '$lib/util';

	export let dayNames;
	export let startTime;
	export let endTime;

	export let initialSchedule;

	export let interactive;

	$: times = Array.from({ length: endTime - startTime + 1 }, (_, i) => i + startTime);
	$: stringTimes = times.map(getHourName);

	$: subtimes = Array.from({ length: 4 * (endTime - startTime) }, (_, i) => i / 4);

	let interactiveSchedule = initialSchedule;
	export let schedule = Array.from(interactiveSchedule);

	function colorFromPercent(percent: number) {
		// percent is between 0 and 1
		// #ecfdf5 = 0 to #10b981 = 1
		const r = Math.floor(0xff + (0x10 - 0xec) * percent);
		const g = Math.floor(0xff + (0xb9 - 0xfd) * percent);
		const b = Math.floor(0xff + (0x81 - 0xf5) * percent);
		return `rgb(${r}, ${g}, ${b})`;
	}

	let dragStartPos = null;
	let dragEndPos = null;
	let dragInvert = false;

	// Set a part of a 2d array to a value
	// making a rectangle from start to end
	// it should work if start is greater than end
	function setRect(arr, start, end, value) {
		const [startX, startY] = start;
		const [endX, endY] = end;
		for (let x = Math.min(startX, endX); x <= Math.max(startX, endX); x++) {
			for (let y = Math.min(startY, endY); y <= Math.max(startY, endY); y++) {
				arr[x][y] = value;
			}
		}
	}

	function dragStart(e) {
		if (interactive) {
			let day = e.target.dataset.day;
			let st = e.target.dataset.st;
			dragStartPos = [day, st];
			dragEndPos = [day, st];
			dragInvert = (schedule[day][st] == 1) !== e.shiftKey;
			interactiveSchedule = Array.from(schedule);
			window.addEventListener('mouseup', dragEnd);
		}
	}

	function dragEnd(e) {
		window.removeEventListener('mouseup', dragEnd);
		if (e.target.dataset.day) {
			dragEndPos = [e.target.dataset.day, e.target.dataset.st];
		}
		if (dragStartPos && dragEndPos) {
			setRect(schedule, dragStartPos, dragEndPos, dragInvert ? 0 : 1);
			interactiveSchedule = Array.from(schedule);
		}
		dragStartPos = null;
		dragEndPos = null;
	}

	function dragging(e) {
		if (interactive && dragStartPos) {
			if (e.target.dataset.day) {
				dragEndPos = [e.target.dataset.day, e.target.dataset.st];
			}
			interactiveSchedule = Array.from(schedule);
			setRect(interactiveSchedule, dragStartPos, dragEndPos, dragInvert ? 0 : 1);
			interactiveSchedule = interactiveSchedule;
		}
	}
</script>

<Card class="w-full !max-w-none">
	<div class="overflow-x-scroll w-full h-auto select-none">
		<div class="times grid columns-1 place-content-end absolute w-20 pt-4 pl-3">
			{#each stringTimes as time}
				<div class="time h-[4rem] text-right">{time}</div>
			{/each}
		</div>
		<table class="ml-24" on:mouseover={dragging}>
			<thead>
				<tr>
					{#each dayNames as day}
						<th class="w-[2rem]">{day}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each subtimes as subtime, i}
					<tr class="h-[1rem] row">
						{#each interactiveSchedule as day, j}
							<td
								on:mousedown={dragStart}
								class="col w-[20rem]"
								data-day={j}
								data-st={i}
								style="background-color: {colorFromPercent(day[i])}"
							/>
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
