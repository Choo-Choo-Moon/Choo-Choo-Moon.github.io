<script lang="ts">
	import type { Project } from '../../../types';
	import ProjectBadge from './common/ProjectBadge.svelte';
	import ProjectHeader from './common/ProjectHeader.svelte';
	import ProjectDescription from './common/ProjectDescription.svelte';
	import ContributorsList from './common/ContributorsList.svelte';
	import RoleBadges from './common/RoleBadges.svelte';
	import SkillsChips from './common/SkillsChips.svelte';
	import DeploymentInfo from './common/DeploymentInfo.svelte';
	import ImageCarousel from '../common/ImageCarousel.svelte';

	let { project }: { project: Project } = $props();
</script>

<div class="p-8 pt-16">
	<ProjectBadge projectType={project.projectType} />
	<ProjectHeader title="Fantry" subtitle="한정판 아이돌 굿즈 중고거래 플랫폼" />


	<ImageCarousel images={project.images || []} altPrefix={project.title} />
	<ProjectDescription description={project.description} />
	<!-- Key Features -->
	<div class="mb-8 rounded-lg bg-slate-100 p-6">
		<h3 class="mb-3 text-xl font-semibold text-slate-900">주요 기능</h3>
		<ul class="list-inside list-disc space-y-2 text-slate-700">
			<li>회원가입</li>
			<li>마이페이지</li>
			<li>상품 검수</li>
			<li>상품 등록</li>
			<li>실시간 경매</li>
			<li>실시간 알림</li>
			<li>결제 시스템</li>
			<li>CS센터</li>
			<li>정산 시스템</li>
		</ul>
	</div>
	<div class="mb-8 rounded-lg bg-green-100 p-6">
		<h3 class="mb-3 text-xl font-semibold text-slate-900">담당 기능</h3>
		<ul class="list-inside list-disc space-y-2 text-slate-700">
			<li>실시간 알림</li>
			<li>결제 시스템</li>
		</ul>
	</div>
	<ContributorsList contributors={project.contribute} />
	<RoleBadges roles={project.role} />
	<SkillsChips skills={project.skills} />
	<DeploymentInfo deployments={project.depoloy} />
</div>
