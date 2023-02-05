<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {prevPage} from "$lib/login";
    import {Spinner} from "flowbite-svelte";

    onMount(async () => {
        if (!$user) {
            prevPage.set($page.route.id!);
            await goto("/register");
        }
       let group = await pb.collection("groups").getOne($page.params.group);
       if (!group.members.includes($user!.id)) {
           group.members.push($user!.id);
           await pb.collection("groups").update($page.params.group, {
               members: group.members,
           })
       }

        await goto("/flow/group/view/" + $page.params.group);
    })
</script>

<div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
    <Spinner></Spinner>
</div>
