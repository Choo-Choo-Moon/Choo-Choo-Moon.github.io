import { type Project } from '../../types';

// 안전한 JSON 파싱 함수
function safeJsonParse<T>(jsonString: string | undefined, fallback: T): T {
	if (!jsonString || jsonString.trim() === '') {
		return fallback;
	}
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		console.warn('JSON parse error:', error);
		return fallback;
	}
}

class ProjectStore {
	productionProjects = $state<Project[]>(
		safeJsonParse(import.meta.env.VITE_PRODUCTION_PROJECTS, [])
	);
	sideProjects = $state<Project[]>(safeJsonParse(import.meta.env.VITE_SIDE_PROJECTS, []));
	toyProjects = $state<Project[]>(safeJsonParse(import.meta.env.VITE_TOY_PROJECTS, []));

	projects = $derived([...this.productionProjects, ...this.sideProjects, ...this.toyProjects]);
}

export const projectStore = new ProjectStore();
