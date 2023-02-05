<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {Avatar, Button, Card, Heading, P} from "flowbite-svelte";
    import {onMount} from "svelte";
    import MemberAvatar from "$lib/components/MemberAvatar.svelte";
    import type {Record} from "pocketbase";
    import {goto} from "$app/navigation";

    export let data: {groups: Record[]};

    let errorMessage = null;
    let avatarFile;
    let avatarInput;

    function getAvatar() {
        avatarInput.click();
    }

    onMount(async () => {
        // Avatar changed
        avatarInput.onchange = async (e) => {
            const formData = new FormData();
            formData.append("avatar", e.target.files[0]);

            await pb.collection("users").update($user.id, formData)
        };
    })
</script>
<header aria-label="Page Header">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-center mr-4">
                <form>
                    <input type="file" accept="image/png" bind:this={avatarInput} hidden />
                    <div class="cursor-pointer hover:brightness-95" on:click={getAvatar}>
                        <MemberAvatar member={$user} size="lg" thumbSize="256x256" class="text-2xl" />
                    </div>
                </form>
            </div>
            <div class="text-center sm:text-left flex-grow">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome back{$user ? ", " + $user.name.split(" ")[0] : ""}!
                </h1>

                <p class="mt-1.5 text-sm text-gray-500">
                    Edit your current schedule or schedule a new meeting
                </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Button on:click={() => {goto("/flow/group/new")}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Create group
                </Button>
            </div>
        </div>
    </div>
</header>
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-bold py-4">Your Groups</h1>
    <div class="grid grid-cols-auto-fill-lg gap-4 max-w-full">
        {#each data.groups as group}
            <Card href="/flow/group/view/{group.id}" class="block w-full w-[30rem]">
                <Heading tag="h3" class="text-lg font-bold">
                    {group.title}
                </Heading>
                <P>
                    {group.description}
                </P>
            </Card>
        {/each}
    </div>
    <br>
    <Button href="/flow/group/new">
        Create a new group
    </Button>
</div>
