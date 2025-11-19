<script>
	import ThemeToggle from '$lib/components/common/ThemeToggle.svelte';
	import Icon from './Icon.svelte';

	let { selected, menus = [], onSelected } = $props();
</script>

<div class="fixed top-0 z-50 flex h-17 w-full flex-nowrap items-center justify-end px-4">
	<div class="flex flex-nowrap">
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
	<ThemeToggle />
</div>
