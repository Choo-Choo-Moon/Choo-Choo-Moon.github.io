<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<div class="mb-6">
	<h1 class="mb-2 text-4xl font-bold text-slate-900 dark:text-white">{title}</h1>
	<p class="text-xl text-slate-600 dark:text-slate-400">
		{subtitle}
	</p>
</div>
