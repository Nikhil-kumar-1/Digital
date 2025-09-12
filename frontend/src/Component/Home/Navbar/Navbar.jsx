import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpenItem, setMobileOpenItem] = useState(null);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
        setMobileOpenItem(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Navigation items with dropdowns
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Accountant",
      path: "/accountant",
    },
    {
      name:"Area Coordinator",
      path:"/areacoordinator"
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Web Design & Development",
      ],
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      dropdown: [
        "Case Studies",
        "Campaigns",
        "Client Testimonials",
        "Website Projects",
        "Branding",
      ],
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const toggleMobileDropdown = (index) => {
    if (mobileOpenItem === index) {
      setMobileOpenItem(null);
    } else {
      setMobileOpenItem(index);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          Nik Tech
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                to={item.path}
                className={`cursor-pointer transition-colors duration-300 flex items-center ${
                  scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-200"
                }`}
              >
                {item.name}
                {item.dropdown && <FiChevronDown className="ml-1" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {hoveredItem === idx && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-xl py-3 min-w-[220px] border border-gray-100 z-50"
                    >
                      {item.dropdown.map((dropdownItem, dIdx) => (
                        <motion.li
                          key={dIdx}
                          className="px-6 py-2 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          {dropdownItem}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <motion.button
          className="hidden lg:block bg-black text-white px-6 py-2 rounded-sm font-medium hover:bg-gray-800 transition-colors duration-300 border border-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.button>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden cursor-pointer z-50"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileOpenItem(null);
          }}
        >
          {isOpen ? (
            <FiX size={28} className={scrolled ? "text-black" : "text-white"} />
          ) : (
            <FiMenu
              size={28}
              className={scrolled ? "text-black" : "text-white"}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white text-black shadow-xl absolute top-full left-0 right-0 w-full overflow-hidden"
            style={{ boxSizing: 'border-box' }}
          >
            <ul className="flex flex-col p-4 w-full">
              {navItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <li className="border-b border-gray-100 last:border-b-0 w-full">
                    {item.dropdown ? (
                      <div 
                        className="flex items-center justify-between cursor-pointer py-4 px-2 hover:text-yellow-600 transition-colors duration-300 font-medium w-full"
                        onClick={() => toggleMobileDropdown(idx)}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: mobileOpenItem === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown />
                        </motion.div>
                      </div>
                    ) : (
                      <Link 
                        to={item.path} 
                        className="block py-4 px-2 hover:text-yellow-600 transition-colors duration-300 font-medium w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && mobileOpenItem === idx && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-6 bg-gray-50 w-full overflow-hidden"
                    >
                      {item.dropdown.map((dropdownItem, dIdx) => (
                        <li key={dIdx} className="border-b border-gray-100 last:border-b-0">
                          <div className="block py-3 px-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                            {dropdownItem}
                          </div>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </React.Fragment>
              ))}
              
              {/* CTA Button - Mobile */}
              <li className="mt-4 pt-4 border-t border-gray-200 w-full">
                <button 
                  className="w-full bg-black text-white py-3 rounded-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;