"use client";

import Image from "next/image";
import React from "react";

export default function DestinationGrid() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[450px]">
        {/* Left large image */}
        <div className="relative md:col-span-2 h-full">
          <Image
            src="/images/thai.jpg"
            alt="Thailand"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Thai
          </h2>
        </div>

        {/* Right side 4 images grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {[
            { name: "Sri Lanka", img: "/images/srilanka.jpg" },
            { name: "Bhutan", img: "/images/bhutan.jpg" },
            { name: "Phuket", img: "/images/phuket.jpg" },
            { name: "Nepal", img: "/images/nepal.jpg" },
          ].map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
