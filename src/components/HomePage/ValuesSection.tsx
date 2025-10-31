import React from "react";
import { BrainCircuit, CloudLightning, Cpu } from "lucide-react";

const values = [
  {
    icon: BrainCircuit,
    title: "Intelligence at the Core",
    desc: "Every solution we build is guided by data-driven intelligence - fusing creativity with AI to engineer systems that think, learn, and evolve.",
  },
  {
    icon: Cpu,
    title: "Smart Engineering, Real Impact",
    desc: "Our lean, AI-driven approach focuses on creating software that doesn’t just meet expectations - it amplifies outcomes and value.",
  },
  {
    icon: CloudLightning,
    title: "Innovation Without Boundaries",
    desc: "Our approach pushes beyond limits - leveraging cloud, automation, and modern frameworks to transform technology into strategic advantage.",
  },
];

const InnovationValues: React.FC = () => {
  return (
    <section className="bg-[#F9FBFE] py-24 text-center">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#001B51] mb-4">
          Driven by <span className="text-[#009EFF]">Innovation</span>
        </h2>
        <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-16">
          We combine intelligence, precision, and creativity to engineer solutions that
          empower growth and redefine digital possibilities.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3F2FD]/50 hover:border-[#009EFF]/40 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#001B51] group-hover:bg-[#001B51] transition-all">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {title}
              </h3>
              <p className="text-slate-700 text-md leading-relaxed">{desc}</p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#009EFF] to-[#91BEE8] rounded-2xl transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationValues;
