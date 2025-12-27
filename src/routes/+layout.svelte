<script lang="ts">
	import '../app.css';
	import favicon_dark from '$lib/assets/favicon_dark.svg';
	import favicon_light from '$lib/assets/favicon_light.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Charlie Moon</title>
	<link rel="icon" href={favicon_light} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={favicon_dark} media="(prefers-color-scheme: dark)" />
</svelte:head>
{@render children()}
