<script lang="ts">
	import { pb } from '$lib/pb';
	import { goto, invalidateAll } from '$app/navigation';
	import { prevPage } from '$lib/login';
	import { A, Button, Checkbox, Helper, Input, Label, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { ClientResponseError } from 'pocketbase';

	export let data: PageData;

	let name: string;
	let email: string;
	let password: string;
	let avatar: FileList;
	let registerForm: HTMLFormElement;

	let loading = false;

	let error: any = {};

	async function register() {
		if (registerForm.checkValidity() === false) {
			return;
		}
		loading = true;

		let data = new FormData();
		data.append('name', name);
		data.append('email', email);
		data.append('password', password);
		data.append('passwordConfirm', password);
		if (avatar) {
			data.append('avatar', avatar[0]);
		}

		try {
			await pb.collection('users').create(data);
		} catch (e) {
			error = (e as ClientResponseError).data.data;
			loading = false;
			return;
		}

		await pb.collection('users').authWithPassword(email, password);
		await invalidateAll();

		await goto($prevPage == '' ? '/dash' : $prevPage);
	}

	onMount(() => {
		if (data.user) {
			goto('/dash?error=alreadyLoggedIn');
		}
	});

	function logout() {
		pb.authStore.clear();
	}
</script>

<svelte:head>
	<title>Register | When3meet</title>
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
					Create an account
				</h1>
				<form class="space-y-4 md:space-y-6" action="#" bind:this={registerForm}>
					<div>
						<Label for="register-name">Name</Label>
						<Input bind:value={name} label="Username" id="register-name" placeholder="John Doe" />
						{#if error.name}
							<Helper lass="mt-2" color="red">{error.name.message}</Helper>
						{/if}
					</div>
					<div>
						<Label for="register-email">Email</Label>
						<Input
							type="email"
							bind:value={email}
							label="Email"
							id="register-email"
							placeholder="john.doe@example.com"
							error={error.email ? error.email.message : null}
						/>
						{#if error.email}
							<Helper lass="mt-2" color="red">{error.email.message}</Helper>
						{/if}
					</div>
					<div>
						<Label for="register-email">Password</Label>
						<Input
							type="password"
							bind:value={password}
							label="Password"
							id="register-email"
							placeholder="Password"
							error={error.password ? error.password.message : null}
						/>
						{#if error.password}
							<Helper lass="mt-2" color="red">{error.password.message}</Helper>
						{/if}
					</div>
					<Checkbox class="mb-6 space-x-1" required
						>I agree with the <A href="/terms">terms and conditions</A>.</Checkbox
					>
					<Button type="submit" on:click={register} disabled={loading} color="primary"
						>{#if loading}<Spinner class="mr-3" size="4" color="white" />{/if}Submit</Button
					>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account? <a
							href="/login"
							class="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>Login here</a
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
