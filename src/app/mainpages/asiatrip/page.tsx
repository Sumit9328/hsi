"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";
import DestinationSlider from "@/components/DestinationSlider";
import TourSearchSection from "@/components/TourSearchSection";
import DestinationGrid from "@/components/DestinationGrid";
import CustomerReviews from "@/components/CustomerReviews";

export default function AsiaTrip(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />
<DestinationSlider/>
{/* <TourSearchSection/> */}
<DestinationGrid/>
<CustomerReviews/>
      {/* <TrustedPartners /> */}
      <Footer />
    </>
  );
}

