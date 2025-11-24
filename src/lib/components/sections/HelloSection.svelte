<script>
	import { themeStore } from '$lib/stores/Theme.svelte';
	let isDarkMode = $derived(themeStore.theme === 'dark');
</script>

<section id="hello" class="min-h-screen overflow-x-hidden pt-17">
	<div
		class=" flex min-h-[600px] w-full flex-col items-center justify-center gap-10 md:h-screen md:flex-row md:justify-between"
	>
		<!-- Hello World Text -->
		<h1
			class=" inset-0 top-20 z-10 inline-block rotate-315 transform text-[clamp(2rem,18vw,6rem)] sm:top-30 sm:left-10 sm:text-[clamp(3rem,15vw,8rem)] md:mr-10 md:ml-20 md:text-[clamp(4rem,18vw,10rem)]"
		>
			Hello! <br /> &nbsp;&nbsp;&nbsp;&nbsp; World!
		</h1>

		<!-- Logo Image -->
		{#if isDarkMode}
			<img
				class=" top-32 z-0 size-[clamp(150px,50vw,250px)] animate-spin [animation-duration:10s] sm:top-40 sm:right-5 sm:size-[clamp(180px,40vw,300px)] md:right-10 md:mr-100 md:size-[clamp(250px,35vw,400px)] lg:right-20 lg:size-[clamp(300px,30vw,500px)]"
				src="/images/logo/Main_Logo_Light.svg"
				alt="spin main logo"
			/>
		{:else}
			<img
				class=" top-32 z-0 size-[clamp(150px,50vw,250px)] animate-spin [animation-duration:10s] sm:top-40 sm:right-5 sm:size-[clamp(180px,40vw,300px)] md:right-10 md:mr-100 md:size-[clamp(250px,35vw,400px)] lg:right-20 lg:size-[clamp(300px,30vw,500px)]"
				src="/images/logo/Main_Logo_Dark.svg"
				alt="spin main logo"
			/>
		{/if}
	</div>
</section>
