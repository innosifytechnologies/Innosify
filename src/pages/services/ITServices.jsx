import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaCloud,
    FaMobileAlt,
    FaDatabase,
    FaShieldAlt,
    FaArrowRight,
    FaCheckCircle,
    FaRocket,
    FaLaptopCode,
    FaGlobe
} from 'react-icons/fa';
import Footer from '../../components/Footer';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// ==================== HERO ====================
function ITHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0f1a] to-[#0a0a0f]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-blue-300 text-xs sm:text-sm font-medium">IT Services Division</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
                        >
                            <span className="text-white">Digital Solutions</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Coming Soon
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
                        >
                            We are developing comprehensive IT solutions including custom software development,
                            cloud infrastructure, and digital transformation services for enterprises.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm sm:text-base"
                            >
                                <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
                                Get Notified at Launch
                                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all text-sm sm:text-base"
                            >
                                Contact Sales
                            </Link>
                        </motion.div>

                        {/* Visual Element */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative max-w-md sm:max-w-2xl mx-auto px-4"
                        >
                            <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl sm:rounded-3xl border border-blue-500/20 p-6 sm:p-8 backdrop-blur-sm">
                                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                                    <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                        <FaCloud className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                                        <div className="text-white font-medium text-xs sm:text-sm">Cloud Solutions</div>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                        <FaLaptopCode className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                                        <div className="text-white font-medium text-xs sm:text-sm">Custom Software</div>
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                        <FaMobileAlt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                                        <div className="text-white font-medium text-xs sm:text-sm">Mobile Apps</div>
                                    </div>
                                </div>

                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ==================== PLANNED SERVICES ====================
function PlannedServices() {
    const services = [
        {
            icon: FaCode,
            title: 'Custom Software Development',
            description: 'Enterprise-grade applications built with modern technologies and best practices.',
            color: 'blue'
        },
        {
            icon: FaCloud,
            title: 'Cloud Infrastructure',
            description: 'Scalable cloud solutions on AWS, Azure, and Google Cloud platforms.',
            color: 'cyan'
        },
        {
            icon: FaMobileAlt,
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile apps for iOS and Android.',
            color: 'indigo'
        },
        {
            icon: FaDatabase,
            title: 'Data Engineering',
            description: 'Data pipelines, analytics platforms, and business intelligence solutions.',
            color: 'blue'
        },
        {
            icon: FaShieldAlt,
            title: 'Cybersecurity',
            description: 'Security assessments, compliance, and threat protection services.',
            color: 'cyan'
        },
        {
            icon: FaGlobe,
            title: 'Digital Transformation',
            description: 'End-to-end digital modernization for legacy systems and processes.',
            color: 'indigo'
        }
    ];

    const colorClasses = {
        blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20 text-blue-400',
        cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400',
        indigo: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/20 text-indigo-400'
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Planned Services
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        What We Are <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Building</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Our IT services division is being developed to deliver comprehensive technology solutions for modern enterprises.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${colorClasses[service.color]} border backdrop-blur-sm opacity-70`}
                        >
                            <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${colorClasses[service.color]} w-fit mb-3 sm:mb-4`}>
                                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
                            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-blue-400/60 text-xs sm:text-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-400/60" />
                                Coming Soon
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== WHY WAIT ====================
function WhyWait() {
    const reasons = [
        'Enterprise-grade security and compliance',
        'Experienced team of certified engineers',
        'Proven methodologies and best practices',
        'Dedicated support and maintenance',
        'Competitive pricing and flexible engagement models',
        'Seamless integration with existing systems'
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                    <motion.div variants={fadeInUp}>
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                            Why Choose Us
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Worth the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wait</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                            We are building our IT services division with the same commitment to excellence
                            that defines our engineering and STEM education offerings.
                        </p>
                        <ul className="space-y-3 sm:space-y-4">
                            {reasons.map((reason, index) => (
                                <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                                    <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Stay Informed</h3>
                            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                                Be the first to know when our IT services division launches. Contact us to register your interest.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all w-full text-sm sm:text-base"
                            >
                                <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
                                Register Interest
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ==================== CTA ====================
function CTASection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900/50 to-cyan-900/30 border border-blue-500/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                            Explore Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Active Services</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                            While IT Services is in development, explore our established offerings in STEM Education and Engineering Solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                            <Link
                                to="/services/stem-education"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                            >
                                STEM Education
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                            <Link
                                to="/services/engineering-solutions"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                            >
                                Engineering Solutions
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE ====================
export default function ITServices() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen">
            <ITHero />
            <PlannedServices />
            <WhyWait />
            <CTASection />
            <Footer />
        </div>
    );
}
