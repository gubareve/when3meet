<script>
    import {Avatar, Card} from "flowbite-svelte";

    export let name;
    export let avatar;
    export let organizer = false;

    $: initials = name.split(" ").map((n) => n[0]).join("");
</script>

<Card padding="none" class="p-4">
    <div class="flex items-center space-x-4 p-3">
        {#if avatar}
            <Avatar src={avatar} class={organizer ? "ring-red-500" : ""}/>
        {:else}
            <Avatar class={organizer ? "ring-red-500" : ""}>
                {initials}
            </Avatar>
        {/if}
        <div class="space-y-0.5 font-medium dark:text-white">
            <div>{name}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{organizer ? "Organizer" : "Member"}</div>
        </div>
    </div>
</Card>

