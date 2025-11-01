import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Sling as Hamburger } from "hamburger-react";
import LogoImage from "../assets/images/Logo-transparency.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Software Engineering", path: "/services/software-engineering" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "Cloud Solutions", path: "/services/cloud-solutions" },
        { name: "AI & Machine Learning", path: "/services/ai-machine-learning" },
        { name: "UI / UX Design", path: "/services/ui-ux-design" },
        { name: "Consulting", path: "/services/consulting" },
      ],
    },
    { name: "Solutions", path: "/solutions" },
    // { name: "Blog", path: "/blog" },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={LogoImage}
            alt="Centivra logo"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-[1.05rem] font-medium text-slate-900 hover:text-[#001B51] transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full mt-2 w-60 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === link.name
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-5 py-2.5 text-[0.95rem] font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0070CC] transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[1.05rem] font-medium transition-colors rounded-md ${
                      isActive
                        ? "text-[#0070CC]"
                        : "text-slate-900 hover:text-[#001B51]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#002061] transition shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-slate-900">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    {/* Dropdown Trigger */}
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className="w-full flex items-center justify-between px-6 py-3 text-lg font-medium text-slate-900 hover:text-[#001B51] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180 text-[#001B51]" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === link.name
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-slate-50 border-l border-slate-200">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block px-10 py-2 text-lg font-medium text-slate-800 hover:text-[#0070CC] transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-lg font-medium transition-colors ${
                        isActive
                          ? "text-[#0070CC]"
                          : "text-slate-900 hover:text-[#001B51]"
                      }`
                    }
                    >
              {link.name}
            </NavLink>
          )}
        </div>
      ))}

      {/* CTA Button */}
      <div className="px-6 pt-4">
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block text-center px-6 py-2.5 bg-[#001B51] text-white font-semibold rounded-full hover:bg-[#002061] transition"
        >
          Contact Us
        </Link>
      </div>
    </ul>
  </div>
)}  
    </nav>
  );
};

export default Navbar;
