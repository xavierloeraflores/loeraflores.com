<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  type $$Props = HTMLAttributes<HTMLDivElement>;
  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<footer class= {cn("flex flex-col items-center justify-center divide-border border-t min-h-28",
  className
)}>
    <span class="font-bold text-secondary-foreground scroll-m-20 text-xl tracking-tight">Xavier Loera Flores</span>
    <span class="text-center text-primary scroll-m-20 text-xl font-semibold tracking-tight">Created With SvelteKit</span>
  </footer>