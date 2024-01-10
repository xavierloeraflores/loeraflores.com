<script lang="ts">
    import {FolderGit2} from 'lucide-svelte'
    import Project from "./project.svelte";
    import { Section } from '$lib';
    import type { Project as ProjectType } from '../../../types';
    export let projects: ProjectType[];
</script>

<Section title="Portfolio" class="">
    <FolderGit2 size="64" class="color-primary-foreground my-4"/>
    <div class="grid gap-8 grid-flow-row xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {#each projects as project}
        <Project {project}/>
        {/each}
    </div>
</Section>
