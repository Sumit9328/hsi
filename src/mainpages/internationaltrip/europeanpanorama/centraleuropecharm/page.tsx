"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function CentralEuropeCharm(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Central Europe Charm</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Central Europe Charm</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      <section className="tour-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-detail-content">
                <div className="tour-detail-image mb-4">
                  <Image src="/images/Banner-images/central-europe.jpg" alt="Central Europe Charm" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Experience Central Europe Charm</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Immerse yourself in the rich cultural heritage of Central Europe. From imperial palaces to medieval towns, explore Austria, Hungary, Czech Republic, and Poland on this enchanting journey through Europe&apos;s heartland.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Vienna&apos;s imperial palaces and classical music heritage</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Budapest&apos;s thermal baths and Parliament building</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Prague&apos;s astronomical clock and Charles Bridge</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Krakow&apos;s Wawel Castle and Jewish Quarter</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Visit to Schönbrunn Palace</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Traditional Central European cuisine experiences</li>
                  </ul>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>4-star hotel accommodations</li>
                        <li>Daily breakfast</li>
                        <li>Inter-city transportation</li>
                        <li>Professional tour guide</li>
                        <li>Entrance fees to attractions</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>International airfare</li>
                        <li>Lunch and dinner</li>
                        <li>Personal expenses</li>
                        <li>Travel insurance</li>
                        <li>Optional activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tour-sidebar">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Tour Information</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 9 Days / 8 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> 12-20 People</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Austria, Hungary, Czech Republic, Poland</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Year Round</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$1599 <small>/ per person</small></h3>
                      <button className="btn btn-danger btn-block w-100 mt-3">Book Now</button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Need Help?</h4>
                    <p>Contact us for any queries</p>
                    <p><i className="fa fa-phone me-2"></i> (011)-71573058</p>
                    <p><i className="fa fa-envelope me-2"></i> info@holidayseason.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedPartners />
      <Footer />
    </>
  );
}

