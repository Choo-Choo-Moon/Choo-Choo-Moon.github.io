<script lang="ts">
	import type { Contributor } from '../../../../types';

	let { contributors }: { contributors?: Contributor[] } = $props();
</script>

{#if contributors && contributors.length > 0}
	<div class="mb-8">
		<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">Contributors</h3>
		<div class="flex flex-wrap gap-4">
			{#each contributors as contributor}
				<div class="flex items-center gap-3 rounded-lg bg-slate-100 p-3 dark:bg-slate-700">
					{#if contributor.thumbnail}
						<img
							src={contributor.thumbnail}
							alt={contributor.name}
							class="size-10 rounded-full object-cover"
						/>
					{/if}
					<div>
						<p class="font-medium text-slate-900 dark:text-white">{contributor.name}</p>
						{#if contributor.aka}
							<p class="text-sm text-slate-600 dark:text-slate-400">@{contributor.aka}</p>
						{/if}
						{#if contributor.url}
							<a
								href={contributor.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm text-blue-600 hover:underline dark:text-blue-400"
							>
								View Profile
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
