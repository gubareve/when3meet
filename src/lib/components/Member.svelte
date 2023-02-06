<script>
    import {Card} from "flowbite-svelte";
    import MemberAvatar from "$lib/components/MemberAvatar.svelte";

    export let member;
    export let organizer = false;
    export let author = false;
</script>

<Card padding="none" class="p-4">
    <div class="flex items-center space-x-4 p-3">
        <MemberAvatar member={member} border={author || organizer} class="{author ? 'member-author' : organizer ? 'member-organizer' : ''}" />
        <div class="space-y-0.5 font-medium dark:text-white flex-grow">
            <div class="text-gray-800">{member.name || ""}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{author ? "Author" : organizer ? "Organizer" : "Member"}</div>
        </div>
        <slot name="right" />
    </div>
</Card>

