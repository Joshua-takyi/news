import { NextResponse } from "next/server";
export async function GET(req) {
	try {
		const q = req.nextUrl.searchParams.get("q");

		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${q}&apikey=${process.env.API_KEY}&language=en`
		);

		if (!res.ok) {
			return NextResponse.json(
				{
					error: res.status,
					message: "response fetch failed",
				},
				{ status: res.status }
			);
		}
		const data = await res.json();
		return NextResponse.json({
			data,
			message: "successful response",
		});
	} catch (error) {
		return NextResponse.json({
			error: error.message,
			message: "error response",
		});
	}
}
