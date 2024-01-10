<script lang="ts">
    import {AtSign} from 'lucide-svelte';
    import { Section, Button } from '$lib';
    import {toast} from 'svelte-sonner'
    import {Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader} from "$lib/components/ui/card"
    import {Copy} from 'lucide-svelte'
    import {GitHubSocial,LinkedInSocial, TwitterSocial } from '$lib'
    import { Separator} from '$lib/components/ui/separator'
    function calendly() {
        window.open('https://calendly.com/xavierloeraflores/30min', '_blank')
        toast('🎉 🎉 🎉 Opening Calendly 🎉 🎉 🎉')
    }
    function resume() {
        toast('🎉 🎉 🎉 Downloading Resume 🎉 🎉 🎉')
    }
    function copy() {
        const email = 'xavier@loeraflores.tech';
        navigator.clipboard.writeText(email)
            .then(() => {
                toast('🎉 🎉 🎉 Copied to clipboard 🎉 🎉 🎉');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
</script>
    
<Section title="Contact" class="flex-col justify-center content-center align-middle items-center">
    <AtSign size="64" class="color-primary-foreground my-4"/>
    <Card class="max-w-[750px]">
        <CardHeader class="flex justify-items-center justify-center align-middle items-center">
            <CardTitle class = "text-foreground scroll-m-20  pb-2 text-2xl font-semibold tracking-tight first:mt-0">Let's Get In Touch </CardTitle>
            <CardDescription class="flex flex-row items-center justify-center ">
                <a href="mailto:xavier@loeraflores.tech" class="text-lg font-medium leading-none mr-2">xavier@loeraflores.tech</a>
                <Button on:click={copy} variant="outline"><Copy/></Button>
            </CardDescription>
        </CardHeader>
        <CardContent class="flex justify-center items-centers justify-items-center">
            <Button on:click={calendly} class='mx-4'>Book a call</Button>
        </CardContent>
        <Separator />
        <CardFooter class="flex flex-row p-4 w-full justify-evenly">
            <GitHubSocial />
            <LinkedInSocial />
            <TwitterSocial />
        </CardFooter>

    </Card>
</Section>
    