import React from "react";
import aboutImage from "../../assets/images/Hero1.jpg";
import { Link } from "react-router-dom";

const AboutCentivra: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001B51] mb-6">
            Who We Are
          </h2>

          <p className="text-slate-900 text-lg text-justify mb-4 leading-relaxed">
            Centivra is a forward-thinking technology company dedicated to helping
            businesses harness the power of innovation. From AI-driven software to
            full-scale digital solutions, we deliver systems built for performance,
            scalability, and real-world impact.
          </p>

          <p className="text-slate-900 text-lg text-justify leading-relaxed mb-6">
            We bridge the gap between technology and human experience - transforming bold ideas into
            intelligent products that drive growth and transformation.
          </p>

          <Link
            to="/who-we-are"
            className="inline-block px-6 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#0070CC] transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="About Centivra"
            className="rounded-3xl shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCentivra;
