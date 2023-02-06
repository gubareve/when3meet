<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import MemberAvatar from '$lib/components/MemberAvatar.svelte';

	export let user;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			When3Meet
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		{#if user == null}
			<Button href="/login" color="primary" size="sm">Login</Button>
		{:else}
			<div>
				<MemberAvatar member={user} size="md" class="inline-block cursor-pointer" />
			</div>
			<Dropdown>
				<DropdownItem href="/dash">Dashboard</DropdownItem>
				<DropdownItem slot="footer" href="/logout">Logout</DropdownItem>
			</Dropdown>
		{/if}
		<NavHamburger on:click={toggle} />
	</div>

	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
