<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    type $$Props = HTMLAttributes<HTMLDivElement> & {
        link: string;
    };
	let className: $$Props["class"] = undefined;
	export { className as class };
    export let link:string;
</script>

<a href={link} target="_blank" class={cn(
    "",
    className
)}>
    <slot></slot>
</a>