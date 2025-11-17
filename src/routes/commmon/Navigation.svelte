<script>
	import ThemeToggle from '$lib/components/common/ThemeToggle.svelte';

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
	</div>
	<ThemeToggle />
</div>
