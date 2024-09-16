<script lang="ts">
	import { Section } from '$lib';
	import Typewriter from 'svelte-typewriter';
	import { Button, buttonVariants } from '$lib';
	import { toast } from 'svelte-sonner';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props['class'] = undefined;
	export { className as class };

	function calendly() {
		window.open('https://calendly.com/xavierloeraflores/30min', '_blank');
		toast('🎉 🎉 🎉 Opening Calendly 🎉 🎉 🎉');
	}
	function resume() {
		toast('🎉 🎉 🎉 Downloading Resume 🎉 🎉 🎉');
	}
</script>

<Section title="">
	<div class={cn('flex h-screen flex-col items-center justify-center p-4', className)}>
		<span
			class="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-primary first:mt-0 lg:text-4xl"
			>Hi, my name is</span
		>
		<h1
			class=" scroll-m-20 text-4xl font-extrabold tracking-tight text-secondary-foreground lg:text-7xl"
		>
			<Typewriter>Xavier Loera Flores</Typewriter>
		</h1>
		<h2
			class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-accent-foreground first:mt-0 lg:text-5xl"
		>
			I write software.
		</h2>
		<p
			class="mt-4 w-2/3 max-w-[750px] text-center text-2xl leading-7 text-muted-foreground sm:w-11/12 lg:max-w-[1200px] lg:text-3xl [&:not(:first-child)]:mt-6"
		>
			I am a versatile software engineer and AI innovator, with 3+ years of experience and expertise
			in building scalable, AI-driven platforms. As the co-founder and CTO of Custodia AI, I worked
			on the creation of award-winning applications and empowered small businesses with custom AI
			solutions.
		</p>
		<div class="mt-4 flex flex-row">
			<Button on:click={calendly} class="mx-4 shadow-md shadow-primary/20">Get in touch</Button>
			<a
				href="/files/resume.pdf"
				download
				on:click={resume}
				class={cn(
					buttonVariants({ variant: 'default', size: 'default' }),
					'shadow-md shadow-primary/20'
				)}>Resume</a
			>
		</div>
	</div>
</Section>
