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
    
<Section title="Education" class="flex-col justify-center content-center align-middle items-center">
    <GraduationCap size="64" class="color-primary-foreground"/>
    <Tabs class='max-w-[750px]'>
        <List class={`grid w-full grid-cols-${degreeCount}`}>
            {#each educationData as edu}
            <Trigger value={edu.degree}>{edu.tab}</Trigger>
            {/each}
        </List>
        {#each educationData as edu}
        <Content value ={edu.degree}>
            <EducationCard edu={edu}/>
        </Content>
        {/each}
    </Tabs>

</Section>
    