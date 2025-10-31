"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Banner Section */}
      <section className="banner bg-transparent position-relative">
        <div className="container">
          <div className="banner-inner pb-7">
            <div className="row align-items-center gx-lg-5 gy-5">
              <div className="col-lg-6 z-1 overflow-visible">
                <div className="banner-left text-center text-lg-start">
                  <div className="section-title mb-6 p-0">
                    <h4 className="pink mb-1">
                      ABOUT HOLIDAY SEASON INDIA <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i>
                    </h4>
                    <h1 className="text-uppercase mb-0">Where Every Trip Feels Like a Holiday Season</h1>
                  </div>
                  <p className="mb-5">
                    Holiday Season India was founded to make travel simple, soulful and reliably joyful. For the past 14 years we&apos;ve specialised in creating tailored holidays that reflect each traveller&apos;s interests — whether that&apos;s relaxed beach time, immersive cultural discovery, adrenaline-filled adventure or hassle-free family vacations.<br /><br />

                    <h3>Our approach</h3>
                    We believe great travel begins with listening. Every itinerary we design is built around what you want to see and how you want to feel — with trusted local partners, comfortable accommodations, and logistics handled end-to-end. Our strength is blending genuine local experiences with professional planning so your trip runs smoothly and feels authentic.<br /><br />
                    
                    <h3>Founder & leadership</h3>
                    Holiday Season India is led by <strong>Ms. Shalini Bejwal</strong>, whose vision for thoughtful, service-first travel guides our team. With over a decade of experience in the travel industry, <strong>Ms. Bejwal</strong> focuses on quality, transparency and creating trips that leave lasting memories.<br /><br />
                    
                    <h3>Mission & values</h3>
                    Our mission is to inspire curiosity and make meaningful travel accessible and worry-free. We value honesty, personalized service, sustainability in local communities, and continuous improvement — always refining our offerings based on guest feedback.<br /><br />
                    
                    <h3>Let&apos;s plan your next holiday</h3>
                    Whether you&apos;re planning a weekend escape or a multi-country itinerary, Holiday Season India is ready to help. Contact us to start the conversation — we&apos;ll listen, plan, and take care of the rest.
                  </p>
                  
                  {/* Search Filter Form */}
                  <div className="banner-filter">
                    <form className="filter-form shadow p-4 bg-white rounded">
                      <div className="row gy-4">
                        <div className="col-lg-3 col-md-4">
                          <div className="form-group position-relative d-flex align-items-center justify-content-md-start justify-content-center">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 white rounded-circle text-center" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input text-start">
                              <label htmlFor="destination" className="mb-0 fw-semibold">Location</label>
                              <br />
                              <select name="destination" id="destination" className="border-0 bg-transparent ps-0 black fw-normal">
                                <option>Destination?</option>
                                <option value="1">Nepal</option>
                                <option value="2">Bali</option>
                                <option value="3">Bhutan</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="form-group position-relative d-flex align-items-center justify-content-center">
                            <div className="filter-icon">
                              <i className="fa fa-clock-o me-4 white text-center rounded-circle" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input text-start">
                              <label htmlFor="checkin-date" className="mb-0 fw-semibold">Select Date</label>
                              <br />
                              <input type="date" className="border-0 bg-transparent p-0 black fw-normal" id="checkin-date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                          <div className="form-group position-relative d-flex align-items-center justify-content-md-end justify-content-center">
                            <div className="filter-icon">
                              <i className="fa fa-suitcase me-4 white rounded-circle text-center" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input text-start">
                              <label htmlFor="tour" className="mb-0 fw-semibold">Tour Type</label>
                              <br />
                              <select name="tour" id="tour" className="border-0 bg-transparent ps-0 black">
                                <option value="1">Family Tour</option>
                                <option value="2">Group Tour</option>
                                <option value="3">Solo Tour</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="filter-btn text-lg-end text-center">
                            <button type="submit" className="btn-blue btn-red rounded rounded white">
                              Get Started
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="banner-right">
                  <div className="row justify-content-center gy-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="banner-image text-end position-relative">
                        <div className="banner-destination-pop my-4 m-auto p-3 rounded text-center position-absolute w-50 bg-blue">
                          <span className="mb-2 h6 fw-bold white">
                            <span className="h4 fw-bold num" data-val="100">100</span> + <br /> Destinations
                          </span>
                        </div>
                        <Image src="/images/WhatsApp Image 2025-10-08 at 3.19.49 PM.jpeg" alt="banner-image" width={400} height={300} className="rounded w-75 h-auto" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 align-self-center">
                      <div id="video-gallery" className="video-gallery">
                        <a 
                          href="https://www.youtube.com/@holidayseasonindia"
                          className="video-item"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="spin-demo-main position-relative">
                            <i className="fa fa-play pink" aria-hidden="true"></i>
                            <svg id="rotatingText" viewBox="0 0 200 200" width="115" height="115">
                              <defs>
                                <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0"></path>
                              </defs>
                              <text>
                                <textPath alignmentBaseline="hanging" xlinkHref="#circle" className="text">
                                  See What Our Happy Clients Say....
                                </textPath>
                              </text>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="banner-image">
                      <Image src="/images/banner-6.jpg" alt="banner-image" width={400} height={300} className="rounded w-full h-auto" />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="banner-image position-relative">
                      <Image src="/images/banner4.jpg" alt="banner-image" width={400} height={300} className="rounded w-full h-auto" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Banner Bottom - Social & Partners */}
          <div className="banner-bottom">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-3 col-md-3">
                <div className="social-icons">
                  <ul className="m-0 p-0 d-flex align-items-center justify-content-center justify-content-md-start">
                    <li className="social-icon me-2 mb-0">
                      <a href="https://www.facebook.com/holidayseasonindia"><i className="fa fa-facebook rounded-circle text-center blue" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-icon me-2 mb-0">
                      <a href="https://www.instagram.com/holidayseasonindia"><i className="fa fa-instagram rounded-circle text-center blue" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-icon mb-0 me-2">
                      <a href="https://twitter.com/holidayseasonin"><i className="fa fa-twitter rounded-circle text-center blue" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-icon m-0">
                      <a href="https://www.youtube.com/@holidayseasonindia"><i className="fa fa-google rounded-circle text-center blue" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="partner-image">
                  <div className="partner-slider overflow-hidden">
                    <div><Image src="/images/partner7.PNG" alt="partner-image" width={150} height={60} className="h-auto" /></div>
                    <div><Image src="/images/partner8.PNG" alt="partner-image" width={150} height={60} className="h-auto" /></div>
                    <div><Image src="/images/partner9.PNG" alt="partner-image" width={150} height={60} className="h-auto" /></div>
                    <div><Image src="/images/partner10.PNG" alt="partner-image" width={150} height={60} className="h-auto" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Why Choose Us */}
      <section className="about-us pt-0 bg-transparent">
        <div className="container">
          <div className="about-us-inner">
            <div className="row gx-lg-5 gy-5 align-items-center">
              <div className="col-lg-7">
                <div className="about-right text-center text-lg-start">
                  <div className="section-title p-0 mb-6">
                    <h4 className="pink mb-1">
                      Why Choose Holiday Season India<i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i>
                    </h4>
                    <h2 className="text-uppercase w-75 m-auto m-lg-0 mb-0">Experience the life you have always wanted</h2>
                  </div>
                  <div className="section-body mb-5">
                    <p className="mb-5">
                      <h4>1. Choose & Share</h4>
                      Pick your dream destinations, share your travel dates and preferences, and complete our simple Travel Request Form. Your journey begins here..<br /><br />
                      
                      <h4>2. Perfect Your Plan</h4>
                      Our expert Travel Consultants will work with you to craft a fully personalized itinerary—tailored to your style, interests, and budget. And yes, it&apos;s absolutely free..<br /><br />
                    
                      <h4>3. Travel Beyond Expectations</h4>
                      Pack your bags for the best itinerary, the best trip, and unforgettable experiences—all planned to perfection
                    </p>
                    <div className="row gx-md-5 gy-4">
                      <div className="col-lg-4 col-md-4">
                        <div className="experience p-3 rounded bg-white text-center">
                          <h3 className="blue mb-0"><span data-val="15" className="num">15</span>+</h3>
                          <p className="mb-0">Years of experience</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="customer p-3 rounded bg-white text-center">
                          <h3 className="blue mb-0"><span data-val="250" className="num">250</span>+</h3>
                          <p className="mb-0">Happy Customers</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="destination-colab p-3 rounded bg-white text-center">
                          <h3 className="blue mb-0"><span data-val="3" className="num">3</span>k+</h3>
                          <p className="mb-0">Destination Collabration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-left text-center position-relative d-flex justify-content-center">
                  <div className="image-container">
                    <Image src="/images/travel-guy.png" alt="about-image" width={500} height={600} className="w-full h-auto object-cover" />
                  </div>
                  <span className="black p-2 bg-light-grey rounded position-absolute verified border border-4 border-white">
                    <i className="fa fa-check-circle me-2 blue" aria-hidden="true"></i>Verified
                  </span>
                  <span className="black p-2 bg-light-grey rounded position-absolute verified1 border border-4 border-white">
                    <i className="fa fa-shield me-2 blue" aria-hidden="true"></i>24/7 Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Section - Destination Expert */}
      <section className="diversity bg-transparent pt-0">
        <div className="container">
          <div className="diversity-inner">
            <div className="row align-items-center gy-5 gx-lg-5">
              <div className="col-lg-5">
                <div className="diversity-left">
                  <div className="slider-for">
                    <div><Image src="/images/diversity1.JPG" alt="Slide 1" width={500} height={400} className="w-full m-auto h-auto" /></div>
                    <div><Image src="/images/diversity2.JPG" alt="Slide 2" width={500} height={400} className="w-full m-auto h-auto" /></div>
                    <div><Image src="/images/diversity3.jpg" alt="Slide 3" width={500} height={400} className="w-full m-auto h-auto" /></div>
                    <div><Image src="/images/diversity4.jpg" alt="Slide 4" width={500} height={400} className="w-full m-auto h-auto" /></div>
                    <div><Image src="/images/diversity5.jpg" alt="Slide 5" width={500} height={400} className="w-full m-auto h-auto" /></div>
                    <div><Image src="/images/diversity6.jpg" alt="Slide 6" width={500} height={400} className="w-full m-auto h-auto" /></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="diversity-left">
                  <div className="section-title p-0 mb-6 text-center text-lg-start">
                    <h4 className="pink mb-1">
                      Our Destination Expert <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i>
                    </h4>
                    <h2 className="text-uppercase w-75 m-auto m-lg-0">Where Experience Meets Exploration!!</h2>
                  </div>
                  <div className="section-body text-center text-lg-start">
                    <div className="slider-nav p-0 mb-5">
                      <div className="thumbnail-image"><Image src="/images/diversity1.JPG" alt="Thumbnail 1" width={120} height={90} className="rounded h-auto" /></div>
                      <div className="thumbnail-image"><Image src="/images/diversity2.JPG" alt="Thumbnail 2" width={120} height={90} className="rounded h-auto" /></div>
                      <div className="thumbnail-image"><Image src="/images/diversity3.jpg" alt="Thumbnail 3" width={120} height={90} className="rounded h-auto" /></div>
                      <div className="thumbnail-image"><Image src="/images/diversity4.jpg" alt="Thumbnail 4" width={120} height={90} className="rounded h-auto" /></div>
                      <div className="thumbnail-image"><Image src="/images/diversity5.jpg" alt="Thumbnail 5" width={120} height={90} className="rounded h-auto" /></div>
                      <div className="thumbnail-image"><Image src="/images/diversity6.jpg" alt="Thumbnail 6" width={120} height={90} className="rounded h-auto" /></div>
                    </div>
                    <p className="mb-5">
                      From the romantic streets of Europe to the vibrant cultures of Asia, we craft journeys that inspire.
                      Our team blends local insight with global expertise for seamless travel.
                      Handpicked stays, curated experiences, and stress-free planning—every time.
                      Discover the world with us, one unforgettable trip at a time
                    </p>
                    <Link href="/contact" className="btn-blue btn-red rounded">Contact Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature bg-transparent pt-0">
        <div className="container">
          <div className="feature-inner">
            <div className="row align-items-end gx-md-5 gy-5">
              <div className="col-lg-3">
                <div className="section-title p-0 mb-0 text-center text-lg-start m-auto">
                  <h4 className="pink mb-1">What we give <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i></h4>
                  <h2 className="text-uppercase mb-6">Best Features for you</h2>
                  <p>We go beyond just planning trips—we design experiences that feel effortless, exciting, and unforgettable. From handpicked stays and authentic local encounters to seamless logistics and 24/7 support, every detail is tailored to you. Expect award-winning expertise, transparent pricing, and journeys that inspire</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="feature-box p-2 px-4 rounded text-center text-md-start bg-light-grey">
                  <i className="fa fa-th blue bg-white text-center rounded mb-3" aria-hidden="true"></i>
                  <h3 className="mb-1">Lots of choices</h3>
                  <p className="mb-0">Whether you dream of exploring Europe&apos;s grand capitals, Asia&apos;s hidden gems, or India&apos;s cultural heartlands, we offer a world of possibilities. Choose from ready-to-go itineraries, mix-and-match experiences, or fully customized journeys—each crafted to match your style, pace, and budget.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="feature-box p-2 px-4 rounded text-center text-md-start bg-light-grey">
                  <i className="fa fa-user-plus blue bg-white text-center rounded mb-3" aria-hidden="true"></i>
                  <h3 className="mb-1">Best Tour Guides</h3>
                  <p className="mb-0">Travel with experts who know every hidden corner, local story, and must-see view. Our guides aren&apos;t just knowledgeable—they&apos;re passionate, friendly, and dedicated to making your journey safe, smooth, and unforgettable.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="feature-box p-2 px-4 rounded text-center text-md-start bg-light-grey">
                  <i className="fa fa-calendar blue bg-white text-center rounded mb-3" aria-hidden="true"></i>
                  <h3 className="mb-1">Easy Bookings</h3>
                  <p className="mb-0">Plan your dream trip in just a few clicks. Our simple, hassle-free booking process offers quick confirmations, secure payments, and even flexible EMI options—making travel more affordable than ever. Enjoy complete peace of mind while you focus on the excitement of your upcoming journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banner Section */}
      <section className="offer-banner position-relative pt-0 bg-white">
        <div className="container">
          <div className="offer-banner-inner m-auto text-center text-lg-start position-relative bg-light-grey rounded p-8">
            <div className="row gx-0 gx-md-5 align-items-center">
              <div className="col-lg-7">
                <div className="offer-banner-info">
                  <h3 className="black">Destination EXPERT</h3>
                  <h2 className="black text-uppercase">
                    Recognized for Excellence – Ms. Shalini Bejwal Receives SATTE Tourism Award!<br /> 
                    <span className="blue">2025</span>
                  </h2>
                  <Link href="#" className="btn-blue btn-red rounded">Learn More</Link>
                </div>
              </div>
              <div className="col-lg-5">
                  <div className="offer-image">
                    <Image src="/images/3d-icon-traveling-vacation.png" alt="Travel Icon" width={500} height={400} className="w-full h-auto" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="facility pt-0">
        <div className="container">
          <div className="facility-inner">
            <div className="row align-items-center gx-md-5 gy-5">
              <div className="col-lg-5">
                <div className="facility-left">
                  <div className="section-title p-0 text-center text-lg-start mb-6">
                    <h4 className="pink mb-1">Our Facility <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i></h4>
                    <h2 className="text-uppercase mb-0">Our Experience meets the highest quality</h2>
                  </div>
                  <div className="facility-list">
                    <p className="mb-5">We prioritize your safety, comfort, and peace of mind throughout every journey. Our comprehensive facilities ensure you travel with confidence and convenience.</p>
                    <div className="row gy-4 align-items-center justify-content-center">
                      <div className="col-lg-12 col-md-6">
                        <div className="facility-box d-flex align-items-center">
                          <div className="facility-box-icon">
                            <i className="fa fa-bell me-4 rounded-circle bg-white text-center blue border border-2" aria-hidden="true"></i>
                          </div>
                          <div className="facility-box-info">
                            <h3 className="mb-1">Travel Alert & Registration</h3>
                            <p className="mb-0">Stay informed with real-time updates and secure registration for all your travel needs.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="facility-box d-flex align-items-center">
                          <div className="facility-box-icon">
                            <i className="fa fa-plus-square me-4 rounded-circle bg-white text-center blue border border-2" aria-hidden="true"></i>
                          </div>
                          <div className="facility-box-info">
                            <h3 className="mb-1">Health & Medical Security</h3>
                            <p className="mb-0">Travel with confidence knowing we provide comprehensive health and medical support.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="facility-box d-flex align-items-center">
                          <div className="facility-box-icon">
                            <i className="fa fa-credit-card-alt me-4 rounded-circle bg-white text-center blue border border-2" aria-hidden="true"></i>
                          </div>
                          <div className="facility-box-info">
                            <h3 className="mb-1">Flexible Payment Options</h3>
                            <p className="mb-0">Choose from multiple payment methods including EMI options for your convenience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facility-center">
                  <Image src="/images/WhatsApp Image 2025-10-08 at 3.19.17 PM.jpeg" alt="facility-image" width={400} height={500} className="w-full rounded h-auto" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="facility-right text-center text-md-start">
                  <p className="mb-5">Experience personalized service and attention to detail that sets us apart from other travel companies.</p>
                  <Image src="/images/WhatsApp Image 2025-10-08 at 3.15.05 PM.jpeg" alt="facility-image" width={350} height={400} className="w-full rounded mb-5 h-auto" />
                  <Link href="/contact" className="btn-blue btn-red rounded">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial pt-0">
        <div className="container">
          <div className="testemonial-inner">
            <div className="testimonial-body">
              <div className="row gy-5 gx-lg-3 align-items-center">
                <div className="col-lg-4">
                  <div className="testimonial-left text-center text-lg-start">
                    <div className="section-title p-0 mb-6">
                      <h4 className="pink mb-1">Testimonial <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i></h4>
                      <h2 className="text-uppercase mb-0">Satisfied Customers are our best Ads</h2>
                    </div>
                    <div className="review-counter">
                      <ul className="d-flex justify-content-center justify-content-lg-start">
                        <li><Image src="/images/testemonial1.jpg" alt="customer-image" width={60} height={60} className="rounded-circle m-0 border border-3 border-grey" /></li>
                        <li><Image src="/images/testemonial2.jpg" alt="customer-image" width={60} height={60} className="rounded-circle border border-3 border-grey" /></li>
                        <li><Image src="/images/testemonial3.jpg" alt="customer-image" width={60} height={60} className="rounded-circle border border-3 border-grey" /></li>
                        <li><Image src="/images/testemonial4.jpg" alt="customer-image" width={60} height={60} className="rounded-circle border border-3 border-grey" /></li>
                        <li><Image src="/images/testemonial5.jpg" alt="customer-image" width={60} height={60} className="rounded-circle border border-3 border-grey" /></li>
                      </ul>
                      <span className="fw-bold"> <span data-val="200" className="num">200</span> + Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-slider1">
                    {/* Testimonial 1 */}
                    <div className="testimonial-box py-7 px-6 bg-white rounded mx-4">
                      <div className="testimonial-box-top d-flex align-items-center mb-4 justify-content-between">
                        <div className="testimonial-bio d-flex align-items-center">
                          <div className="testimonial-image m-0 me-2">
                            <Image src="/images/testemonial1.jpg" alt="testemonial-image" width={60} height={60} className="rounded-circle" />
                          </div>
                          <div className="testemonial-bio-info">
                            <span className="h5 fw-bold pink">John White</span>
                            <p className="mb-0">Trekker</p>
                          </div>
                        </div>
                        <div className="testimonial-rating fw-bold">
                          4.2 <i className="fa fa-star yellow" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="testimonial-box-bottom">
                        <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                        <p className="mb-0">Thankyou so much Holiday Season. Our Ooty + Mysore+ Coorg trip was amazing. Special thanks to Prithvi for helping and guiding from starting till end. Hotel 10/10, amazing food & stay Driver 10/10 very friendly, professional, trustworthy and nice, covered all the sightseeing places by his own. Will definitely get in touch for the future bookings. Highly recommend Holiday Season India...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Happy Guests */}
      <section className="blog bg-light-grey pt-0">
        <div className="container">
          <div className="blog-inner">
            <div className="section-title text-center mb-6">
              <h3 className="pink mb-1">Happy Guests of <i className="fa fa-paper-plane-o ms-2" aria-hidden="true"></i></h3>
              <h2 className="text-uppercase mb-0">Holiday Season India</h2>
            </div>
            <div className="blog-body">
              <div className="blog-body-top">
                <div className="row gx-md-5 gy-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-box pb-4">
                      <div className="blog-image">
                        <video width="340" height="226" autoPlay loop muted playsInline>
                          <source src="/images/ban-images/WhatsApp Video 2025-10-08 at 3.36.43 PM.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="blog-box-body p-4 bg-white rounded-bottom">
                        <div className="blog-box-top mb-2">
                          <ul className="d-flex justify-content-between">
                            <li className="mb-0 small"><i className="fa fa-calendar me-1 blue" aria-hidden="true"></i> 25th Sept 2025</li>
                            <li className="mb-0 small"><i className="fa fa-bookmark me-1 blue" aria-hidden="true"></i> 3 Min Read</li>
                          </ul>
                        </div>
                        <div className="blog-box-info mb-4">
                          <h3 className="mb-2"><Link href="#" className="black">Amazing Travel Experiences</Link></h3>
                        </div>
                        <div className="blog-box-bottom d-flex justify-content-between align-items-center">
                          <span>By <Link href="#" className="fw-bold">Lisa Gives</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-box pb-4">
                      <div className="blog-image">
                        <video width="340" height="226" autoPlay loop muted playsInline>
                          <source src="/images/ban-images/WhatsApp Video 2025-10-08 at 3.37.57 PM.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="blog-box-body p-4 bg-white rounded-bottom">
                        <div className="blog-box-top mb-2">
                          <ul className="d-flex justify-content-between">
                            <li className="mb-0 small"><i className="fa fa-calendar me-1 blue" aria-hidden="true"></i> 29th Sept 2025</li>
                            <li className="mb-0 small"><i className="fa fa-bookmark me-1 blue" aria-hidden="true"></i> 3 Min Read</li>
                          </ul>
                        </div>
                        <div className="blog-box-info mb-4">
                          <h3 className="mb-2"><Link href="#" className="black">Best Travel Moments</Link></h3>
                        </div>
                        <div className="blog-box-bottom d-flex justify-content-between align-items-center">
                          <span>By <Link href="#" className="fw-bold">Erin Johns</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="blog-box pb-4">
                      <div className="blog-image">
                        <Image src="/images/ban-images/WhatsApp Image 2025-10-08 at 4.36.29 PM (1).jpeg" alt="Happy Guest" width={340} height={226} className="w-full h-auto" />
                      </div>
                      <div className="blog-box-body p-4 bg-white rounded-bottom">
                        <div className="blog-box-top mb-2">
                          <ul className="d-flex justify-content-between">
                            <li className="mb-0 small"><i className="fa fa-calendar me-1 blue" aria-hidden="true"></i> 25th Sept 2025</li>
                            <li className="mb-0 small"><i className="fa fa-bookmark me-1 blue" aria-hidden="true"></i> 3 Min Read</li>
                          </ul>
                        </div>
                        <div className="blog-box-info mb-4">
                          <h3 className="mb-2"><Link href="#" className="black">Memorable Journeys</Link></h3>
                        </div>
                        <div className="blog-box-bottom d-flex justify-content-between align-items-center">
                          <span>By <Link href="#" className="fw-bold">Happy Traveler</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TrustedPartners /> */}
      <Footer />
    </>
  );
}

