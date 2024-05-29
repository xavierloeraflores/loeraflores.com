<script lang="ts">
	import EducationCard from '$lib/components/education/education-card.svelte';
	import { type Education } from '../../../types';
	import { Section, Button } from '$lib';
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
	import { Tabs, Trigger, Content, List } from '$lib/components/ui/tabs';
	import * as Carousel from '$lib/components/ui/carousel';

	export let educationData: Education[] = [];
	let degreeCount = educationData.length;
</script>

<Section title="Education">
	<GraduationCap size="64" class="color-primary-foreground my-4" />
	<Carousel.Root class="w-full min-w-[200px] max-w-[900px] sm:min-w-[500px]">
		<Carousel.Content>
			{#each educationData as edu}
				<Carousel.Item class="">
					<EducationCard {edu} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="mx-0 h-16 w-16 border-2 border-primary text-primary" />
		<Carousel.Next class="mx-0 h-16 w-16 border-2 border-primary text-primary" />
	</Carousel.Root>
</Section>
