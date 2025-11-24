<script lang="ts">
	import { Depoloy, type Project } from '../../../types';
	import ProjectBadge from './common/ProjectBadge.svelte';
	import ProjectHeader from './common/ProjectHeader.svelte';
	import ProjectDescription from './common/ProjectDescription.svelte';
	import ContributorsList from './common/ContributorsList.svelte';
	import RoleBadges from './common/RoleBadges.svelte';
	import SkillsChips from './common/SkillsChips.svelte';
	import ImageCarousel from '../common/ImageCarousel.svelte';

	let { project }: { project: Project } = $props();
</script>

<div class="p-8 pt-16">
	<ProjectBadge projectType={project.projectType} />
	<ProjectHeader title="Smartscore ERP App" subtitle="스마트스코어 골프장 ERP 모바일 서비스" />
	<ImageCarousel images={project.images || []} altPrefix={project.title} />
	<ProjectDescription description={project.description} />
	<ContributorsList contributors={project.contribute} />
	<RoleBadges roles={project.role} />
	<SkillsChips skills={project.skills} />
	<div>
		<h3 class="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
			{project.depoloy.includes(Depoloy.Android) || project.depoloy.includes(Depoloy.iOS)
				? 'Download'
				: 'Deployment'}
		</h3>
		<div class="flex flex-wrap gap-3">
			{#if project.depoloy.includes(Depoloy.Android)}
				<a
					href="https://play.google.com/store/apps/details?id=com.smartscore.grass.interstellar&hl=ko"
					target="_blank"
				>
					<img
						class="h-auto w-50"
						src="/images/logo/Google_PlayStore_Badge_Logo.svg"
						alt="Google Play Store"
					/>
				</a>
			{/if}

			{#if project.depoloy.includes(Depoloy.iOS)}
				<a href="https://apps.apple.com/kr/app/smartscore-erp/id6479001899" target="_blank">
					<img
						class="h-auto w-50"
						src="/images/logo/Apple_AppStore_Badge_Logo.svg"
						alt="Apple App Store"
					/>
				</a>
			{/if}

			{#each project.depoloy as deploy}
				{#if deploy !== Depoloy.Android && deploy !== Depoloy.iOS}
					<span class="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium dark:bg-slate-700">
						{Depoloy[deploy]}
					</span>
				{/if}
			{/each}
		</div>
	</div>
</div>
