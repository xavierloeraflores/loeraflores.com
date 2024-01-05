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
    "w-full flex flex-col items-center justify-center",
    className
)}>
<h2 class="w-full text-center text-xl text-muted-foreground">{title}</h2>
<Separator class="w-full flex items-center justify-center"> 
    <slot></slot>
</Separator>
</section>