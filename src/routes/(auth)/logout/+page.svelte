<script>
    import {pb} from "$lib/pb";
    import {goto, invalidateAll} from "$app/navigation";
    import {onMount} from "svelte";
    import {Spinner} from "flowbite-svelte";

    onMount(async () => {
        pb.authStore.clear();
        await invalidateAll();
        await goto("/");
    })
</script>

<div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
    <Spinner></Spinner>
</div>