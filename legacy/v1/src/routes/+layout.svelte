<script>
	import '../app.pcss';
	import {Header, Footer, Toaster} from '$lib';
	import { ModeWatcher } from "mode-watcher";
</script>
<ModeWatcher />
<Toaster />
<Header/>
<slot />
<Footer/>
