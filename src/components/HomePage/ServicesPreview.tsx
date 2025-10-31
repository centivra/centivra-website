import React from "react";
import { Code2, Smartphone, Cloud, Brain, Palette, Lightbulb } from "lucide-react";

const services = [
  { 
    icon: Code2, 
    title: "Web / Software Development", 
    desc: "Custom websites, web apps and enterprise platforms built with cutting-edge technologies for optimal performance and scalability."
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Development", 
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android."
  },
  { 
    icon: Cloud, 
    title: "Cloud Solutions", 
    desc: "Secure cloud infrastructure and DevOps implementation using AWS and Google Cloud platforms."
  },
  { 
    icon: Brain, 
    title: "AI & Machine Learning", 
    desc: "Intelligent automation and predictive analytics that transform your data into actionable business insights."
  },
  { 
    icon: Palette, 
    title: "UI / UX Design", 
    desc: "User-centered design that combines aesthetic excellence with intuitive functionality and accessibility."
  },
  { 
    icon: Lightbulb, 
    title: "Consulting", 
    desc: "Strategic technology roadmaps and expert guidance to accelerate your digital transformation journey."
  },
];

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#001B51] text-center">
          Our Services
        </h2>
        <p className="text-slate-700 text-lg mb-16 max-w-2xl mx-auto text-center">
          We deliver end-to-end solutions that blend creativity, code, and intelligence.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-blue-50 hover:bg-[#001B51] transition-all duration-300 cursor-pointer group hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-[#0070CC] group-hover:bg-[#0070CC] transition-all duration-300">
                <Icon className="w-8 h-8 text-white group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>

              <p className="text-lg leading-relaxed text-slate-700 group-hover:text-slate-200 transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
