import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

class ThemeStore {
	theme = $state<Theme>('light');

	constructor() {
		if (browser) {
			// Load theme from localStorage or system preference
			const savedTheme = localStorage.getItem('theme') as Theme | null;
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

			this.theme = savedTheme || (prefersDark ? 'dark' : 'light');
			this.applyTheme();

			// Listen for system theme changes
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
				if (!localStorage.getItem('theme')) {
					this.theme = e.matches ? 'dark' : 'light';
					this.applyTheme();
				}
			});
		}
	}

	toggle() {
		this.theme = this.theme === 'light' ? 'dark' : 'light';
		this.applyTheme();
		if (browser) {
			localStorage.setItem('theme', this.theme);
		}
	}

	getTheme() {
		return this.theme;
	}

	setTheme(theme: Theme) {
		this.theme = theme;
		this.applyTheme();
		if (browser) {
			localStorage.setItem('theme', theme);
		}
	}

	private applyTheme() {
		if (browser) {
			const root = document.documentElement;
			if (this.theme === 'dark') {
				root.classList.add('dark');
			} else {
				root.classList.remove('dark');
			}
		}
	}
}

export const themeStore = new ThemeStore();
