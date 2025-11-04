import React from "react";
import { ArrowRight, Target, Lightbulb, Users, BrainIcon, ShieldIcon } from "lucide-react";
import aboutImage from "../assets/images/AboutUs.jpg";
import HeroImage from "../assets/images/99514.jpg";
import { Helmet } from "react-helmet-async";

const WhoWeAre: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Centivra - Driving Innovation Through Technology</title>
        <meta
          name="description"
          content="Learn about Centivra — a forward-thinking technology company dedicated to building AI-driven software, scalable platforms, and digital ecosystems that transform businesses."
        />
        <link rel="canonical" href="https://www.centivra.com/who-we-are" />
      </Helmet>

    <section className="bg-white text-[#001B51]">
      {/* Hero / Welcome Section */}
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
                Welcome to <span className="text-[#009EFF]">Centivra</span>
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
                Empowering innovation through intelligent technology.
                </p>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed -mb-10">
                At Centivra, we engineering the future of intelligence.
                </p>
            </div>
        </div>


      {/* About Section */}
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-0 items-center">
            {/* Image */}
            <div className="relative">
            <img
                src={aboutImage}
                alt="About Centivra"
                className="rounded-2xl shadow-lg object-cover h-auto w-150"
            />
            </div>

            {/* Text */}
            <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who <span className="text-[#009EFF]">We Are</span>
            </h2>
            <p className="text-slate-800 text-lg text-justify leading-relaxed mb-5">
                Centivra is a forward-thinking technology company dedicated to helping businesses
                harness the power of innovation. From AI-driven software to full-scale digital
                solutions, we deliver systems built for performance, scalability, and real-world impact.
            </p>
            <p className="text-slate-800 text-lg text-justify leading-relaxed mb-8">
                We bridge the gap between technology and human experience - transforming bold ideas
                into intelligent products that drive growth and transformation. Our focus is on crafting
                digital ecosystems that evolve with your business.
            </p>
            <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#0070CC] transition"
            >
                Explore Our Services <ArrowRight size={18} />
            </a>
            </div>
        </div>

      {/* Vision & Mission */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-[#009EFF]">Vision & Mission</span>
            </h2>
            <p className="text-slate-800 text-lg max-w-3xl mx-auto mb-16">
                Centivra’s strength lies in its collective intelligence. Our diverse team blends creativity with technical expertise, 
                while our leadership inspires continuous learning and forward thinking. Together, we’re shaping a culture built on trust, 
                innovation, and excellence in everything we do.
            </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3F2FD]/70 hover:border-[#009EFF]/40">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-8 h-8 text-[#009EFF]" />
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-slate-800 text-md leading-relaxed">
                To become a global catalyst for digital transformation - where innovation, AI,
                and human creativity converge to build technology that empowers, simplifies, and inspires.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3F2FD]/70 hover:border-[#009EFF]/40">
              <div className="flex items-center gap-4 mb-4">
                <Lightbulb className="w-8 h-8 text-[#009EFF]" />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-slate-800 text-md leading-relaxed">
                To design and deliver intelligent, high-performance digital solutions that help businesses
                innovate faster, operate smarter, and scale seamlessly in a connected world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core <span className="text-[#009EFF]">Values</span></h2>
        <p className="text-slate-800 text-lg max-w-2xl mx-auto mb-16">
          The foundation of Centivra is built on integrity, innovation, and collaboration - values that define every project we deliver.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Users,
              title: "Collaboration",
              desc: "We believe the best solutions come from working together - aligning our expertise with your vision.",
            },
            {
              icon: BrainIcon,
              title: "Innovation",
              desc: "We push boundaries with emerging technology, constantly exploring smarter, faster, and more efficient ways to solve challenges.",
            },
            {
              icon: ShieldIcon,
              title: "Integrity",
              desc: "Every project we build reflects honesty, transparency, and a commitment to long-term value for our clients.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#F9FBFE] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3F2FD]/70 hover:border-[#009EFF]/40"
            >
              <Icon className="w-10 h-10 text-[#009EFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-[#001B51] via-[#003087] to-[#0070CC] py-16 text-center text-white">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Let’s Build the Future Together</h2>
        <p className="text-slate-200 mb-6">
          Ready to create something extraordinary? Explore our services and start your journey with Centivra today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          <a
            href="/services"
            className="px-8 py-3 bg-white text-[#001B51] font-semibold rounded-full hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            View Services
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-[#001B51] font-semibold transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </section>
    </>
  );
};

export default WhoWeAre;
