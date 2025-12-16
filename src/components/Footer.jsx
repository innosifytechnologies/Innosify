import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import logo from "../assets/logos/innosify.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "IT Services", href: "/services/it-services" },
      { name: "STEM Education", href: "/services/stem-education" },
      { name: "Engineering Solutions", href: "/services/engineering-solutions" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Get in Touch", href: "/contact" },
      { name: "FAQs", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#050508] pt-10 sm:pt-16 lg:pt-24 pb-6 sm:pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content - Different layout for mobile vs desktop */}

        {/* Mobile: Services, Company, Support grid in 3 columns */}
        <div className="lg:hidden mb-10">
          <div className="grid grid-cols-3 gap-4">
            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: Full layout with brand section */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <img src={logo} alt="Innosify" className="w-12 h-12" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Innosify
              </h2>
            </motion.div>

            <p className="text-gray-400 text-base mb-6 max-w-sm leading-relaxed">
              Transforming ideas into reality through innovative technology solutions,
              STEM education, and engineering excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:support@innosify.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                support@innosify.com
              </a>
              <a href="tel:+919676906525" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <FaPhone className="w-4 h-4" />
                </span>
                +91 96769 06525
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="p-2 rounded-lg bg-white/5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </span>
                Kuppam, Andhra Pradesh, India
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-b border-white/10 py-8 sm:py-10 lg:py-12 mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm sm:text-base">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            © {currentYear} Innosify. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500 w-3 h-3" />
            </motion.span>
            in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;