<script lang="ts">
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
        <List class="grid w-full grid-cols-5">
            {#each educationData as edu}
            <Trigger value={edu.degree}>{edu.tab}</Trigger>
            {/each}
        </List>
        {#each educationData as edu}
        <Content value ={edu.degree}>
            <Card class="bg-background">
                <CardHeader class="flex justify-items-center justify-center align-middle items-center">
                    <CardTitle class = "text-primary scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">{edu.degree}</CardTitle>
                    <CardDescription class="flex flex-row items-center justify-center ">
                        <span class="text-lg font-medium leading-none mr-2">{edu.dates}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent class="flex justify-center items-centers justify-items-center">
                    <!-- <p class="text-lg font-medium leading-none mr-2">{edu.school}</p> -->
                </CardContent>
                <Separator />
                <CardFooter class="flex flex-row p-4 w-full justify-evenly">
                    <a href="https://www.wgu.edu/" class="text-lg font-medium leading-none mr-2">{edu.school}, {edu.location}</a>
                </CardFooter>
            </Card>
        </Content>
        {/each}
    </Tabs>

</Section>
    