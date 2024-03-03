import axios from "axios";
import { Image } from "./types";

const fetchImages = async (query: string, page: number) => {
	console.log("calling");
	try {
		const { data } = await axios.get(
			`${
				process.env.REACT_APP_API_URL
			}?query=${query}&page=${page}&per_page=${20}&client_id=${
				process.env.REACT_APP_API_KEY
			}`
		);
		const mappedData: Image[] = data.results.map(
			(info: { id: string; urls: any }) => ({
				id: info.id,
				url: info.urls.small,
			})
		);

		return mappedData;
	} catch (error) {
		console.log(error);
	}
};

export { fetchImages };
