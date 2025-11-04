import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    project: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", project: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.project.trim()) {
      newErrors.project = "Please tell us what you’re planning to build.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", project: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#001B51] mb-4">
          Let’s Build Something Great
        </h2>
        <p className="text-[#0070CC] text-center mb-12">
          Tell us about your idea — we’ll help you make it real.
        </p>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-slate-50 p-10 rounded-2xl shadow-md border border-slate-100">
          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2" htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.name ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#009EFF]`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2" htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.email ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#009EFF]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone (Optional) */}
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2" htmlFor="phone">
                Phone (Optional)
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#009EFF]"
              />
            </div>

            {/* Project Idea */}
            <div className="mb-8">
              <label className="block text-slate-700 font-medium mb-2" htmlFor="project">
                What are you planning to build? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="project"
                id="project"
                rows={5}
                value={formData.project}
                onChange={handleChange}
                placeholder="Tell us about your project or idea..."
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.project ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#009EFF]`}
              />
              {errors.project && (
                <p className="text-red-500 text-sm mt-1">{errors.project}</p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                  submitted
                    ? "bg-green-600"
                    : "bg-[#001B51] hover:bg-[#009EFF]"
                }`}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
