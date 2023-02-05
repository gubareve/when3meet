<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";
    import {Button, Helper, Label, Select} from "flowbite-svelte";

    let title = "";
    let description = "";
    let group = "";

    let error = {};
    let loading = false;
    let groups = [];
    let page = 0;


    onMount(async () => {
        groups = await pb.collection("groups").getFullList(100, {
            filter: `author.id = "${$user!.id}"`,
        });
        if (groups.length > 0) {
            group = groups[0].id;
        }
    })

    async function create() {
        loading = true;
        try {
            let res = await pb.collection("meetings").create({
                title: title,
                description: description,
                group: group,
            })
            goto("/flow/meeting/view/" + res.id)
        } catch (e) {
            error = e.data.data;
        }
        loading = false;
    }
</script>


<div class="container max-w-2xl mx-auto pt-10">
    <h1 class="text-4xl">Create a new meeting</h1>
    <form>
        <div class="my-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting title</label>
            <input type="text" id="default-input" bind:value={title} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        {#if error.title}
            ERROR {error.title.message}
        {/if}
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting description</label>
        <textarea id="message"  bind:value={description} rows="4" class="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        {#if error.description}
            <Helper type="error">{error.description.message}</Helper>
        {/if}

        <Label for="#group-switcher">Group</Label>
        <Select id="group-switcher" bind:value={group} label="Group">
            {#each groups as group}
                <option value={group.id}>{group.title}</option>
            {/each}
        </Select>

        {#if error.group}
            <Helper type="error">{error.group.message}</Helper>
        {/if}

        <Button on:click={create} class="my-5 float-right" loading={loading} disabled={loading}>Create</Button>
    </form>
</div>