import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUsPage(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>Contact Us</h1>
				{/* TODO: Migrate full contact-us HTML content into components */}
			</main>
			<Footer />
		</>
	);
}


