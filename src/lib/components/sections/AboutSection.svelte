<script lang="ts">
	import { themeStore } from '$lib/stores/Theme.svelte';
	import { entryPointStore } from '$lib/stores/EntryPoint.svelte';
	import Icon from '../common/Icon.svelte';
	import type { Career } from '../../../types';
	import { calculateDuration } from '$lib/util/DateCalculater';
	import { browser } from '$app/environment';

	// 현재 모드에 따라 섹션 표시 여부 결정
	$: showMobile = !entryPointStore.entryPoint || entryPointStore.entryPoint === 'mobile';
	$: showBackend = !entryPointStore.entryPoint || entryPointStore.entryPoint === 'backend';

	// 안전한 JSON 파싱 함수
	function safeJsonParse<T>(jsonString: string | undefined, fallback: T): T {
		if (!browser || !jsonString || jsonString.trim() === '') {
			return fallback;
		}
		try {
			return JSON.parse(jsonString);
		} catch (error) {
			console.warn('JSON parse error:', error);
			return fallback;
		}
	}

	// 환경변수에서 경력 데이터 로드, 없으면 기본값 사용
	const mobileCareers: Array<Career> = safeJsonParse(import.meta.env.VITE_MOBILE_CAREER_DATA, []);
	const backendCareers: Array<Career> = safeJsonParse(import.meta.env.VITE_BACKEND_CAREER_DATA, []);

	// Reactive statement로 totalCareers 계산
	$: totalCareers = [
		...(showMobile ? mobileCareers : []),
		...(showBackend ? backendCareers : [])
	].sort((a, b) => {
		if (a.joining > b.joining) return -1;
		if (a.joining < b.joining) return 1;
		return 0;
	});
</script>

