"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function Deals(): React.ReactElement {
  const dealsData = [
    { img: "/images/deal1.jpg", title: "Nepal Tour Packages", desc: "Celebrate your love in exotic destination like Nepal, sunset dinners, and unforgettable moments await" },
    { img: "/images/deal2.jpg", title: "Bhutan Tour Packages", desc: "Travel to Bhutan - offering its own magic, history, and beauty" },
    { img: "/images/deal3.jpg", title: "Tibet Tour Packages", desc: "From Himalayan monasteries to sacred temples, discover the soul of Asia through mindful journeys and timeless traditions." },
    { img: "/images/deal4.jpg", title: "Sri Lanka Tourism", desc: "Unwind in Sri Lanka - Where Every Day Feels Like a Holiday - Thailand Treasures – Explore, Relax, Repeat." },
    { img: "/images/deals5.jpg", title: "Magical Maldives Trip", desc: "Turn your dream holiday into reality - Maldives now! We are offering Book Now Pay Later" },
    { img: "/images/deals6.jpg", title: "Feel the Future - Only in Dubai", desc: "This Season, Make Dubai Your Next Stop - Best Rates Guaranteed! Hurry Up Now" },
    { img: "/images/deals7.jpg", title: "Discover Baku, Azerbaijan", desc: "Discover Baku - The Jewel of the Caspian Modern Wonders, Ancient Charm thats Only in Baku" },
    { img: "/images/deal3.jpg", title: "Fly to Thailand - Fun, Food & Freedom", desc: "Thailand for Every Traveller - Honeymoon, Family & Friends" },
  ];

  return (
    <section className="deals bg-gray-100 py-16 relative">
      <div className="container">
        {/* Section Title */}
        <div className="section-title section-title-white text-center mb-5">
          <h2 className="text-dark fw-bold">
            Discover Asia - Where Tradition Meets Adventure
          </h2>
          <div className="section-icon my-3">
            <i className="flaticon-diamond text-danger fs-4"></i>
          </div>
          <p className="text-muted mx-auto w-75">
            From ancient temples to tropical beaches, discover vibrant cultures,
            stunning landscapes, and unforgettable experiences across Asia. Your
            adventure begins here.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="deals-outer">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="deals-slider slider-button"
          >
            {dealsData.map((d, idx) => (
              <SwiperSlide key={idx}>
                <div className="col-lg-12">
                  <div className="deals-item bg-white rounded-3 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="deals-item-outer">
                      {/* Image Section */}
                      <div className="deals-image position-relative">
                        <Image
                          src={d.img}
                          alt={d.title}
                          width={400}
                          height={250}
                          className="img-fluid w-100"
                        />
                        {/* <span className="deal-price position-absolute top-2 end-2 bg-danger text-white px-3 py-1 rounded-pill small shadow">
                          EMIs
                        </span> */}
                      </div>

                      {/* Deal Content */}
                      <div className="deal-content p-4">
                        <div className="deal-rating mb-2 text-warning">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star-o"></span>
                          <span className="fa fa-star-o"></span>
                        </div>
                        <h3 className="h5 fw-bold mb-2 text-dark">{d.title}</h3>
                        <p className="text-muted small mb-3">{d.desc}</p>
                        <a
                          href="/tour-detail.html"
                          className="btn btn-danger btn-sm text-white px-4 py-2 rounded-pill"
                        >
                          View All Packages
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
