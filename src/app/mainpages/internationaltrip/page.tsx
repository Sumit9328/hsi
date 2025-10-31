"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function InternationalTripPage(): React.ReactElement {
  const [activeTab, setActiveTab] = useState("home-tab");
  const [activeAboutTab, setActiveAboutTab] = useState("vision-tab");
  const [queryModalOpen, setQueryModalOpen] = useState(false);

  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll(".num");
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute("data-val") || "0");
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          (counter as HTMLElement).textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          (counter as HTMLElement).textContent = target.toString();
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    counters.forEach((counter) => observer.observe(counter));

    // Countdown timer
    const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days from now
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (daysEl) daysEl.textContent = days.toString();
      if (hoursEl) hoursEl.textContent = hours.toString();
      if (minutesEl) minutesEl.textContent = minutes.toString();
      if (secondsEl) secondsEl.textContent = seconds.toString();

      if (distance < 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Banner Section */}
      <section className="banner p-0 bg-white">
        <div className="banner-wrapper px-7">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="position-relative z-1 slider"
          >
            <SwiperSlide className="position-relative slide-1" style={{ backgroundImage: "url(/images/ban-images/travel-concept-with-worldwide-landmarks.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="section-overlay"></div>
              <div className="slide-body pb-8 z-1">
                <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                  <h1 className="white fadeInDown text-uppercase">Find the Perfect Vacation Spot</h1>
                  <p className="fadeInDown mb-4 white w-100">
                    Explore breathtaking destinations across India and beyond.
                    From serene beaches to majestic mountains, plan your dream getaway with ease and confidence.
                  </p>
                  <div className="banner-button1 fadeInDown me-4">
                    <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>Book a Trip</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="position-relative slide-2" style={{ backgroundImage: "url(/images/slider/slider2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="section-overlay"></div>
              <div className="slide-body pb-8 z-1">
                <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                  <h1 className="white fadeInDown text-uppercase">We Offer You the Best Travel Deals</h1>
                  <p className="fadeInDown mb-4 white w-100">
                    Discover amazing travel packages across India at unbeatable prices.
                    Plan your next adventure with ease and enjoy unforgettable experiences without breaking the bank.
                  </p>
                  <div className="banner-button1 fadeInDown me-4">
                    <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>Book a Trip</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="position-relative slide-3" style={{ backgroundImage: "url(/images/slider/slider3.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="section-overlay"></div>
              <div className="slide-body pb-8 z-1">
                <div className="banner-content-inner swiper-content text-center w-50 m-auto">
                  <h1 className="white fadeInDown text-uppercase">Amazing Santorini 7-Day Tour</h1>
                  <p className="fadeInDown mb-4 white w-100">
                    Experience the stunning beauty of Santorini, from iconic sunsets to charming villages.
                    Enjoy a 7-day journey filled with adventure, relaxation, and unforgettable memories.
                  </p>
                  <div className="banner-button1 fadeInDown me-4">
                    <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>Book a Trip</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Filter Section */}
          <div className="banner-filter position-relative z-2 box-shadow">
            <ul className="nav nav-tabs border-0 justify-content-center m-0 p-0" id="myTab" role="tablist">
              <li className="nav-item m-0" role="presentation">
                <button
                  className={`nav-link py-3 px-6 fw-bold black bg-snow ${activeTab === "home-tab" ? "active" : ""}`}
                  onClick={() => setActiveTab("home-tab")}
                  type="button"
                >
                  <i className="fa fa-suitcase" aria-hidden="true"></i> Tour
                </button>
              </li>
              <li className="nav-item m-0" role="presentation">
                <button
                  className={`nav-link py-3 px-6 fw-bold black bg-snow ${activeTab === "profile-tab" ? "active" : ""}`}
                  onClick={() => setActiveTab("profile-tab")}
                  type="button"
                >
                  <i className="fa fa-bed" aria-hidden="true"></i> Hotel
                </button>
              </li>
              <li className="nav-item m-0" role="presentation">
                <button
                  className={`nav-link py-3 px-6 fw-bold black bg-snow ${activeTab === "contact-tab" ? "active" : ""}`}
                  onClick={() => setActiveTab("contact-tab")}
                  type="button"
                >
                  <i className="fa fa-cubes" aria-hidden="true"></i> Activities
                </button>
              </li>
              <li className="nav-item m-0" role="presentation">
                <button
                  className={`nav-link py-3 px-6 fw-bold black bg-snow ${activeTab === "transport-tab" ? "active" : ""}`}
                  onClick={() => setActiveTab("transport-tab")}
                  type="button"
                >
                  <i className="fa fa-car" aria-hidden="true"></i> Transport
                </button>
              </li>
            </ul>

            <div className="tab-content bg-snow" id="myTabContent">
              {/* Tour Tab */}
              {activeTab === "home-tab" && (
                <div className="tab-pane fade show active">
                  <form className="d-xl-flex justify-content-center align-items-center">
                    <div className="filter-area w-100 align-items-center">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex position-relative justify-content-center align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="destination" className="mb-1 fs-6">Destination</label> <br />
                              <select name="destination" id="destination" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Nepal</option>
                                <option value="2">Bali</option>
                                <option value="3">Bangladesh</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex position-relative justify-content-center align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-suitcase me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="tour-type" className="mb-1 fs-6">Tour Type</label> <br />
                              <select name="tour-type" id="tour-type" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Family Tour</option>
                                <option value="2">Honeymoon Tour</option>
                                <option value="3">Group Tour</option>
                                <option value="4">Solo Tour</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center position-relative align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-calendar-check-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="time" className="mb-1 fs-6">When</label> <br />
                              <select name="time" id="time" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center position-relative align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-suitcase me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="tour-category" className="mb-1 fs-6">Tour Category</label> <br />
                              <select name="tour-category" id="tour-category" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Economy</option>
                                <option value="2">Luxury</option>
                                <option value="3">Deluxe</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-search h-100 text-center">
                      <button type="submit" className="py-6 px-8 filter-button white btn1">Search</button>
                    </div>
                  </form>
                </div>
              )}

              {/* Hotel Tab */}
              {activeTab === "profile-tab" && (
                <div className="tab-pane fade show active">
                  <form className="d-xl-flex justify-content-center align-items-center">
                    <div className="filter-area w-100 align-items-center">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="location" className="mb-1 fs-6">Location</label> <br />
                              <select name="location" id="location" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Nepal</option>
                                <option value="2">Bali</option>
                                <option value="3">Bangladesh</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-clock-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="checkin-date" className="mb-1 fs-6">Check In</label> <br />
                              <input type="date" className="border-0 bg-transparent fw-semibold p-0" id="checkin-date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-clock-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="checkout-date" className="mb-1 fs-6">Check Out</label> <br />
                              <input type="date" className="border-0 bg-transparent fw-semibold p-0" id="checkout-date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-building-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="room" className="mb-1 fs-6">Room</label> <br />
                              <input type="number" id="room" className="border-0 bg-transparent fw-semibold p-0" defaultValue={1} min={1} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-search h-100 text-center">
                      <button type="submit" className="py-6 px-8 filter-button white btn1">Search</button>
                    </div>
                  </form>
                </div>
              )}

              {/* Activities Tab */}
              {activeTab === "contact-tab" && (
                <div className="tab-pane fade show active">
                  <form className="d-xl-flex justify-content-center align-items-center">
                    <div className="filter-area w-100 align-items-center">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="location2" className="mb-1 fs-6">Location</label> <br />
                              <select name="location2" id="location2" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Nepal</option>
                                <option value="2">Bali</option>
                                <option value="3">Bangladesh</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box filter-box1 d-flex justify-content-center position-relative align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-binoculars me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="activity" className="mb-1 fs-6">Activity Type</label> <br />
                              <select name="activity" id="activity" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Adventure</option>
                                <option value="2">Cultural</option>
                                <option value="3">Historical</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-clock-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="activity-date" className="mb-1 fs-6">Activity Day</label> <br />
                              <input type="date" className="border-0 bg-transparent ps-0 black fw-semibold p-0" id="activity-date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-user me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="guests" className="mb-1 fs-6">Guests</label> <br />
                              <input type="number" id="guests" className="border-0 bg-transparent ps-0 black fw-semibold p-0" defaultValue={1} min={1} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-search h-100 text-center">
                      <button type="submit" className="py-6 px-8 filter-button white btn1">Search</button>
                    </div>
                  </form>
                </div>
              )}

              {/* Transport Tab */}
              {activeTab === "transport-tab" && (
                <div className="tab-pane fade show active">
                  <form className="d-xl-flex justify-content-center align-items-center">
                    <div className="filter-area w-100 align-items-center">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box filter-box1 d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="destination-from" className="mb-1 small">From</label> <br />
                              <select name="destination-from" id="destination-from" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Nepal</option>
                                <option value="2">Bali</option>
                                <option value="3">Bangladesh</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box filter-box1 d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-map-marker me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="destination-to" className="mb-1 small">To</label> <br />
                              <select name="destination-to" id="destination-to" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Bangladesh</option>
                                <option value="2">Nepal</option>
                                <option value="3">Bali</option>
                                <option value="4">India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center position-relative">
                            <div className="filter-icon">
                              <i className="fa fa-clock-o me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="journey-date" className="mb-1 small">Journey Start Date</label> <br />
                              <input type="date" className="border-0 bg-transparent ps-0 black fw-semibold p-0" id="journey-date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="filter-box d-flex justify-content-center align-items-center">
                            <div className="filter-icon">
                              <i className="fa fa-plane me-4 pink" aria-hidden="true"></i>
                            </div>
                            <div className="filter-input">
                              <label htmlFor="transport-type" className="mb-1 small">Transport Type</label> <br />
                              <select name="transport-type" id="transport-type" className="border-0 bg-transparent ps-0 black fw-semibold">
                                <option value="1">Flight</option>
                                <option value="2">Car</option>
                                <option value="3">Cruise</option>
                                <option value="4">Train</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-search h-100 text-center">
                      <button type="submit" className="py-6 px-8 filter-button white btn-red">Search</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section Ends */}

      {/* About Us Section */}
      <section className="about-us bg-white py-5">
        <div className="container">
          <div className="about-us-inner text-center text-md-start">
            <div className="row gx-lg-5 align-items-center gy-5">
              <div className="col-lg-6">
                <div className="about-us-left">
                  <div className="section-title mb-4 text-center text-lg-start p-0">
                    <h5 className="mb-1 pink fst-italic text-uppercase">About Us</h5>
                    <h2 className="text-uppercase">Get to know about the journey of HolidaySeasonIndia!</h2>
                  </div>
                  <div className="about-us-body mb-3 text-center text-md-start">
                    <ul className="nav nav-tabs border-0 justify-content-center justify-content-md-start" id="myTab1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link bg-transparent border-0 grey h4 ps-0 me-6 ${activeAboutTab === "vision-tab" ? "active" : ""}`}
                          onClick={() => setActiveAboutTab("vision-tab")}
                          type="button"
                        >
                          <i className="fa fa-bullseye me-2" aria-hidden="true"></i> Mission and Vision
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link bg-transparent border-0 grey h4 ps-0 me-6 ${activeAboutTab === "customer-tab" ? "active" : ""}`}
                          onClick={() => setActiveAboutTab("customer-tab")}
                          type="button"
                        >
                          <i className="fa fa-users me-2" aria-hidden="true"></i> Customer Focus
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content py-4" id="myTabContent1">
                      {activeAboutTab === "vision-tab" && (
                        <div className="tab-pane fade show active">
                          Discover more about us — we believe in creating meaningful connections and fostering growth through purpose and innovation. Our journey is built on passion, creativity, and a commitment to excellence. With every step, we strive to bring ideas to life, inspire change, and make a lasting impact.
                        </div>
                      )}
                      {activeAboutTab === "customer-tab" && (
                        <div className="tab-pane fade show active">
                          Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper, enim vitae tristique blandit, eratot augue torel tempo libero, non porta lectus tortor et elit. Quisque finibusot enim et eratourgt gravida, eu elementum turpis lacinia. Integer female go tellus ligula, attendora and condimentum.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="about-us-button d-md-flex justify-content-between align-items-center">
                    <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>
                      More About us
                    </a>
                    <div className="costumer-counter d-flex justify-content-center justify-content-md-start">
                      <ul className="d-flex me-2">
                        <li>
                          <Image src="/images/customer-img/cs4.jpeg" alt="customer-image" width={50} height={50} className="rounded-circle m-0 border border-3 border-grey" />
                        </li>
                        <li>
                          <Image src="/images/customer-img/cs11.jpeg" alt="customer-image" width={50} height={50} className="rounded-circle border border-3 border-grey" />
                        </li>
                        <li>
                          <Image src="/images/customer-img/cs5.jpeg" alt="customer-image" width={50} height={50} className="rounded-circle border border-3 border-grey" />
                        </li>
                        <li>
                          <Image src="/images/customer-img/cs7.jpeg" alt="customer-image" width={50} height={50} className="rounded-circle border border-3 border-grey" />
                        </li>
                      </ul>
                      <div className="customer-content">
                        <span data-val="105" className="num black fw-bold"> </span>+ <br /> Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-us-right">
                  <div className="row gy-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="about-image1">
                        <div className="about-us-image mb-2">
                          <Image src="/images/customer-img/cs10.jpeg" alt="about-us" width={400} height={300} className="w-100 rounded" />
                        </div>
                        <div className="about-us-image text-end">
                          <Image src="/images/customer-img/cs8.jpeg" alt="about-us" width={320} height={240} className="w-lg-80 w-100 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="about-us-image-2">
                        <div className="about-us-image mb-2">
                          <Image src="/images/customer-img/cs13.jpeg" alt="about-us" width={400} height={300} className="w-100 rounded" />
                        </div>
                        <div className="about-us-image text-end">
                          <Image src="/images/customer-img/cs14.jpeg" alt="about-us" width={400} height={300} className="w-100 rounded" />
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
      {/* About Us Section Ends */}

      {/* Top Destination Section */}
      <section className="top-destination p-0">
        <div className="top-destination-inner pe-8 bg-light-grey py-9">
          <div className="row align-items-center gy-5">
            <div className="col-lg-3">
              <div className="section-title text-center text-lg-start p-0">
                <h5 className="mb-1 pink fst-italic text-uppercase">Top Destinations</h5>
                <h2 className="mb-3 text-uppercase">Our Popular Destinations</h2>
                <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>See All Destinations</a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="top-destination-body">
                <div className="destination-body-top mb-4">
                  <div className="row justify-content-center gy-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/Tours-in-Europe.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Europe</Link></h3>
                          <p className="mb-0">20+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/sing.webp" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Singapore</Link></h3>
                          <p className="mb-0">15+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/dubai.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Dubai</Link></h3>
                          <p className="mb-0">10+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/thai.webp" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Thailand</Link></h3>
                          <p className="mb-0">20+ Trips</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="destination-body-bottom">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gy-4">
                    <div className="col">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/malsia.avif" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Malaysia</Link></h3>
                          <p className="mb-0">10+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/vietnam.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Vietnam</Link></h3>
                          <p className="mb-0">20+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-4">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/bali.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Bali</Link></h3>
                          <p className="mb-0">15+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-4">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/nepal.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Nepal</Link></h3>
                          <p className="mb-0">10+ Trips</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-4">
                      <div className="destination-box p-2 rounded box-shadow">
                        <div className="destination-image mb-2 overflow-hidden">
                          <Link href="/tour-detail.html">
                            <Image src="/images/internationaltrip/baku.jpg" alt="destination-image" width={400} height={300} className="w-100 rounded" />
                          </Link>
                        </div>
                        <div className="destination-info text-center">
                          <h3 className="mb-0"><Link href="/tour-detail.html" className="blue">Baku</Link></h3>
                          <p className="mb-0">20+ Trips</p>
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
      {/* Top Destination Section Ends */}

      {/* Offer Slider Section */}
      <section className="offer-slider">
        <div className="container">
          <div className="offer-slider-inner">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="autoplay-offer-slider"
            >
              <SwiperSlide className="position-relative mx-1">
                <div className="section-overlay"></div>
                <div className="offer-info position-relative text-center text-md-start text-lg-center py-10 ps-8">
                  <h3 className="mb-2 light-grey">Travel Now !</h3>
                  <h2 className="mb-3 h1 fw-bold white text-uppercase">
                    The Refresment Tour <br /><span className="yellow">35% off</span>
                  </h2>
                  <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>Book Now</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="position-relative mx-1">
                <div className="section-overlay"></div>
                <div className="offer-info position-relative text-center text-md-end text-lg-center ms-auto py-10 pe-8">
                  <h3 className="mb-2">Saving Worldwide !</h3>
                  <h2 className="h1 fw-bold mb-3 text-uppercase">
                    Your Adventure Awaits<br /><span className="blue">50% off</span>
                  </h2>
                  <a href="javascript:void(0)" className="enquire-btn btn-blue btn-red rounded" onClick={() => setQueryModalOpen(true)}>Book Now</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Offer Slider Section Ends */}

      {/* Why Us Section */}
      <section className="why-us pt-0 bg-white">
        <div className="container">
          <div className="why-us-inner">
            <div className="section-title text-center mb-6">
              <h5 className="mb-1 pink fst-italic text-uppercase">What defines us</h5>
              <h2 className="text-uppercase">Why book with yatra?</h2>
            </div>
            <div className="why-us-body">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-flag-o bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Ultimate Flexibility</h3>
                      <p className="mb-0">Plan your trip your way with flexible itineraries, travel dates, and experiences tailored to your preferences.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-globe bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Worldwide Coverage</h3>
                      <p className="mb-0">Explore destinations across the globe with our expert guidance and seamless travel planning for every journey.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-bolt bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Competitive Pricing</h3>
                      <p className="mb-0">Enjoy the best travel experiences at unbeatable prices with flexible packages tailored for every budget.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-calendar-o bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Fast Booking</h3>
                      <p className="mb-0">Book your dream trip in minutes with our quick, secure, and hassle-free online booking process.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-comments-o bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Best Support 24/7</h3>
                      <p className="mb-0">Our dedicated team is always available to assist you, ensuring a smooth and worry-free travel experience anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="reason-box py-4 px-3 rounded d-flex align-items-center box-shadow">
                    <div className="reason-box-icon me-3">
                      <i className="fa fa-star-o bg-light-grey blue text-center rounded-circle" aria-hidden="true"></i>
                    </div>
                    <div className="reason-box-info">
                      <h3 className="mb-1">Expert Guides</h3>
                      <p className="mb-0">Travel with our knowledgeable guides who bring destinations to life, sharing insider tips and unforgettable stories along the way.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why US Ends */}

      {/* Tour Guides Section */}
      <section className="guides py-10">
        <div className="container">
          <div className="guides-inner">
            <div className="section-title p-0 guide-title mb-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="guide-title-left text-center text-md-start">
                    <h5 className="pink fst-italic mb-1 text-uppercase">Meet our guide</h5>
                    <h2 className="mb-2 text-uppercase">Our expert guides</h2>
                    <p className="mb-0">
                      Our expert guides bring each destination to life with insider knowledge, local insights, and unforgettable stories.
                      Travel confidently knowing you&lquo;re in the hands of seasoned professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="guides-body">
              <div className="team-members">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={true}
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  className="guide-slider"
                >
                  {[
                    { name: "Khushi", img: "/images/experts/diversity1.JPG" },
                    { name: "Prithvi", img: "/images/experts/diversity2.JPG" },
                    { name: "Sneha", img: "/images/experts/diversity3.jpg" },
                    { name: "Shonam", img: "/images/experts/diversity4.jpg" },
                    { name: "Meena", img: "/images/experts/diversity5.jpg" },
                  ].map((guide, idx) => (
                    <SwiperSlide key={idx} className="mx-2">
                      <div className="team-member-box m-md-0">
                        <div className="team-member-image position-relative overflow-hidden rounded-top">
                          <Image src={guide.img} alt={`Team-image-${guide.name}`} width={300} height={300} className="w-100" />
                          <div className="social-icons-box text-center position-absolute d-flex align-items-center justify-content-center">
                            <ul className="social-link ps-0 mb-0">
                              <li className="d-inline-block">
                                <a href="#" className="rounded-circle text-center d-block me-1 grey bg-white black">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li className="d-inline-block">
                                <a href="#" className="rounded-circle text-center d-block me-1 grey bg-white black">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li className="d-inline-block">
                                <a href="#" className="rounded-circle text-center grey d-block me-1 bg-white black">
                                  <i className="fa fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team-member-info py-4 bg-white text-center rounded-bottom">
                          <h3 className="m-0"><a href="" className="blue">{guide.name}</a></h3>
                          <p className="mb-0">Guide</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tour Guides Section Ends */}

      {/* Video Banner Section */}
      <section className="video-activities-counter p-0">
        <div className="activities-counter position-relative">
          <div className="container">
            <div className="counter-tripadviser-inner py-8">
              <div className="activities-counter-inner py-5 border-bottom border-top border-1 border-grey mb-4">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="activities-counter-box d-flex align-items-center position-relative justify-content-center justify-content-lg-start">
                      <div className="activities-counter-icon me-2">
                        <i className="fa fa-smile-o pink" aria-hidden="true"></i>
                      </div>
                      <div className="activities-counter-info">
                        <span className="black fw-bold h3"><span data-val="10" className="num"></span>K +</span>
                        <p>Happy Travelers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="activities-counter-box d-flex align-items-center justify-content-center position-relative">
                      <div className="activities-counter-icon me-2">
                        <i className="fa fa-line-chart pink" aria-hidden="true"></i>
                      </div>
                      <div className="activities-counter-info">
                        <span className="black fw-bold h3"><span data-val="5" className="num"></span>K +</span>
                        <p>Tour Success</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="activities-counter-box d-flex align-items-center justify-content-center position-relative">
                      <div className="activities-counter-icon me-2">
                        <i className="fa fa-thumbs-o-up pink" aria-hidden="true"></i>
                      </div>
                      <div className="activities-counter-info">
                        <span className="black fw-bold h3"><span data-val="98" className="num"></span>%</span>
                        <p>Positive Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="activities-counter-box d-flex align-items-center justify-content-center justify-content-lg-end">
                      <div className="activities-counter-icon me-2">
                        <i className="fa fa-male pink" aria-hidden="true"></i>
                      </div>
                      <div className="activities-counter-info">
                        <span className="black fw-bold h3"><span data-val="5" className="num"></span> +</span>
                        <p>Tour Guides</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trip-adviser-plug d-md-flex align-items-center justify-content-center">
                <div className="review-type d-flex align-items-center me-4 justify-content-center">
                  <h4 className="me-2 mb-0">Excellent</h4>
                  <ul className="m-0 p-0 d-flex green">
                    <li className="me-1 mb-0"><i className="fa fa-circle green" aria-hidden="true"></i></li>
                    <li className="me-1 mb-0"><i className="fa fa-circle green" aria-hidden="true"></i></li>
                    <li className="me-1 mb-0"><i className="fa fa-circle green" aria-hidden="true"></i></li>
                    <li className="me-1 mb-0"><i className="fa fa-circle green" aria-hidden="true"></i></li>
                    <li className="mb-0"><i className="fa fa-circle-o" aria-hidden="true"></i></li>
                  </ul>
                </div>
                <p className="m-0 me-4 my-2 text-center">
                  <span className="fw-bold">5.0</span> Rating out of <span className="fw-bold">5.0</span> based on 5362 reviews
                </p>
                <div className="trip-adviser-info d-flex align-items-center me-4 justify-content-center">
                  <div className="trip-adviser-image me-2">
                    <Image src="/images/tripadvisor-icon.png" alt="trip-adviser-logo" width={40} height={40} />
                  </div>
                  <h5 className="black fw-bold mb-0">Trip Adviser</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-banner1 position-relative">
          <div className="section-overlay"></div>
          <video autoPlay muted loop playsInline className="w-100">
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* Video Banner Section Ends */}

      {/* Testimonial Section */}
      <section className="testimonial pb-11 bg-darkblue position-relative">
        <div className="container">
          <div className="testimonials-inner">
            <div className="section-title p-0 w-lg-60 m-auto text-center mb-8">
              <h5 className="pink fst-italic text-uppercase mb-1">Testimonials</h5>
              <h2 className="white text-uppercase">Travelers Say about us</h2>
              <p className="white">Lorem ipsum dolor sit amet consectet cimus hic minus eaque vero voluptaab t consectet cimus hic minus eaque vero .</p>
            </div>
            <div className="testimonial-body">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{ delay: 5000 }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="testimonial-slider"
              >
                {[
                  { title: "An Unforgettable Journey", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod", name: "Alex Browns", role: "CEO", img: "/images/testemonial1.jpg" },
                  { title: "A Life-Changing Adventure", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod", name: "John White", role: "Trekker", img: "/images/testemonial5.jpg" },
                  { title: "A Perfect Relaxation", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod", name: "Alessa Keys", role: "Developer", img: "/images/testemonial3.jpg" },
                  { title: "Discovering the Hidden Gems", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod", name: "Eren Yagger", role: "Designer", img: "/images/testemonial4.jpg" },
                  { title: "My Magical Experience", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt expedita eveniet, dolorem optio, cupiditate quod", name: "Erin Jones", role: "CEO", img: "/images/testemonial2.jpg" },
                ].map((testimonial, idx) => (
                  <SwiperSlide key={idx} className="mx-2">
                    <div className="testimonial-box py-8 px-7 rounded text-center">
                      <div className="testimonial-rating mb-3">
                        <ul className="m-0 p-0 d-flex justify-content-center">
                          {[...Array(5)].map((_, i) => (
                            <li key={i} className="me-1">
                              <i className="fa fa-star yellow" aria-hidden="true"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="testimonial-box-body mb-5">
                        <h3 className="mb-4 lightblue">{testimonial.title}</h3>
                        <p className="white">&quot;{testimonial.text}&quot;</p>
                      </div>
                      <div className="testimonial-image mb-3">
                        <Image src={testimonial.img} alt={`testemonial-image-${testimonial.name}`} width={80} height={80} className="rounded-circle" />
                      </div>
                      <div className="testemonial-bio">
                        <span className="h5 fw-bold pink">{testimonial.name}</span>
                        <p className="mb-0 white">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="countdown-banner rounded p-7 m-auto text-center position-absolute">
          <div className="row gx-0 gx-md-5 align-items-center gy-5">
            <div className="col-lg-6 col-md-6">
              <div className="countdown-banner-info text-lg-start">
                <h4 className="pink mb-1">Travel Now</h4>
                <h2 className="text-uppercase mb-2">
                  Refresment Tour <br /><span className="blue">35% off</span>
                </h2>
                <p className="mb-2">Whatever your summer looks like, bring your own heat with up to 35% off on tours.</p>
                <Link href="/tour-detail.html" className="btn-blue btn-red rounded">Book Now</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="countdown-inner text-center">
                <p className="h4 fw-bold mb-4">Offer will end in :</p>
                <div className="countdown-main d-flex justify-content-between justify-content-md-around" id="countdown">
                  <div className="countdown-days">
                    <span id="days" className="fw-bold pink"></span>
                    <p className="mb-0">Days</p>
                  </div>
                  <div className="countdown-hours">
                    <span id="hours" className="fw-bold pink"></span>
                    <p className="mb-0">Hours</p>
                  </div>
                  <div className="countdown-minutes">
                    <span id="minutes" className="fw-bold pink"></span>
                    <p className="mb-0">Minutes</p>
                  </div>
                  <div className="countdown-seconds">
                    <span id="seconds" className="fw-bold pink"></span>
                    <p className="mb-0">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Ends */}

      {/* Blog Section */}
      <section className="blog py-10">
        <div className="container">
          <div className="blog-inner">
            <div className="section-title p-0 w-lg-60 text-center m-auto mb-6">
              <h5 className="pink fst-italic text-uppercase mb-1">Travel Blogs</h5>
              <h2 className="text-uppercase">Upto Date with our blogs & News</h2>
            </div>
            <div className="blog-body">
              <div className="row gy-4 align-items-stretch">
                <div className="col-lg-5">
                  <div className="blog-body-left position-relative h-100">
                    <div className="blog-image position-relative h-100">
                      <Link href="/blog-detail.html">
                        <Image src="/images/destination1.jpg" alt="blog-image" width={600} height={800} className="w-100 rounded h-100 object-cover" />
                      </Link>
                    </div>
                    <div className="blog-box-body py-7 px-6 position-absolute bottom-0">
                      <div className="blog-box-top-content mb-1">
                        <ul className="m-0 p-0 d-flex flex-wrap">
                          <li className="small white my-1">By <Link href="" className="white text-decoration-underline">Adam Gedes</Link></li>
                          <li className="mx-6 position-relative small white my-1">Sept 20 2024</li>
                          <li className="position-relative small white my-1">5 Comments</li>
                        </ul>
                      </div>
                      <h3 className="mb-4">
                        <Link href="/blog-detail.html" className="white">Journey Through Hidden Gems: Off the Beaten Path Adventures</Link>
                      </h3>
                      <div className="blog-box-bottom-content d-flex justify-content-between align-items-center">
                        <Link href="/blog-detail.html" className="btn-blue btn-red rounded px-3">View Post</Link>
                        <ul className="m-0 p-0 d-flex">
                          <li className="me-6 position-static"><Link href="" className="white"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                          <li className="me-6 position-relative"><Link href="" className="white"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                          <li className="me-6 position-relative"><Link href="" className="white"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
                          <li className="position-relative"><Link href="" className="white"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="blog-body-right">
                    <div className="blog-right-top">
                      <div className="row gy-4">
                        <div className="col-lg-12">
                          <div className="blog-box-top d-md-flex align-items-center rounded overflow-hidden box-shadow">
                            <div className="blog-image">
                              <Link href="/blog-detail.html">
                                <Image src="/images/list7.jpg" alt="blog-image" width={300} height={200} className="w-100 h-auto" />
                              </Link>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">By <Link href="" className="text-decoration-underline black">John Oliver</Link></li>
                                  <li className="mx-6 position-relative small">Adventure</li>
                                </ul>
                              </div>
                              <h3 className="mb-5">
                                <Link href="/blog-detail.html" className="black">Chasing Sunsets: The Best Spots to Watch the Sun Go Down in Nepal</Link>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <Link href="/blog-detail.html" className="btn-blue btn-red rounded px-3">View Post</Link>
                                <p className="mb-0 small"><i className="fa fa-book" aria-hidden="true"></i> 3 Min read</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-box-bottom rounded overflow-hidden box-shadow">
                            <div className="blog-image">
                              <Link href="">
                                <Image src="/images/slider-blog/slider1.jpg" alt="blog-image" width={400} height={300} className="w-100" />
                              </Link>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">By <Link href="" className="text-decoration-underline black">Lisa Gives</Link></li>
                                  <li className="mx-6 position-relative small">Athelic</li>
                                </ul>
                              </div>
                              <h3 className="mb-4">
                                <Link href="/blog-detail.html" className="black">Pedal Power: The Quest for the Champion&lquo;s Jersey</Link>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <Link href="/blog-detail.html" className="btn-blue btn-red rounded px-3">View Post</Link>
                                <p className="mb-0 small"><i className="fa fa-book" aria-hidden="true"></i> 5 Min read</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="blog-box-bottom box-shadow rounded overflow-hidden box-shadow">
                            <div className="blog-image">
                              <Link href="">
                                <Image src="/images/slider-blog/slider2.jpg" alt="blog-image" width={400} height={300} className="w-100" />
                              </Link>
                            </div>
                            <div className="blog-box-body p-4">
                              <div className="blog-box-top-content mb-3">
                                <ul className="m-0 p-0 d-flex">
                                  <li className="small">By <Link href="" className="text-decoration-underline black">Charles White</Link></li>
                                  <li className="mx-6 position-relative small">Dance</li>
                                </ul>
                              </div>
                              <h3 className="mb-4">
                                <Link href="/blog-detail.html" className="black">Rhythm Rebels: Boundaries on the Dance Floor</Link>
                              </h3>
                              <div className="blog-box-bottom-content d-flex justify-content-between">
                                <Link href="/blog-detail.html" className="btn-blue btn-red rounded px-3">View Post</Link>
                                <p className="mb-0 small"><i className="fa fa-book" aria-hidden="true"></i> 5 Min read</p>
                              </div>
                            </div>
                          </div>
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
      {/* Blog Section Ends */}

      {/* <TrustedPartners /> */}
      <Footer />

      {/* Query Modal */}
      {queryModalOpen && (
        <div id="queryModal" className="modal" style={{ display: "flex" }} onClick={() => setQueryModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setQueryModalOpen(false)}>&times;</span>
            <div id="modalBody">
              <iframe src="/query-form/index.html" className="w-100" style={{ minHeight: "600px", border: "none" }}></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
