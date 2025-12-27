<script lang="ts">
	import { ProjcetType } from '../../../../types';

	let { projectType }: { projectType: ProjcetType } = $props();

	const badgeConfig = {
		[ProjcetType.Production]: {
			color: 'bg-green-500',
			label: 'Production'
		},
		[ProjcetType.Side]: {
			color: 'bg-orange-500',
			label: 'Side Project'
		},
		[ProjcetType.Toy]: {
			color: 'bg-amber-900',
			label: 'Toy Project'
		}
	};

	const config = badgeConfig[projectType];
</script>

<div class="mb-4">
	<span class="rounded-full {config.color} px-4 py-1 text-sm font-semibold text-white shadow-md">
		{config.label}
	</span>
</div>
