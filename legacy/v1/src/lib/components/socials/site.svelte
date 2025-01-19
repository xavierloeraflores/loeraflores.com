<script lang="ts">
    import Social from "./social.svelte";
    import { Link2 } from "lucide-svelte";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    type $$Props = HTMLAttributes<HTMLDivElement> 
	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<Social link="https://loeraflores.com/" class={cn(
    "",
    className
)}>
<Link2/>
</Social>
