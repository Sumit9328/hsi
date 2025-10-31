"use client";

import React from "react";
import Image from "next/image";

export default function TrustedPartners(): React.ReactElement {
	const logos = [
		"/images/partner1.png","/images/partner2.png","/images/partner3.png","/images/partner4.png","/images/partner5.png","/images/partner6.png",
		"/images/partner1.png","/images/partner2.png","/images/partner3.png","/images/partner4.png","/images/partner5.png","/images/partner6.png",
		"/images/partners7.png","/images/partners8.png","/images/partners9.png","/images/partners10.png","/images/partners11.png","/images/partners12.png","/images/partners13.png","/images/partners14.png","/images/partners15.png"
	];
	return (
		<section className="trusted-partners">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="partners-title">
							<h3>Our <span>Partners</span></h3>
						</div>
					</div>
					<div className="col-lg-9 col-md-8">
						<ul className="partners-logo partners-slider">
							{logos.map((src, idx) => (
								<li key={idx}><a href="#"><Image src={src} alt={`Partner ${idx+1}`} width={150} height={60} className="h-auto" /></a></li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}


