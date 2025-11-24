<script lang="ts">
	let { description }: { description: string } = $props();
</script>

<div class="mb-8">
	<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">프로젝트 소개</h3>
	<p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
		{description}
	</p>
</div>
