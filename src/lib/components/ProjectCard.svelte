<script lang="ts">
	import { Depoloy, ProjcetType, type Project } from '../../types';

	let { project, onReadMore }: { project: Project; onReadMore: () => void } = $props();
</script>

<div
	class="relative my-6 flex w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
>
	<div class="relative m-2.5 h-75 overflow-hidden rounded-md text-white">
		<img
			class="mx-auto h-full w-auto object-contain"
			src={project.thumbnail}
			alt="{project.title} thumbnail image"
		/>
	</div>
	<div class="p-4">
		<h6 class="mb-2 text-xl font-semibold">
			{project.title}
		</h6>
		<p class="leading-normal font-light">
			{project.description}
		</p>
		<div class="mt-5 flex gap-2">
			{#if project.depoloy.includes(Depoloy.Android)}
				<img class="size-6" src="/images/logo/Google_PlayStore_Logo.svg" alt="" />
			{/if}

			{#if project.depoloy.includes(Depoloy.iOS)}
				<img class="size-6" src="/images/logo/Apple_AppStore_Logo.svg" alt="" />
			{/if}
		</div>
	</div>
	<div class="mt-2 px-4 pt-0 pb-4">
		<button
			onclick={onReadMore}
			class="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:cursor-pointer hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:bg-slate-100 dark:text-slate-800 dark:hover:bg-slate-50 dark:focus:bg-slate-50 dark:active:bg-slate-50"
			type="button"
		>
			Read more
		</button>
	</div>

	<div class="absolute top-0 right-0 h-16 w-16">
		{#if project.projectType === ProjcetType.Production}
			<div
				class="absolute top-10 -right-13 w-50 rotate-45 transform bg-green-500 py-1 text-center text-xs font-semibold text-white"
			>
				{ProjcetType[project.projectType]}
			</div>
		{:else if project.projectType === ProjcetType.Side}
			<div
				class="absolute top-10 -right-13 w-50 rotate-45 transform bg-orange-500 py-1 text-center text-xs font-semibold text-white"
			>
				{ProjcetType[project.projectType]}
			</div>
		{:else}
			<div
				class="absolute top-10 -right-13 w-50 rotate-45 transform bg-amber-900 py-1 text-center text-xs font-semibold text-white"
			>
				{ProjcetType[project.projectType]}
			</div>
		{/if}
	</div>
</div>
