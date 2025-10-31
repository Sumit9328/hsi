"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function AsiaTrip(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Asia Trip Destinations</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Asia Destinations</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      {/* Destinations */}
      <section className="destinations destination-padding">
        <div className="container">
          <div className="row mix asia">

            <div className="col-lg-4 col-md-6">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/nepal.webp" alt="Nepal Tour" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/asiatrip/nepal" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/asiatrip/nepal">Nepal Tour</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/BHUTAN-TOUR.jpg" alt="Bhutan Tour" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/asiatrip/bhutan" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/asiatrip/bhutan">Bhutan Tour</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/tibet.jpg" alt="Tibet Tour" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/asiatrip/tibet" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/asiatrip/tibet">Tibet Tour</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/srilanka.jpg" alt="Sri Lanka Tour" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/asiatrip/srilanka" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/asiatrip/srilanka">Sri Lanka Tour</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span></p>
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

