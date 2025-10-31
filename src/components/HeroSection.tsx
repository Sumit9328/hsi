"use client";

import React from "react";

export default function HeroSection(): React.ReactElement {
	return (
		<section className="swiper-banner">
			<div className="slider">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide" style={{ backgroundImage: "url(/images/slider/slider7.jpg)" }}>
							<div className="swiper-content" data-animation="animated fadeInDown">
								<h2>EXPLORE FAVORITE DESTINATIONS OF THE WORLD !</h2>
								<h1>Plan Your Travel Now!</h1>
								<a href="/tour-detail.html" className="btn-blue btn-red">View Our Tour</a>
							</div>
						</div>
						<div className="swiper-slide" style={{ backgroundImage: "url(/images/slider/slider2.jpg)" }}>
							<div className="swiper-content" data-animation="animated fadeInRight">
								<h2>Cost friendly packages on your way</h2>
								<h1>We offer you better deals</h1>
								<a href="/tour-detail.html" className="btn-blue btn-red">View Our Tour</a>
							</div>
						</div>
						<div className="swiper-slide" style={{ backgroundImage: "url(/images/slider/slider3.jpg)" }}>
							<div className="swiper-content" data-animation="animated fadeInUp">
								<h2>exciting schemes just a click away</h2>
								<h1>Amazing Santorini 7 days tour</h1>
								<a href="/tour-detail.html" className="btn-blue btn-red">View Our Tour</a>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
				<div className="overlay"></div>
			</div>
		</section>
	);
}



