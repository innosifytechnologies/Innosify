import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaShieldAlt, FaRocket, FaMicrochip, FaChartLine } from "react-icons/fa";

const features = [
    {
        icon: FaCode,
        title: "Custom Software Development",
        description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
        gradient: "from-blue-500 to-cyan-400",
        slug: "custom-software-development"
    },
    {
        icon: FaCloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services to power your digital transformation.",
        gradient: "from-purple-500 to-pink-400",
        slug: "cloud-solutions"
    },
    {
        icon: FaShieldAlt,
        title: "Cybersecurity",
        description: "Enterprise-grade security solutions to protect your data and digital assets.",
        gradient: "from-green-500 to-emerald-400",
        slug: "cybersecurity"
    },
    {
        icon: FaRocket,
        title: "Digital Transformation",
        description: "End-to-end digital strategies to accelerate your business growth and innovation.",
        gradient: "from-orange-500 to-yellow-400",
        slug: "digital-transformation"
    },
    {
        icon: FaMicrochip,
        title: "IoT & Automation",
        description: "Smart connected solutions and industrial automation for the modern enterprise.",
        gradient: "from-cyan-500 to-blue-400",
        slug: "iot-automation"
    },
    {
        icon: FaChartLine,
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with advanced analytics and AI.",
        gradient: "from-pink-500 to-rose-400",
        slug: "data-analytics"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

const Features = () => {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.span
                        className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 mb-4 sm:mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Services
                    </motion.span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            What We
                        </span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Deliver
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
                        Comprehensive technology solutions designed to elevate your business and drive innovation forward.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative"
                        >
                            {/* Card */}
                            <Link to={`/services/${feature.slug}`} className="block h-full">
                                <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 sm:mb-6 shadow-lg`}>
                                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Learn more link */}
                                    <motion.div
                                        className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn more
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.div>

                                    {/* Corner accent */}
                                    <div className={`absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
