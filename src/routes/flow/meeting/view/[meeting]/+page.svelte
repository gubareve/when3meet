<script lang="ts">
    import {Record} from "pocketbase";

    export let data: {meeting: Record};

</script>

<h1>{data.meeting.title}</h1>
<a href={"/flow/group/view/" + data.meeting.group}>Group</a>

Scheduler??