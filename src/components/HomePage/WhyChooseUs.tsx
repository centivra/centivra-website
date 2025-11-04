import React from "react";
import { Rocket, Cpu, Users, ShieldCheck } from "lucide-react";

const features = [
  { icon: Rocket, title: "Innovation-Driven", desc: "We embrace emerging tech to build cutting-edge solutions." },
  { icon: Cpu, title: "AI Expertise", desc: "Integrating smart automation and data-driven intelligence." },
  { icon: Users, title: "Client-First", desc: "We collaborate transparently for every project stage." },
  { icon: ShieldCheck, title: "Quality & Security", desc: "Every product we deliver is robust, reliable, and secure." },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')", // change to your image
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B51]/95 to-[#0070CC]/90"></div>

      {/* Content Layer */}
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Centivra</h2>
        <p className="text-white/90 mb-16 max-w-xl mx-auto">
          Our approach combines innovation, precision, and partnership — creating technology that delivers results.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <Icon className="w-10 h-10 text-[#009EFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#001B51]">{title}</h3>
              <p className="text-md text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
