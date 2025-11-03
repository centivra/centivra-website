import React, { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import HeroImage from "../assets/images/99514.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    if (name === "name") {
      if (value.trim()) {
        delete newErrors.name;
      }
    } else if (name === "email") {
      if (value.trim() && /\S+@\S+\.\S+/.test(value)) {
        delete newErrors.email;
      }
    } else if (name === "message") {
      if (value.trim()) {
        delete newErrors.message;
      }
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess("Thank you! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTimeout(() => setSuccess(""), 4000);
  };

  return (
    <section className="bg-white">
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
            <div className="container mx-auto px-6 py-28 relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-5">
                Let’s Build Something Exceptional
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
                    Whether you’re starting a new project or enhancing an existing one,
                    our team is ready to help you design, develop, and deliver
                    innovative digital solutions.
                </p>
            </div>
        </div>

        
      <div className="container mx-auto px-6 md:px-10">
        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-slate-50 shadow-lg rounded-2xl p-8 md:p-12 border border-slate-100 mt-12">
          <h2 className="text-2xl font-semibold text-[#001B51] mb-6">
            Get in Touch With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white ${
                    errors.name ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white ${
                    errors.email ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone (optional) */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white border-slate-300 focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Tell us how we can help <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border bg-white ${
                  errors.message ? "border-red-500" : "border-slate-300"
                } focus:ring-2 focus:ring-[#009EFF] focus:border-transparent transition resize-none`}
                placeholder="Tell us briefly about your project..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#0070CC] transition-all duration-300 shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </div>
            <span className="text-red-500">*</span> These fields are required.
          </form>

          {/* Success Message */}
          {success && (
            <p className="text-green-600 font-medium mt-4">{success}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 text-slate-700 mb-16">
          <p className="text-lg">
            Prefer to reach out directly? Email us at{" "}
            <a
              href="mailto:hello@centivra.com"
              className="text-[#0070CC] hover:underline"
            >
              hello@centivra.com
            </a>{" "}
            or connect with our team for collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
