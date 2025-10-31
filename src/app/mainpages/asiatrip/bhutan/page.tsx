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

export default function Bhutan(): React.ReactElement {
  const [openEMI, setOpenEMI] = useState<string | null>(null);

  const destinations = [
    {
      id: "thimphu",
      title: "Thimphu City Tour",
      image: "/images/Banner-images/BHUTAN-TOUR.jpg",
      rating: 5,
      days: "4 days",
      price: "$859",
      emiOptions: ["3 months – $290/month", "6 months – $150/month"]
    },
    {
      id: "paro",
      title: "Paro Valley & Tiger&apos;s Nest",
      image: "/images/Banner-images/BHUTAN-TOUR.jpg",
      rating: 5,
      days: "5 days",
      price: "$959",
      emiOptions: ["3 months – $320/month", "6 months – $165/month"]
    },
    {
      id: "punakha",
      title: "Punakha Dzong Tour",
      image: "/images/Banner-images/BHUTAN-TOUR.jpg",
      rating: 5,
      days: "6 days",
      price: "$1059",
      emiOptions: ["3 months – $360/month", "6 months – $185/month"]
    },
    {
      id: "bumthang",
      title: "Bumthang Cultural Tour",
      image: "/images/Banner-images/BHUTAN-TOUR.jpg",
      rating: 5,
      days: "7 days",
      price: "$1159",
      emiOptions: ["3 months – $390/month", "6 months – $200/month"]
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
            <h2>Bhutan Tour Packages</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/asiatrip">Asia Trip</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Bhutan</li>
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

