"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurTopDestinations() {
  const tours = [
    {
      img: "/images/wildlife.jpg",
      title: "Wildlife Adventure Tours",
      desc: "Embark on an exciting journey through India's wild landscapes, spotting majestic animals and experiencing nature like never before.",
    },
    {
      img: "/images/adventure.jpg",
      title: "Adventure Tours",
      desc: "Experience thrilling adventures across India’s landscapes, from mountains to rivers, and create memories filled with excitement and discovery.",
    },
    {
      img: "/images/honeymoon.jpg",
      title: "Honey Moon Tours",
      desc: "Celebrate love with a romantic getaway to India's most enchanting destinations. Relax, explore, and create unforgettable memories together.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Our Top Destinations
          </h2>
          <div className="text-pink-600 text-lg mt-2">
            <i className="flaticon-diamond"></i>
          </div>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover the most breathtaking destinations across India, from tranquil beaches to majestic mountains
            and vibrant cities. Every location promises unforgettable experiences and memories to cherish.
          </p>
        </div>

        <div className="row justify-center">
          {tours.map((t, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src={t.img}
                  alt={t.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <button className="btn btn-danger mb-3">Enquire Now</button>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{t.desc}</p>
                  <div className="flex justify-between items-center mt-3 text-gray-500 text-sm border-t pt-3">
                    <div>
                      <i className="fa fa-user mr-2"></i>Jack Richard
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <i className="fa fa-eye mr-1"></i>24
                      </span>
                      <span>
                        <i className="fa fa-heart mr-1"></i>5
                      </span>
                      <span>
                        <i className="fa fa-comment mr-1"></i>0
                      </span>
                    </div>
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
