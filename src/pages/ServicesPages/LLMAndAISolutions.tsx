import React from "react";
import { Brain, Workflow, BarChart3, Cpu, ShieldCheck } from "lucide-react";
import HeroImage from "../../assets/images/99514.jpg";
import AiImage from "../../assets/images/ai.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const LLMAndAISolutions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LLM & AI Solutions | Centivra Artificial Intelligence Services</title>
        <meta
          name="description"
          content="Centivra integrates AI and machine learning into digital products, enabling automation, smart analytics, and intelligent user experiences that drive efficiency and innovation."
        />
        <link rel="canonical" href="https://www.centivra.com/services/llm-and-ai-solutions" />
      </Helmet>

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
                    Intelligent <span className="text-[#009EFF]">AI & ML Solutions</span>
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
                    Centivra helps organizations harness the power of Artificial Intelligence through
                    smart integrations, automation, and machine learning systems designed to scale.
                </p>
            </div>
        </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Practical Intelligence for <span className="text-[#009EFF]">Real-World Impact</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          We specialize in integrating Artificial Intelligence into existing business systems
          from chat and analytics platforms to enterprise applications. Our goal is simple:
          make AI work for your business in ways that are secure, scalable, and immediately valuable.
        </p>
      </div>

      {/* What We Do */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <Workflow className="w-6 h-6 text-[#009EFF] mr-3" /> AI Integration
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                We integrate advanced AI systems into your existing software — enhancing automation, 
                customer engagement, and operational intelligence without disrupting your workflows.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <Cpu className="w-6 h-6 text-[#009EFF] mr-3" /> Machine Learning Models
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                From data preparation to model training and deployment, we build and implement
                custom ML models that deliver predictive insights and intelligent decision-making.
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-2xl font-semibold mb-3">
                <BarChart3 className="w-6 h-6 text-[#009EFF] mr-3" /> Data Intelligence
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                We transform your data into a strategic advantage. Our data pipelines and analytics
                solutions make it easier to extract insights, automate reporting, and improve accuracy.
              </p>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#001B51]/10 to-transparent rounded-3xl"></div>
            <img
              src={AiImage}
              alt="AI Integration"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Centivra Section */}
      <div className="bg-[#001B51] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Businesses Choose <span className="text-[#009EFF]">Centivra</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed mb-12">
            Our AI solutions are designed to solve real business challenges - not just prove a concept.
            With deep technical expertise and a focus on measurable value, we turn artificial intelligence
            into practical innovation for your organization.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <ShieldCheck className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">Secure & Ethical</h4>
              <p className="text-slate-300 text-md">
                We ensure every solution follows strong security, compliance, and ethical AI principles.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <Brain className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">Deep Expertise</h4>
              <p className="text-slate-300 text-md">
                Our team specialize in AI integrations, ML modeling, and automation strategies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <Workflow className="w-10 h-10 text-[#009EFF] mb-3" />
              <h4 className="text-xl font-semibold mb-2">End-to-End Delivery</h4>
              <p className="text-slate-300 text-md">
                From discovery to deployment, we handle the entire process with precision and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-slate-50 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Bring <span className="text-[#009EFF]">AI Power</span> to Your Business
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Whether it’s automating processes or enhancing insights, Centivra delivers intelligent
          AI integrations that work seamlessly across your systems.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#00256D] transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
    </>
  );
};

export default LLMAndAISolutions;
