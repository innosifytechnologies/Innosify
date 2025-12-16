import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaHandshake, FaShieldAlt } from "react-icons/fa";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <div className="bg-[#0a0a0f] min-h-screen pt-16 sm:pt-20">
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-400 font-medium tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4 block"
                    >
                        About Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    >
                        Innovating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Future</span> of <br className="hidden sm:block" />
                        Digital Technology
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4"
                    >
                        We are Innosify, a forward-thinking technology agency dedicated to transforming complex challenges into elegant, scalable digital solutions.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision Grid */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-blue-400">
                            <FaRocket className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            To empower businesses by bridging the gap between imaginative ideas and technical reality. We strive to deliver digital products that not only function flawlessly but also inspire and delight users.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-purple-400">
                            <FaLightbulb className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            To be the global catalyst for digital innovation, defining the standards of modern web development through creativity, precision, and unwavering quality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
                        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: FaLightbulb, title: "Innovation", desc: "Always exploring new horizons." },
                            { icon: FaHandshake, title: "Partnership", desc: "Success through collaboration." },
                            { icon: FaShieldAlt, title: "Integrity", desc: "Honesty in every line of code." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-white/30">
                                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{value.title}</h4>
                                <p className="text-gray-500 text-xs sm:text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Sections */}
            <CallToAction />
            <Footer />
        </div>
    );
};

export default AboutPage;
