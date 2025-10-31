"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function EuropeanHoneymoonSpecial(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>European Honeymoon Special</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama</Link></li>
                <li className="breadcrumb-item active" aria-current="page">European Honeymoon Special</li>
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
                  <Image src="/images/Banner-images/european-honeymoon.jpg" alt="European Honeymoon Special" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">European Honeymoon Special</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Celebrate your love with a romantic journey through Europe&apos;s most enchanting destinations. From the romantic streets of Paris to the canals of Venice, this specially curated honeymoon package offers the perfect blend of romance, luxury, and unforgettable experiences.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-heart text-danger me-2"></i> Romantic dinner cruise on the Seine River in Paris</li>
                    <li><i className="fa fa-heart text-danger me-2"></i> Gondola ride through the canals of Venice</li>
                    <li><i className="fa fa-heart text-danger me-2"></i> Visit the Eiffel Tower and enjoy panoramic city views</li>
                    <li><i className="fa fa-heart text-danger me-2"></i> Explore the romantic Swiss Alps</li>
                    <li><i className="fa fa-heart text-danger me-2"></i> Wine tasting in the Italian countryside</li>
                    <li><i className="fa fa-heart text-danger me-2"></i> Luxury hotel accommodations with honeymoon perks</li>
                  </ul>
                </div>

                <div className="itinerary mb-4">
                  <h4>Tour Itinerary</h4>
                  <div className="accordion" id="itineraryAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#day1">
                          Day 1-3: Paris - The City of Love
                        </button>
                      </h2>
                      <div id="day1" className="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Explore Paris with visits to Eiffel Tower, Louvre Museum, Notre-Dame Cathedral. Enjoy a romantic dinner cruise on the Seine River. Stroll through Montmartre and visit Sacré-Cœur.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day2">
                          Day 4-5: Swiss Alps
                        </button>
                      </h2>
                      <div id="day2" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Travel to Switzerland. Visit Interlaken, enjoy scenic train rides through the Alps, and experience the beauty of Swiss mountains and lakes.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day3">
                          Day 6-8: Venice - City of Canals
                        </button>
                      </h2>
                      <div id="day3" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Explore Venice with romantic gondola rides, visit St. Mark&apos;s Basilica, Doge&apos;s Palace, and enjoy authentic Italian cuisine in charming trattorias.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day4">
                          Day 9-10: Rome - The Eternal City
                        </button>
                      </h2>
                      <div id="day4" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Discover Rome&apos;s ancient wonders including Colosseum, Roman Forum, Trevi Fountain, and Vatican City. Enjoy romantic evening walks through historic streets.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inclusions-exclusions">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inclusions</h4>
                      <ul>
                        <li>Luxury 5-star hotel accommodations</li>
                        <li>Daily breakfast & 3 romantic dinners</li>
                        <li>Airport transfers in private vehicle</li>
                        <li>Honeymoon amenities & decorations</li>
                        <li>Guided tours with skip-the-line access</li>
                        <li>Gondola ride in Venice</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>International flights</li>
                        <li>Other meals not mentioned</li>
                        <li>Personal expenses & shopping</li>
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
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 10 Days / 9 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> Private/Couple</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> Paris, Switzerland, Venice, Rome</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Year Round</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$1899 <small>/ per person</small></h3>
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

