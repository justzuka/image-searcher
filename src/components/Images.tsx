import React, { useState, useEffect } from "react";
import { Image } from "../types";
import { useQuery } from "react-query";
import { fetchImages } from "../api-calls";
import "./Images.css";
import useCustomEffect from "../Utility/UseCustomEffect";

const Images = ({ search }: { search: string }) => {
	const [pageNumber, setPageNumber] = useState<number>(1);
	const debounce = (func: any, delay: any) => {
		let timer: any;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(func, delay);
		};
	};

	useEffect(() => {
		console.log(pageNumber);
	}, [pageNumber]);

	useEffect(() => {
		setPageNumber(1);
	}, [search]);
	const { data: images, isLoading } = useQuery(
		["imageSearch", search, pageNumber],
		() => fetchImages(search, pageNumber),
		{
			staleTime: 50000,
			keepPreviousData: true,
		}
	);
	const handleScroll = () => {
		console.log(
			window.innerHeight + window.innerHeight + window.scrollY,
			document.documentElement.offsetHeight + 700
		);
		if (
			window.innerHeight + window.innerHeight + window.scrollY >=
			document.documentElement.offsetHeight + 700
		) {
			console.log("reach");
			setPageNumber((prevPageNumber) => prevPageNumber + 1);
		}
	};

	useEffect(() => {
		const debouncedHandleScroll = debounce(handleScroll, 200);
		window.addEventListener("scroll", debouncedHandleScroll);
		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, []);

	if (isLoading) {
		return <div>Loading..</div>;
	}

	return (
		<div className="images-container">
			{images?.map((image: Image) => (
				<img
					key={image.id}
					src={image.url}
					alt={`Image ${image.id}`}
					style={{ width: "100px", height: "auto" }}
				/>
			))}
		</div>
	);
};

export default Images;
