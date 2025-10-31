import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function IndiaDestinationPage(): React.ReactElement {
	const { query } = useRouter();
	const state = String(query.state || "state");
	const destination = String(query.destination || "destination");
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>{state.toUpperCase()} - {destination.toUpperCase()} (India)</h1>
				{/* TODO: Migrate destination content */}
			</main>
			<Footer />
		</>
	);
}



