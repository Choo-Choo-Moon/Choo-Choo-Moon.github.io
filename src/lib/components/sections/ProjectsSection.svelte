<script lang="ts">
	import { projectStore } from '$lib/stores/Project.svelte';
	import { type Project } from '../../../types';
	import ProjectList from '../ProjectList.svelte';
	const projects: Project[] = [
		...projectStore.productionProjects,
		...projectStore.sideProjects,
		...projectStore.toyProjects
	];
</script>

<section id="projects" class="flex min-h-screen items-center justify-center p-16">
	<div class="w-screen">
		<h1 class="mb-8 hidden pt-16 text-6xl font-bold md:block md:text-8xl">Projects</h1>
		<ProjectList {projects} />
	</div>
</section>
