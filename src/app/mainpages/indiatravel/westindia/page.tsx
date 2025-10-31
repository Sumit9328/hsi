"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function WestIndia(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>West India Tours</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/indiatravel">India Travel</Link></li>
                <li className="breadcrumb-item active" aria-current="page">West India</li>
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
            <h2>Explore West India</h2>
            <p>Discover the beaches, vibrant cities, and cultural heritage of Western India</p>
          </div>

          <div className="row">

            {/* Goa Tour */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/goa-tourism.jpg" alt="Goa" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Goa Tour Packages</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$599</span></p>
                </div>
              </div>
            </div>

            {/* Mumbai */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/mumbai.jpg" alt="Mumbai" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Mumbai Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 4 days starts from <span className="bold">$499</span></p>
                </div>
              </div>
            </div>

            {/* Gujarat */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/gujarat.jpg" alt="Gujarat" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Gujarat Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 6 days starts from <span className="bold">$649</span></p>
                </div>
              </div>
            </div>

            {/* Maharashtra */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/maharashtra.jpg" alt="Maharashtra" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Maharashtra Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$579</span></p>
                </div>
              </div>
            </div>

            {/* Pune */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/pune.jpg" alt="Pune" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Pune Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 3 days starts from <span className="bold">$399</span></p>
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
