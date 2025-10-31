"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function IndiaTravel(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>India Travel Destinations</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">India Travel</li>
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
            <h2>Explore Incredible India</h2>
            <p>Discover the diverse beauty, rich culture, and amazing destinations across India</p>
          </div>

          <div className="row">

            {/* North India */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/banner15853119180.jpg" alt="North India" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/northindia" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/northindia">North India</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Rajasthan, Delhi, Kashmir, Himachal & more</p>
                </div>
              </div>
            </div>

            {/* South India */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/kerala-tourism-poster-design-template-0790eb5afb5ca97e84d27c29e80e0321_screen.jpg" alt="South India" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/southindia" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/southindia">South India</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Kerala, Tamil Nadu, Karnataka & more</p>
                </div>
              </div>
            </div>

            {/* West India */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/goa-tourism.jpg" alt="West India" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/westindia" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/westindia">West India</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Goa, Mumbai, Gujarat, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* North East & Sikkim */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/darjeeling.jpg" alt="North East Sikkim" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/northeastsikkim" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/northeastsikkim">North East & Sikkim</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> Multiple packages available</p>
                  <p className="text-muted">Darjeeling, Gangtok, Seven Sisters & more</p>
                </div>
              </div>
            </div>

            {/* Andaman */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/andaman.jpg" alt="Andaman Islands" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/andaman" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/andaman">Andaman Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 6 days starts from <span className="bold">$799</span></p>
                </div>
              </div>
            </div>

            {/* Lakshadweep */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/lakshadweep.jpg" alt="Lakshadweep Islands" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/indiatravel/lakshadweep" className="btn-blue btn-red">
                      Explore Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/indiatravel/lakshadweep">Lakshadweep Tourism</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$899</span></p>
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

