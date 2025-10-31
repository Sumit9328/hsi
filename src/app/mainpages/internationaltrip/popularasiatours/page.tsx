"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function PopularAsiaTours(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Popular Asia Tours</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Popular Asia Tours</li>
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
            <h2>Explore Popular Asian Destinations</h2>
            <p>Discover the exotic beauty and rich culture of Asia&apos;s most sought-after destinations</p>
          </div>

          <div className="row">

            {/* Magical Maldives */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/maldives.jpg" alt="Magical Maldives" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/magicalmaldives" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/magicalmaldives">Magical Maldives</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$999</span></p>
                </div>
              </div>
            </div>

            {/* Dubai Luxury Experience */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/dubai.jpg" alt="Dubai Luxury Experience" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/dubailuxuryexperience" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/dubailuxuryexperience">Dubai Luxury Experience</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 6 days starts from <span className="bold">$1199</span></p>
                </div>
              </div>
            </div>

            {/* Enchanting Azerbaijan Baku */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/baku.jpg" alt="Enchanting Azerbaijan Baku" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/enchantingazerbaijanbaku" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/enchantingazerbaijanbaku">Enchanting Azerbaijan Baku</Link></h3>
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

            {/* Timeless Thailand */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/thailand.jpg" alt="Timeless Thailand" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/timelessthailand" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/timelessthailand">Timeless Thailand</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 7 days starts from <span className="bold">$799</span></p>
                </div>
              </div>
            </div>

            {/* Vietnam Vibes */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/vietnam.jpg" alt="Vietnam Vibes" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/vietnamvibes" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/vietnamvibes">Vietnam Vibes</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 8 days starts from <span className="bold">$849</span></p>
                </div>
              </div>
            </div>

            {/* Singapore Malaysia */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/singapore-malaysia.jpg" alt="Singapore Malaysia" width={400} height={300} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/popularasiatours/singaporemalaysia" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/popularasiatours/singaporemalaysia">Singapore Malaysia</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 7 days starts from <span className="bold">$949</span></p>
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
