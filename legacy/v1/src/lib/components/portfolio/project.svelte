<script lang="ts">
	import {
		Card,
		CardContent,
		CardTitle,
		CardDescription,
		CardFooter,
		CardHeader
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Badge from '../ui/badge/badge.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import type { Project } from '../../../types';
	import type { ProjectLink } from '../../../types/project';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		project: Project;
	};
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let project: Project;

	function linkButton(link: ProjectLink) {
		window.open(link.url, '_blank');
	}
</script>

<Card
	class={cn(
		'flex w-96 flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-md shadow-primary lg:shadow-lg lg:shadow-primary',
		className
	)}
>
	<CardHeader class=" min-h-28">
		<CardTitle>{project.title}</CardTitle>
		<CardDescription>{project.description}</CardDescription>
	</CardHeader>
	<CardContent>
		{#each project.technologies as tag}
			<Badge class="m-1">{tag}</Badge>
		{/each}
	</CardContent>
	<CardFooter class="flex flex-row items-center justify-evenly">
		{#each project.links as link}
			<Button variant="secondary" class="shadow-md" on:click={() => linkButton(link)}
				>{link.name}</Button
			>
		{/each}
	</CardFooter>
</Card>
