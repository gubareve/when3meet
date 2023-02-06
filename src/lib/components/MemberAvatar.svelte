<script>
	import { Avatar } from 'flowbite-svelte';
	import { pb } from '$lib/pb';

	export let member;

	export let name;
	export let avatar;

	export let size = 'md';
	export let thumbSize = '128x128';
	export let stacked = false;

	export let border = false;

	$: n = name || member?.name;

	let a;
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
