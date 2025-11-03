import React from "react";
import { Palette, MousePointerClick, Layers, Smartphone, Eye } from "lucide-react";
import HeroImage from "../../assets/images/99514.jpg";
import UIUX from "../../assets/images/uiux1.jpg";

const DesignAndExperience: React.FC = () => {
  return (
    <section className="text-slate-900">
      {/* Hero Section */}
        <div
            className="relative overflow-hidden bg-cover bg-center rounded-b-4xl"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
            >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001B51]/90 via-[#00256D]/85 to-[#001B51]/90 rounded-b-4xl"></div>

            {/* Content */}
            <div className="container mx-auto px-6 py-28 relative z-10 text-center text-white mt-5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Design for Better <span className="text-[#009EFF]">Experiences</span>
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
                    At Centivra, we blend creativity with strategy to design digital experiences that
                    engage users, strengthen brands, and simplify complex interactions.
                </p>
            </div>
        </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Crafting <span className="text-[#009EFF]">Experiences</span> That Inspire Action
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Great design goes beyond visuals, it’s about connection. We create digital products 
          that feel intuitive, look beautiful, and perform seamlessly across devices. 
          From strategy to final interface, every design decision at Centivra is guided by user insight and business goals.
        </p>
      </div>

      {/* What We Do */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <Palette className="w-6 h-6 text-[#009EFF] mr-3" /> UI / UX Design
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                We design interfaces that are clean, accessible, and purpose-driven. 
                Our process ensures a seamless flow between functionality and aesthetics — 
                making technology feel effortless.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <MousePointerClick className="w-6 h-6 text-[#009EFF] mr-3" /> Interaction Design
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                We focus on creating natural, engaging interactions that guide users intuitively. 
                Every animation, transition, and click contributes to a smooth experience.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <Layers className="w-6 h-6 text-[#009EFF] mr-3" /> Design Systems
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Consistency builds trust. We create scalable design systems and component libraries 
                that ensure brand uniformity across all digital products.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <Smartphone className="w-6 h-6 text-[#009EFF] mr-3" /> Responsive Design
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                From desktop to mobile, we design experiences that adapt fluidly — ensuring usability 
                and visual harmony on every screen size.
              </p>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#001B51]/10 to-transparent rounded-3xl"></div>
            <img
              src={UIUX}
              alt="Design and Experience"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Design Approach */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-[#009EFF]">Design Process</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Research",
              desc: "We study your users, brand, and objectives to uncover insights that guide design direction.",
            },
            {
              step: "2",
              title: "Wireframe",
              desc: "We map out information architecture and create user flows that define seamless navigation.",
            },
            {
              step: "3",
              title: "Prototype",
              desc: "Clickable prototypes bring ideas to life early - helping validate usability and visual balance.",
            },
            {
              step: "4",
              title: "Design",
              desc: "Our team crafts pixel-perfect interfaces that align with your brand and optimize engagement.",
            },
            {
              step: "5",
              title: "Deliver",
              desc: "We hand off production-ready assets with design systems and documentation for developers.",
            },
          ].map((item) => (
            <div key={item.step} className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#001B51] text-white text-xl font-bold mx-auto">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-700 text-md leading-relaxed px-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Centivra Section */}
      <div className="bg-[#001B51] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose <span className="text-[#009EFF]">Centivra</span> for Design
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed mb-12">
            We don’t just design - we create experiences that inspire confidence and clarity.
            With a focus on usability, creativity, and business alignment, Centivra turns every interface
            into a meaningful connection between people and technology.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <Eye className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">User-Centered</h4>
              <p className="text-slate-300 text-md">
                Every design decision starts with your user and ensuring simplicity, clarity, and delight.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <Palette className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">Creative Precision</h4>
              <p className="text-slate-300 text-md">
                Our designers balance art and logic, blending creativity with structure and consistency.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <Layers className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">Design Systems</h4>
              <p className="text-slate-300 text-md">
                Scalable design systems and reusable components ensure smooth collaboration and faster delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-slate-50 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Design Experiences That <span className="text-[#009EFF]">Inspire</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Partner with Centivra to create intuitive, high-performing designs that elevate your
          digital presence and delight your users.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#00256D] transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default DesignAndExperience;
