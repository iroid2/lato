import Footer from "@/components/Footer";
import Futuresection from "@/components/Future";
import Header from "@/components/Header";

import HeroSection from "@/components/HeroSection";
import Towards from "@/components/Towards";
import React from "react";

export default function page() {
  return (
    <div className="container">
      <HeroSection />
      <Futuresection />
      <Towards />
      {/* <Footer /> */}
    </div>
  );
}
