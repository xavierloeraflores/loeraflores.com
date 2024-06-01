<script lang="ts">
	import { Hero, Particles, Portfolio, Contact, Education, Testimonial } from '$lib';
	import { projectsData, educationData, testimonialData } from '../data';
</script>

<main class="">
	<Particles />
	<Hero />
	<Portfolio projects={projectsData} />
	<Education {educationData} />
	<Testimonial {testimonialData} />
	<Contact />
</main>
