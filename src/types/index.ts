export type Menu = {
	id: number;
	label: string;
	sectionId: string;
};

export type Career = {
	companyName: string;
	role: string;
	joining: string;
	termination: string;
	companyHomePageUrl: string;
};

export type Project = {
	projectType: ProjcetType;
	role: Array<Role>;
	title: string;
	description: string;
	skills: Array<string>;
	thumbnail?: string;
	images?: Array<string>;
	contribute?: Array<Contributor>;
	depoloy: Array<Depoloy>;
};

export enum ProjcetType {
	Side,
	Toy,
	Production
}

export enum Role {
	Mobile,
	Backend,
	Frontend,
	Any
}

export type Contributor = {
	name: string;
	aka?: string;
	thumbnail?: string;
	url?: string;
};

export enum Depoloy {
	Android,
	iOS,
	AWS,
	Azure,
	GCP,
	vultr,
	OnPremise
}
