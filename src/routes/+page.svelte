<script lang="ts">
    import {Hero, Particles, Portfolio, Contact, Education} from "$lib"
    import  type { Project} from "../types";
    import {ProjectLinkIcon} from "../types/project";
    const project1:Project = {
        title: "Project 1",
        description: "This is a description",
        technologies: ["Svelte", "TypeScript", "TailwindCSS"],
        links: [
            {
                name: "Github",
                url: "https://github.com",
                icon: ProjectLinkIcon.GitHub
            },
            {
                name: "Website",
                url: "https://google.com",
                icon: ProjectLinkIcon.Live
            }
        ]
    }
    const projects = [project1]
</script>

<main class="">
    <Particles/>
    <Hero/>
    <Portfolio {projects}/>
    <Education/>
    <Contact/>
</main>