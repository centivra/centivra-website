import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#001B51]">What Our Clients Say</h2>
        <p className="text-[#0070CC] mb-12">Our work speaks for itself — here’s what our early partners think.</p>

        <div className="max-w-3xl mx-auto bg-[#f8fbff] p-8 rounded-xl border border-[#E3F2FD] shadow">
          <p className="text-[#001B51]/80 italic mb-4">
            “Centivra’s expertise in AI and software development helped us turn our concept into a real, scalable product.
            Their design sense and communication are outstanding.”
          </p>
          <h4 className="font-semibold text-[#001B51]">— Tech Startup, 2025</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
