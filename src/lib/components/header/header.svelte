<script lang="ts">
    let showMenu = false;
    const toggleMenu = () => {
        showMenu = !showMenu;
    }
</script>

<header class='w-full flex flex-row justify-between text-primary text-4xl p-4'>
    <div id="logo">
        <a href="/">&lt;🌹&gt;</a>
    </div>
    <div id='nav' class="">
        <div id='mobile'>
            <button on:click={toggleMenu} id="hamburger" class={showMenu ? 'hidden' : ''}>
                🍔
            </button>
            <button on:click={toggleMenu} id="hamburger" class={!showMenu ? 'hidden' : ''}>
                ❌
            </button>
            <div class={!showMenu ? 'hidden' : ''}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div id="desktop" class="flex flex-row justify-between">
            <a href="#about" class="m-2">About</a>
            <a href="#projects" class="m-2">Projects</a>
            <a href="#contact" class="m-2">Contact</a>
        </div>
    </div>
</header>

<style>
    @media (min-width: 768px) {
        #mobile {
            display: none;
        }
        #desktop {
            display: flex;
        }
    }
    @media (max-width: 768px) {
        #mobile {
            display: flex;
        }
        #desktop {
            display: none;
        }
    }
</style>