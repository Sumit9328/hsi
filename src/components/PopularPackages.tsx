"use client";

import React from "react";
import Image from "next/image";

export default function PopularPackages(): React.ReactElement {
	return (
		<section className="popular-packages">
			<div className="container">
				<div className="section-title text-center">
					<h2>India Travel Packages</h2>
					<div className="section-icon">
						<i className="flaticon-diamond"></i>
					</div>
					<p>
						<h3> Explore Incredible India with Our Tailored Travel Packages</h3>
						Discover the beauty, diversity, and culture of India with our handpicked travel packages, designed to offer unforgettable experiences across every corner of this incredible country. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from the royal palaces of Rajasthan to the serene backwaters of Kerala – India has something magical for every traveler.
					</p>
				</div>
				<div className="row package-slider slider-button">
					{[
						{ img: "/images/package1.jpg", title: "North India Tour", days: "05 to 18 days", desc: "Explore All Day-Wise Itineraries - EMI Available on Every Package!" },
						{ img: "/images/package2.jpg", title: "South India Tour", days: "04 to 15 days", desc: "Unmissable South India Deals - Book Today & Save Big on Easy Monthly EMIs!" },
						{ img: "/images/package3.jpg", title: "West India Tours", days: "03 to 14 days", desc: "Flash Sale on West India Packages - Limited Slots Available on EMIs!" },
						{ img: "/images/package4.JPG", title: "North East- Sikkim", days: "04 to 12 days", desc: "Travel More, Pay Less - Your Dream Vacation, Now on Sale! Book Now" },
						{ img: "/images/package5.JPG", title: "Andaman Awaits", days: "04 to 10 days", desc: "Unbeatable Deals on Andaman Packages - Limited Time Only!" },
						{ img: "/images/package6.JPG", title: "Lakshadweep", days: "03 to 08 days", desc: "Book Now Lakshadweep Getaway - Pay in Easy Installments" },
					].map((p, idx) => (
						<div className="col-lg-4" key={idx}>
							<div className="package-item">
								<div className="package-image">
									<Image src={p.img} alt={p.title} width={400} height={300} className="w-full h-auto" />
									<div className="package-price">
										<div className="deal-rating">
											<span className="fa fa-star checked"></span>
											<span className="fa fa-star checked"></span>
											<span className="fa fa-star checked"></span>
											<span className="fa fa-star-o"></span>
											<span className="fa fa-star-o"></span>
										</div>
										<p><span>Hot</span> Selling</p>
									</div>
								</div>
								<div className="package-content">
									<h3>{p.title}</h3>
									<p className="package-days"><i className="flaticon-time"></i> {p.days}</p>
									<p>{p.desc}</p>
									<div className="package-info">
										<a href="/tour-detail.html" className="btn-blue btn-red">View All Packages</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


