<script lang="ts">
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
    import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<Card class={cn(
    "rounded-lg w-96 border bg-card text-card-foreground shadow-sm",
    className
)}>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A Descriptive Card Description</CardDescription>
    </CardHeader>
    <CardContent>
        Card Content
    </CardContent>
    <CardFooter>
        <Button variant="outline">GitHub</Button>
        <Button>Live</Button>
    </CardFooter>

</Card>