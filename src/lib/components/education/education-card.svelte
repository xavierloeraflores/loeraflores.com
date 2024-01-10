<script lang="ts">
    import { type Education } from '../../../types';
    import {toast} from 'svelte-sonner'
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import {GraduationCap } from 'lucide-svelte'
    import { Separator} from '$lib/components/ui/separator'

    export let edu: Education;
</script>

<Card class="bg-background">
    <CardHeader class="flex justify-items-center justify-center align-middle items-center">
        <CardTitle class = "text-primary scroll-m-20  pb-2 sm:text-2xl text-xl font-semibold tracking-tight first:mt-0">{edu.degree}</CardTitle>
        <CardDescription class="flex flex-row items-center justify-center ">
            <span class="sm:text-lg text-md font-medium leading-none mr-2">{edu.dates}</span>
        </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center items-centers justify-items-center">
        <!-- <p class="text-lg font-medium leading-none mr-2">{edu.school}</p> -->
    </CardContent>
    <Separator />
    <CardFooter class="flex flex-row p-4 w-full justify-evenly">
        <a href="https://www.wgu.edu/" class="sm:text-lg text-md font-medium leading-none mr-2">{edu.school}, {edu.location}</a>
    </CardFooter>
</Card>