"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export function InputField({ onSubmit }) {
	const [searchValue, setSearchValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(searchValue);
	};
	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};
	return (
		<form
			className="flex w-full max-w-sm items-center space-x-2 p-2 rounded-md"
			onSubmit={handleSubmit}
		>
			<Input
				type="text"
				placeholder="search"
				onChange={handleChange}
				value={searchValue}
			/>
			<Button type="submit">Search</Button>
		</form>
	);
}
