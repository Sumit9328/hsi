"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function MagicalMaldives(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Magical Maldives</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip/popularasiatours">Popular Asia Tours</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Magical Maldives</li>
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
                  <Image src="/images/Banner-images/maldives.jpg" alt="Magical Maldives" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Magical Maldives - Paradise on Earth</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Experience the ultimate tropical paradise in the Maldives. Crystal-clear turquoise waters, pristine white sand beaches, luxurious overwater bungalows, and vibrant marine life await you in this dream destination.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Stay in luxurious overwater villa with private pool</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Snorkeling and diving in coral reefs</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Sunset cruise on a traditional dhoni boat</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Water sports activities - jet ski, parasailing</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Spa treatments and wellness experiences</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Romantic candlelight dinner on the beach</li>
                  </ul>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>5-star resort accommodation</li>
                        <li>All meals (breakfast, lunch, dinner)</li>
                        <li>Speedboat/seaplane transfers</li>
                        <li>Snorkeling equipment</li>
                        <li>Sunset cruise</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>International flights</li>
                        <li>Alcoholic beverages</li>
                        <li>Diving certifications</li>
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
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 5 Days / 4 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> Private/Couple</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Maldives</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Year Round</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$999 <small>/ per person</small></h3>
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

