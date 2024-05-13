export default function Container({ children }) {
	return (
		<div className="container mx-auto lg:px-10 md:px-12 px-5 py-4">
			{children}
		</div>
	);
}
