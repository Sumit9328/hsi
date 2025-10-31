"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function AndamanTourism(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Andaman Islands Tourism</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/indiatravel">India Travel</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Andaman Tourism</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      {/* Tour Details */}
      <section className="tour-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-detail-content">
                <div className="tour-detail-image mb-4">
                  <Image src="/images/Banner-images/andaman.jpg" alt="Andaman Islands" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Andaman Islands - Tropical Paradise</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Escape to the pristine beaches and crystal-clear waters of the Andaman Islands. Experience world-class diving, snorkeling, and water sports in this tropical paradise. Discover the rich history, virgin beaches, and incredible marine life of India&apos;s most beautiful island destination.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Radhanagar Beach - Asia&apos;s Best Beach</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Cellular Jail - Historic Freedom Struggle Site</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Havelock Island water sports and diving</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Neil Island - Relaxing beach experience</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Ross Island - Colonial ruins</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Baratang Island limestone caves</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Snorkeling at Elephant Beach</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Light & Sound Show at Cellular Jail</li>
                  </ul>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>3-star beachfront hotel accommodation</li>
                        <li>Daily breakfast</li>
                        <li>Airport & ferry transfers</li>
                        <li>Sightseeing as per itinerary</li>
                        <li>Cellular Jail entry & show tickets</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>Flight tickets to Port Blair</li>
                        <li>Lunch and dinner</li>
                        <li>Water sports activities</li>
                        <li>Personal expenses</li>
                        <li>Travel insurance</li>
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
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 6 Days / 5 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> 2-20 People</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Andaman & Nicobar Islands</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Oct-May (Best Season)</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$799 <small>/ per person</small></h3>
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

