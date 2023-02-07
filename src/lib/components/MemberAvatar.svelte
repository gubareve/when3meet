<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { pb } from '$lib/pb';
	import type { Record } from 'pocketbase';

	export let member: Record;

	export let name: string | null = null;
	export let avatar: string | null = null;

	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let thumbSize = '128x128';
	export let stacked = false;

	export let border = false;

	let n: string;
	$: n = name || member?.name;

	let a: null | string;
	$: {
		a = avatar;
		if (!avatar && member && member.avatar) {
			a = pb.getFileUrl(member, member.avatar, { thumb: thumbSize });
		}
	}

	$: initials = n
		?.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase();
</script>

{#if a}
	<Avatar src={a} {stacked} {size} {border} class={$$props.class} />
{:else}
	<Avatar {border} {stacked} {size} class={$$props.class}>
		{initials}
	</Avatar>
{/if}
