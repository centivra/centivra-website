import React from "react";
import Hero from "../components/HomePage/Hero";
import ServicesPreview from "../components/HomePage/ServicesPreview";
import ValuesSection from "../components/HomePage/ValuesSection";
import AboutPreview from "../components/HomePage/AboutPreview";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import IndustriesSection from "../components/HomePage/Industries";
import CTA from "../components/HomePage/CTA";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
          <title>Centivra | Engineering the Future of Intelligence</title>
          <meta
            name="description"
            content="Centivra is a modern software company delivering intelligent digital solutions, AI integrations, and cloud-based platforms to help businesses innovate and scale efficiently."
          />
          <link rel="canonical" href="https://www.centivra.com/" />
      </Helmet>
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
