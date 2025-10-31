"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopDestinations() {
  const destinations = [
    {
      img: "/images/nepal.jpg",
      title: "Nepal Tour",
      price: "$659 / PER",
      days: "5 days",
    },
    {
      img: "/images/bhutan.jpg",
      title: "Bhutan Tour",
      price: "$659 / PER",
      days: "5 days",
    },
    {
      img: "/images/rajasthan.jpg",
      title: "Rajasthan Tour",
      price: "$659 / PER",
      days: "5 days",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Top Destinations
          </h2>
          <div className="text-pink-600 text-lg mt-2">
            <i className="flaticon-diamond"></i>
          </div>
          <p className="text-gray-600 mt-2">
            Explore India’s most iconic destinations, from serene beaches to majestic mountains and vibrant cities.
            Discover unforgettable experiences at every corner of the country.
          </p>
        </div>

        <div className="row justify-center">
          {destinations.map((d, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <div className="border shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <Image
                  src={d.img}
                  alt={d.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{d.title}</h3>
                  <button className="btn btn-danger mt-2">Enquire Now</button>
                  <p className="text-pink-700 font-bold mt-3">{d.price}</p>
                </div>
                <div className="bg-blue-900 text-white flex justify-between items-center px-4 py-2">
                  <div className="flex gap-1">
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>
                  </div>
                  <span className="text-sm">{d.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
