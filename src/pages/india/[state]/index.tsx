import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IndiaStateIndex(): React.ReactElement {
	const { query } = useRouter();
	const state = String(query.state || "state");
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>{state.toUpperCase()} - India</h1>
				<ul>
					<li><Link href={`/${`india`}/${state}/destination-1`}>Destination 1</Link></li>
					<li><Link href={`/${`india`}/${state}/destination-2`}>Destination 2</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}



