<script lang="ts">
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

type $$Props = HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    primaryLink: string;
    primaryLinkText: string;
    secondaryLink: string;
    secondaryLinkText: string;
};
	let className: $$Props["class"] = undefined;
	export { className as class };
    export let title:string;
    export let description:string;
    export let primaryLink:string;
    export let primaryLinkText:string;
    export let secondaryLink:string;
    export let secondaryLinkText:string;

    function primaryButton() {
        window.open(primaryLink, '_blank')
    }
    function secondaryButton() {
        window.open(secondaryLink, '_blank')
    }

</script>

<Card class={cn(
    "rounded-lg w-96 border bg-card text-card-foreground shadow-sm",
    className
)}>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
    </CardContent>
    <CardFooter class="flex flex-row items-center justify-evenly">
        <Button variant="outline" on:click={primaryButton}>{primaryLinkText}</Button>
        <Button on:click={secondaryButton}>{secondaryLinkText}</Button>
    </CardFooter>

</Card>