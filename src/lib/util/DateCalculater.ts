export const calculateDuration = (startDateString: string, endDateString: string) => {
	// "2021.11" → "2021-11-01" 형식으로 변환하여 파이어폭스 호환성 확보
	const parseDate = (dateStr: string): Date => {
		if (dateStr.includes('.')) {
			const [year, month] = dateStr.split('.');
			return new Date(parseInt(year), parseInt(month) - 1, 1);
		}
		return new Date(dateStr);
	};

	let startDate: Date = parseDate(startDateString);
	let endDate: Date = parseDate(endDateString);

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
