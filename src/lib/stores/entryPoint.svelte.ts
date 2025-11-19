type EntryPoint = 'mobile' | 'backend' | null;

class EntryPointStore {
	entryPoint = $state<EntryPoint>(null);

	constructor() {}
}

export const entryPointStore = new EntryPointStore();
