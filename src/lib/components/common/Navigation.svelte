<script lang="ts">
	import ThemeToggle from '$lib/components/common/ThemeToggle.svelte';
	import type { Menu } from '../../../types';
	import Icon from './Icon.svelte';

	let { selected, menus = [], onSelected } = $props();
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleMenuClick(menu: Menu) {
		onSelected(menu);
		isMenuOpen = false;
	}
</script>

<div
	class="fixed top-0 z-50 flex h-17 w-full flex-row-reverse flex-nowrap items-center px-16 md:flex-row md:justify-end"
>
	<!-- Desktop Menu -->
	<div class="hidden flex-nowrap md:flex">
		{#each menus as menu (menu.id)}
			<button
				type="button"
				class="cursor-pointer border-0 transition-colors"
				class:border-b-5={menu.id === selected.id}
				class:border-b-black={menu.id === selected.id}
				class:dark:border-b-white={menu.id === selected.id}
				onclick={() => onSelected(menu)}
			>
				<p class="m-5 w-[100px] text-center font-bold">{menu.label}</p>
			</button>
		{/each}
		<a href="https://velog.io/@charlie_moon/posts" target="_blank"
			><button
				type="button"
				class="m-5 flex w-[100px] cursor-pointer gap-1 border-0 transition-colors"
			>
				<p class=" text-center font-bold">Blog</p>
				<Icon
					src="/images/icon/New_Window_Icon_Light.svg"
					darkSrc="/images/icon/New_Window_Icon_Dark.svg"
					alt="open blog on new window icon"
					size="size-5"
				/>
			</button>
		</a>
	</div>

	<!-- Mobile Hamburger Button -->
	<button
		type="button"
		class="flex cursor-pointer flex-col gap-1.5 border-0 p-2 md:hidden"
		onclick={toggleMenu}
		aria-label="Toggle menu"
	>
		<span
			class="block h-0.5 w-6 bg-black transition-all dark:bg-white"
			class:rotate-45={isMenuOpen}
			class:translate-y-2={isMenuOpen}
		></span>
		<span class="block h-0.5 w-6 bg-black transition-all dark:bg-white" class:opacity-0={isMenuOpen}
		></span>
		<span
			class="block h-0.5 w-6 bg-black transition-all dark:bg-white"
			class:-rotate-45={isMenuOpen}
			class:-translate-y-2={isMenuOpen}
		></span>
	</button>

	<ThemeToggle />
</div>

<!-- Mobile Menu Dropdown -->
{#if isMenuOpen}
	<div class="fixed top-17 left-0 z-40 w-full bg-white shadow-lg md:hidden dark:bg-black">
		<div class="flex flex-col">
			{#each menus as menu (menu.id)}
				<button
					type="button"
					class="cursor-pointer border-0 px-4 py-4 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
					class:bg-gray-100={menu.id === selected.id}
					class:dark:bg-gray-800={menu.id === selected.id}
					onclick={() => handleMenuClick(menu)}
				>
					<p class="font-bold">{menu.label}</p>
				</button>
			{/each}
			<a href="https://velog.io/@charlie_moon/posts" target="_blank" class="border-0">
				<button
					type="button"
					class="flex w-full cursor-pointer items-center gap-2 border-0 px-4 py-4 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
				>
					<p class="font-bold">Blog</p>
					<Icon
						src="/images/icon/New_Window_Icon_Light.svg"
						darkSrc="/images/icon/New_Window_Icon_Dark.svg"
						alt="open blog on new window icon"
						size="size-5"
					/>
				</button>
			</a>
		</div>
	</div>
{/if}
