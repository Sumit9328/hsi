"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function LakshadweepTourism(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Lakshadweep Islands Tourism</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/indiatravel">India Travel</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Lakshadweep Tourism</li>
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
                  <Image src="/images/Banner-images/lakshadweep.jpg" alt="Lakshadweep Islands" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Lakshadweep - India&apos;s Best Kept Secret</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Discover the untouched beauty of Lakshadweep, India&apos;s smallest Union Territory. With pristine coral reefs, turquoise lagoons, and white sand beaches, Lakshadweep offers an exclusive tropical getaway. Perfect for honeymooners, adventure seekers, and nature lovers looking for a peaceful island escape.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Agatti Island - Gateway to Lakshadweep</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Bangaram Island - Coral paradise</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Kavaratti - Administrative capital</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Minicoy Island - Lighthouse & culture</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Glass-bottom boat rides</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Scuba diving and snorkeling</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Kayaking in lagoons</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Sunset cruises</li>
                  </ul>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>Beach resort accommodation</li>
                        <li>All meals (breakfast, lunch, dinner)</li>
                        <li>Ship/helicopter transfers</li>
                        <li>Sightseeing tours</li>
                        <li>Snorkeling equipment</li>
                        <li>Entry permits</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>Flight to Kochi/Agatti</li>
                        <li>Alcoholic beverages</li>
                        <li>Scuba diving certification</li>
                        <li>Personal expenses</li>
                        <li>Travel insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info mt-4">
                  <strong>Note:</strong> Lakshadweep requires special entry permits. All arrangements including permits are handled by us. Foreign nationals need additional clearances.
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
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> 4-15 People</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Lakshadweep Islands</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Oct-May (Best Season)</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$899 <small>/ per person</small></h3>
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

