<script lang="ts">
	let { images, altPrefix = 'Screenshot' }: { images: string[]; altPrefix?: string } = $props();
</script>

{#if images && images.length > 0}
	<div class="mb-8">
		<h3 class="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">Screenshots</h3>
		<div class="relative">
			<div class="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
				{#each images as image, index}
					<div class="h-150 min-w-[280px] shrink-0 snap-center md:min-w-[320px]">
						<div class="h-full">
							<img src={image} alt="{altPrefix} {index + 1}" class="h-full w-full object-contain" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
