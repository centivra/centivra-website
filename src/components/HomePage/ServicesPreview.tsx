import React from "react";
import { Code2, Smartphone, Cloud, Brain, Palette, Lightbulb } from "lucide-react";

const services = [
  { icon: Code2, title: "Web / Software Development", desc: "Custom websites, web apps, and enterprise platforms built for performance." },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android apps designed for usability and scalability." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Reliable, secure, and scalable cloud architecture & DevOps." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Empowering your business with predictive intelligence." },
  { icon: Palette, title: "UI / UX Design", desc: "Beautiful interfaces crafted for clarity and engagement." },
  { icon: Lightbulb, title: "Consulting", desc: "Strategic guidance to help you modernize and grow digitally." },
];

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#001B51]">Our Services</h2>
        <p className="text-[#0070CC] mb-12 max-w-xl mx-auto">
          We deliver end-to-end solutions that blend creativity, code, and intelligence.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl shadow hover:shadow-lg transition border border-[#E3F2FD]">
              <Icon className="text-[#0070CC] w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[#001B51]">{title}</h3>
              <p className="text-sm text-[#001B51]/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
