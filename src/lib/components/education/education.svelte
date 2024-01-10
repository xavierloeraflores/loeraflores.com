<script lang="ts">
    import EducationCard from "$lib/components/education/education-card.svelte"
    import { type Education } from '../../../types';
    import { Section, Button } from '$lib';
    import {toast} from 'svelte-sonner'
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import {GraduationCap } from 'lucide-svelte'
    import { Separator} from '$lib/components/ui/separator'
    import {Tabs, Trigger, Content, List} from '$lib/components/ui/tabs'

    export let educationData: Education[] = [];
    let degreeCount= educationData.length
</script>
    
<Section title="Education">
    <GraduationCap size="64" class="color-primary-foreground my-4"/>
    <Tabs class='max-w-[900px] sm:min-w-[500px] min-w-[200px] w-full'>
        <List class={`flex flex-row justify-evenly  w-full`}>
            {#each educationData as edu}
            <Trigger class="px-0 sm:px-3" value={edu.degree}>{edu.tab}</Trigger>
            {/each}
        </List>
        {#each educationData as edu}
        <Content value ={edu.degree}>
            <EducationCard edu={edu}/>
        </Content>
        {/each}
    </Tabs>

</Section>
    