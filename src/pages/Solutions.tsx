import {
  Cpu,
  Banknote,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Building2,
  Plane,
  Factory,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import saas from "../assets/images/saas.jpg";
import fintech from "../assets/images/fintech.jpg";
import health from "../assets/images/health.jpg";
import retail from "../assets/images/retail.jpg";
import education from "../assets/images/education.jpg";
import realstate from "../assets/images/realstate1.jpg";
import travel from "../assets/images/travel.jpg";
import manufacture from "../assets/images/manufacturing.jpg";
import HeroImage from "../assets/images/99514.jpg";

const industries = [
  {
    icon: Cpu,
    title: "Technology & SaaS",
    desc: "Centivra partners with tech-first companies to design and build high-performance SaaS platforms. We focus on cloud-native architecture, AI integrations, and multi-tenant applications that scale effortlessly. From MVPs to enterprise systems, our team delivers secure, innovative, and growth-driven software.",
    image: saas,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: Banknote,
    title: "Finance & FinTech",
    desc: "In an era of digital finance, security and innovation go hand in hand. Centivra develops fintech platforms for payments, analytics, and compliance, designed for performance, transparency, and trust. Our solutions empower financial institutions and startups to deliver secure and intelligent digital experiences.",
    image: fintech,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & MedTech",
    desc: "Technology is redefining healthcare and Centivra is at the forefront. We engineer secure systems that enhance patient engagement, streamline clinical workflows, and provide actionable insights through AI and data visualization. From telemedicine apps to EMR integrations, we make healthcare more connected.",
    image: health,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Retail is now about experience, not just transactions. Centivra builds omnichannel e-commerce platforms that connect brands with customers through personalization, intelligent discovery, and seamless integrations. Our solutions empower data-driven retail with consistency across every touchpoint.",
    image: retail,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    desc: "Centivra transforms learning with digital platforms that engage, inspire, and adapt. We build scalable e-learning ecosystems with interactive content, performance analytics, AI-driven personalization, and helping educators and organizations redefine modern learning experiences.",
    image: education,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: Building2,
    title: "Real Estate & PropTech",
    desc: "Real estate is evolving, and digital transformation is leading the way. Centivra helps property management and real estate businesses embrace automation, data insights, and immersive experiences. Our PropTech software improves visibility, streamlines workflows, and enhances client engagement.",
    image: realstate,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    desc: "Efficiency drives success in travel and logistics and Centivra builds the systems that make it possible. Our software focuses on real-time tracking, booking automation, and intelligent analytics. Whether optimizing routes or enhancing traveler experience, we keep businesses moving forward.",
    image: travel,
    color: "from-slate-400 to-gray-600",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry",
    desc: "Centivra empowers manufacturers with intelligent software that digitizes operations and enhances performance. We design systems for production management, predictive reporting, workflow optimization, and helping manufacturers gain insights, reduce costs, and increase efficiency.",
    image: manufacture,
    color: "from-slate-400 to-gray-600",
  },
];

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Industry Solutions | Centivra Digital Transformation Experts</title>
        <meta
          name="description"
          content="Explore how Centivra helps industries like finance, healthcare, education, and e-commerce with tailored software, AI integrations, and scalable technology solutions."
        />
        <link rel="canonical" href="https://www.centivra.com/solutions" />
      </Helmet>

    <div className="bg-white">

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
                Transforming Industries Through <span className="text-[#009EFF]">Digital Innovation</span>
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed -mb-10">
                    Smart, scalable, and secure digital solutions crafted to empower
                    businesses across industries. We transform technology into
                    measurable outcomes that drive real impact.
                </p>
            </div>
        </div>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Empowering Industries Through Intelligent Digital Solutions
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          At Centivra, we help businesses across diverse sectors embrace digital
          transformation through AI-driven software, intelligent platforms, and
          scalable cloud architectures. Our solutions are built to deliver
          measurable results, operational efficiency, and a seamless user
          experience.
        </p>
      </section>

      {/* Industry Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;

            return (
              <div
  className={`grid md:grid-cols-2 gap-12 items-center`}
>
  {/* Image */}
  <div
    className={`relative group overflow-hidden rounded-2xl shadow-xl 
    ${isEven ? "order-2 md:order-1" : "order-2 md:order-2"}`}
  >
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={industry.image}
        alt={industry.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001B51]/60 via-transparent to-transparent"></div>
    </div>

    {/* Gradient accent */}
    <div
      className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${industry.color}`}
    ></div>
  </div>

  {/* Content */}
  <div
    className={`space-y-6 ${isEven ? "order-1 md:order-2" : "order-1 md:order-1"} ${
      !isEven ? "md:pr-8" : "md:pl-8"
    }`}
  >
    <div className="flex items-center gap-1">
      <Icon className="w-12 h-12 text-slate-500" />
    </div>

    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
      {industry.title}
    </h3>

    <p className="text-lg text-gray-800 leading-relaxed text-justify">
      {industry.desc}
    </p>
  </div>
</div>

            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#001B51] via-[#003087] to-[#0070CC] mt-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Let's Build Smarter Solutions — Together
            </h2>

            <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
              From startups to enterprises, Centivra delivers technology that
              solves real business challenges with precision and creativity.
              Let's craft a digital solution tailored to your industry needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#001B51] font-semibold rounded-full hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#001B51] transition-all duration-300"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Solutions;