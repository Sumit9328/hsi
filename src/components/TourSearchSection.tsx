"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaBuilding, FaBriefcase } from "react-icons/fa";

export default function TourSearchSection() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          Search Your Best Tours
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Search Form */}
      <div className="flex flex-wrap justify-center items-center gap-3 w-[90%] md:w-[80%] mx-auto">
        {/* Destination Dropdown */}
        <select className="form-select border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-pink-600">
          <option>Destination</option>
          <option>India</option>
          <option>Bali</option>
          <option>Dubai</option>
          <option>Thailand</option>
        </select>

        {/* Type Dropdown */}
        <select className="form-select border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-pink-600">
          <option>Type</option>
          <option>Adventure</option>
          <option>Luxury</option>
          <option>Family</option>
          <option>Honeymoon</option>
        </select>

        {/* Date Picker */}
        <div className="flex items-center border border-gray-300 rounded-md w-full md:w-1/4 px-3 py-1">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="w-full outline-none py-2"
          />
        </div>

        {/* Search Button */}
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md transition">
          SEARCH
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 w-[90%] md:w-[70%] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-pink-600 text-white p-6 rounded-full text-3xl shadow-md">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-lg font-semibold mt-4">Beautiful Places</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-200 text-gray-600 p-6 rounded-full text-3xl shadow-md">
            <FaBuilding />
          </div>
          <h3 className="text-lg font-semibold mt-4">Diverse Destinations</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-200 text-gray-600 p-6 rounded-full text-3xl shadow-md">
            <FaBriefcase />
          </div>
          <h3 className="text-lg font-semibold mt-4">Value for Money</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.
          </p>
        </div>
      </div>
    </section>
  );
}
