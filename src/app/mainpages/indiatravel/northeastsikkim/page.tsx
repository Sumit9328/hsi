"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function NorthEastSikkim(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>North East & Sikkim Tours</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/indiatravel">India Travel</Link></li>
                <li className="breadcrumb-item active" aria-current="page">North East & Sikkim</li>
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
            <h2>Explore North East & Sikkim</h2>
            <p>Discover the untouched beauty, tea gardens, and mountain landscapes of Eastern Himalayas</p>
          </div>

          <div className="row">

            {/* Darjeeling */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/darjeeling.jpg" alt="Darjeeling" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Darjeeling Tour</Link></h3>
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

            {/* Gangtok */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/gangtok.jpg" alt="Gangtok" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Gangtok Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 6 days starts from <span className="bold">$679</span></p>
                </div>
              </div>
            </div>

            {/* West Bengal */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/west-bengal.jpg" alt="West Bengal" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">West Bengal Tour</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$549</span></p>
                </div>
              </div>
            </div>

            {/* Kolkata */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/kolkata.jpg" alt="Kolkata" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Kolkata Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 4 days starts from <span className="bold">$449</span></p>
                </div>
              </div>
            </div>

            {/* Seven Sisters of India */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/seven-sisters.jpg" alt="Seven Sisters" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="#" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="#">Seven Sisters of India</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 8 days starts from <span className="bold">$899</span></p>
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
