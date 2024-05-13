"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Loading from "../loading";
export default function Hero({ messageResponse }) {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const res = await fetch(
					`http://localhost:3000/api/news?q=${messageResponse}`
				);
				if (!res.ok) {
					throw new Error("failed to fetch API response", res.status);
				}
				const { data } = await res.json();
				const result = data.articles[0];
				setItem(result);
			} catch (error) {
				console.log(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [messageResponse]);
	return (
		<div
			className="space-y-3
        flex lg:flex-row flex-col-reverse  lg:text-left text-balance"
		>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className="lg:w-2/5 flex flex-col space-y-3 p-4 justify-center">
						<h1 className="lg:text-5xl font-bold text-2xl">{item.title}</h1>
						<p className="lg:max-w-md text-balance">{item.description}</p>
						{item.url && (
							<Link
								href={item.url}
								className="flex flex-row items-center space-x-1 hover:text-blue-500 transition-all p-2"
							>
								<p className="font-semibold text-blue-400 animate-pulse transition-all">
									Read more
								</p>
								<span>
									<ArrowRightIcon />
								</span>
							</Link>
						)}
					</div>
					<div className="lg:w-3/5 p-4">
						{item.urlToImage && (
							<Image
								src={item.urlToImage}
								width={700}
								height={700}
								className=" w-full max-w-4xl"
								alt={item.title || "an image"}
								priority={true}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
}
