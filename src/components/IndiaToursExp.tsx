"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Image from 'next/image';

export default function IndiaToursExp() {
  useEffect(() => {
    // Bootstrap JS import for any interactive components
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const tours = [
    {
      img: "/images/wildlife.jpg",
      title: "Wildlife, India Tour",
      price: "$659 / PER",
      desc: "Explore the wild heart of India’s untamed beauty."
    },
    {
      img: "/images/goa.jpg",
      title: "Goa Tours",
      price: "$659 / PER",
      desc: "Soak in the sun, sand, and spirit of Goa."
    },
    {
      img: "/images/kerala.jpg",
      title: "Kerala Tour Packages",
      price: "$659 / PER",
      desc: "Experience God’s Own Country in every moment."
    },
    {
      img: "/images/varanasi.jpg",
      title: "Varanasi Tour Packages",
      price: "$659 / PER",
      desc: "Explore the sacred ghats and timeless culture of Varanasi."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          From Mountains to Beaches - India Calls
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Explore the majestic Himalayas, serene backwaters, and golden shores.
          Every corner of India awaits with adventure, beauty, and unforgettable memories.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {tours.map((tour, index) => (
            <div key={index} className="col-md-6">
              <div className="flex bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="w-1/2">
                  import Image from &quot;next/image&quot;;

                  <Image
                    src={tour.img}
                    alt={tour.title}
                    width={800}       // approximate width
                    height={600}      // approximate height
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />

                </div>
                <div className="w-1/2 p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {tour.title}
                    </h4>
                    <p className="text-pink-600 font-medium text-sm">{tour.price}</p>
                    <p className="text-gray-500 text-sm mt-2">{tour.desc}</p>
                  </div>
                  <button className="btn btn-danger mt-4 text-white fw-semibold rounded-pill w-75">
                    View more details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
