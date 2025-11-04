import React from "react";
import {
  Building2,
  Banknote,
  Stethoscope,
  ShoppingBag,
  Cpu,
  GraduationCap,
  Plane,
} from "lucide-react";
import eudcation from "../../assets/images/education.jpg";
import saas from "../../assets/images/saas.jpg";
import fintech from "../../assets/images/fintech.jpg";
import health from "../../assets/images/health.jpg";
import retail from "../../assets/images/retail.jpg";
import realstate from "../../assets/images/realstate1.jpg";
import travel from "../../assets/images/travel.jpg";
import manufacture from "../../assets/images/manufacturing.jpg";

const industries = [
  {
    icon: Cpu,
    title: "Technology & SaaS",
    desc: "Building scalable cloud and AI-driven platforms that power innovation and growth for tech-first companies.",
    image: saas
  },
  {
    icon: Banknote,
    title: "Finance & FinTech",
    desc: "Delivering secure, compliant, and intelligent fintech solutions that enable digital payments and smart analytics.",
    image: fintech
  },
  {
    icon: Stethoscope,
    title: "Healthcare & MedTech",
    desc: "Creating connected health platforms and patient-centric systems that enhance care with AI and data insights.",
    image: health
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Designing omnichannel commerce experiences with personalization, analytics, and seamless integrations.",
    image: retail
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    desc: "Empowering learners through interactive platforms, smart content, and immersive digital learning solutions.",
    image: eudcation
  },
  {
    icon: Building2,
    title: "Real Estate & PropTech",
    desc: "Transforming real estate operations with data intelligence, automation, and digital experience platforms.",
    image: realstate
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    desc: "Optimizing operations and customer journeys with AI-based route planning and real-time tracking solutions.",
    image: travel
  },
  {
    icon: Building2,
    title: "Manufacturing & Industry",
    desc: "Empowering manufacturers with custom software solutions that enhance operational efficiency and streamline production workflows.",
    image: manufacture
  },
];


const IndustriesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001B51] mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed">
            We design intelligent, scalable, and future-ready solutions for
            businesses across multiple sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {industries.map(({ icon: Icon, title, desc, image }) => (
            <div
              key={title}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-75 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay - Always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B51]/95 via-[#001B51]/70 to-transparent"></div>

              {/* Content - Always visible */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#009EFF] shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-white text-md leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;