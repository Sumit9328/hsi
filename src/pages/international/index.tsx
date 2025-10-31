import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InternationalIndex(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>International Travel</h1>
				<ul>
					<li><Link href="/international/uk">United Kingdom</Link></li>
					<li><Link href="/international/france">France</Link></li>
					<li><Link href="/international/italy">Italy</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}



