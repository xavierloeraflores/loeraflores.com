<script lang="ts">
    import Social from "./social.svelte";
    import { Github } from "lucide-svelte";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    type $$Props = HTMLAttributes<HTMLDivElement> 
	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<Social link="https://github.com/xavierloeraflores" class={cn(
    "",
    className
)}>
<Github/>
</Social>
