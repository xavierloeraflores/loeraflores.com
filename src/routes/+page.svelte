<script lang="ts">
    import {Hero, Particles, Portfolio} from "$lib"
    import type {Project} from "$lib/types/";

    const project1:Project = {
        title: "Project 1",
        description: "This is a description",
        technologies: ["Svelte", "TypeScript", "TailwindCSS"],
        links: [
            {
                name: "Github",
                url: "https://github.com"
            },
            {
                name: "Website",
                url: "https://google.com"
            }
        ]
    }
    const project2:Project = {
        title: "Project 1",
        description: "This is a description",
        technologies: ["Svelte", "TypeScript", "TailwindCSS"],
        links: [
            {
                name: "Github",
                url: "https://github.com"
            },
            {
                name: "Website",
                url: "https://google.com"
            }
        ]
    }
    const project3:Project = {
        title: "Project 1",
        description: "This is a description",
        technologies: ["Svelte", "TypeScript", "TailwindCSS"],
        links: [
            {
                name: "Github",
                url: "https://github.com"
            },
            {
                name: "Website",
                url: "https://google.com"
            }
        ]
    }
    const projects = [project1, project2, project3]
</script>

<main class="">
    <Particles/>
    <Hero/>
    <Portfolio {projects}/>
</main>