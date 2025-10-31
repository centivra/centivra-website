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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#001B51]">Why Choose Centivra</h2>
        <p className="text-[#0070CC] mb-12 max-w-xl mx-auto">
          Our approach combines innovation, precision, and partnership — creating technology that delivers results.
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 border border-[#E3F2FD] rounded-xl shadow-sm hover:shadow-lg transition">
              <Icon className="w-10 h-10 text-[#009EFF] mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-[#001B51]">{title}</h3>
              <p className="text-sm text-[#001B51]/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
