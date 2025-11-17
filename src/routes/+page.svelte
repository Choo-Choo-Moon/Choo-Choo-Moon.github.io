<script lang="ts">
	import { onMount } from 'svelte';
	import Navigation from './commmon/Navigation.svelte';
	import type { Menu } from '../types';
	import HelloSection from '$lib/components/sections/HelloSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';

	let menus: Array<Menu> = [
		{
			id: 1,
			label: 'Hello',
			sectionId: 'hello'
		},
		{
			id: 2,
			label: 'About Me',
			sectionId: 'about'
		},
		{
			id: 3,
			label: 'Projects',
			sectionId: 'projects'
		},
		{
			id: 4,
			label: 'Contact',
			sectionId: 'contact'
		}
	];
	let selected = $state(menus[0]);
	const onSelected = (menu: Menu) => {
		selected = menu;
		const section = document.getElementById(menu.sectionId);
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	// 스크롤 시 자동으로 메뉴 선택
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id;
						const menu = menus.find((m) => m.sectionId === sectionId);
						if (menu) {
							selected = menu;
						}
					}
				});
			},
			{
				threshold: 0.5, // 섹션이 50% 보일 때
				rootMargin: '-80px 0px -20% 0px' // 네비게이션 높이 고려
			}
		);

		// 모든 섹션 관찰
		menus.forEach((menu) => {
			const section = document.getElementById(menu.sectionId);
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<Navigation {selected} {menus} {onSelected} />
<HelloSection />
<AboutSection />
<ProjectsSection />
<ContactSection />
