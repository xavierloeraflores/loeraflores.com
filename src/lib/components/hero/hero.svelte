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
    <span>Hi, My name is</span>
    <h1 class='text-6xl'>Xavier Loera Flores</h1>
    <h2 class='text-6xl'>I'm a Software Developer</h2>
    <p class='text-2xl'>I am a diligent software engineer with 2+ years of experience in automation and software development. Eager to join any team seeking to build innovative and cutting-edge business solutions for users worldwide.</p>
</div>