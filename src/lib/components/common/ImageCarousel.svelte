<script lang="ts">
	let { images, altPrefix = 'Screenshot' }: { images: string[]; altPrefix?: string } = $props();

	let container: HTMLDivElement | undefined = $state();
	let isDragging = $state(false);
	let startX = $state(0);
	let scrollLeft = $state(0);

	function onMouseDown(e: MouseEvent) {
		if (!container) return;
		isDragging = true;
		startX = e.pageX - container.offsetLeft;
		scrollLeft = container.scrollLeft;
		container.style.cursor = 'grabbing';
		container.style.userSelect = 'none';
	}

	function onMouseLeave() {
		if (!container) return;
		isDragging = false;
		container.style.cursor = 'grab';
		container.style.userSelect = '';
	}

	function onMouseUp() {
		if (!container) return;
		isDragging = false;
		container.style.cursor = 'grab';
		container.style.userSelect = '';
	}

	function onMouseMove(e: MouseEvent) {
		if (!isDragging || !container) return;
		e.preventDefault();
		const x = e.pageX - container.offsetLeft;
		const walk = (x - startX) * 1.5;
		container.scrollLeft = scrollLeft - walk;
	}
</script>

{#if images && images.length > 0}
	<div class="mb-8">
		<h3 class="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">Screenshots</h3>
		<div class="relative">
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<div
				bind:this={container}
				class="scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto pb-4 transition-transform duration-200 ease-out"
				style="scroll-behavior: smooth;"
				role="group"
				aria-label="Image gallery"
				onmousedown={onMouseDown}
				onmouseleave={onMouseLeave}
				onmouseup={onMouseUp}
				onmousemove={onMouseMove}
			>
				{#each images as image, index}
					<div class="h-150 min-w-[280px] shrink-0 snap-center md:min-w-[320px]">
						<div class="h-full">
							<img
								src={image}
								alt="{altPrefix} {index + 1}"
								class="pointer-events-none h-full w-full object-contain"
								draggable="false"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
