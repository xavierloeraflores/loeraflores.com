<script lang="ts">
	import Saos from 'saos';
	import { Separator } from '$lib/components/ui/separator';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	type $$Props = HTMLAttributes<HTMLDivElement> & {
		title: string;
	};
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let title: string;
</script>

<Saos
	animation={'fade-in 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
	top={250}
	bottom={250}
	once={true}
>
	<section
		id={title}
		class={cn(
			'mb-24 flex min-h-96 w-screen flex-col items-center overflow-hidden pb-10 md:overflow-visible lg:mb-32',
			className
		)}
	>
		<h2
			class="w-full scroll-m-20 pb-2 text-center text-2xl font-semibold tracking-tight text-primary transition-colors first:mt-0 sm:text-4xl"
		>
			{title}
		</h2>
		<Separator class=" my-2 w-11/12" />
		<slot class=" max-w-screen-2xl" />
	</section>
</Saos>
