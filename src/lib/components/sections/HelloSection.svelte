<script>
	import { themeStore } from '$lib/stores/theme.svelte.ts';
	let isDarkMode = $derived(themeStore.theme === 'dark');
</script>

<section id="hello" class="min-h-screen pt-17 overflow-x-hidden">
	<div class="relative w-full min-h-[600px]">
		<!-- Hello World Text -->
		<h1
			class="absolute z-10 left-2 top-20 sm:left-10 sm:top-30 inline-block rotate-315 transform text-[clamp(2rem,12vw,6rem)] sm:text-[clamp(3rem,15vw,8rem)] md:text-[clamp(4rem,18vw,10rem)]"
		>
			Hello! <br /> &nbsp;&nbsp;&nbsp;&nbsp; World!
		</h1>

		<!-- Logo Image -->
		<img
			class="absolute top-32 sm:top-40 -right-10 sm:right-5 md:right-10 lg:right-20 z-0 size-[clamp(150px,50vw,250px)] sm:size-[clamp(180px,40vw,300px)] md:size-[clamp(250px,35vw,400px)] lg:size-[clamp(300px,30vw,500px)] animate-spin [animation-duration:10s]"
			src={isDarkMode ? '/images/logo/Main_Logo_Light.svg' : '/images/logo/Main_Logo_Dark.svg'}
			alt="spin main logo"
		/>
	</div>
</section>
