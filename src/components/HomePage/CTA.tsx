import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#d6e3ff] to-[#dcefff] text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-[#001B51]">Ready to Build Something Extraordinary?</h2>
        <p className="text-slate-700 mb-8 max-w-xl mx-auto text-lg">
          Let’s bring your vision to life with cutting-edge technology and innovation.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-[#009EFF] text-white font-semibold rounded-full hover:bg-[#001B51] hover:text-white transition"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTA;
