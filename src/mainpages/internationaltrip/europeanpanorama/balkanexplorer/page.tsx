"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function BalkanExplorer(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Balkan Explorer</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Balkan Explorer</li>
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
                  <Image src="/images/Banner-images/balkan.jpg" alt="Balkan Explorer" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Explore the Balkans</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Discover the hidden treasures of the Balkan Peninsula. Journey through Croatia, Slovenia, Bosnia & Herzegovina, and Montenegro, experiencing diverse cultures, stunning landscapes, and rich history.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Explore Dubrovnik&apos;s ancient city walls</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Visit stunning Plitvice Lakes National Park</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Discover Ljubljana&apos;s charming old town</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Explore Sarajevo&apos;s multicultural heritage</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Experience Montenegro&apos;s Bay of Kotor</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Taste authentic Balkan cuisine</li>
                  </ul>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>3-star hotel accommodations</li>
                        <li>Daily breakfast</li>
                        <li>Coach transportation</li>
                        <li>English-speaking guide</li>
                        <li>National park entry fees</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>International flights</li>
                        <li>Lunch and dinner</li>
                        <li>Personal expenses</li>
                        <li>Travel insurance</li>
                        <li>Optional tours</li>
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
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 8 Days / 7 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> 12-18 People</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Croatia, Slovenia, Bosnia, Montenegro</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> May-Sep</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$1199 <small>/ per person</small></h3>
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

