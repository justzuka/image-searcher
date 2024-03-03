import React from "react";
import { saveToHistory } from "../history";

const Search = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div>
			<input
				type="text"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					if (e.target.value !== "") saveToHistory(e.target.value);
				}}
				placeholder="Search for images..."
			/>
		</div>
	);
};

export default Search;
