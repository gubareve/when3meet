<script lang="ts">
    import {pb, user} from "$lib/pb";
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {prevPage} from "$lib/login";

    onMount(async () => {
        if (!$user) {
            $prevPage = $page.path;
            await goto("/register");
        }
       let group = await pb.collection("groups").getOne($page.params.group);
       if (!group.members.includes($user!.id)) {
           group.members.push($user!.id);
           await pb.collection("groups").update($page.params.group, {
               members: group.members,
               required: group.required,
           })
       }

        await goto("/flow/group/view/" + $page.params.group);
    })
</script>