import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="bg-[#0a0a0f] min-h-screen pt-16 sm:pt-20">
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Have a project in mind? We'd love to hear from you. Let's create something amazing together.
                    </motion.p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-2 lg:order-1 bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl"
                    >
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm text-gray-400">Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-xs sm:text-sm text-gray-400">Subject</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" />
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-xs sm:text-sm text-gray-400">Message</label>
                                <textarea rows="5" className="w-full bg-black/20 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm sm:text-base">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="order-1 lg:order-2 flex flex-col justify-center items-center space-y-6 sm:space-y-8 text-center lg:pl-10"
                    >
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-500 mb-4 sm:mb-6">Contact Information</h3>
                            <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
                                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                                        <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs sm:text-sm text-gray-500">Email</p>
                                        <p className="text-sm sm:text-lg">support@innosify.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                                        <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                                        <p className="text-sm sm:text-lg">+91 96769 06525</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                                        <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs sm:text-sm text-gray-500">Location</p>
                                        <p className="text-sm sm:text-lg">Kuppam, Andhra Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow Us</h3>
                            <div className="flex gap-3 sm:gap-4 justify-center">
                                {[FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
