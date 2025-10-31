// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function HeroSlider() {
//   const [form, setForm] = useState({
//     destination: "",
//     type: "",
//     date: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("Searching packages...");
//   };

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/hero-tiger.jpg" // <-- put your tiger image here in /public/images/
//           alt="Discover India"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" /> {/* dark overlay */}
//       </div>

//       {/* Content overlay */}
//       <div className="relative z-10 text-center px-4 text-white max-w-4xl mx-auto">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">
//           “DISCOVER INDIA, ONE JOURNEY AT A TIME”
//         </h1>
//         <p className="text-lg text-blue-200 mb-8">
//           Exciting Schemes Just A Click Away
//         </p>

//         {/* Search form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/20 backdrop-blur-md rounded-lg flex flex-col md:flex-row justify-center gap-3 md:gap-0 max-w-3xl mx-auto p-4 md:p-2 shadow-lg"
//         >
//           <select
//             name="destination"
//             value={form.destination}
//             onChange={handleChange}
//             className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md md:rounded-l-md focus:outline-none"
//           >
//             <option value="">Destination</option>
//             <option>Rajasthan</option>
//             <option>Kerala</option>
//             <option>Goa</option>
//             <option>Himachal</option>
//           </select>

//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md focus:outline-none"
//           >
//             <option value="">Type</option>
//             <option>Adventure</option>
//             <option>Honeymoon</option>
//             <option>Wildlife</option>
//           </select>

//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="bg-[#c2185b] hover:bg-[#a3144d] text-white font-semibold px-8 py-3 rounded-md md:rounded-r-md transition-all"
//           >
//             SEARCH
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { useState } from "react";

export default function HeroSlider() {
  const slides = [
    { img: "/images/slider1.jpg" },
    { img: "/images/slider2.jpg" },
    { img: "/images/slider3.jpg" },
  ];

  const [form, setForm] = useState({
    destination: "",
    type: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Searching...");
  };


  return (
    <section className="relative w-full h-screen">
      {/* ======== SWIPER SLIDES ======== */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.img}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ======== OVERLAY CONTENT ======== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          “DISCOVER INDIA, ONE JOURNEY AT A TIME”
        </h1>
        <p className="text-lg text-blue-200 mb-8">
          Exciting Schemes Just A Click Away
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-md rounded-lg flex flex-col md:flex-row justify-center gap-3 md:gap-0 max-w-3xl mx-auto p-4 md:p-2 shadow-lg"
        >
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md md:rounded-l-md focus:outline-none"
          >
            <option value="">Destination</option>
            <option>Rajasthan</option>
            <option>Kerala</option>
            <option>Goa</option>
            <option>Himachal</option>
          </select>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md focus:outline-none"
          >
            <option value="">Type</option>
            <option>Adventure</option>
            <option>Honeymoon</option>
            <option>Wildlife</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="md:flex-1 px-4 py-3 bg-white text-gray-700 rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#c2185b] hover:bg-[#a3144d] text-white font-semibold px-8 py-3 rounded-md md:rounded-r-md transition-all"
          >
            SEARCH
          </button>
        </form>
      </div>
    </section>
  );
}
