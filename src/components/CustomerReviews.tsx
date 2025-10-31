"use client";

import Image from "next/image";
import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Christopher Daniel",
      img: "/images/review1.jpg",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
    },
    {
      name: "Johnson Neil",
      img: "/images/review2.jpg",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
    },
    {
      name: "Danail Chrish",
      img: "/images/review3.jpg",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
    },
  ];

  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 uppercase">
          Customer Reviews
        </h2>
        <p className="text-sm text-blue-600 mt-2 hover:underline cursor-pointer">
          View all reviews ➜
        </p>
        <p className="text-md text-gray-600 font-medium mt-1">Testimonial</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#e0004d] text-white p-5 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={review.img}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{review.name}</h3>
              <p className="text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
