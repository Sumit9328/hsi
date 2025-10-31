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

export default function Nepal(): React.ReactElement {
  const [openEMI, setOpenEMI] = useState<string | null>(null);

  const destinations = [
    {
      id: "kathmandu",
      title: "Kathmandu Valley Tour",
      image: "/images/Banner-images/nepal.webp",
      rating: 5,
      days: "5 days",
      price: "$659",
      emiOptions: ["3 months – $230/month", "6 months – $120/month"]
    },
    {
      id: "pokhara",
      title: "Pokhara Adventure Tour",
      image: "/images/Banner-images/nepal.webp",
      rating: 5,
      days: "4 days",
      price: "$559",
      emiOptions: ["3 months – $200/month", "6 months – $100/month"]
    },
    {
      id: "chitwan",
      title: "Chitwan National Park",
      image: "/images/Banner-images/nepal.webp",
      rating: 5,
      days: "3 days",
      price: "$459",
      emiOptions: ["3 months – $160/month", "6 months – $85/month"]
    },
    {
      id: "lumbini",
      title: "Lumbini Pilgrimage Tour",
      image: "/images/Banner-images/nepal.webp",
      rating: 5,
      days: "6 days",
      price: "$759",
      emiOptions: ["3 months – $260/month", "6 months – $135/month"]
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
            <h2>Nepal Tour Packages</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/asiatrip">Asia Trip</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Nepal</li>
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

