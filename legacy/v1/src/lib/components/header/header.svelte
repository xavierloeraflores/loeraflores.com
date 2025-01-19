<script lang="ts">
	import { buttonVariants } from '$lib';
	import { Menu, X } from 'lucide-svelte';
	import {
		Drawer,
		DrawerTrigger,
		DrawerContent,
		DrawerHeader,
		DrawerFooter,
		DrawerClose,
		DrawerPortal,
		DrawerOverlay
	} from '$lib/components/ui/drawer';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props['class'] = undefined;
	export { className as class };

	import { Lightswitch } from '$lib';
	let scroll = false;
	let scrollTo = '';
	const drawerOpen = () => {
		scroll = false;
		scrollTo = '';
	};
	const drawerClose = () => {
		if (scroll) {
			setTimeout(() => {
				const element = document.getElementById(scrollTo);
				if (element) {
					window.scrollTo(0, element.offsetTop);
				}
			}, 500);
		}
	};
	const drawerClick = (e: MouseEvent) => {
		e.preventDefault();
		scroll = true;
		scrollTo = (e.target as HTMLAnchorElement).href.split('#')[1];
	};

	const anchorClick = (e: MouseEvent) => {
		e.preventDefault();
		let link = (e.target as HTMLAnchorElement).href.split('#')[1];
		const element = document.getElementById(link);
		if (element) {
			window.scrollTo(0, element.offsetTop);
		}
	};
</script>

<header
	class={cn(
		'fixed top-0 z-50 flex w-full flex-row justify-between bg-foreground/95 p-4 py-5 text-3xl text-primary lg:text-4xl',
		className
	)}
>
	<div id="left">
		<a href="/" class="hover:text-accent">&lt;🌹&gt;</a>
	</div>
	<div id="right" class="flex flex-row">
		<div id="nav">
			<div id="mobile">
				<Drawer onClose={drawerClose}>
					<DrawerTrigger
						onclick={drawerOpen}
						class={buttonVariants({ variant: 'ghost', size: 'default' }) + 'bg-foreground'}
						><Menu class="h-[1.5rem] w-[1.5rem] scale-100" /></DrawerTrigger
					>
					<DrawerPortal>
						<DrawerContent class="text-lg font-bold">
							<DrawerHeader>Menu</DrawerHeader>
							<DrawerFooter>
								<DrawerClose>
									<a href="#Portfolio" on:click={drawerClick}>Portfolio</a>
								</DrawerClose>
								<DrawerClose>
									<a href="#Contact" on:click={drawerClick}>Contact</a>
								</DrawerClose>
								<DrawerClose class="flex justify-center"
									><X class=" h-[1.5rem] w-[1.5rem] divide-primary text-primary" /></DrawerClose
								>
							</DrawerFooter>
						</DrawerContent>
					</DrawerPortal>
					<DrawerOverlay />
				</Drawer>
			</div>
			<div id="desktop" class="flex flex-row justify-between">
				<a href="#Portfolio" on:click={anchorClick} class="mx-2 hover:text-accent hover:underline"
					>Portfolio</a
				>
				<a href="#Contact" on:click={anchorClick} class="mx-2 hover:text-accent hover:underline"
					>Contact</a
				>
			</div>
		</div>
		<Lightswitch />
	</div>
</header>

<style>
	@media (min-width: 768px) {
		#mobile {
			display: none;
		}
		#desktop {
			display: flex;
		}
	}
	@media (max-width: 768px) {
		#mobile {
			display: flex;
		}
		#desktop {
			display: none;
		}
	}
</style>
