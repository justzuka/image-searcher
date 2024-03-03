import React, { useEffect, useState } from "react";
import { getHistory } from "../history";
import "./History.css";
import Images from "./Images";

const History = () => {
	const [history, setHistory] = useState<string[]>();
	const [search, setSearch] = useState<string>("");
	useEffect(() => {
		setHistory(getHistory());
	}, []);
	return (
		<div className="history-container">
			<div className="history-text-container">
				{history?.map((s, index) => (
					<button
						className="history-button"
						onClick={() => setSearch(s)}
						key={index}
					>
						{s}
					</button>
				))}
			</div>
			<Images search={search} />
		</div>
	);
};

export default History;
