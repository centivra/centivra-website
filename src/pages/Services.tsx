import React from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import team1 from "../assets/images/104048.jpg";
import HeroImage from "../assets/images/99514.jpg";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Custom software systems, enterprise platforms and web applications engineered with precision, scalability and performance at the core.",
    link: "/services/software-engineering",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Creating seamless mobile experiences across iOS and Android with native and cross-platform expertise.",
    link: "/services/mobile-app-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Empowering your infrastructure with scalable, secure, and efficient cloud solutions built on AWS and Google Cloud.",
    link: "/services/cloud-solutions",
  },
  {
    icon: Brain,
    title: "AI & LLM Solutions",
    desc: "Transforming businesses through intelligent automation, predictive insights, and data-driven innovation.",
    link: "/services/ai-machine-learning",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Designing intuitive, aesthetic, and user-centric interfaces that elevate your brand and customer experience.",
    link: "/services/ui-ux-design",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    desc: "Guiding your digital transformation with strategy, technology insights, and forward-thinking innovation.",
    link: "/services/consulting",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className="bg-white text-[#001B51]">
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
                Our <span className="text-[#009EFF]">Services</span>
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed -mb-10">
                    At Centivra, we combine technology, creativity, and strategy to
                    deliver powerful digital solutions that drive your business forward.
                </p>
            </div>
        </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[#F9FBFE] rounded-2xl p-8 border border-[#E3F2FD]/70 shadow-sm hover:shadow-lg hover:border-[#009EFF]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#009EFF]/10 group-hover:bg-[#009EFF]/20 transition">
                  <Icon className="text-[#0070CC] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#001B51]">
                  {title}
                </h3>
              </div>
              <p className="text-slate-800 text-lg leading-relaxed mb-6">{desc}</p>
              {/* <a
                href={link}
                className="inline-flex items-center gap-2 text-[#0070CC] font-semibold hover:text-[#001B51] transition-all"
              >
                Learn More <ArrowRight size={16} />
              </a> */}
            </div>
          ))}
        </div>
      </div>

      {/* Creating Value Together */}
      <div className="bg-[#F8FAFC] py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="relative">
            <img
              src={team1}
              alt="Centivra team collaboration"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Empowering Progress <span className="text-[#009EFF]">Through Partnership</span>
            </h2>
            <p className="text-lg text-slate-800 text-justify mb-6 leading-relaxed">
              At Centivra, our team is our greatest asset - a group of creative
              engineers, designers, and strategists who bring technology to life.
              We believe in partnership-driven development where innovation meets
              reliability and passion meets precision.
            </p>
            <a
              href="/who-we-are"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#0070CC] transition"
            >
              About Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
