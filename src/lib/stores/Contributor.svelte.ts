class ContributorStore {
	contributers = $state({
		jino: {
			name: 'jino',
			aka: 'jino',
			thumbnail: '/images/logo/Jino_Logo.png',
			url: 'https://mrjino.github.io/portfolio'
		},
		pyeon: {
			name: 'pyeon'
		},
		jeaHwan: {
			name: 'Jea Hwan',
			thumbnail: 'https://avatars.githubusercontent.com/u/102033760?v=4',
			url: 'https://github.com/rekindle402'
		},
		jihoon: {
			name: 'Ji Hoon',
			thumbnail: 'https://avatars.githubusercontent.com/u/207795284?v=4',
			url: 'https://github.com/Kim-sohee'
		},
		soHee: {
			name: 'So Hee',
			thumbnail: 'https://avatars.githubusercontent.com/u/53697280?v=4',
			url: 'https://github.com/Kim-sohee'
		},
		hyeowon: {
			name: 'Hyeo Won',
			thumbnail: 'https://avatars.githubusercontent.com/u/63222635?v=4',
			url: 'https://github.com/hye000ne'
		}
	});
}

export const contributorStore = new ContributorStore();
