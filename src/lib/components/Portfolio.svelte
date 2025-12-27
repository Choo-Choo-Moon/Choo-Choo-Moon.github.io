<script lang="ts">
	import { onMount } from 'svelte';
	import Navigation from './common/Navigation.svelte';
	import type { Menu } from '../../types';
	import HelloSection from './sections/HelloSection.svelte';
	import AboutSection from './sections/AboutSection.svelte';
	import ProjectsSection from './sections/ProjectsSection.svelte';
	import ContactSection from './sections/ContactSection.svelte';
	import MoveToTop from './common/MoveToTop.svelte';
	import Footer from './common/Footer.svelte';

	let menus: Array<Menu> = [
		{
			id: 1,
			label: 'Hello',
			sectionId: 'hello'
		},
		{
			id: 2,
			label: 'About',
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
	let observerEnabled = $state(false);

	const onSelected = (menu: Menu) => {
		selected = menu;
		observerEnabled = false;
		const section = document.getElementById(menu.sectionId);
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	onMount(() => {
		const enableObserver = () => {
			observerEnabled = true;
		};

		window.addEventListener('wheel', enableObserver, { passive: true });
		window.addEventListener('touchstart', enableObserver, { passive: true });
		window.addEventListener('touchmove', enableObserver, { passive: true });

		const observer = new IntersectionObserver(
			(entries) => {
				if (!observerEnabled) return;

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
				threshold: 0.1,
				rootMargin: '-80px 0px -30% 0px'
			}
		);

		menus.forEach((menu) => {
			const section = document.getElementById(menu.sectionId);
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			window.removeEventListener('wheel', enableObserver);
			window.removeEventListener('touchstart', enableObserver);
			window.removeEventListener('touchmove', enableObserver);
			observer.disconnect();
		};
	});
</script>

<Navigation {selected} {menus} {onSelected} />
<HelloSection />
<AboutSection />
<ProjectsSection />
<ContactSection />
<MoveToTop topMenu={menus[0]} onclick={onSelected} />
<Footer />
