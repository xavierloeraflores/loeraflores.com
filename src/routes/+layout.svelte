<script>
	import '../app.pcss';
	import {Header, Footer} from '$lib';
	import { ModeWatcher } from "mode-watcher";
</script>
<ModeWatcher />
<Header/>
<slot />
<Footer/>
