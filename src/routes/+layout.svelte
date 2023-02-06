<script lang="ts">
    import "../app.css";
    import { user } from "$lib/pb";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import { prevPage } from "$lib/login";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    if (
        !data.user &&
        $page.route.id &&
        (!$page.route.id.startsWith("/flow") || $page.route.id !== "/dash") &&
        browser
    ) {
        prevPage.set($page.url.pathname);
        goto("/login");
    }
</script>

<svelte:head>
    <script src="/datepicker.js"></script>
</svelte:head>

<Navbar user={data.user} />

<slot />

<Footer />
