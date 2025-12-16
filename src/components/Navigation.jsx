import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaGraduationCap, FaCogs, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logos/innosify.png";

const serviceOptions = [
  {
    name: "IT Services",
    icon: FaCode,
    description: "Custom software & cloud solutions",
    href: "/services/it-services",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    name: "STEM Education",
    icon: FaGraduationCap,
    description: "Hands-on learning programs",
    href: "/services/stem-education",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    name: "Engineering Solutions",
    icon: FaCogs,
    description: "Industrial & automation solutions",
    href: "/services/engineering-solutions",
    gradient: "from-emerald-500 to-teal-400"
  }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: null, hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <>
      <div className="navigation-outer w-full flex justify-center items-center fixed z-50 bg-transparent px-4 sm:px-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`nav-glass w-full max-w-[1200px] flex items-center justify-between font-medium px-4 sm:px-6 py-3 transition-all duration-300 rounded-xl sm:rounded-2xl ${scrolled
            ? "mt-2 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/20 border border-white/5"
            : "mt-3 sm:mt-6 bg-black/20 backdrop-blur-md"
            }`}
        >
          {/* Logo Section */}
          <Link to="/">
            <motion.div
              className="nav-left flex items-center gap-x-2 sm:gap-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <motion.img
                src={logo}
                alt="Innosify Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
                animate={{ rotate: logoHovered ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Innosify
              </h2>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-center hidden lg:block">
            <ul className="flex items-center justify-center gap-x-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                // Services dropdown
                if (item.hasDropdown) {
                  return (
                    <motion.li
                      key={index}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <motion.span
                        className="cursor-pointer px-4 py-2 rounded-xl text-sm transition-all duration-300 flex items-center gap-1 text-gray-300 hover:text-white relative"
                      >
                        {item.name}
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                        {/* Hover underline animation */}
                        <motion.div
                          className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          animate={{
                            width: servicesOpen ? 24 : 0,
                            x: "-50%"
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </motion.span>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
                          >
                            <div className="p-2">
                              {serviceOptions.map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.href}
                                  className="block"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <motion.div
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                  >
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                                        {service.name}
                                      </h4>
                                      <p className="text-gray-400 text-xs mt-0.5">
                                        {service.description}
                                      </p>
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Bottom accent */}
                            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                // Regular nav items
                return (
                  <motion.li
                    key={index}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link to={item.path}>
                      <motion.span
                        className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 block relative ${isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                          }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        {/* Hover underline animation */}
                        {!isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                            initial={{ width: 0, x: "-50%" }}
                            animate={{
                              width: hoveredItem === index ? 24 : 0,
                              x: "-50%"
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          />
                        )}
                      </motion.span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Desktop CTA Button */}
          <motion.div className="nav-right hidden lg:block">
            <Link to="/contact">
              <motion.button
                className="relative px-6 py-2.5 rounded-xl text-sm font-semibold overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-100 group-hover:opacity-90 transition-opacity" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative text-gray-900 font-bold">Get in Touch</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-40 lg:hidden pt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-6"
            >
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  if (item.hasDropdown) {
                    return (
                      <div key={index}>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium rounded-xl hover:bg-white/10 transition-colors"
                        >
                          {item.name}
                          <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-2">
                                {serviceOptions.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    to={service.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                                      <service.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <div className="text-white font-medium text-sm">{service.name}</div>
                                      <div className="text-gray-400 text-xs">{service.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                        : "text-white hover:bg-white/10"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-semibold text-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
