<script lang="ts">
	import { particlesInit } from '@tsparticles/svelte';
	// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
	import { onMount } from 'svelte';

	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props["class"] = undefined;
	export { className as class };

	let Particles: any;
	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		Particles = module.default;
		// you can use onMount to trigger the start of the animation
		// or any other function
	});
// Navy				#0a192f
// Light Navy		#112240 
// Lightest Navy	#233554 
// Slate			#8892b0 
// Light Slate		#a8b2d1 
// Lightest Slate	#ccd6f6 
// White			#e6f1ff 
// Green 			#64ffda

	let particlesConfig ={
	// background: {
	// 	color: "#233554"
	// },
	backgroundMode: {
		enable: true
	},
	particles: {
		color: {
		value: ["#0a192f", "#112240", "#8892b0", "#8892b0"]
		},
		links: {
		color: "#ccd6f6",
		enable: true
		},
		move: {
		enable: true,
		speed: 1
		},
		size: {
		value: 5,
		random: {
			enable: true,
			minimumValue: 1
		},
		animation: {
			enable: true,
			speed: 2.5,
			minimumValue: 1
		}
		},
		opacity: {
		value: 0.8,
		random: {
			enable: true,
			minimumValue: 0.4
		}
		},
		number:{
			value:100
		}
	}
}

	let particlesConfigOld ={
  background: {
    // color: "#0b032d"
    color: "#000000"
  },
  backgroundMode: {
    enable: true
  },
  particles: {
    color: {
      value: ["#f67e7d", "#843b62", "#621940"]
    },
    links: {
      color: "#ffb997",
      enable: true
    },
    move: {
      enable: true,
      speed: 1
    },
    size: {
      value: 5,
      random: {
        enable: true,
        minimumValue: 1
      },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 1
      }
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.4
      }
    },
	number:{
		value:100
	}
  }
}

	let particlesDefaultConfig = {
		particles: {
			color: {
				value: '#000'
			},
			links: {
				enable: true,
				color: '#000'
			},
			move: {
				enable: true
			},
			number: {
				value: 100
			}
		}
	};

	let onParticlesLoaded = (event: { detail: { particles: any; }; }) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	});
</script>

<svelte:component
		this={Particles}
        id="tsparticles"
        class ={cn(
			"-z-10 fixed inset-0",
			className
		)}
        style=""
        options="{particlesConfig}"
        on:particlesLoaded="{onParticlesLoaded}"
/>