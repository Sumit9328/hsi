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

export default function HolidayThemePage(): React.ReactElement {
  const [queryModalOpen, setQueryModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });

  const holidayThemes = [
    { name: "First Timer India", img: "/images/holidaytheme/firsttimer.png", price: "$659", days: "5 days" },
    { name: "Same Day India Tour", img: "/images/holidaytheme/samedayindia.png", price: "$659", days: "5 days" },
    { name: "Famous Hill Stations", img: "/images/holidaytheme/famoushill.png", price: "$659", days: "5 days" },
    { name: "Group Tour", img: "/images/holidaytheme/groupttour.png", price: "$659", days: "5 days" },
    { name: "Luxury India", img: "/images/holidaytheme/luxuryindia.png", price: "$659", days: "5 days" },
    { name: "Fixed Departure", img: "/images/holidaytheme/fixeddeparture.png", price: "$659", days: "5 days" },
    { name: "Honeymoon Gateways", img: "/images/holidaytheme/honeymoongateways.png", price: "$659", days: "5 days" },
    { name: "Sea Sun & Sand", img: "/images/holidaytheme/seasunsand.png", price: "$659", days: "5 days" },
    { name: "Adventure & Wildlife", img: "/images/holidaytheme/adventurewildlife.png", price: "$659", days: "5 days" },
    { name: "Heritage & Culture", img: "/images/holidaytheme/heritageculture.png", price: "$659", days: "5 days" },
    { name: "Forts & Palaces", img: "/images/holidaytheme/fortsandplaces.png", price: "$659", days: "5 days" },
    { name: "Festivals of India", img: "/images/holidaytheme/festivalsofindia.png", price: "$659", days: "5 days" },
    { name: "Ayurveda & Spa", img: "/images/holidaytheme/ayurvedaandspa.png", price: "$659", days: "5 days" },
    { name: "Luxury Trains", img: "/images/holidaytheme/luxurytrains.png", price: "$659", days: "5 days" },
    { name: "Pilgrimage Tour", img: "/images/holidaytheme/pilgrimage.png", price: "$659", days: "5 days" },
  ];

  const dealsOnSale = [
    { img: "/images/holidaytheme/adventurewildlife.png", title: "Surfing at Bahamas", days: "5 days", oldPrice: "$1449", newPrice: "$900" },
    { img: "/images/holidaytheme/famoushill.png", title: "Surfing at Bahamas", days: "5 days", oldPrice: "$1449", newPrice: "$900" },
    { img: "/images/holidaytheme/festivalsofindia.png", title: "Surfing at Bahamas", days: "5 days", oldPrice: "$1449", newPrice: "$900" },
    { img: "/images/holidaytheme/firsttimer.png", title: "Surfing at Bahamas", days: "5 days", oldPrice: "$1449", newPrice: "$900" },
  ];

  const testimonials = [
    { text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.", img: "/images/testemonial2.jpg", name: "Susan Doe, Houston" },
    { text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.", img: "/images/testemonial3.jpg", name: "Susan Doe, Houston" },
    { text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.", img: "/images/testemonial4.jpg", name: "Susan Doe, Houston" },
  ];

  useEffect(() => {
    // Initialize Bootstrap carousel if needed
    // Price range slider functionality can be added here
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Banner Section */}
      <section id="home_banner" className="banner-style-1 position-relative" style={{ height: "600px" }}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="carousel slide ps_control_hrbrarrow swipe_x ps_easeOutQuint"
          style={{ height: "100%" }}
        >
          <SwiperSlide className="carousel-item item active position-relative" style={{ height: "600px" }}>
            <div className="position-relative w-100 h-100">
              <Image src="/images/ban-images/tibbet.jpg" alt="Tibet Tour" fill className="object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="carousel-item item position-relative" style={{ height: "600px" }}>
            <div className="position-relative w-100 h-100">
              <Image src="/images/ban-images/nepaltour.webp" alt="Nepal Tour" fill className="object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="carousel-item item position-relative" style={{ height: "600px" }}>
            <div className="position-relative w-100 h-100">
              <Image src="/images/ban-images/bhutantour.jpg" alt="Bhutan Tour" fill className="object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Content */}
        <div className="js_frm_subscribe position-absolute top-50 start-50 translate-middle w-100 text-center" style={{ zIndex: 10 }}>
          <div className="kenburns_061_slide slider-content">
            <h1 className="text-white mb-3">Find the perfect vacation</h1>
            <h2 className="text-white mb-4">Cost friendly packages on your way</h2>
            <Link href="/tour-detail.html" className="btn-blue btn-red btn-style-1">Learn more</Link>
          </div>
        </div>
      </section>
      {/* Banner Ends */}

      {/* Search Box */}
      <div className="search-box clearfix">
        <div className="container">
          <div className="search-outer">
            <div className="search-content">
              <form>
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-12">
                    <div className="search-title d-flex align-items-center justify-content-between">
                      <p>Find Your <span>Holiday</span></p>
                      <i className="flaticon-sun-umbrella"></i>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="row table_item">
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <select className="wide form-control">
                            <option value="0">Destination</option>
                            <option value="1">Nepal</option>
                            <option value="2">Bhutan</option>
                            <option value="3">Tibet</option>
                            <option value="4">Sri Lanka</option>
                            <option value="5">Thailand</option>
                          </select>
                          <i className="flaticon-maps-and-flags"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group form-icon">
                          <select className="wide form-control">
                            <option value="0">Type</option>
                            <option value="1">Family Tour</option>
                            <option value="2">Honeymoon Tour</option>
                            <option value="3">Group Tour</option>
                            <option value="4">Solo Tour</option>
                            <option value="5">Adventure Tour</option>
                          </select>
                          <i className="flaticon-box"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="table_item">
                      <div className="form-group mb-3">
                        <div className="input-group date">
                          <input type="date" className="form-control" />
                          <i className="flaticon-calendar"></i>
                          <span className="input-group-addon">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group form-icon">
                        <div className="input-group date">
                          <input type="date" className="form-control" />
                          <i className="flaticon-calendar"></i>
                          <span className="input-group-addon">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12">
                    <div className="table_item table-item-slider">
                      <div className="range-slider mt-0">
                        <p className="text-start mb-2">Price Range</p>
                        <div className="range-slider-ui">
                          <span className="min-value">{priceRange.min} $</span>
                          <span className="max-value">{priceRange.max} $</span>
                          <input
                            type="range"
                            min="0"
                            max="20000"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                            className="form-range"
                          />
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="search">
                        <button type="submit" className="btn-blue btn-red">SEARCH</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Search Box Ends */}

      {/* Top Destinations - Holiday Theme */}
      <section className="top-destinations-1 pb-5">
        <div className="container">
          <div className="section-title text-center">
            <h2>Holiday Theme</h2>
            <div className="section-icon">
              <i className="flaticon-diamond"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit..
            </p>
          </div>
          <div className="row">
            {holidayThemes.map((theme, index) => (
              <div key={index} className="col-lg-4 col-md-12 mar-bottom-30">
                <div className="destination-item-1 box-item">
                  <div className="destination-image-1">
                    <Image src={theme.img} alt={theme.name} width={400} height={300} className="w-100" style={{ objectFit: "cover", height: "250px" }} />
                  </div>
                  <div className="destination-content-1">
                    <div className="destination-upper d-flex justify-content-between align-items-start">
                      <div>
                        <h4 className="text-[18px] font-semibold"><Link href="/tour-detail.html">{theme.name}</Link></h4>
                        <p className="top-price text-red-600 font-bold mt-1"><span>{theme.price}</span> / PER</p>
                      </div>
                      <div>
                        <a href="javascript:void(0)" className="enquire-btn btn text-white px-4 py-1 rounded-md" style={{ backgroundColor: "#d70d45" }} onClick={() => setQueryModalOpen(true)}>
                          Enquire Now
                        </a>
                      </div>
                    </div>
                    <div className="destination-lower clearfix mt-3">
                      <p className="package-days"><i className="flaticon-time"></i> {theme.days}</p>
                      <div className="deal-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star-o"></span>
                        <span className="fa fa-star-o"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Top Destination Ends */}

      {/* Full Tours */}
      <section className="full-tours">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="ft-item position-relative" style={{ height: "600px" }}>
              <div className="ft-image position-relative w-100 h-100">
                <Image src="/images/ban-images/nepaltour.webp" alt="Hot Air Ballooning" fill className="object-cover" />
                <div className="ft-overlay"></div>
              </div>
              <div className="ft-content position-absolute">
                <h2><Link href="#">Hot Air Ballooning</Link></h2>
                <p>Starting from <span>$ 325</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="ft-item position-relative" style={{ height: "300px" }}>
              <div className="ft-image position-relative w-100 h-100">
                <Image src="/images/ban-images/tibbet.jpg" alt="Surfing at Goa" fill className="object-cover" />
                <div className="ft-overlay"></div>
              </div>
              <div className="ft-content position-absolute">
                <h2><Link href="#">Surfing at Goa</Link></h2>
                <p>Starting from <span>$ 325</span></p>
              </div>
            </div>
            <div className="ft-item position-relative" style={{ height: "300px" }}>
              <div className="ft-image position-relative w-100 h-100">
                <Image src="/images/countries/phuket.avif" alt="Sailing Thailand" fill className="object-cover" />
                <div className="ft-overlay"></div>
              </div>
              <div className="ft-content position-absolute">
                <h2><Link href="#">Sailing Thailand</Link></h2>
                <p>Starting from <span>$ 325</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="ft-item position-relative" style={{ height: "300px" }}>
              <div className="ft-image position-relative w-100 h-100">
                <Image src="/images/ban-images/bhutantour.jpg" alt="Lake Tohoe Adventure" fill className="object-cover" />
                <div className="ft-overlay"></div>
              </div>
              <div className="ft-content position-absolute">
                <h2><Link href="#">Lake Tohoe Adventure</Link></h2>
                <p>Starting from <span>$ 325</span></p>
              </div>
            </div>
            <div className="ft-item position-relative" style={{ height: "300px" }}>
              <div className="ft-image position-relative w-100 h-100">
                <Image src="/images/countries/japan.jpg" alt="Dancing in Bali" fill className="object-cover" />
                <div className="ft-overlay"></div>
              </div>
              <div className="ft-content position-absolute">
                <h2><Link href="#">Dancing in Bali</Link></h2>
                <p>Starting from <span>$ 325</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Full Tour Ends */}

      {/* Testimonials */}
      <section className="testimonial-1 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-content">
                <div className="youtube-hover position-relative" id="youtube-hover">
                  <Image src="/images/holidaytheme/thumbnail.png" alt="Holiday Season India YouTube Channel" width={600} height={400} className="w-100" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <a href="https://www.youtube.com/@holidayseasonindia" target="_blank" rel="noopener noreferrer" className="btn-play">
                      <i className="fa fa-play-circle" style={{ fontSize: "80px", color: "#d70d45" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-inner">
                <div className="testimonial-title">
                  <h3>Testimonials</h3>
                </div>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={true}
                  autoplay={{ delay: 5000 }}
                  loop={true}
                  className="testimonial-slider"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial_095_slide">
                        <p>{testimonial.text}</p>
                        <div className="testimonial-image">
                          <Image src={testimonial.img} alt={testimonial.name} width={80} height={80} className="rounded-circle" />
                        </div>
                        <div className="deal-rating">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star-o"></span>
                          <span className="fa fa-star-o"></span>
                        </div>
                        <h5><Link href="#">{testimonial.name}</Link></h5>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-overlay"></div>
      </section>
      {/* Testimonials Ends */}

      {/* Deals On Sale */}
      <section className="deals-on-sale pt-5">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="pt-5">Deals On Sale</h2>
            <div className="section-icon">
              <i className="flaticon-diamond"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit..
            </p>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 4000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="sale-slider slider-button"
          >
            {dealsOnSale.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="sale-item box-item position-relative">
                  <div className="sale-image">
                    <Image src={deal.img} alt={deal.title} width={400} height={300} className="w-100" style={{ objectFit: "cover", height: "250px" }} />
                  </div>
                  <div className="sale-content-1 sale-content">
                    <div className="sale-review">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                    <h3><Link href="#">{deal.title}</Link></h3>
                    <div className="sale-content-inner">
                      <p><i className="flaticon-time"></i> {deal.days}</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      <Link href="/tour-detail.html" className="btn-blue btn-red btn-style-1">View More</Link>
                    </div>
                  </div>
                  <div className="sale-tag position-absolute">
                    <span className="old-price">{deal.oldPrice}</span>
                    <span className="new-price"> {deal.newPrice}</span>
                  </div>
                  <div className="sale-overlay"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Deals On Sale Ends */}

      <TrustedPartners />
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

