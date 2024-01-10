<script lang="ts">
    import { Section } from '$lib';
    import Typewriter from 'svelte-typewriter'
    import { Button, buttonVariants } from "$lib";
    import {toast} from 'svelte-sonner'
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props["class"] = undefined;
	export { className as class };

    function calendly() {
        window.open('https://calendly.com/xavierloeraflores/30min', '_blank')
        toast('🎉 🎉 🎉 Opening Calendly 🎉 🎉 🎉')
    }
    function resume() {
        toast('🎉 🎉 🎉 Downloading Resume 🎉 🎉 🎉')
    }
</script>
<Section title="">
    <div class ={cn(
        "p-4 h-screen justify-center flex flex-col items-center",
        className
        )}>
    <span class='text-primary scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0 lg:text-4xl'>Hi, my name is</span>
    <h1 class=' text-secondary-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl'><Typewriter>Xavier Loera Flores.</Typewriter></h1>
    <h2 class='text-accent-foreground scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 lg:text-5xl'>I'm a Software Developer</h2>
    <p class='text-2xl text-muted-foreground  w-2/3 mt-4 max-w-[750px] leading-7 [&:not(:first-child)]:mt-6 lg:max-w-[1200px] lg:text-3xl text-center'>I am a diligent software engineer with 2+ years of experience in automation and software development. Eager to join any team seeking to build innovative and cutting-edge business solutions for users worldwide.</p>
    <div class='flex flex-row mt-4'>
        <Button on:click={calendly} class='mx-4'>Get in touch</Button>
        <a href="/files/resume.pdf" download on:click={resume} class={buttonVariants({variant:"default", size:"default"})}>Resume</a>
    </div>  
</div>
</Section>