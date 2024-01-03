<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props["class"] = undefined;
	export { className as class };
</script>
<div class ={cn(
    "p-4",
    className
)}>
    <span class='text-primary text-3xl'>Hi, my name is</span>
    <h1 class=' text-8xl text-primary-foreground font-extrabold'>Xavier Loera Flores.</h1>
    <h2 class='text-6xl text-accent-foreground'>I'm a Software Developer</h2>
    <p class='text-2xl text-muted-foreground  w-1/3 mt-4'>I am a diligent software engineer with 2+ years of experience in automation and software development. Eager to join any team seeking to build innovative and cutting-edge business solutions for users worldwide.</p>
</div>