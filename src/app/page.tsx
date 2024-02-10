import AboutFounders from "@/section/AboutFounders";
import Services from "@/section/Services";
import TopSection from "@/section/TopSection";
import WhyUs from "@/section/WhyUs";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <TopSection />
      <AboutFounders />
      <WhyUs />
      <Services />
    </>
  );
}
