<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	import Icon from '../common/Icon.svelte';
</script>

<section id="about" class="relative min-h-screen w-screen">
	<div class="flex w-full flex-col items-center md:flex-row-reverse md:items-start">
		<!-- 사진 (모바일: 첫번째, PC: 두번째) -->
		<div class="relative h-[600px] w-full overflow-hidden md:h-[1200px] md:w-1/2">
			<img
				class="h-full w-full scale-125 object-cover drop-shadow-[10px_8px_6px] drop-shadow-gray-800 md:scale-100"
				src="/images/main.png"
				alt="logo"
			/>
			<div
				class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50"
			></div>
		</div>

		<!-- 텍스트 (모바일: 두번째, PC: 첫번째) -->
		<div class="w-full p-8 md:w-1/2 md:p-16">
			<h1 class="mb-8 text-6xl font-bold md:text-8xl">About</h1>
			<div class="space-y-6">
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Name</h4>
					<h2 class="mb-3 text-3xl font-semibold">Moon Chang Kyu</h2>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">A.k.a</h4>
					<h3 class="mb-3 text-3xl font-semibold">Charlie Moon</h3>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Mobile</h4>
					<div class="flex flex-wrap gap-10">
						<Icon src="/images/Kotlin_Logo.svg" alt="Kotlin_Logo" url="https://kotlinlang.org/" />
						<Icon
							src="/images/Android_Logo.svg"
							alt="Android_Logo"
							url="https://www.android.com/intl/ko_kr/"
						/>
						<Icon
							src="/images/Jetpack_Logo.png"
							alt="Jetpack_Logo"
							url="https://developer.android.com/jetpack?hl=ko"
						/>
						<Icon
							src="/images/JetpackCompose_Logo.svg"
							alt="JetpackCompose_Logo"
							url="https://developer.android.com/compose"
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Frontend</h4>
					<div class="flex flex-wrap gap-10">
						<Icon
							src="/images/JavaScript_Logo.svg"
							alt="JavaScript_Logo"
							url="https://developer.mozilla.org/ko/docs/Web/JavaScript"
						/>
						<Icon src="/images/Vue_Logo.svg" alt="Vue_Logo" url="https://ko.vuejs.org/" />
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Backend</h4>
					<div class="flex flex-wrap gap-10">
						<Icon src="/images/Java_Logo.svg" alt="Java_Logo" url="https://www.java.com/ko/" />
						<Icon src="/images/Spring_Logo.svg" alt="Spring_Logo" url="https://spring.io/" />
						<Icon src="/images/MySQL_Logo.svg" alt="MySQL_Logo" url="https://www.mysql.com/" />
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Version Control Tool</h4>
					<div class="flex flex-wrap gap-10">
						<Icon src="/images/Git_Logo.svg" alt="Git_Logo" url="https://git-scm.com/" />
						{#if themeStore.getTheme() == 'light'}
							<Icon src="/images/Github_Logo.svg" alt="Github_Logo" url="https://github.com/" />
						{:else}
							<Icon
								src="/images/Github_White_Logo.svg"
								alt="Github_White_Logo"
								url="https://github.com/"
							/>
						{/if}
						<Icon src="/images/GitLab_Logo.svg" alt="GitLab_Logo" url="https://about.gitlab.com/" />
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Collaboration Tool</h4>
					<div class="flex flex-wrap gap-10">
						<Icon
							src="/images/Jira_Logo.svg"
							alt="Jira_Logo"
							url="https://www.atlassian.com/ko/software/jira"
						/>
						<Icon
							src="/images/Figma_Logo.svg"
							alt="Figma_Logo"
							url="https://www.figma.com/ko-kr/"
						/>
						<Icon
							src="/images/Slack_Logo.svg"
							alt="Slack_Logo"
							url="https://slack.com/intl/ko-kr"
						/>
					</div>
				</div>

				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Interested</h4>
					<div class="flex flex-wrap gap-10">
						<Icon
							src="/images/ComposeMultiPlatform_Logo.svg"
							alt="ComposeMultiPlatform_Logo"
							url="https://www.jetbrains.com/ko-kr/compose-multiplatform/"
						/>
						{#if themeStore.getTheme() == 'light'}
							<Icon src="/images/Quarkus_Logo.svg" alt="Quarkus_Logo" url="https://quarkus.io/" />
						{:else}
							<Icon
								src="/images/Quarkus_Reverse_Logo.svg"
								alt="Quarkus_Reverse_Logo"
								url="https://quarkus.io/"
							/>
						{/if}
						<Icon
							src="/images/GraalVM_Logo.svg"
							alt="GraalVM_Logo"
							url="https://www.graalvm.org/"
						/>
						<Icon
							src="/images/PostgresSQL_Logo.svg"
							alt="PostgresSQL_Logo"
							url="https://www.postgresql.org/"
						/>
						<Icon src="/images/Svelte_Logo.svg" alt="Svelte_Logo" url="https://svelte.dev/" />
						{#if themeStore.getTheme() == 'light'}
							<Icon
								src="/images/Rust_Logo.svg"
								alt="Rust_Logo"
								dropShadowColor={{ r: 150, g: 150, b: 150 }}
								url="https://rust-lang.org/"
							/>
						{:else}
							<Icon
								src="/images/Rust_Logo.svg"
								alt="Rust_Logo"
								dropShadowColor={{ r: 255, g: 255, b: 255 }}
								url="https://rust-lang.org/"
							/>
						{/if}
						<Icon src="/images/Tauri_Logo.svg" alt="Tauri_Logo" url="https://v2.tauri.app/ko/" />
						<Icon src="/images/Bun_Logo.svg" alt="Bun_Logo" url="https://bun.com/" />
						<Icon src="/images/Docker_Logo.svg" alt="Docker_Logo" url="https://www.docker.com/" />
						<Icon src="/images/Zig_Logo.svg" alt="Zig_Logo" url="https://ziglang.org/ko-KR/" />
						<Icon src="/images/Servo_Logo.svg" alt="Servo_Logo" url="https://servo.org/" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
