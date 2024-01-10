<script lang="ts">
    import Project from "./project.svelte";
    import { Section } from '$lib';
    import type { Project as ProjectType } from '../../../types';
    export let projects: ProjectType[];
</script>

<Section title="Portfolio" class="">
    <div class="grid gap-8 grid-flow-row xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {#each projects as project}
        <Project {project}/>
        {/each}
    </div>
</Section>
