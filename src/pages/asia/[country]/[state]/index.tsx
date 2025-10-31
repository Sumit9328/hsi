import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AsiaStateIndex(): React.ReactElement {
	const { query } = useRouter();
	const country = String(query.country || "country");
	const state = String(query.state || "state");
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>{country.toUpperCase()} - {state.toUpperCase()} (Asia)</h1>
				<ul>
					<li><Link href={`/${`asia`}/${country}/${state}/destination-1`}>Destination 1</Link></li>
					<li><Link href={`/${`asia`}/${country}/${state}/destination-2`}>Destination 2</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}



