<script lang="ts">
	import type { Project } from '../../../types';
	import ProjectBadge from './common/ProjectBadge.svelte';
	import ProjectHeader from './common/ProjectHeader.svelte';
	import ImageCarousel from '../common/ImageCarousel.svelte';
	import ProjectDescription from './common/ProjectDescription.svelte';
	import ContributorsList from './common/ContributorsList.svelte';
	import RoleBadges from './common/RoleBadges.svelte';
	import SkillsChips from './common/SkillsChips.svelte';
	import DeploymentInfo from './common/DeploymentInfo.svelte';

	let { project }: { project: Project } = $props();
</script>

<div class="p-8 pt-16">
	<ProjectBadge projectType={project.projectType} />
	<ProjectHeader title={project.title} subtitle={project.description} />

	<!-- Thumbnail -->
	{#if project.thumbnail}
		<div class="mb-6 overflow-hidden rounded-lg">
			<img
				src={project.thumbnail}
				alt="{project.title} thumbnail"
				class="h-auto w-full object-cover"
			/>
		</div>
	{/if}

	<ImageCarousel images={project.images || []} altPrefix={project.title} />
	<ProjectDescription description={project.description} />
	<ContributorsList contributors={project.contribute} />
	<RoleBadges roles={project.role} />
	<SkillsChips skills={project.skills} />
	<DeploymentInfo deployments={project.depoloy} />
</div>
