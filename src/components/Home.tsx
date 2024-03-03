import React, { useState } from "react";
import Search from "./Search";
import Images from "./Images";

const Home = () => {
	const [search, setSearch] = useState<string>("");
	return (
		<div>
			<Search search={search} setSearch={setSearch} />
			<Images search={search} />
		</div>
	);
};

export default Home;
