<script lang="ts">
	import { entryPointStore } from '$lib/stores/EntryPoint.svelte';
	import { ProjcetType, Role, type Project } from '../../types';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectDetail from './ProjectDetail.svelte';

	let entryPoint = $derived(
		entryPointStore.entryPoint === 'backend'
			? Role.Backend
			: entryPointStore.entryPoint === 'mobile'
				? Role.Mobile
				: entryPointStore.entryPoint === 'frontend'
					? Role.Frontend
					: Role.Any
	);

	let { projects = [] }: { projects?: Project[] } = $props();
	let productionProjects = projects.filter(
		(projects) =>
			projects.projectType === ProjcetType.Production &&
			projects.role.includes(entryPoint) &&
			projects.role.includes(Role.Any)
	);
	let sideProjects = projects.filter(
		(projects) =>
			projects.projectType === ProjcetType.Side &&
			projects.role.includes(entryPoint) &&
			projects.role.includes(Role.Any)
	);
	let toyProjects = projects.filter(
		(projects) =>
			projects.projectType === ProjcetType.Toy &&
			projects.role.includes(entryPoint) &&
			projects.role.includes(Role.Any)
	);

	let selectedProject = $state<Project | null>(null);

	function openProjectDetail(project: Project) {
		selectedProject = project;
	}

	function closeProjectDetail() {
		selectedProject = null;
	}
</script>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
	{#each productionProjects as project}
		<ProjectCard {project} onReadMore={() => openProjectDetail(project)} />
	{/each}
	{#each sideProjects as project}
		<ProjectCard {project} onReadMore={() => openProjectDetail(project)} />
	{/each}
	{#each toyProjects as project}
		<ProjectCard {project} onReadMore={() => openProjectDetail(project)} />
	{/each}
</div>

{#if selectedProject}
	<ProjectDetail project={selectedProject} onClose={closeProjectDetail} />
{/if}
