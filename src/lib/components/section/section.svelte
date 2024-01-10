<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
    type $$Props = HTMLAttributes<HTMLDivElement> & {
        title: string;
    }
	let className: $$Props["class"] = undefined;
	export { className as class };
    export let title: string;
</script>

<section id={title} class={cn(
    "w-full h-screen flex flex-col items-center",
    className
)}>
    <h2 class="w-full text-center text-2xl text-muted-foreground scroll-m-20 border-b pb-2 font-semibold tracking-tight transition-colors first:mt-0">{title}</h2>
    <Separator class="w-full"/>
    <slot />
</section>