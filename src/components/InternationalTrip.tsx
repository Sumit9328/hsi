"use client";

import React from "react";
import Image from "next/image";

export default function InternationalTrip(): React.ReactElement {
	return (
		<section className="top-destinations">
			<div className="container">
				<div className="section-title text-center">
					<h2>International Trip</h2>
					<div className="section-icon">
						<i className="flaticon-diamond"></i>
					</div>
					<p>
						A journey beyond borders to explore new cultures, cuisines, and landscapes, creating memories that last a lifetime..
					</p>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-4">
						<div className="top-destination-item">
							<Image src="/images/deals9.jpg" alt="European Panorama" width={400} height={300} className="img-responsive w-full h-auto" />
							<div className="overlay">
								<h2><a href="/tour-detail.html">European Panorama</a></h2>
								<p>Cheapest Foreign Tour Packages from India</p>
							</div>
						</div>
						<div className="top-destination-item">
							<Image src="/images/deals10.jpg" alt="Central Europe Charm" width={400} height={300} className="img-responsive w-full h-auto" />
							<div className="overlay">
								<h2><a href="/tour-detail.html">Central Europe Charm</a></h2>
								<p>International Tour Packages From India</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="top-destination-item destination-margin">
							<Image src="/images/deal5.jpg" alt="Popular Asia Tours" width={400} height={600} className="img-responsive w-full h-auto" />
							<div className="overlay overlay-full">
								<h2><a href="/tour-detail.html">Popular Asia Tours</a></h2>
								<p>World Tour Packages From India</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="top-destination-item">
							<Image src="/images/deals11.jpg" alt="Eastern Europe Tour" width={400} height={300} className="img-responsive w-full h-auto" />
							<div className="overlay">
								<h2><a href="/tour-detail.html">Eastern Europe Tour</a></h2>
								<p>View All Packages</p>
							</div>
						</div>
						<div className="top-destination-item">
							<Image src="/images/deal4.jpg" alt="Western Europe Wonders" width={400} height={300} className="img-responsive w-full h-auto" />
							<div className="overlay">
								<h2><a href="/tour-detail.html">Western Europe Wonders</a></h2>
								<p>View All Packages</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


