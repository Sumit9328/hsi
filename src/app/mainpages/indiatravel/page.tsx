"use client";

import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";
import Link from "next/link";
import Image from "next/image";
import IndiaTours from "@/components/IndiaTours";
import HeroSlider from "@/components/HeroSlider";
import IndiaToursExp from "@/components/IndiaToursExp";
import TopDestinations from "@/components/TopDestinations";
import OurTopDestinations from "@/components/OurTopDestinations";

export default function IndiaTravel(): React.ReactElement {
  return (
    <>
      <Header />
      <Navbar />
<HeroSlider/>
<IndiaTours/>
<IndiaToursExp/>
<TopDestinations/>
<OurTopDestinations/>

      {/* <TrustedPartners /> */}
      <Footer />
    </>
  );
}

