import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#001B51] to-[#0070CC] text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Something Extraordinary?</h2>
        <p className="text-[#91BEE8] mb-8 max-w-xl mx-auto">
          Let’s bring your vision to life with cutting-edge technology and innovation.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-[#009EFF] text-white font-semibold rounded-full hover:bg-[#91BEE8] hover:text-[#001B51] transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;
