"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

interface EMIPopupProps {
  title: string;
  options: string[];
  isOpen: boolean;
  onClose: () => void;
}

const EMIPopup: React.FC<EMIPopupProps> = ({ title, options, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="emi-overlay" style={{ display: 'block' }}>
      <div className="emi-popup">
        <h4>{title} EMI Options</h4>
        <ul>
          {options.map((option, idx) => (
            <li key={idx}>{option}</li>
          ))}
        </ul>
        <button className="close-popup" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function Tibet(): React.ReactElement {
  const [openEMI, setOpenEMI] = useState<string | null>(null);

  const destinations = [
    {
      id: "lhasa",
      title: "Lhasa Sacred City Tour",
      image: "/images/Banner-images/tibet.jpg",
      rating: 5,
      days: "5 days",
      price: "$959",
      emiOptions: ["3 months – $330/month", "6 months – $170/month"]
    },
    {
      id: "potala",
      title: "Potala Palace & Jokhang",
      image: "/images/Banner-images/tibet.jpg",
      rating: 5,
      days: "4 days",
      price: "$859",
      emiOptions: ["3 months – $290/month", "6 months – $150/month"]
    },
    {
      id: "everest",
      title: "Everest Base Camp Tour",
      image: "/images/Banner-images/tibet.jpg",
      rating: 5,
      days: "8 days",
      price: "$1259",
      emiOptions: ["3 months – $430/month", "6 months – $220/month"]
    },
    {
      id: "namtso",
      title: "Namtso Lake Pilgrimage",
      image: "/images/Banner-images/tibet.jpg",
      rating: 5,
      days: "6 days",
      price: "$1059",
      emiOptions: ["3 months – $360/month", "6 months – $185/month"]
    }
  ];

  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Tibet Tour Packages</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/asiatrip">Asia Trip</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Tibet</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      {/* Destinations */}
      <section className="destinations">
        <div className="container">
          <div className="row">
            {destinations.map((destination) => (
              <div key={destination.id} className="col-lg-3 col-md-6">
                <div className="card-destination">
                  <div className="card-image">
                    <Image src={destination.image} alt={destination.title} width={350} height={250} className="w-full h-auto object-cover" />
                    <Link href="#" className="book-btn">Book Now</Link>
                  </div>
                  <div className="card-content">
                    <h3 className="destination-title">{destination.title}</h3>
                    <div className="rating">
                      {Array.from({ length: destination.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="trip-info">
                      <i className="flaticon-time"></i> {destination.days} starts from
                    </p>
                    <span className="price">{destination.price}</span>
                    <button 
                      className="emi-button" 
                      onClick={() => setOpenEMI(destination.id)}
                    >
                      <span>EMI Options</span>
                    </button>
                  </div>
                </div>
                
                <EMIPopup
                  title={destination.title}
                  options={destination.emiOptions}
                  isOpen={openEMI === destination.id}
                  onClose={() => setOpenEMI(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedPartners />
      <Footer />
    </>
  );
}

