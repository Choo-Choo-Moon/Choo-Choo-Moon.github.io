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
	<ProjectHeader title="Fantry" subtitle="한정판 아이돌 굿즈 중고거래 플랫폼" />

	<!-- Thumbnail (Logo for this project) -->
	{#if project.thumbnail}
		<div class="mb-6 flex justify-center overflow-hidden rounded-lg">
			<img
				src={project.thumbnail}
				alt="{project.title} logo"
				class="h-auto max-w-md object-contain"
			/>
		</div>
	{/if}

	<ImageCarousel images={project.images || []} altPrefix={project.title} />
	<ProjectDescription description={project.description} />

	<!-- Additional Info Section -->
	<div class="mb-8 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
		<p class="text-slate-700 dark:text-slate-300">
			K-POP 팬들을 위한 한정판 굿즈 거래 플랫폼으로, 안전하고 신뢰할 수 있는 거래 환경을 제공합니다.
		</p>
	</div>

	<ContributorsList contributors={project.contribute} />
	<RoleBadges roles={project.role} />
	<SkillsChips skills={project.skills} />

	<!-- Key Features -->
	<div class="mb-8 rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
		<h3 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">주요 기능</h3>
		<ul class="list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300">
			<li>한정판 아이돌 굿즈 거래</li>
			<li>안전한 결제 시스템</li>
			<li>신뢰도 기반 사용자 평가</li>
			<li>실시간 채팅</li>
		</ul>
	</div>

	<DeploymentInfo deployments={project.depoloy} />
</div>
