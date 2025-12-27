<script lang="ts">
	let { skills }: { skills: string[] } = $props();
</script>

{#if skills && skills.length > 0}
	<div class="mb-8">
		<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">Tech Stack</h3>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<span
					class="rounded-lg bg-linear-to-r from-purple-100 to-pink-100 px-3 py-1.5 text-sm font-medium text-purple-900 shadow-sm transition-all hover:shadow-md dark:from-purple-900/40 dark:to-pink-900/40 dark:text-purple-100"
				>
					{skill}
				</span>
			{/each}
		</div>
	</div>
{/if}
