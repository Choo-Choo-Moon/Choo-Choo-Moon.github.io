<script lang="ts">
	import { type Snippet } from 'svelte';

	let { onClose, children }: { onClose: () => void; children: Snippet } = $props();

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}

	// Prevent background scroll when modal is open
	$effect(() => {
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	});
</script>

<svelte:window onkeydown={handleKeyDown} />

<div class="fixed inset-0 z-50 bg-black/80">
	<div class="relative h-full w-full overflow-y-auto bg-white dark:bg-black">
		<!-- Close Button -->
		<button
			onclick={onClose}
			class="fixed top-4 right-16 z-10 rounded-full bg-slate-200/80 p-2 transition-colors hover:bg-slate-300 dark:bg-slate-700/80 dark:hover:bg-slate-600"
			aria-label="Close"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<!-- Content -->
		{@render children()}
	</div>
</div>
