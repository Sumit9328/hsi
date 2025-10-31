import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function IndiaIndex(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>India Travel</h1>
				<ul>
					<li><Link href="/india/uttarakhand">Uttarakhand</Link></li>
					<li><Link href="/india/kerala">Kerala</Link></li>
					<li><Link href="/india/rajasthan">Rajasthan</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}


