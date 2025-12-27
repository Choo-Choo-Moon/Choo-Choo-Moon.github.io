<script lang="ts">
	import { entryPointStore } from '$lib/stores/EntryPoint.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';

	entryPointStore.entryPoint = 'backend';
</script>

<Portfolio />
