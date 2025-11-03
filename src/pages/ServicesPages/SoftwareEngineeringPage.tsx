import React from "react";
import {
  Code2,
  Cloud,
  Smartphone,
  Cpu,
  Zap,
  CheckCircle,
} from "lucide-react";

/**
 * Replace these with your actual images in /src/assets/images/
 */
import HeroImage from "../../assets/images/99514.jpg";
import processImg from "../../assets/images/process.jpg";
import teamPhoto from "../../assets/images/value.jpg";

const EngineeringAndDevelopment: React.FC = () => {
  return (
    <main className="text-[#001B51] bg-white">
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
                <p className="uppercase text-sm tracking-wider text-[#91BEE8] mb-4">
                    Product Engineering Services
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Engineering innovation into every line of code
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed -mb-10">
                    Centivra engineers secure, scalable and intelligent software systems
                    from cloud-native platforms to mobile apps and AI-integrated products.
                    We partner closely with businesses to turn product vision into reliable
                    technology that scales.
                </p>
            </div>
        </div>

      {/* EXPERTISE / HIGHLIGHTS */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Engineering & Development - Our Expertise
          </h2>
          <p className="text-slate-700 text-lg mb-16">
            We deliver end-to-end engineering services: platform architecture,
            cloud-native applications, robust APIs, mobile apps, and AI-enabled
            features - all built to enterprise standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-15">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-[#001B51]">Custom Software Engineering</h3>
              <p className="text-slate-700 text-lg mb-5">
                End-to-end product engineering from architecture and prototype to
                production-ready systems - delivering performance, scalability, and security.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Mobile & Cross-Platform Apps</h3>
              <p className="text-slate-700 text-lg mb-5">
                Native and cross-platform applications that prioritize usability, resilience,
                and seamless integration with backend platforms.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Cloud & Infrastructure</h3>
              <p className="text-slate-700 text-lg mb-5">
                Cloud-native design, containerization, CI/CD, and managed infrastructure
                for reliability and cost-efficient scaling.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">APIs & System Integration</h3>
              <p className="text-slate-700 text-lg mb-5">
                Robust API design, microservices, and integrations that connect systems,
                reduce friction, and enable secure data exchange.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Performance & Scalability</h3>
              <p className="text-slate-700 text-lg mb-5">
                Architecture and engineering practices that optimize throughput,
                latency, and cost - ensuring your product thrives under load.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009EFF]/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#009EFF]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-[#001B51]">Security & Compliance</h3>
              <p className="text-slate-700 text-lg mb-5">
                Security-first engineering: threat modeling, secure coding standards,
                and compliance practices to protect your systems and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CAPABILITIES — two-column feature list */}
      <section className="bg-[#F9FBFE] py-14">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-[#001B51]">How we add value</h3>
              <p className="text-slate-700 text-lg mb-8">
                We combine engineering discipline with product thinking. Below are
                the practical capabilities we bring to every project, tailored to
                your business objectives.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start mb-6">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#001B51] rounded-full flex-shrink-0 mt-1">
                    <Code2 className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <strong className="block">Product-focused Engineering</strong>
                    <span className="text-slate-700 text-md">
                      We align engineering decisions with business outcomes and shipping the right features, fast.
                    </span>
                  </div>
                </li>

                <li className="flex gap-3 items-start mb-6">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#001B51] rounded-full flex-shrink-0 mt-1">
                    <Cloud className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <strong className="block">Cloud-native Delivery</strong>
                    <span className="text-slate-700 text-md">
                      Containerization, autoscaling, and cloud cost-optimization for efficient operations.
                    </span>
                  </div>
                </li>

                <li className="flex gap-3 items-start mb-6">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#001B51] rounded-full flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <strong className="block">Cross-Platform Excellence</strong>
                    <span className="text-slate-700 text-md">
                      Unified product experiences across web and mobile, designed for retention.
                    </span>
                  </div>
                </li>

                <li className="flex gap-3 items-start mb-6">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#001B51] rounded-full flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <strong className="block">Seamless Integrations</strong>
                    <span className="text-slate-700 text-md">
                      Reliable connectors and APIs that integrate with third-party and legacy systems.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={teamPhoto}
                  alt="Centivra team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Our Working Process</h3>
            <p className="text-slate-700 text-md mb-8">
              Predictable outcomes come from disciplined process. We follow a pragmatic,
              iterative approach with continual validation to minimise risk and accelerate value.
            </p>

            <ol className="space-y-8">
              <li className="flex gap-6">
                <div className="flex-none text-slate-300 flex items-center justify-center font-bold text-5xl">
                  1
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#001B51] text-lg">Discovery & Planning</h4>
                  <p className="text-slate-700 text-md">
                    We begin by diving deep into your vision, challenges, and goals. Through strategic workshops and analysis, we define a clear roadmap that aligns technology with business objectives.
                  </p>
                </div>
              </li>

              <li className="flex gap-6">
                <div className="flex-none text-slate-400 flex items-center justify-center font-bold text-5xl">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#001B51] text-lg">Design & Prototyping</h4>
                  <p className="text-slate-700 text-md">
                    Before a single line of code, our experts craft intuitive designs and scalable architectures.
                    From user flows to system blueprints, we ensure your product is both elegant and engineered for long-term growth.
                  </p>
                </div>
              </li>

              <li className="flex gap-6">
                <div className="flex-none text-slate-500 flex items-center justify-center font-bold text-5xl">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#001B51] text-lg">Development and Testing</h4>
                  <p className="text-slate-700 text-md">
                    Our engineering teams bring ideas to life through modern frameworks, clean code, and continuous delivery.
                    We build in agile sprints, ensuring flexibility, transparency, and efficient integration across systems.
                  </p>
                </div>
              </li>

              <li className="flex gap-6">
                <div className="flex-none text-slate-600 flex items-center justify-center font-bold text-5xl">
                  4
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#001B51] text-lg">Deployment</h4>
                  <p className="text-slate-700 text-md">
                    After development, we handle deployment with precision - configuring your environment, optimizing performance, and ensuring a smooth transition to production.
                  </p>
                </div>
              </li>

              <li className="flex gap-6">
                <div className="flex-none text-slate-700 flex items-center justify-center font-bold text-5xl">
                  5
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#001B51] text-lg">Support & Continuous Improvement</h4>
                  <p className="text-slate-700 text-md">
                    Once live, we monitor, refine, and scale your solution based on real-world insights.
                    Our commitment doesn’t end at delivery - we evolve your product with ongoing updates, support, and innovation.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={processImg}
              alt="Engineering process illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default EngineeringAndDevelopment;
