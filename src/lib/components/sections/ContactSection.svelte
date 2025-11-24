<script>
	import { themeStore } from '$lib/stores/Theme.svelte';
	import Icon from '../common/Icon.svelte';
</script>

<section id="contact" class="flex min-h-screen items-center justify-center">
	<div class="text-center">
		<h1 class="mb-8 text-6xl font-bold">Contact</h1>
		<div class="flex flex-col gap-3">
			<div class="flex items-center gap-3">
				<Icon
					src="/images/icon/Email_Icon_Light.svg"
					darkSrc="/images/icon/Email_Icon_Dark.svg"
					alt="email icon"
					size="size-10"
				/>
				<p class="text-2xl font-bold">moon3482@naver.com</p>
			</div>
			<div class="flex items-center gap-3">
				<Icon
					src="/images/icon/Kakao_Icon_Light.svg"
					darkSrc="/images/icon/Kakao_Icon_Dark.svg"
					alt="kakaotalk icon"
					size="size-10"
				/>
				<a href="https://open.kakao.com/o/sZlenibe" target="_blank"
					><p class="text-2xl font-bold">Kakaotalk OpenChat</p></a
				>
			</div>
			<div class="flex items-center gap-3">
				<Icon src="/images/logo/LinkedIn_Logo.svg" alt="linkedin icon" size="size-10" />
				<a href="https://www.linkedin.com/in/chang-kyu-moon-2449b0227/" target="_blank"
					><p class="text-2xl font-bold">LinkedIn Profile</p></a
				>
			</div>
			<div class="flex items-center gap-3">
				<Icon
					src="/images/logo/Github_Logo.svg"
					darkSrc="/images/logo/Github_White_Logo.svg"
					alt="github icon"
					size="size-10"
				/>
				<a href="https://www.github.com/choo-choo-moon" target="_blank"
					><p class="text-2xl font-bold">Github Profile</p></a
				>
			</div>
		</div>
	</div>
</section>
