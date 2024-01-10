<script lang="ts">
import { Section, Project } from '$lib';
import type { Project as ProjectType } from '../../../types';
export let projects: ProjectType[];

</script>

<Section title="Portfolio" class="">
    <div class="grid gap-8 grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1">
        {#each projects as project}
        <Project {project}/>
        {/each}
    </div>
</Section>
