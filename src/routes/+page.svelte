<script lang="ts">
	import { entryPointStore } from '$lib/stores/EntryPoint.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';

	// 전체 포트폴리오 모드 (null = 모두 표시)
	entryPointStore.entryPoint = null;
</script>

<Portfolio />
