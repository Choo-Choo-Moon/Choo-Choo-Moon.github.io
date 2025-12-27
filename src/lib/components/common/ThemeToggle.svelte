<script lang="ts">
	import { themeStore } from '$lib/stores/Theme.svelte';

	const toggle = () => {
		themeStore.toggle();
	};
</script>

<button
	type="button"
	onclick={toggle}
	class="flex size-[clamp(1rem,10mm,12mm)] shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all hover:scale-110 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500"
	aria-label="Toggle theme"
>
	{#if themeStore.theme === 'dark'}
		<!-- Moon Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-6 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{:else}
		<!-- Sun Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="size-6 text-orange-500"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
			/>
		</svg>
	{/if}
</button>
