<script lang="ts">
	import EducationCard from '$lib/components/education/education-card.svelte';
	import { type Education } from '../../../types';
	import { Section } from '$lib';
	import { GraduationCap } from 'lucide-svelte';
	import * as Carousel from '$lib/components/ui/carousel';

	export let educationData: Education[] = [];
</script>

<Section title="Education">
	<GraduationCap size="64" class="color-primary-foreground my-4" />
	<Carousel.Root class="w-3/4 min-w-[200px] max-w-[800px] sm:min-w-[500px]">
		<Carousel.Content>
			{#each educationData as edu}
				<Carousel.Item class="px-8 py-12">
					<EducationCard {edu} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="mx-0 h-12 w-12 border-2 border-primary text-primary" />
		<Carousel.Next class="mx-0 h-12 w-12 border-2 border-primary text-primary" />
	</Carousel.Root>
</Section>
