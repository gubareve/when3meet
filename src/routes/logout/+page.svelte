<script>
    import {pb} from "$lib/pb";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    onMount(() => {
        pb.authStore.clear();
        goto("/");
    })
</script>

Loading spinner
Logging out...