<section id="about" class="relative min-h-screen w-screen">
	<!-- h1 - 모바일에서만 표시 -->
	<h1 class="mb-8 p-8 text-6xl font-bold md:hidden">About</h1>

	<div class="flex w-full flex-col items-center md:flex-row-reverse md:items-start">
		<!-- 사진 (모바일: 두번째, PC: 오른쪽) -->
		<div class="relative h-[600px] w-full overflow-hidden md:h-[1200px] md:w-1/2">
			<img
				class="h-full w-full scale-125 object-cover drop-shadow-[10px_8px_6px] drop-shadow-gray-800 md:scale-100"
				src="/images/logo/main.png"
				alt="logo"
			/>
			<div
				class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50"
			></div>
		</div>

		<!-- 텍스트 (모바일: 세번째, PC: 왼쪽) -->
		<div class="w-full p-8 md:w-1/2 md:p-16">
			<!-- h1 - PC에서만 표시 -->
			<h1 class="mb-8 hidden text-6xl font-bold md:block md:text-8xl">About</h1>
			<div class="space-y-6">
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Name</h4>
					<h2 class="mb-3 text-3xl font-semibold">Moon Chang Kyu</h2>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">A.k.a</h4>
					<h3 class="mb-3 text-3xl font-semibold">Charlie Moon</h3>
				</div>
				{#if totalCareers.length != 0}
					<div>
						<h4 class="mb-1 text-xl font-normal opacity-70">Career details</h4>
						<ul class="list-disc pl-7">
							{#each totalCareers as career (career.companyName)}
								<li>
									<a href={career.companyHomePageUrl} target="_blank"
										><span class=" font-bold underline">{career.companyName}</span></a
									>
									- {career.role}
									<span class="whitespace-nowrap"
										>{career.joining} ~ {career.termination} ({calculateDuration(
											career.joining,
											career.termination
										)})</span
									>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if showMobile}
					<div>
						<h4 class="mb-1 text-xl font-normal opacity-70">Mobile</h4>
						<div class="flex flex-wrap gap-10">
							<Icon
								src="/images/logo/Kotlin_Logo.svg"
								alt="Kotlin_Logo"
								url="https://kotlinlang.org/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/Android_Logo.svg"
								alt="Android_Logo"
								url="https://www.android.com/intl/ko_kr/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/Jetpack_Logo.png"
								alt="Jetpack_Logo"
								url="https://developer.android.com/jetpack?hl=ko"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/JetpackCompose_Logo.svg"
								alt="JetpackCompose_Logo"
								url="https://developer.android.com/compose"
								enableDropShadow={true}
							/>
						</div>
					</div>
				{/if}
				{#if showBackend}
					<div>
						<h4 class="mb-1 text-xl font-normal opacity-70">Frontend</h4>
						<div class="flex flex-wrap gap-10">
							<Icon
								src="/images/logo/JavaScript_Logo.svg"
								alt="JavaScript_Logo"
								url="https://developer.mozilla.org/ko/docs/Web/JavaScript"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/Vue_Logo.svg"
								alt="Vue_Logo"
								url="https://ko.vuejs.org/"
								enableDropShadow={true}
							/>
						</div>
					</div>
				{/if}
				{#if showBackend}
					<div>
						<h4 class="mb-5 text-xl font-normal opacity-70">Backend</h4>
						<div class="flex flex-wrap gap-10">
							<Icon
								src="/images/logo/Java_Logo.svg"
								alt="Java_Logo"
								url="https://www.java.com/ko/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/Spring_Logo.svg"
								alt="Spring_Logo"
								url="https://spring.io/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/MySQL_Logo.svg"
								alt="MySQL_Logo"
								url="https://www.mysql.com/"
								enableDropShadow={true}
							/>
						</div>
					</div>
				{/if}
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Version Control Tool</h4>
					<div class="flex flex-wrap gap-10">
						<Icon
							src="/images/logo/Git_Logo.svg"
							alt="Git_Logo"
							url="https://git-scm.com/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Github_Logo.svg"
							darkSrc="/images/logo/Github_White_Logo.svg"
							alt="Github_Logo"
							url="https://github.com/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/GitLab_Logo.svg"
							alt="GitLab_Logo"
							url="https://about.gitlab.com/"
							enableDropShadow={true}
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Collaboration Tool</h4>
					<div class="flex flex-wrap gap-10">
						<Icon
							src="/images/logo/Jira_Logo.svg"
							alt="Jira_Logo"
							url="https://www.atlassian.com/ko/software/jira"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Figma_Logo.svg"
							alt="Figma_Logo"
							url="https://www.figma.com/ko-kr/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Slack_Logo.svg"
							alt="Slack_Logo"
							url="https://slack.com/intl/ko-kr"
							enableDropShadow={true}
						/>
					</div>
				</div>

				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Interested</h4>
					<div class="flex flex-wrap gap-10">
						{#if showMobile}
							<Icon
								src="/images/logo/ComposeMultiPlatform_Logo.svg"
								alt="ComposeMultiPlatform_Logo"
								url="https://www.jetbrains.com/ko-kr/compose-multiplatform/"
								enableDropShadow={true}
							/>
						{/if}
						{#if showBackend}
							<Icon
								src="/images/logo/Quarkus_Logo.svg"
								darkSrc="/images/logo/Quarkus_Reverse_Logo.svg"
								alt="Quarkus_Logo"
								url="https://quarkus.io/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/GraalVM_Logo.svg"
								alt="GraalVM_Logo"
								url="https://www.graalvm.org/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/PostgresSQL_Logo.svg"
								alt="PostgresSQL_Logo"
								url="https://www.postgresql.org/"
								enableDropShadow={true}
							/>
							{#if themeStore.getTheme() == 'light'}
								<Icon
									src="/images/logo/Rust_Logo.svg"
									alt="Rust_Logo"
									url="https://rust-lang.org/"
									dropShadowColor={{ r: 150, g: 150, b: 150 }}
									enableDropShadow={true}
								/>
							{:else}
								<Icon
									src="/images/logo/Rust_Logo.svg"
									alt="Rust_Logo"
									url="https://rust-lang.org/"
									dropShadowColor={{ r: 255, g: 255, b: 255 }}
									enableDropShadow={true}
								/>
							{/if}
							<Icon
								src="/images/logo/Zig_Logo.svg"
								alt="Zig_Logo"
								url="https://ziglang.org/ko-KR/"
								enableDropShadow={true}
							/>
							<Icon
								src="/images/logo/Servo_Logo.svg"
								alt="Servo_Logo"
								url="https://servo.org/"
								enableDropShadow={true}
							/>
						{/if}
						<Icon
							src="/images/logo/Svelte_Logo.svg"
							alt="Svelte_Logo"
							url="https://svelte.dev/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Tauri_Logo.svg"
							alt="Tauri_Logo"
							url="https://v2.tauri.app/ko/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Bun_Logo.svg"
							alt="Bun_Logo"
							url="https://bun.com/"
							enableDropShadow={true}
						/>
						<Icon
							src="/images/logo/Docker_Logo.svg"
							alt="Docker_Logo"
							url="https://www.docker.com/"
							enableDropShadow={true}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
