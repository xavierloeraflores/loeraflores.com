<script lang="ts">
	import { type Testimonial } from '../../../types';
	import {
		Card,
		CardContent,
		CardTitle,
		CardDescription,
		CardFooter,
		CardHeader
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	export let testimonial: Testimonial;
</script>

<Card class="m-2 bg-background shadow-md shadow-primary lg:shadow-lg lg:shadow-primary">
	<CardHeader class="flex items-center justify-center justify-items-center align-middle">
		<CardTitle
			class="scroll-m-20 pb-2  text-xl font-semibold tracking-tight text-primary first:mt-0 sm:text-2xl"
			>{testimonial.name}</CardTitle
		>
		<CardDescription class="flex flex-row items-center justify-center ">
			<span class="text-md mr-2 font-medium leading-none sm:text-lg"
				>{testimonial.title}, {testimonial.company}</span
			>
		</CardDescription>
	</CardHeader>
	<CardContent class="items-centers flex justify-center justify-items-center"></CardContent>
	<Separator />
	<CardFooter class="flex w-full flex-row justify-evenly p-4 px-10">
		<span class="text-md mr-2 font-medium leading-none sm:text-lg">"{testimonial.quote}"</span>
	</CardFooter>
</Card>
