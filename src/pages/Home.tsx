import React from "react";
import Hero from "../components/HomePage/Hero";
import ServicesPreview from "../components/HomePage/ServicesPreview";
import ValuesSection from "../components/HomePage/ValuesSection";
import AboutPreview from "../components/HomePage/AboutPreview";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import IndustriesSection from "../components/HomePage/Industries";
import CTA from "../components/HomePage/CTA";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ValuesSection />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesSection />
      <CTA />
    </>
  );
};

export default Home;
