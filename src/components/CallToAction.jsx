import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
            {/* Container */}
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 backdrop-blur-xl"
                >
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/20 rounded-full blur-[100px]" />

                    {/* Text Content */}
                    <div className="max-w-2xl relative z-10 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale</span> Your <br className="hidden sm:block" />
                            Tech Vision?
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-0 text-center md:text-left">
                            Join leading companies transforming their digital presence with Innosify. Let's build something extraordinary together.
                        </p>
                    </div>

                    {/* Action Button */}
                    <motion.div
                        className="flex-shrink-0 relative z-10 w-full md:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/contact" className="block">
                            <button className="group relative w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base">
                                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">Get Started Now</span>
                                <FaArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:text-blue-600 transition-all duration-300" />

                                {/* Button bg hover effect */}
                                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
