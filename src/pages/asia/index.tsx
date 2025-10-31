import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AsiaIndex(): React.ReactElement {
	return (
		<>
			<Header />
			<Navbar />
			<main className="container">
				<h1>Asia Travel</h1>
				<ul>
					<li><Link href="/asia/india">India</Link></li>
					<li><Link href="/asia/nepal">Nepal</Link></li>
					<li><Link href="/asia/bhutan">Bhutan</Link></li>
				</ul>
			</main>
			<Footer />
		</>
	);
}



