<script lang="ts">
    import { Section, Button } from '$lib';
    import {toast} from 'svelte-sonner'
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import {GraduationCap } from 'lucide-svelte'
    import { Separator} from '$lib/components/ui/separator'
    import {Tabs, Trigger, Content, List} from '$lib/components/ui/tabs'

</script>
    
<Section title="Education" class="flex-col justify-center content-center align-middle items-center">
    <GraduationCap size="64" class="color-primary-foreground"/>
    <Tabs class='max-w-[750px]'>
        <List class='grid w-full grid-cols-2'>
            <Trigger value='bachelors'>Bachelors in CS</Trigger>
            <Trigger value='bootcamp'>Bootcamp</Trigger>
        </List>
        <Content value ='bachelors'>
            <Card class="bg-background">
                <CardHeader class="flex justify-items-center justify-center align-middle items-center">
                    <CardTitle class = "text-primary scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">Bachelors in Computer Science</CardTitle>
                    <CardDescription class="flex flex-row items-center justify-center ">
                        <span class="text-lg font-medium leading-none mr-2">2022-2024</span>
                    </CardDescription>
                </CardHeader>
                <CardContent class="flex justify-center items-centers justify-items-center">
                    <p class="text-lg font-medium leading-none mr-2">Western Governors University</p>
                </CardContent>
                <Separator />
                <CardFooter class="flex flex-row p-4 w-full justify-evenly">
                    <a href="https://www.wgu.edu/" class="text-lg font-medium leading-none mr-2">Western Governors University, Millcreek UT</a>
                </CardFooter>
            </Card>
        </Content>
        <Content value='bootcamp'>Web Dev</Content>
    </Tabs>

</Section>
    