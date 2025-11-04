import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/hero5.jpg";
import image2 from "../../assets/images/hero2.jpg";
import image3 from "../../assets/images/hero3.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const images = [image1, image2, image3];

  // Auto-change background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse movement parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center text-center">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `scale(${index === currentImage ? 1.1 : 1}) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 10s ease-out, opacity 2s ease-in-out",
            }}
          ></div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-[#001B51]/90 to-slate-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
        <div className="inline-block">
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
            Next-Generation IT Solutions
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-Poppins font-semibold text-white leading-tight">
          Engineering the{" "}
          <span className="block bg-gradient-to-r from-[#009EFF] to-[#91BEE8] bg-clip-text text-transparent">
            Future
          </span>
          of Intelligence
        </h1>

        <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto">
          Centivra empowers businesses through technology - creating intelligent,
          scalable, and impactful AI-driven digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Link
            to="/contact"
            className="group px-8 py-3 bg-white text-[#001B51] text-lg font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
