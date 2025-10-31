import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AsiaCountryIndex(): React.ReactElement {
	const { query } = useRouter();
	const country = String(query.country || "country");
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>{country.toUpperCase()} - Asia</h1>
				<ul>
					<li><Link href={`/${`asia`}/${country}/state-1`}>State 1</Link></li>
					<li><Link href={`/${`asia`}/${country}/state-2`}>State 2</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}



