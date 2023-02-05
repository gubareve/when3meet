<script>
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button} from 'flowbite-svelte'
    import {user} from '$lib/pb'
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      When3Meet
    </span>
    </NavBrand>
    <div class="flex md:order-2">
        {#if $user == null}
            <Button href="/register" size="sm">Get started</Button>
        {:else}
            <Button href="/dash" size="sm">Dashboard</Button>
        {/if}
        <NavHamburger on:click={toggle}/>
    </div>

    <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
