<script lang="ts">
	import { Depoloy } from '../../../../types';

	let { deployments }: { deployments: Depoloy[] } = $props();
</script>

{#if deployments.length > 0}
	<div>
		<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
			{deployments.includes(Depoloy.Android) || deployments.includes(Depoloy.iOS)
				? 'Download'
				: 'Deployment'}
		</h3>
		<div class="flex flex-wrap gap-3">
			{#if deployments.includes(Depoloy.Android)}
					<img
						class="h-auto w-50"
						src="/images/logo/Google_PlayStore_Badge_Logo.svg"
						alt="Google Play Store"
					/>
			{/if}

			{#if deployments.includes(Depoloy.iOS)}
					<img
						class="h-auto w-50"
						src="/images/logo/Apple_AppStore_Badge_Logo.svg"
						alt="Apple App Store"
					/>
			{/if}

			{#each deployments as deploy}
				{#if deploy !== Depoloy.Android && deploy !== Depoloy.iOS}
					<span class="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium dark:bg-slate-700">
						{Depoloy[deploy]}
					</span>
				{/if}
			{/each}
		</div>
	</div>
{/if}
