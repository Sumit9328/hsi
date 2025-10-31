"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials(): React.ReactElement {
	return (
		<section className="testimonials">
			<div className="section-title text-center">
				<h2>Your Next Holiday, Reviewed & Approved - HOliday Season</h2>
				<div className="section-icon section-icon-white">
					<i className="flaticon-diamond"></i>
				</div>
			</div>
			<div id="testimonial_094" className="carousel slide testimonial_094_indicators thumb_scroll_x swipe_x ps_easeOutSine" data-bs-ride="carousel" data-bs-touch="true">
				<ol className="carousel-indicators">
					{[1,2,3,4,5].map((n, idx) => (
						<li key={idx} data-bs-target="#testimonial_094" data-bs-slide-to={idx} className={idx === 0 ? "active" : undefined} aria-current={idx===0?"true":undefined} aria-label={`Slide ${idx+1}`}>
							<Image src={`/images/testemonial${idx+1}.jpg`} alt={`Testimonial ${idx+1}`} width={80} height={80} className="h-auto" />
						</li>
					))}
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<div className="testimonial_094_slide" data-interval="1000">
							<p>Thankyou so much Holiday Season . Our Ooty + Mysore+ Coorg trip was amazing . Special thanks to Prithvi for helping and guiding from starting till end . Hotel 10/10 , amazing food & stay Driver 10/10 very friendly , professional , trustworthy and nice , covered all the sightseeing places by his own . Will definitely get in touch for the future bookings . Highly recommend Holiday Season India...</p>
							<div className="deal-rating">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star-o"></span>
								<span className="fa fa-star-o"></span>
							</div>
							<h5><a href="https://g.page/r/CXhRDl3fOW23EAE/review">Ragini Goel, Gurgaon</a></h5>
						</div>
					</div>
					<div className="carousel-item">
						<div className="testimonial_094_slide">
							<p>We recently went on a Thailand trip with a group of 20 adults, booked through Holiday Season India by Mr. Avinash. The tour covered 2 nights in Bangkok and 2 nights in Pattaya, and it was an amazing and hassle-free experience from start to finish.</p>
							<div className="deal-rating">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star-o"></span>
								<span className="fa fa-star-o"></span>
							</div>
							<h5><a href="https://www.tripadvisor.in/Attraction_Review-g297602-d5783570-Reviews-Holiday_Season_India-National_Capital_Territory_of_Delhi.html">Punit Arora</a></h5>
						</div>
					</div>
					<div className="carousel-item">
						<div className="testimonial_094_slide">
							<p>I booked my Europe 2025 holiday during the festive season in India, and it turned out to be the best decision! The itinerary was perfectly crafted — from the snowy charm of Switzerland to the romantic streets of Paris, every detail was taken care of.</p>
							<div className="deal-rating">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star-o"></span>
								<span className="fa fa-star-o"></span>
							</div>
							<h5><a href="https://www.mouthshut.com/holidayseasonindia/reviews">Chauhan, Bangalore</a></h5>
						</div>
					</div>
					<div className="carousel-item">
						<div className="testimonial_094_slide">
							<p>Holiday season in India just got more exciting with my Europe 2025 trip booked! The package covers all the must-visit cities like Rome, Paris, and Vienna, plus some hidden gems I never thought of. Everything is well-planned, affordable, and stress-free. If you&apos;re thinking about Europe next year, do it now — you won&apos;t regret it!</p>
							<div className="deal-rating">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star-o"></span>
								<span className="fa fa-star-o"></span>
							</div>
							<h5><a href="#">Vivek Sharma</a></h5>
						</div>
					</div>
					<div className="carousel-item">
						<div className="testimonial_094_slide">
							<p>I planned my dream Dubai holiday with family for 2025 right in the middle of the Indian festive season — best timing ever! Amazing deals, professional service, and a detailed itinerary that makes me want to pack my bags today. This is going to be a once-in-a-lifetime experience!</p>
							<div className="deal-rating">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star-o"></span>
								<span className="fa fa-star-o"></span>
							</div>
							<h5><a href="#">Moh. Shahnawaz</a></h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


