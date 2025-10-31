"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function InternationalTrip(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>International Trip Destinations</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">International Destinations</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      {/* Destinations */}
      <section className="destinations destination-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Explore International Tours</h2>
            <p>Discover amazing destinations across Europe, Asia, and beyond</p>
          </div>

          <div className="row">

            {/* European Panorama */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/europe.jpg" alt="European Panorama" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama">European Panorama</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Explore the beauty of European countries</p>
                </div>
              </div>
            </div>

            {/* Popular Asia Tours */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/asia-tours.jpg" alt="Popular Asia Tours" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours">Popular Asia Tours</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Discover exotic Asian destinations</p>
                </div>
              </div>
            </div>

            {/* Country Specific */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/world-tours.jpg" alt="Country Specific Tours" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/countryspecific" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/countryspecific">Country-Specific Tours</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Explore country-specific tour packages</p>
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

