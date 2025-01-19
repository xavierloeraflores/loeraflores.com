<script lang="ts">
    import Social from "./social.svelte";
    import { Twitter } from "lucide-svelte";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    type $$Props = HTMLAttributes<HTMLDivElement> 
	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<Social link="https://twitter.com/TheLoeraFlores" class={cn(
    "",
    className
)}>
<Twitter/>
</Social>
