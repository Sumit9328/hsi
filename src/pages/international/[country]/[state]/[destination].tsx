import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function DestinationPage(): React.ReactElement {
	const { query } = useRouter();
	const country = String(query.country || "country");
	const state = String(query.state || "state");
	const destination = String(query.destination || "destination");
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>{country.toUpperCase()} - {state.toUpperCase()} - {destination.toUpperCase()}</h1>
				{/* TODO: Migrate full destination content */}
			</main>
			<Footer />
		</>
	);
}



