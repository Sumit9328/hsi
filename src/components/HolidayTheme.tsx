"use client";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

export default function HolidayTheme() {
  const themes = [
    {
      title: "Honeymoon Gateways",
      desc: "Explore All Honeymoon Packages with Detailed Day-Wise Itineraries – Affordable Rates and Convenient EMI Options for Every Traveler!",
      img: "/images/honeymoon.jpg",
    },
    {
      title: "Adventure & Wildlife",
      desc: "Check All Packages for Adventure & Wildlife Day-Wise Itineraries – Affordable Prices & Easy EMI Options Available for Every Traveler!",
      img: "/images/wildlife.jpg",
    },
    {
      title: "Sea, Sun & Sand",
      desc: "Bask in golden sunshine, stroll along soft sandy shores, and let the rhythm of the waves awaken your spirit. Sea, sun, and sand—your perfect escape.",
      img: "/images/beach.jpg",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wide text-gray-800 uppercase">
          Holiday Theme
        </h2>
        <div className="flex items-center justify-center mt-2 mb-4">
          <div className="h-[1px] w-16 bg-gray-400" />
          <span className="mx-3 text-xl">💎</span>
          <div className="h-[1px] w-16 bg-gray-400" />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          From sunny beaches to charming cities, experience the perfect holiday
          blend of relaxation, exploration, and unforgettable moments designed
          to make your journey extraordinary…
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {themes.map((theme, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={theme.img}
                alt={theme.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              {/* <Button className="bg-[#c2185b] hover:bg-[#a3144d] text-white font-semibold rounded-md px-6 py-2 mb-4">
                Enquire Now
              </Button> */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {theme.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {theme.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
