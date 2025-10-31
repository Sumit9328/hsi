"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function WondersOfUKAndScotland(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Wonders of UK and Scotland</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Wonders of UK and Scotland</li>
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
                  <Image src="/images/Banner-images/uk-scotland.jpg" alt="Wonders of UK and Scotland" width={800} height={500} className="w-full h-auto rounded" />
                </div>
                
                <h2 className="mb-4">Discover the Wonders of UK and Scotland</h2>
                
                <div className="tour-overview mb-4">
                  <h4>Tour Overview</h4>
                  <p>Experience the magical blend of historic grandeur and natural beauty across England and Scotland. From the bustling streets of London to the misty highlands of Scotland, this tour offers an unforgettable journey through some of Europe&apos;s most iconic destinations.</p>
                </div>

                <div className="tour-highlights mb-4">
                  <h4>Tour Highlights</h4>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check-circle text-success me-2"></i> Explore iconic landmarks of London including Big Ben, Tower Bridge, and Buckingham Palace</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Visit the historic Edinburgh Castle and walk the Royal Mile</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Discover the breathtaking Scottish Highlands</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Experience traditional Scottish culture and cuisine</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Visit Oxford or Cambridge University towns</li>
                    <li><i className="fa fa-check-circle text-success me-2"></i> Explore the mysterious Loch Ness</li>
                  </ul>
                </div>

                <div className="itinerary mb-4">
                  <h4>Tour Itinerary</h4>
                  <div className="accordion" id="itineraryAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#day1">
                          Day 1: Arrival in London
                        </button>
                      </h2>
                      <div id="day1" className="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Arrive at London Heathrow Airport. Transfer to your hotel. Evening free for leisure or optional London Eye experience.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day2">
                          Day 2: London City Tour
                        </button>
                      </h2>
                      <div id="day2" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Full day exploring London&apos;s iconic attractions including Big Ben, Westminster Abbey, Tower of London, and Buckingham Palace. Evening cruise on the Thames River.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day3">
                          Day 3: Oxford/Cambridge - Edinburgh
                        </button>
                      </h2>
                      <div id="day3" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Morning visit to Oxford or Cambridge University town. Afternoon train journey to Edinburgh, Scotland&apos;s historic capital.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day4">
                          Day 4: Edinburgh Exploration
                        </button>
                      </h2>
                      <div id="day4" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Visit Edinburgh Castle, walk the Royal Mile, explore Holyrood Palace, and enjoy views from Arthur&apos;s Seat.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#day5">
                          Day 5: Scottish Highlands
                        </button>
                      </h2>
                      <div id="day5" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
                        <div className="accordion-body">
                          Full day tour of the Scottish Highlands including Loch Ness, Glencoe, and traditional Highland villages.
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
                        <li>Accommodation in 4-star hotels</li>
                        <li>Daily breakfast</li>
                        <li>Airport transfers</li>
                        <li>Professional English-speaking guide</li>
                        <li>All entrance fees as per itinerary</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Exclusions</h4>
                      <ul>
                        <li>International flights</li>
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
                      <li className="mb-2"><i className="fa fa-clock-o me-2"></i> <strong>Duration:</strong> 7 Days / 6 Nights</li>
                      <li className="mb-2"><i className="fa fa-users me-2"></i> <strong>Group Size:</strong> 10-20 People</li>
                      <li className="mb-2"><i className="fa fa-map-marker me-2"></i> <strong>Location:</strong> UK & Scotland</li>
                      <li className="mb-2"><i className="fa fa-calendar me-2"></i> <strong>Departure:</strong> Year Round</li>
                    </ul>
                    <div className="tour-price mt-4">
                      <h3 className="text-primary">$1299 <small>/ per person</small></h3>
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

