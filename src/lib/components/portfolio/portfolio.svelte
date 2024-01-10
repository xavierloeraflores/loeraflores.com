<script lang="ts">
import { Section, Project } from '$lib';
import type { Project as ProjectType } from '../../../types';
export let projects: ProjectType[];

</script>

<Section title="Portfolio">
    {#each projects as project}
        <Project {project}/>
    {/each}

</Section>
