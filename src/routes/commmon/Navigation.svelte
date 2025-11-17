<script>
	let { selected, menus = [], onSelected } = $props();
</script>

<div class="fixed top-0 z-50 flex h-17 w-full flex-nowrap justify-end">
	{#each menus as menu (menu.id)}
		<button
			type="button"
			class="cursor-pointer border-0 border-b-transparent bg-transparent transition-colors"
			class:border-b-5={menu.id === selected.id}
			class:border-b-white={menu.id === selected.id}
			onclick={() => onSelected(menu)}
		>
			<p class="m-5 w-[100px] text-center font-bold">{menu.label}</p>
		</button>
	{/each}
</div>
