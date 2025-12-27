<script lang="ts">
	import type { Project } from '../../../types';
	import ProjectBadge from './common/ProjectBadge.svelte';
	import ProjectHeader from './common/ProjectHeader.svelte';
	import ProjectDescription from './common/ProjectDescription.svelte';
	import RoleBadges from './common/RoleBadges.svelte';
	import SkillsChips from './common/SkillsChips.svelte';
	import DeploymentInfo from './common/DeploymentInfo.svelte';
	import ImageCarousel from '../common/ImageCarousel.svelte';

	let { project }: { project: Project } = $props();
</script>

<div class="p-8 pt-16">
	<ProjectBadge projectType={project.projectType} />
	<ProjectHeader title="LogCash" subtitle="외화거래 일지 작성 애플리케이션" />


	<ImageCarousel images={project.images || []} altPrefix={project.title} />
	<ProjectDescription description={project.description} />

	<!-- Additional Info Section -->
	<div class="mb-8 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
		<p class="text-slate-700 dark:text-slate-300">
			외화 거래 내역을 체계적으로 기록하고 관리할 수 있는 개인 프로젝트입니다.
		</p>
	</div>

	<RoleBadges roles={project.role} />
	<SkillsChips skills={project.skills} />

	<!-- Key Features -->
	<div class="mb-8 rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
		<h3 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">주요 기능</h3>
		<ul class="list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300">
			<li>외화 거래 내역 기록</li>
			<li>환율 정보 자동 갱신</li>
			<li>손익 계산 및 통계</li>
			<li>거래 패턴 분석</li>
		</ul>
	</div>

	<DeploymentInfo deployments={project.depoloy} />
</div>
