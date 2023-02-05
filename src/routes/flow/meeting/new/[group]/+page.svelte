<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";
    import {Card, Datepicker} from 'flowbite-svelte';
    import {Button, Helper, Label, Select} from "flowbite-svelte";
    import {page} from "$app/stores";

    let title = "";
    let description = "";
    let group = "";

    let dates = [];

    let error = {};
    let loading = false;

    async function create() {
        loading = true;
        try {
            let res = await pb.collection("meetings").create({
                title: title,
                description: description,
                group: $page.params.group,
            })
            await goto("/flow/meeting/view/" + res.id)
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
            <Helper type="error">{error.title.message}</Helper>
        {/if}
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting description</label>
        <textarea id="message"  bind:value={description} rows="4" class="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        {#if error.description}
            <Helper type="error">{error.description.message}</Helper>
        {/if}

        {#if error.group}
            <Helper type="error">{error.group.message}</Helper>
        {/if}

        <div class="flex flex-row">
            <div class="flex-grow">
                <Label for="$start-time-switcher" class="mb-2">Start time</Label>
                <Select id="start-time-switcher" class="mb-6" label="Start time">

                </Select>
                    </div>
            <div class="ml-4 flex-grow">
                    <Label for="$end-time-switcher" class="mb-2">End time</Label>
                    <Select id="end-time-switcher" class="mb-6" label="End time">

                    </Select>
            </div>
        </div>

        <Label for="$possible-days-switcher" class="mb-2">Possible days that this meeting can be on</Label>
        <div>
            {#each dates as date}
                <div>
                    <Datepicker bind:value={date} />
                </div>
            {/each}
        </div>


        <div className="grid grid-cols-7 mt-2 rounded-md border overflow-hidden flex-1">
            <div className="text-center" key={`weekday_1`}>
                Mon
            </div>
            <div className="text-center" key={`weekday_2`}>
                Mon
            </div>
            <div className="text-center" key={`weekday_3`}>
                Mon
            </div>
            <div className="text-center" key={`weekday_4`}>
                Mon
            </div>
        </div>

        <Button on:click={create} class="my-5 float-right" loading={loading} disabled={loading}>Create</Button>
    </form>
</div>