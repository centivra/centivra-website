import React from 'react';
import {
  ChevronRight,
} from 'lucide-react';
import LogoImage from "../assets/images/Logo-white-transparency.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope, FaLocationArrow} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web / Software Development',
    'Mobile Apps',
    'Cloud Solutions',
    'AI & Machine Learning',
    'UI / UX Design',
    'Consulting'
  ];

  const company = [
    { label: 'Who We Are', path: '/who-we-are' },
    { label: 'Solutions', path: '/solutions' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
        <div className="border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto sm:px-2 px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={LogoImage}
                    alt="Centivra logo"
                    className="h-12 w-auto sm:h-18"
                  />
                </div>
                <p className="text-slate-200 leading-relaxed mb-6">
                  Engineering next-generation solutions for global enterprises. Transforming industries through innovation, excellence, and strategic technology partnership.
                </p>
              </div>

              {/* Services */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-white hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                        <span>{service}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg mb-6">Company</h4>
                <ul className="space-y-3">
                  {company.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.path} className="text-white hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 -mt-1">
                      <FaEnvelope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-md font-medium text-slate-300 mb-1">Email</div>
                      <a href="mailto:hello@centivra.com" className="text-white hover:text-blue-400 transition-colors">
                        hello@centivra.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 -mt-1">
                      <FaLocationArrow className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-md font-medium text-slate-300 mb-1">Headquarters</div>
                      <div className="text-white whitespace-nowrap">Colombo, Sri Lanka</div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className='mt-10'>
                    <div className="text-md font-medium text-white mb-2">Follow Us</div>
                    <div className="flex flex-wrap gap-1">
                      {socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.href}
                          aria-label={social.label}
                          className={`w-11 h-11 flex items-center justify-center text-slate-200 hover:text-white transition-all group`}
                        >
                          <div className="group-hover:scale-115 transition-transform">
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section - Copyright & Legal */}
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-slate-300 text-sm text-center lg:text-left">
                © {currentYear} Centivra IT Solutions. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;