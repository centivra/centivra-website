import React from "react";

const steps = [
  "Discovery & Strategy",
  "Design & Prototyping",
  "Development & Testing",
  "Launch & Support",
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8fbff] text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#001B51]">Our Process</h2>
        <p className="text-[#0070CC] mb-12">A structured approach to turn ideas into successful products.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-[#E3F2FD] rounded-xl shadow-sm px-6 py-6 w-64">
              <div className="w-12 h-12 bg-[#009EFF] text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                {index + 1}
              </div>
              <h4 className="font-semibold text-[#001B51]">{step}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
