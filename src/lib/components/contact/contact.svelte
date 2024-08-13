<script lang="ts">
	import { AtSign } from 'lucide-svelte';
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
	import { Copy } from 'lucide-svelte';
	import { GitHubSocial, LinkedInSocial, TwitterSocial } from '$lib';
	import { Separator } from '$lib/components/ui/separator';
	function calendly() {
		window.open('https://calendly.com/xavierloeraflores/30min', '_blank');
		toast('🎉 🎉 🎉 Opening Calendly 🎉 🎉 🎉');
	}
	function resume() {
		toast('🎉 🎉 🎉 Downloading Resume 🎉 🎉 🎉');
	}
	function copy() {
		const email = 'xavier@loeraflores.tech';
		navigator.clipboard
			.writeText(email)
			.then(() => {
				toast('🎉 🎉 🎉 Copied to clipboard 🎉 🎉 🎉');
			})
			.catch((err) => {
				console.error('Could not copy text: ', err);
			});
	}
</script>

<Section title="Contact" class="flex-col content-center items-center justify-center align-middle">
	<AtSign size="64" class="color-primary-foreground my-4" />
	<Card class="max-w-[750px]  shadow-lg ">
		<CardHeader class="flex items-center justify-center justify-items-center align-middle">
			<CardTitle
				class="scroll-m-20 pb-2  text-2xl font-semibold tracking-tight text-foreground first:mt-0"
				>Let's Get In Touch
			</CardTitle>
			<CardDescription class="flex flex-row items-center justify-center ">
				<a href="mailto:xavier@loeraflores.tech" class="mr-2 text-lg font-medium leading-none"
					>xavier@loeraflores.tech</a
				>
				<Button on:click={copy} variant="outline"><Copy /></Button>
			</CardDescription>
		</CardHeader>
		<CardContent class="items-centers flex justify-center justify-items-center">
			<Button on:click={calendly} class="mx-4">Book a call</Button>
		</CardContent>
		<Separator />
		<CardFooter class="flex w-full flex-row justify-evenly p-4">
			<GitHubSocial />
			<LinkedInSocial />
			<TwitterSocial />
		</CardFooter>
	</Card>
</Section>
