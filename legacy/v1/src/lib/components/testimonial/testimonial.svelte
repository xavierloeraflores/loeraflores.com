<script lang="ts">
	import TestimonialCard from '$lib/components/testimonial/testimonial-card.svelte';
	import { type Testimonial } from '../../../types';
	import { Section } from '$lib';
	import { BadgeCheck } from 'lucide-svelte';
	import * as Carousel from '$lib/components/ui/carousel';

	export let testimonialData: Testimonial[] = [];
</script>

<Section title="Testimonials">
	<BadgeCheck size="64" class="color-primary-foreground my-4" />

	<Carousel.Root class="w-3/4 min-w-[200px] max-w-[800px] sm:min-w-[500px]">
		<Carousel.Content>
			{#each testimonialData as testimonial}
				<Carousel.Item class="px-8 py-12">
					<TestimonialCard {testimonial} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="mx-0 h-12 w-12 border-2 border-primary text-primary" />
		<Carousel.Next class="mx-0 h-12 w-12 border-2 border-primary text-primary" />
	</Carousel.Root>
</Section>
