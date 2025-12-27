<script lang="ts">
	import { Role } from '../../../../types';

	let { roles }: { roles: Role[] } = $props();

	function getRoleLabel(role: Role): string {
		switch (role) {
			case Role.Mobile:
				return 'Mobile';
			case Role.Backend:
				return 'Backend';
			case Role.Frontend:
				return 'Frontend';
			default:
				return 'Unknown';
		}
	}
</script>

<div class="mb-8">
	<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">My Role</h3>
	<div class="flex flex-wrap gap-2">
		{#each roles as role}
			{#if role !== Role.Any}
				<span
					class="rounded-full bg-blue-100 px-4 py-2 text-base font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
				>
					{getRoleLabel(role)}
				</span>
			{/if}
		{/each}
	</div>
</div>
