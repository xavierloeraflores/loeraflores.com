<script lang="ts">
    import {Hero, Particles, Portfolio, Contact, Education} from "$lib"
    import { projectsData, educationData } from "../data";

</script>

<main class="">
    <Particles/>
    <Hero/>
    <Portfolio projects={projectsData}/>
    <Education {educationData}/>
    <Contact/>
</main>