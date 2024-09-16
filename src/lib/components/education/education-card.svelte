<script lang="ts">
	import { type Education } from '../../../types';
	import { Card, CardContent, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { GraduationCap } from 'lucide-svelte';

	export let edu: Education;
</script>

<Card
	class="m-2 flex h-40 flex-row items-center bg-background shadow-md shadow-primary lg:shadow-lg lg:shadow-primary"
>
	<div id="image" class="ml-2 mr-8 md:ml-8">
		{#if edu.imageUrl}
			<img
				src={edu.imageUrl}
				alt={edu.school}
				class="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
			/>
		{:else}
			<GraduationCap class="h-16 w-16 text-primary sm:h-20 sm:w-20 md:h-24 md:w-24" />
		{/if}
	</div>

	<CardContent class="flex flex-col items-center justify-center justify-items-center">
		<div class="mt-2 flex flex-col justify-start">
			<CardTitle
				class="scroll-m-20 text-xl font-semibold tracking-tight text-primary sm:text-2xl md:pt-1 lg:text-3xl"
			>
				{edu.degree}
			</CardTitle>

			<CardDescription class="items-left justify-left mb-1 flex flex-col">
				<span class="text-md mr-2 font-medium leading-none md:text-lg">{edu.dates}</span>
			</CardDescription>
			<a
				href={edu.link}
				class="text-md font-medium leading-none hover:underline md:text-lg"
				target="_blank">{edu.school}<span class="hidden md:inline">, {edu.location}</span></a
			>
		</div>
	</CardContent>
</Card>
