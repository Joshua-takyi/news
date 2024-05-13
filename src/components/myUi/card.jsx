import * as React from "react";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
export function CardComponent({ image, alt, header, description, link }) {
	return (
		<Card className="max-w-sm">
			<CardHeader>
				<Image src={image} alt={alt} width={400} height={400} />
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<h1 className="font-bold text-2xl">{header}</h1>
					<p>{description}</p>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Link href={link}>
					<p>Read more</p>
				</Link>
			</CardFooter>
		</Card>
	);
}
