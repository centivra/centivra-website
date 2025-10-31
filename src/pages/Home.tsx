import React from "react";
import Hero from "../components/HomePage/Hero";
import ServicesPreview from "../components/HomePage/ServicesPreview";
import ValuesSection from "../components/HomePage/ValuesSection";
import AboutPreview from "../components/HomePage/AboutPreview";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import Process from "../components/HomePage/Process";
import Testimonials from "../components/HomePage/Testimonials";
import CTA from "../components/HomePage/CTA";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ValuesSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
