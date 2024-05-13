import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { InputField } from "./search";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Nav({ updatedData }) {
	const getData = (data) => {
		updatedData(data);
	};

	return (
		<nav className="flex flex-row justify-between sticky top-0 bg-[#f4f4f4] text-primary w-full p-4 ">
			<header>
				<Link href={"/"}>
					<h1 className="font-bold text-2xl">News.co</h1>
				</Link>
			</header>

			<nav className="hidden lg:flex flex-row space-x-4 items-center">
				<Link href="/">
					<p>Home</p>
				</Link>
				<Link href="/">
					<p>About</p>
				</Link>
				<Link href="/">
					<p>Contact</p>
				</Link>
				<Link href="/">
					<p>Login</p>
				</Link>
				<Link href="/">
					<p>Register</p>
				</Link>
			</nav>

			<div className="hidden lg:flex flex-row items-center">
				<InputField onSubmit={getData} />
			</div>
			<div className="lg:hidden  block ">
				<Sheet>
					<SheetTrigger asChild>
						<Button>
							<HamburgerMenuIcon />
						</Button>
					</SheetTrigger>
					<SheetContent side="top">
						<SheetHeader>
							<SheetTitle className=" font-bold">Menu</SheetTitle>
						</SheetHeader>
						<nav className="flex flex-col items-center text-left p-4 font-semibold">
							<Link href="/" className=" p-2 w-full my-1">
								<p>Home</p>
							</Link>
							<Link href="/" className=" p-2 w-full my-1">
								<p>About</p>
							</Link>
							<Link href="/" className=" p-2 w-full my-1">
								<p>Contact</p>
							</Link>
							<Link href="/" className=" p-2 w-full my-1">
								<p>Login</p>
							</Link>
							<Link href="/" className=" p-2 w-full my-1">
								<p>Register</p>
							</Link>
						</nav>
						<div className="flex flex-col-reverse">
							<InputField onSubmit={getData} />
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
