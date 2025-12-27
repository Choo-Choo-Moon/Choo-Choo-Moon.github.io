type EntryPoint = 'mobile' | 'backend' | 'frontend' | null;

class EntryPointStore {
	entryPoint = $state<EntryPoint>(null);

	constructor() {}
}

export const entryPointStore = new EntryPointStore();
