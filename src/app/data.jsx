"use server";
const GetHead = async (name, category) => {
	const res = await fetch(
		`q=${name}&category=${category}&language=en&apikey=${process.env.API_KEY}&sorBy=publishedAt`
	);
	const FakeData = await res.json();
	const data = FakeData.articles;

	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
		</div>
	);
};

export default GetHead;
