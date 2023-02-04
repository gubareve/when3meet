<script lang="ts">
    import {pb, user} from "$lib/pb";

    let name: string;
    let email: string;
    let password: string;
    let avatar: FileList;

    let loading = false;

    let error = {};

    async function login() {
        loading = true;
        try {
            await pb.collection("users").authWithPassword(username, password);
        } catch (e) {
            error = e.data.data;
            if (Object.keys(error).length == 0) {
                error["username"] = { message: e.message };
            }
        }
        loading = false;
    }

    async function register() {
        loading = true;

        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("passwordConfirm", password);
        if (avatar) {
            data.append("avatar", avatar[0]);
        }

        try {
            await pb.collection("users").create(data)
        } catch (e) {
            error = e.data.data;
            error = {
                name: error.name ? error.name.message : null,
                email: error.email ? error.email.message : null,
                password: error.password ? error.password.message : null,
                avatar: error.avatar ? error.avatar.message : null,
            }
            loading = false;
            return;
        }

        await login();
        loading = false;
    }

    function logout() {
        pb.authStore.clear();
    }
</script>

{#if loading}
        Loading spinner or disable button idk
    <br/>
{/if}

{#if $user}
    You are logged in.
    <button type="button" on:click={logout}>Log Out</button>
{:else}

If you are logging in:
<form>
    <input type="text" bind:value={username} placeholder="username or email"/>
    {#if error.username}
        ERROR
        {error.username.message}
    {/if}
    <input type="password" bind:value={password} placeholder="password"/>
    <button type="submit" on:click|preventDefault={login}>Login</button>
</form>

If you are registering:
<form>
    <input type="text" bind:value={username} placeholder="username"/>
    {#if error.username}
        ERROR
        {error.username.message}
    {/if}
    <input type="email" bind:value={email} placeholder="email"/>
    {#if error.email}
        ERROR
        {error.email.message}
    {/if}
    <input type="password" bind:value={password} placeholder="password"/>
    {#if error.password}
        ERROR
        {error.password.message}
    {/if}
    <input type="file" bind:files={avatar} placeholder="file"/>
    {#if error.avatar}
        ERROR
        {error.avatar.message}
    {/if}
    <button type="submit" on:click|preventDefault={register}>Register</button>
</form>
{/if}