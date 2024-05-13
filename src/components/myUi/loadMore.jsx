"use client";

import { useEffect, useState } from "react";
import { CardComponent } from "./card";
export default function LoadMore({ load }) {
	const [miniLoad, setMiniLoad] = useState([]);

	useEffect(() => {
		const data = async () => {
			try {
				const res = await fetch(`http://localhost:3000/api/getall?q=${load}`, {
					cache: "no-store",
				});

				if (!res.ok) {
					throw new Error("Couldn't load more");
				}
				const { data } = await res.json();
				const results = data.articles;
				setMiniLoad(results);
			} catch (error) {
				console.log("its  a messed up JSON error: ", error.message);
			}
		};
		data();
	}, [load]);
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
			{miniLoad.map(
				(item) =>
					item.urlToImage && (
						<CardComponent
							key={item.title}
							image={item.urlToImage}
							link={item.url}
							header={item.title}
							alt={item.title}
							description={item.description}
						/>
					)
			)}
		</div>
	);
}
