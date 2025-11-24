<script lang="ts">
	import type { Project } from '../../types';
	import FullScreenModal from './common/FullScreenModal.svelte';
	import TableOrderDetail from './projectDetails/TableOrderDetail.svelte';
	import SmartscorePersonalDetail from './projectDetails/SmartscorePersonalDetail.svelte';
	import SmartscoreErpDetail from './projectDetails/SmartscoreErpDetail.svelte';
	import FantryDetail from './projectDetails/FantryDetail.svelte';
	import LogCashDetail from './projectDetails/LogCashDetail.svelte';
	import DefaultProjectDetail from './projectDetails/DefaultProjectDetail.svelte';

	let { project, onClose }: { project: Project; onClose: () => void } = $props();

	// Map project titles to their specific detail components
	function getProjectComponent(project: Project) {
		switch (project.title) {
			case 'TableOrder':
				return TableOrderDetail;
			case 'Smartscore Personal App':
				return SmartscorePersonalDetail;
			case 'Smartscore ERP App':
				return SmartscoreErpDetail;
			case 'Fantry':
				return FantryDetail;
			case 'LogCash':
				return LogCashDetail;
			default:
				return DefaultProjectDetail;
		}
	}

	const ProjectComponent = getProjectComponent(project);
</script>

<FullScreenModal {onClose}>
	<ProjectComponent {project} />
</FullScreenModal>
