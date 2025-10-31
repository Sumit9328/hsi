"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
	return (
		<div className="navigation">
			<div className="container">
				<div className="navigation-content">
					<div className="header_menu">
						<nav className="navbar navbar-default navbar-sticky-function navbar-arrow">
							<div className="logo pull-left">
								<Image alt="Logo" src="/images/HolidaySeason.png" width={160} height={48} />
							</div>
							<div id="navbar" className="navbar-nav-wrapper">
								<ul className="nav navbar-nav" id="responsive-menu">
									<li className="active"><Link href="/">Home</Link></li>

				<li>
					<Link href="/mainpages/indiatravel"><i className="fa fa-diamond"></i>India Travel<i className="fa fa-angle-down"></i></Link>
					<ul>
						<li>
							<Link href="/mainpages/indiatravel/northindia">North India<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/indiatravel/northindia">Rajasthan</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Delhi Agra Jaipur</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Jammu & Kashmir</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Leh Ladakh Tour</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Manali Tour Package</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Shimla Tour Package</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Dharamshala Dalhousie</Link></li>
								<li><Link href="/mainpages/indiatravel/northindia">Uttarakhand</Link></li>
							</ul>
						</li>
						<li>
							<Link href="/mainpages/indiatravel/southindia">South India<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/indiatravel/southindia">Kerala Tour Packages</Link></li>
								<li><Link href="/mainpages/indiatravel/southindia">Ooty Coorg Mysore</Link></li>
								<li><Link href="/mainpages/indiatravel/southindia">Tamil Nadu</Link></li>
								<li><Link href="/mainpages/indiatravel/southindia">Hyderabad Tourism</Link></li>
								<li><Link href="/mainpages/indiatravel/southindia">Karnataka Tourism</Link></li>
								<li><Link href="/mainpages/indiatravel/southindia">Bangalore</Link></li>
							</ul>
						</li>
						<li>
							<Link href="/mainpages/indiatravel/westindia">West India<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/indiatravel/westindia">Goa Tour Packages</Link></li>
								<li><Link href="/mainpages/indiatravel/westindia">Mumbai Tour </Link></li>
								<li><Link href="/mainpages/indiatravel/westindia">Gujarat Tour Packages</Link></li>
								<li><Link href="/mainpages/indiatravel/westindia">Maharashtra</Link></li>
								<li><Link href="/mainpages/indiatravel/westindia">Pune</Link></li>
							</ul>
						</li>
						<li>
							<Link href="/mainpages/indiatravel/northeastsikkim">North East Sikkim India<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/indiatravel/northeastsikkim">Darjeeling Tour</Link></li>
								<li><Link href="/mainpages/indiatravel/northeastsikkim">Gangtok Tour</Link></li>
								<li><Link href="/mainpages/indiatravel/northeastsikkim">West Bengal</Link></li>
								<li><Link href="/mainpages/indiatravel/northeastsikkim">Kolkata tourism</Link></li>
								<li><Link href="/mainpages/indiatravel/northeastsikkim">Seven Sisters of India</Link></li>
							</ul>
						</li>
						<li><Link href="/mainpages/indiatravel/andaman">Andaman Tour</Link></li>
						<li><Link href="/mainpages/indiatravel/lakshadweep">Lakshadweep Tourism</Link></li>
					</ul>
				</li>

				<li>
					<Link href="/mainpages/asiatrip"><i className="fa fa-star"></i>Asia Trip<i className="fa fa-angle-down"></i></Link>
					<ul>
						<li><Link href="/mainpages/asiatrip/nepal">Nepal Tourism</Link></li>
						<li><Link href="/mainpages/asiatrip/bhutan">Bhutan Tourism</Link></li>
						<li><Link href="/mainpages/asiatrip/tibet">Tibet Tourism</Link></li>
						<li><Link href="/mainpages/asiatrip/srilanka">Sri Lanka Tour</Link></li>
					</ul>
				</li>

				<li>
					<Link href="/mainpages/internationaltrip"><i className="fa fa-star"></i>International Trip<i className="fa fa-angle-down"></i></Link>
					<ul>
						<li>
							<Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/wondersofukandscotland">Wonders of UK and Scotland</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/europeanhoneymoonspecial">European Honeymoon Special</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/westerneuropewonders">Western Europe Wonders</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/easterneuropediscovery">Eastern Europe Discovery</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/mediterraneanmagic">Mediterranean Magic</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/balkanexplorer">Balkan Explorer</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/centraleuropecharm">Central Europe Charm</Link></li>
								<li><Link href="/mainpages/internationaltrip/europeanpanorama/scandinaviansplendor">Scandinavian Splendor</Link></li>
							</ul>
						</li>
						<li>
							<Link href="/mainpages/internationaltrip/popularasiatours">Popular Asia Tours<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/magicalmaldives">Magical Maldives</Link></li>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/dubailuxuryexperience">Dubai Luxury Experience</Link></li>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/enchantingazerbaijanbaku">Enchanting Azerbaijan Baku</Link></li>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/timelessthailand">Timeless Thailand</Link></li>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/vietnamvibes">Vietnam Vibes</Link></li>
								<li><Link href="/mainpages/internationaltrip/popularasiatours/singaporemalaysia">Singapore Malaysia</Link></li>
							</ul>
						</li>
						<li>
							<Link href="/mainpages/internationaltrip/countryspecific">Country-Specific<i className="fa fa-angle-right"></i></Link>
							<ul>
								<li><Link href="/mainpages/internationaltrip/countryspecific/magicalcambodiatrip">Magical Cambodia Trip</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/kenyasafaritrip">Kenya Safari Trip</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/indonesiabalibliss">Indonesia Bali Bliss</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/captivatingchina">Captivating China</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/hongkongtripchinasar">Hong Kong Trip (China SAR)</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/macauchinasar">Macau (China SAR)</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/flavorsofgeorgia">Flavors of Georgia</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/essenceofjapan">Essence of Japan</Link></li>
								<li><Link href="/mainpages/internationaltrip/countryspecific/wondersofturkey">Wonders of Turkey</Link></li>
							</ul>
						</li>
					</ul>
				</li>

									<li className="relative">
										<a href="/mainpages/holidaytheme">Holiday Theme<i className="fa fa-angle-down"></i></a>
										<ul className="overflow-y-auto absolute w-64 max-h-50">
											<li><Link href="#">Theme Spot 1</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>
											<li><Link href="#">Theme Spot 2</Link></li>

										</ul>
									</li>

				<li>
					<a href="/mainpages/company">Company<i className="fa fa-angle-down"></i></a>
					<ul>
						<li><Link href="/mainpages/company/about">About Us</Link></li>
						<li><Link href="#">Happy Moment HSI</Link></li>
						<li><Link href="#">Why Choose Us</Link></li>
						<li><Link href="#">Advertise with us</Link></li>
						<li><Link href="#">Jobs</Link></li>
						<li><Link href="#">Travel Support</Link></li>
						<li><Link href="#">Contact Us</Link></li>
					</ul>
				</li>

									<li>
										<a href="#">Payment</a>
									</li>

								</ul>
							</div>
							<div id="slicknav-mobile"></div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}
