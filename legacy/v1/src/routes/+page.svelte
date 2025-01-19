<script lang="ts">
	import { Hero, Particles, Portfolio, Contact, Education, Testimonial, Skills } from '$lib';
	import { projectsData, educationData, testimonialData } from '../data';
</script>

<main class="">
	<Particles class="blur" />
	<Hero />
	<Portfolio projects={projectsData} />
	<Education {educationData} />
	<!-- <Skills /> -->
	<Testimonial {testimonialData} />
	<Contact />
</main>
