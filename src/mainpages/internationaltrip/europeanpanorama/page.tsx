"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";

export default function EuropeanPanorama(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>European Panorama</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/mainpages/internationaltrip">International Trip</Link></li>
                <li className="breadcrumb-item active" aria-current="page">European Panorama</li>
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
            <h2>Explore European Wonders</h2>
            <p>Experience the rich history, culture, and beauty of Europe</p>
          </div>

          <div className="row">

            {/* Wonders of UK and Scotland */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/uk-scotland.jpg" alt="Wonders of UK and Scotland" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/wondersofukandscotland" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/wondersofukandscotland">Wonders of UK and Scotland</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 7 days starts from <span className="bold">$1299</span></p>
                </div>
              </div>
            </div>

            {/* European Honeymoon Special */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/european-honeymoon.jpg" alt="European Honeymoon Special" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/europeanhoneymoonspecial" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/europeanhoneymoonspecial">European Honeymoon Special</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 10 days starts from <span className="bold">$1899</span></p>
                </div>
              </div>
            </div>

            {/* Western Europe Wonders */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/western-europe.jpg" alt="Western Europe Wonders" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/westerneuropewonders" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/westerneuropewonders">Western Europe Wonders</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 9 days starts from <span className="bold">$1599</span></p>
                </div>
              </div>
            </div>

            {/* Eastern Europe Discovery */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/eastern-europe.jpg" alt="Eastern Europe Discovery" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/easterneuropediscovery" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/easterneuropediscovery">Eastern Europe Discovery</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 8 days starts from <span className="bold">$1399</span></p>
                </div>
              </div>
            </div>

            {/* Mediterranean Magic */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/mediterranean.jpg" alt="Mediterranean Magic" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/mediterraneanmagic" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/mediterraneanmagic">Mediterranean Magic</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 7 days starts from <span className="bold">$1499</span></p>
                </div>
              </div>
            </div>

            {/* Balkan Explorer */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/balkan.jpg" alt="Balkan Explorer" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/balkanexplorer" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/balkanexplorer">Balkan Explorer</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 8 days starts from <span className="bold">$1199</span></p>
                </div>
              </div>
            </div>

            {/* Central Europe Charm */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/central-europe.jpg" alt="Central Europe Charm" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/centraleuropecharm" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/centraleuropecharm">Central Europe Charm</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 9 days starts from <span className="bold">$1599</span></p>
                </div>
              </div>
            </div>

            {/* Scandinavian Splendor */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="destination-item">
                <div className="destination-image">
                  <Image src="/images/Banner-images/scandinavia.jpg" alt="Scandinavian Splendor" width={350} height={250} className="w-full h-auto object-cover" />
                  <div className="destination-overlay"></div>
                  <div className="destination-btn">
                    <Link href="/mainpages/internationaltrip/europeanpanorama/scandinaviansplendor" className="btn-blue btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="destination-content">
                  <h3><Link href="/mainpages/internationaltrip/europeanpanorama/scandinaviansplendor">Scandinavian Splendor</Link></h3>
                  <div className="deal-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                  </div>
                  <p><i className="flaticon-time"></i> 10 days starts from <span className="bold">$1899</span></p>
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
