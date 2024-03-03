function saveToHistory(value: string) {
	let existing: string[] = localStorage.getItem("history")
		? JSON.parse(localStorage.getItem("history")!)
		: [];

	existing.push(value);

	localStorage.setItem("history", JSON.stringify(existing));
}

function getHistory(): string[] {
	const storedHistory = localStorage.getItem("history");
	return storedHistory ? JSON.parse(storedHistory) : [];
}

export { saveToHistory, getHistory };
