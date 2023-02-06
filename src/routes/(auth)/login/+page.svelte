<script lang="ts">
	import { pb, user } from '$lib/pb';
	import { goto, invalidateAll } from '$app/navigation';
	import { prevPage } from '$lib/login';
	import { Button, Helper, Input, Label, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let loginForm;

	let email: string;
	let password: string;

	let loading = false;

	let error = null;

	async function login() {
		if (!loginForm.checkValidity()) {
			return;
		}
		loading = true;
		try {
			await pb.collection('users').authWithPassword(email, password);
			await invalidateAll();
		} catch (e) {
			error = e.message;
			loading = false;
			return;
		}
		let prev = $prevPage;
		prevPage.set('');
		await goto(prev == '' ? '/dash' : prev);
	}

	onMount(() => {
		if (data.user) {
			goto('/dash?error=alreadyLoggedIn');
		}
	});
</script>

<svelte:head>
	<title>Login | When3meet</title>
</svelte:head>

<section class="relative bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10">
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Login
				</h1>
				<form class="space-y-4 md:space-y-6" action="#" bind:this={loginForm}>
					<div>
						<Label for="login-email">Email</Label>
						<Input
							type="email"
							bind:value={email}
							label="Email"
							id="login-email"
							placeholder="john.doe@example.com"
						/>
						{#if error}
							<Helper lass="mt-2" color="red">{error}</Helper>
						{/if}
					</div>
					<div>
						<Label for="login-password">Password</Label>
						<Input
							type="password"
							bind:value={password}
							label="Password"
							id="login-password"
							placeholder="Password"
						/>
					</div>
					<Button type="submit" on:click={login} color="primary"
						>{#if loading}<Spinner class="mr-3" size="4" color="white" />{/if}Login</Button
					>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Need an account? <a
							href="/register"
							class="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>Register here</a
						>
					</p>
				</form>
			</div>
		</div>
		<div
			class="hidden overflow-hidden md:block absolute w-full h-full blur-3xl isolate z-0 pointer-events-none"
		>
			<!-- Circle 1 blue gradient -->
			<div
				class="absolute top-3 left-5 aspect-square h-3/5 bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 rounded-full opacity-10 mix-blend-multiply"
			/>
			<!-- Circle 2 pink gradient -->
			<div
				class="absolute top-1/2 right-3 aspect-square w-3/5 bg-gradient-to-br from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 rounded-full opacity-10 mix-blend-multiply"
			/>
			<!-- Circle 3 purple gradient -->
			<div
				class="absolute bottom-3 left-1/2 aspect-square w-2/5 bg-gradient-to-br from-purple-400 to-purple-500 dark:from-purple-500 dark:to-purple-600 rounded-full opacity-10 mix-blend-multiply"
			/>
		</div>
	</div>
</section>
