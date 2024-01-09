<script lang="ts">
    import {Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerClose, DrawerPortal, DrawerOverlay} from '$lib/components/ui/drawer'
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "$lib/utils";
    type $$Props = HTMLAttributes<HTMLDivElement>;
    let className: $$Props["class"] = undefined;
    export { className as class };

    import { Lightswitch } from '$lib'
    let scroll = false;
    let scrollTo = ""
    const drawerOpen = () =>{
        scroll = false;
        scrollTo = ""
    }
    const drawerClose = () =>{
        if(scroll){
            setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    window.scrollTo(0, element.offsetTop);
                }
            }, 500);
        }
    }
    const anchorClick = (e:MouseEvent) =>{
        e.preventDefault();
        scroll = true;
        scrollTo = (e.target as HTMLAnchorElement).href.split("#")[1];
    }
</script>

<header class= {cn("w-full flex flex-row justify-between text-primary text-4xl p-4",
  className
)}>
    <div id="left">
        <a href="/">&lt;🌹&gt;</a>
    </div>
    <div id='right' class="flex flex-row">
        <div id='nav'>
            <div id='mobile'>
                <Drawer onClose={drawerClose}>
                    <DrawerTrigger onclick={drawerOpen}>🍔</DrawerTrigger>
                    <DrawerPortal>
                        <DrawerContent>
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <a href="#about" on:click={anchorClick}>About</a>
                                </DrawerClose>
                                <DrawerClose>
                                    <a href="#Portfolio" on:click={anchorClick}>Portfolio</a>
                                </DrawerClose>
                                <DrawerClose>
                                    <a href="#Contact" on:click={anchorClick}>Contact</a>
                                </DrawerClose>
                                <DrawerClose>❌</DrawerClose>
                            </DrawerFooter>
                        </DrawerContent> 
                    </DrawerPortal>
                    <DrawerOverlay/>
                </Drawer>
            </div>
            <div id="desktop" class="flex flex-row justify-between">
                <a href="#About" class="m-2">About</a>
                <a href="#Portfolio" class="m-2">Portfolio</a>
                <a href="#Contact" class="m-2">Contact</a>
            </div>
        </div>
        <Lightswitch />
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