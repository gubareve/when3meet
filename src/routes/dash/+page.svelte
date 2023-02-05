<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {Avatar, Button, Card, Heading, P} from "flowbite-svelte";
    import {onMount} from "svelte";
    import MemberAvatar from "$lib/components/MemberAvatar.svelte";

    let errorMessage = null;

    let groups = [];
    let avatarFile;
    let avatarInput;

    function getAvatar() {
        avatarInput.click();
    }

    onMount(async () => {
        groups = (await pb.collection("groups").getList(1, 30, {
            filter: `members.id ?= "${$user.id}"`,
            sort: "-created",
        })).items;

        // Avatar changed
        avatarInput.onchange = async (e) => {
            const formData = new FormData();
            formData.append("avatar", e.target.files[0]);

            await pb.collection("users").update($user.id, formData)
        };
    })

    $: initials = $user ? $user.name.split(" ").map((n) => n[0]).join("") : "";
</script>
<header aria-label="Page Header">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-center mr-4">
                <form>
                    <input type="file" accept="image/png" bind:this={avatarInput} hidden />
                    <div class="cursor-pointer hover:brightness-95" on:click={getAvatar}>
                        <MemberAvatar member={$user} size="lg" thumbSize="256x256" />
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
                <Button>
                    Create new meeting
                </Button>
            </div>
        </div>
    </div>
</header>
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-bold">Your Groups</h1>
    <div class="grid grid-cols-2 gap-4">
        {#each groups as group}
            <Card href="/flow/group/view/{group.id}">
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
