<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<Button
	on:click={toggleMode}
	variant="ghost"
	size="icon"
	class="divide-primary bg-transparent text-primary"
>
	<Sun
		class="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 self-center transition-all dark:-rotate-90 dark:scale-0 sm:h-[1.65rem] sm:w-[1.65rem] md:h-[1.75rem] md:w-[1.75rem] lg:h-[2rem] lg:w-[2rem]"
	/>
	<Moon
		class="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 self-center transition-all dark:rotate-0 dark:scale-100 sm:h-[1.65rem] sm:w-[1.65rem] md:h-[1.75rem] md:w-[1.75rem] lg:h-[2rem] lg:w-[2rem]"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
