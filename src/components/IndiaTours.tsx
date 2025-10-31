"use client";

import Image from "next/image";

export default function IndiaTours() {
  const tours = [
    {
      title: "North India Tours",
      img: "/images/north-india.jpg",
    },
    {
      title: "South India Tours",
      img: "/images/south-india.jpg",
    },
    {
      title: "West India Tour",
      img: "/images/west-india.jpg",
    },
    {
      title: "North East Sikkim Tours",
      img: "/images/northeast-sikkim.jpg",
    },
    {
      title: "Andaman",
      img: "/images/andaman.jpg",
    },
    {
      title: "Lakshadweep Tours",
      img: "/images/lakshadweep.jpg",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wide text-gray-800 uppercase">
          Explore India by Region
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Discover the beauty of India — from the snow-capped Himalayas to the
          serene beaches of the South. Choose your region and start your
          journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Background Image */}
            <div className="relative w-full h-64">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-lg font-semibold text-white mb-3 drop-shadow-md">
                {tour.title}
              </h3>
              <button className="bg-[#c2185b] hover:bg-[#a3144d] text-white font-semibold text-sm px-5 py-2 rounded-md transition-all">
                View more details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
