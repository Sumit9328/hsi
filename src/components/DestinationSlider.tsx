"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const destinations = [
  {
    name: "Bali",
    image: "/images/bali.jpg",
  },
  {
    name: "Bhutan",
    image: "/images/bhutan.jpg",
  },
  {
    name: "Dubai",
    image: "/images/dubai.jpg",
  },
  {
    name: "Thailand",
    image: "/images/thailand.jpg",
  },
];

export default function DestinationSlider() {
  return (
    <div className="w-full py-8 bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        loop
        className="w-[95%] mx-auto"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            import Image from &quot;next/image&quot;;

<Image
  src={dest.image}
  alt={dest.name}
  width={800} // You can adjust this based on layout
  height={450}
  className="w-full h-[450px] object-cover group-hover:scale-105 transition-all duration-500"
  priority={false} // optional: use `true` for above-the-fold images
  sizes="(max-width: 768px) 100vw, 800px" // helps with responsive loading
/>

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{dest.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
