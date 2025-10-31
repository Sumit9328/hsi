import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>About Us</h1>
				{/* TODO: Migrate full about-us HTML content into components for pixel parity */}
			</main>
			<Footer />
		</>
	);
}


