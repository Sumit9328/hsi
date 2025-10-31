"use client";

import React from "react";
import Image from "next/image";

export default function Footer(): React.ReactElement {
	return (
		<footer>
			<div className="footer-upper">
				<div className="container">
					<div className="newsletter text-center">
						<div className="section-title section-title-white text-center">
							<h2>Company Information</h2>
							<div className="section-icon section-icon-white">
								<i className="flaticon-diamond"></i>
							</div>
							<p>Get to Know Our Company</p>
						</div>
					</div>
					<div className="footer-links">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer-about footer-margin">
									<div className="about-logo">
										<Image src="/images/Yatra-white.png" alt="Holiday Season India Logo" width={160} height={48} className="h-auto" />
									</div>
									<p>A-82, Jagatpuri First Floor Nathu Colony Chowk Shahdara Delhi 110093</p>
									<div className="about-location">
										<ul>
											<li><i className="flaticon-maps-and-flags" aria-hidden="true"></i> Location</li>
											<li><i className="flaticon-phone-call"></i> (011)-71573058</li>
											<li><i className="flaticon-mail"></i> info@holidayseason.co.in</li>
										</ul>
									</div>
									<div className="footer-social-links">
										<ul>
											<li className="social-icon"><a href="https://www.facebook.com/holidayseasonindia"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://www.instagram.com/holidayseasonindia"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://twitter.com/holidayseasonin"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://www.youtube.com/@holidayseasonindia"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://dribbble.com/holidayseasonindia"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://www.reddit.com/user/holidayseasonindia"><i className="fa fa-reddit" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://in.pinterest.com/holidayseasonindia/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://tumblr.com/holidayseasonindia"><i className="fa fa-tumblr" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://www.tripadvisor.in/Profile/holidayseasonindia"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://wa.me/919999767660?text=Thank you So Much to connect with us"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://telegram.me/holidayseasonindia"><i className="fa fa-telegram" aria-hidden="true"></i></a></li>
											<li className="social-icon"><a href="https://www.linkedin.com/in/holidayseason/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="footer-links-list footer-margin">
									<h3>SUPPORT & HELP</h3>
									<ul>
										<li><a href="/footersections/Terms-Condition.html">Term & Condition<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
										<li><a href="/footersections/Cancellation-Policy.html">Cancellation Policy <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
										<li><a href="/footersections/Refund-Policy.html">Refund Policy <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
										<li><a href="/footersections/Privacy-Policy.html">Privicy Policy <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
										<li><a href="/footersections/Pricing-Policy.html">Pricing Policy <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
										<li><a href="#">Sitemap<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="footer-recent-post footer-margin">
									<h3>Recent Posts</h3>
									<ul>
										<li>
											<div className="recent-post-item">
												<div className="recent-post-image"><Image src="/images/bucket1.jpg" alt="Daily Deals" width={80} height={80} className="h-auto" /></div>
												<div className="recent-post-content"><h4><a href="#">Daily Deals</a></h4><p>Upto 20% OFF</p></div>
											</div>
										</li>
										<li>
											<div className="recent-post-item">
												<div className="recent-post-image"><Image src="/images/bucket2.jpg" alt="WhatsApp" width={80} height={80} className="h-auto" /></div>
												<div className="recent-post-content"><h4><a href="#">Whatsapp Now</a></h4><p>Chat With Us</p></div>
											</div>
										</li>
										<li>
											<div className="recent-post-item">
												<div className="recent-post-image"><Image src="/images/bucket2.jpg" alt="Latest Blog" width={80} height={80} className="h-auto" /></div>
												<div className="recent-post-content"><h4><a href="#">Latest Blog</a></h4><p>Sep, 2025</p></div>
											</div>
										</li>
										<li>
											<div className="recent-post-item">
												<div className="recent-post-image"><Image src="/images/bucket3.jpg" alt="Achievements" width={80} height={80} className="h-auto" /></div>
												<div className="recent-post-content"><h4><a href="#">ACHIEVEMENTS</a></h4><p>June 17, 2025</p></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-4">
								<div className="footer-links-list">
									<div className="footer-instagram">
										<h3>Holiday Season is Accredited By</h3>
										<ul>
											<li><Image src="/images/insta1.jpg" alt="Accreditation 1" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta2.jpg" alt="Accreditation 2" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta3.jpg" alt="Accreditation 3" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta4.jpg" alt="Accreditation 4" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta5.jpg" alt="Accreditation 5" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta6.jpg" alt="Accreditation 6" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta7.jpg" alt="Accreditation 7" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta8.jpg" alt="Accreditation 8" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta9.jpg" alt="Accreditation 9" width={80} height={80} className="h-auto" /></li>
											<li><Image src="/images/insta10.jpg" alt="Accreditation 10" width={80} height={80} className="h-auto" /></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="copyright-content">
								<p>2013 <i className="fa fa-copyright" aria-hidden="true"></i> Holiday Season by <a href="https://www.dmca.com/compliance/holidayseasonindia.com" target="_blank">DMCA.com</a></p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="payment-content">
								<ul>
									<li>We Accept</li>
									<li><Image src="/images/payment1.png" alt="Visa" width={50} height={32} className="h-auto" /></li>
									<li><Image src="/images/payment2.png" alt="Mastercard" width={50} height={32} className="h-auto" /></li>
									<li><Image src="/images/payment3.png" alt="American Express" width={50} height={32} className="h-auto" /></li>
									<li><Image src="/images/payment4.png" alt="Discover" width={50} height={32} className="h-auto" /></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}



