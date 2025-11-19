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
	title: string;
	contribute?: Array<string>;
	description: string;
	thumbnail: string;
	images: Array<string>;
};
