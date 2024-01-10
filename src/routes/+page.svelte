<script lang="ts">
    import {Hero, Particles, Portfolio, Contact, Education} from "$lib"
    import { projectsData } from "../data";

</script>

<main class="">
    <Particles/>
    <Hero/>
    <Portfolio projects={projectsData}/>
    <Education/>
    <Contact/>
</main>