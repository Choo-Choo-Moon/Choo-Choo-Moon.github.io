<script lang="ts">
	import Icon from './Icon.svelte';
	const { topMenu, onclick } = $props();
</script>

<div class="fixed right-10 bottom-10 animate-bounce">
	<button class=" hover:cursor-pointer" onclick={() => onclick(topMenu)}>
		<Icon
			src="/images/icon/Arrow_Up_Icon_Light.svg"
			darkSrc="/images/icon/Arrow_Up_Icon_Dark.svg"
			alt="MoveTopArrow"
		/>
	</button>
</div>
