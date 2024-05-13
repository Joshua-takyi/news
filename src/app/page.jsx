"use client";
import Nav from "@/components/myUi/nav";
import { useState } from "react";
import Hero from "./heroSection/hero";
import LoadMore from "@/components/myUi/loadMore";

export default function Home() {
	const [message, setMessage] = useState("health");

	return (
		<div>
			<Nav updatedData={setMessage} />
			<Hero messageResponse={message} />

			<LoadMore load={message} />
		</div>
	);
}
