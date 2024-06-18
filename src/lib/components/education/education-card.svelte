<script lang="ts">
	import { type Education } from '../../../types';
	import { toast } from 'svelte-sonner';
	import {
		Card,
		CardContent,
		CardTitle,
		CardDescription,
		CardFooter,
		CardHeader
	} from '$lib/components/ui/card';
	import { GraduationCap } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';

	export let edu: Education;
</script>

<Card class="bg-background">
	<CardHeader class="flex items-center justify-center justify-items-center align-middle">
		<CardTitle
			class="scroll-m-20 pb-2  text-xl font-semibold tracking-tight text-primary first:mt-0 sm:text-2xl"
			>{edu.degree}</CardTitle
		>
		<CardDescription class="flex flex-row items-center justify-center ">
			<span class="text-md mr-2 font-medium leading-none sm:text-lg">{edu.dates}</span>
		</CardDescription>
	</CardHeader>
	<CardContent class="items-centers flex justify-center justify-items-center"></CardContent>
	<Separator />
	<CardFooter class="flex w-full flex-row justify-evenly p-4">
		<a href={edu.link} class="text-md mr-2 font-medium leading-none sm:text-lg" target="_blank"
			>{edu.school}, {edu.location}</a
		>
	</CardFooter>
</Card>
