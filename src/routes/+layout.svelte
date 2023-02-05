<script>
    import "../app.css";
    import {user} from "$lib/pb";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {browser} from "$app/environment";
    import {prevPage} from "$lib/login";
    import Navbar from "$lib/components/Navbar.svelte";

    if (!$user && $page.route.id && ( !$page.route.id.startsWith("/flow") || $page.route.id !== "/dash" ) && browser) {
        prevPage.set($page.route.id);
        goto("/login");
    }
</script>

<Navbar />

<slot />