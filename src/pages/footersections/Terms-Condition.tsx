import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsConditionPage(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>Terms & Conditions</h1>
				{/* TODO: Migrate full terms HTML content into components */}
			</main>
			<Footer />
		</>
	);
}


