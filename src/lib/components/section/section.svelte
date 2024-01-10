<script lang="ts">
    import Saos from "saos";
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

<Saos animation={'fade-in 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} top={250} bottom={250} once={true}>
<section id={title} class={cn(
    "w-screen min-h-96 flex flex-col items-center",
    className
    )}>
            <h2 class="w-full text-center text-4xl sm:text-2xl text-primary scroll-m-20 pb-2 font-semibold tracking-tight transition-colors first:mt-0">{title}</h2>
            <Separator class=" w-11/12 my-2"/>
                <slot class=" max-w-screen-2xl"/>
        </section>
    </Saos>