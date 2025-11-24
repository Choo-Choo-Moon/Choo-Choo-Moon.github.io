export const calculateDuration = (startDateString: string, endDateString: string) => {
	let startDate: Date = new Date(startDateString);
	let endDate: Date = new Date(endDateString);

	const startMonth: number = startDate.getMonth();
	const startYear: number = startDate.getFullYear();
	const endMonth: number = endDate.getMonth();
	const endYear: number = endDate.getFullYear();

	let monthsDifference = (endYear - startYear) * 12 + (endMonth - startMonth);

	if (monthsDifference < 0) {
		monthsDifference = Math.abs(monthsDifference);
		[startDate, endDate] = [endDate, startDate];
	}

	const years: number = Math.floor(monthsDifference / 12);
	const months: number = monthsDifference % 12;

	let result = '';
	if (years > 0) {
		result += `${years}년`;
	}
	if (months > 0) {
		result += ` ${months}개월`;
	}

	return result.trim();
};
