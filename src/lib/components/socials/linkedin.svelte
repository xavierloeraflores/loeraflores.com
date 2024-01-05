<script lang="ts">
    import Social from "./social.svelte";
    import { Linkedin } from "lucide-svelte";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    type $$Props = HTMLAttributes<HTMLDivElement> 
	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<Social link="https://www.linkedin.com/in/xavierloeraflores/" class={cn(
    "",
    className
)}>
<Linkedin/>
</Social>
