import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>Privacy Policy</h1>
				{/* TODO: Migrate full privacy HTML content into components */}
			</main>
			<Footer />
		</>
	);
}


