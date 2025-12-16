import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaGraduationCap,
    FaSchool,
    FaChalkboardTeacher,
    FaTrophy,
    FaFlask,
    FaRocket,
    FaCogs,
    FaMicrochip,
    FaCheckCircle,
    FaArrowRight,
    FaQuoteLeft,
    FaLightbulb,
    FaBook,
    FaCubes,
    FaRobot
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
function STEMHero() {
    const stats = [
        { value: '300+', label: 'Partner Schools' },
        { value: '50K+', label: 'Students Trained' },
        { value: '500+', label: 'Certified Educators' },
        { value: '85%', label: 'Success Rate' }
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-purple-300 text-xs sm:text-sm font-medium">IIT-Aligned STEM Platform</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                        >
                            <span className="text-white">STEM Robotics Ecosystem</span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                                School Labs to Industry
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Complete robotics kits, IIT-mapped curriculum, certified educators, and institutional partnerships.
                            A comprehensive platform designed for schools, students, and teachers.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
                            >
                                <FaSchool className="w-4 h-4 sm:w-5 sm:h-5" />
                                Schedule Lab Demo
                                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all text-sm sm:text-base"
                            >
                                <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                                Explore Programs
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-3xl border border-purple-500/20 p-6 lg:p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-gray-400 text-sm ml-2">Learning Dashboard</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-500/20">
                                            <FaRobot className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">Robotics Module</div>
                                            <div className="text-gray-500 text-sm">12 Projects Completed</div>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-medium">85%</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-pink-500/20">
                                            <FaMicrochip className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">Electronics Lab</div>
                                            <div className="text-gray-500 text-sm">8 Experiments Done</div>
                                        </div>
                                    </div>
                                    <span className="text-purple-400 text-sm font-medium">72%</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-500/20">
                                            <FaCubes className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">3D Design</div>
                                            <div className="text-gray-500 text-sm">5 Models Created</div>
                                        </div>
                                    </div>
                                    <span className="text-blue-400 text-sm font-medium">60%</span>
                                </div>
                            </div>

                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ==================== WHAT WE OFFER ====================
function WhatWeOffer() {
    const offerings = [
        {
            icon: FaFlask,
            title: 'STEM Robotics Labs',
            description: 'Complete turnkey lab solutions for educational institutions with curriculum, equipment, and training.',
            color: 'purple'
        },
        {
            icon: FaBook,
            title: 'IIT-Aligned Curriculum',
            description: 'Structured learning programs mapped to academic standards with hands-on robotics projects.',
            color: 'pink'
        },
        {
            icon: FaChalkboardTeacher,
            title: 'Educator Certification',
            description: 'Professional development programs for teachers with collaboration opportunities.',
            color: 'blue'
        },
        {
            icon: FaTrophy,
            title: 'Competitions & Events',
            description: 'National robotics challenges, hackathons, and research internship opportunities.',
            color: 'amber'
        }
    ];

    const colorClasses = {
        purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20 text-purple-400',
        pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/20 text-pink-400',
        blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20 text-blue-400',
        amber: 'from-amber-500/20 to-amber-600/10 border-amber-500/20 text-amber-400'
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Our Solutions
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Complete <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">STEM Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Comprehensive solutions designed to transform STEM education at every level.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {offerings.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${colorClasses[item.color]} border backdrop-blur-sm hover:scale-105 transition-transform`}
                        >
                            <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${colorClasses[item.color]} w-fit mb-3 sm:mb-4`}>
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== FOR WHOM ====================
function ForWhom() {
    const audiences = [
        {
            icon: FaSchool,
            title: 'For Schools & Institutions',
            items: ['Turnkey lab setup', 'IIT-aligned curriculum', 'Teacher training programs', 'Partnership models'],
            cta: 'Partner With Us',
            link: '/contact',
            gradient: 'from-purple-600 to-purple-500'
        },
        {
            icon: FaGraduationCap,
            title: 'For Students & Parents',
            items: ['30+ robotics courses', 'Hardware kits included', 'Exam preparation integration', 'Project portfolio building'],
            cta: 'Explore Programs',
            link: '/contact',
            gradient: 'from-pink-600 to-pink-500'
        },
        {
            icon: FaChalkboardTeacher,
            title: 'For Teachers & Faculty',
            items: ['STEM certification', 'Resource library access', 'Faculty collaboration', 'Professional development'],
            cta: 'Get Certified',
            link: '/contact',
            gradient: 'from-blue-600 to-blue-500'
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Stakeholders
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Built for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Everyone in STEM</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                        >
                            <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${audience.gradient} w-fit mb-4 sm:mb-6`}>
                                <audience.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">{audience.title}</h3>
                            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {audience.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                                        <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={audience.link}
                                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${audience.gradient} text-white font-medium hover:shadow-lg transition-all w-full text-sm sm:text-base`}
                            >
                                {audience.cta}
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== PROCESS ====================
function Process() {
    const steps = [
        { num: '01', icon: FaLightbulb, title: 'Select Program', desc: 'Choose school lab, student course, or educator certification' },
        { num: '02', icon: FaCubes, title: 'Receive Materials', desc: 'Hardware kits and curriculum delivered to your location' },
        { num: '03', icon: FaCogs, title: 'Learn & Build', desc: 'Hands-on sessions with 60+ practical projects' },
        { num: '04', icon: FaRocket, title: 'Advance & Compete', desc: 'Participate in competitions and research programs' }
    ];

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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Process
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        How <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">It Works</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-purple-500/30 transition-colors"
                        >
                            <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[10px] sm:text-xs font-bold text-purple-400 bg-purple-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                {step.num}
                            </span>
                            <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 w-fit mx-auto mb-3 sm:mb-4">
                                <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />
                            </div>
                            <h4 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{step.title}</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== PRODUCTS / KITS ====================
function ProductsSection() {
    const kits = [
        { badge: 'Foundation', name: 'Starter Kit', grade: 'Grades 5-6', desc: 'Arduino, sensors, 15+ projects', price: '5,000' },
        { badge: 'Intermediate', name: 'Robotics Kit', grade: 'Grades 7-8', desc: 'Robot chassis, motors, 25+ projects', price: '8,000' },
        { badge: 'Advanced', name: 'Systems Kit', grade: 'Grades 9-10', desc: 'ESP32, IoT, PCB design, 40+ projects', price: '12,000' },
        { badge: 'Research', name: 'Innovation Kit', grade: 'Grades 11-12', desc: 'Drones, AI modules, robotic arms', price: '18,000' }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Hardware
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Robotics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Kits & Equipment</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Open-standard hardware based on Arduino, Python, and STM32. No proprietary lock-in.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {kits.map((kit, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors"
                        >
                            <div className="h-32 sm:h-40 bg-gradient-to-br from-purple-900/30 to-pink-900/20 flex items-center justify-center relative">
                                <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[10px] sm:text-xs font-medium text-purple-300 bg-purple-500/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                    {kit.badge}
                                </span>
                                <FaCubes className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{kit.name}</h3>
                                <p className="text-purple-400 text-xs sm:text-sm mb-2 sm:mb-3">{kit.grade}</p>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{kit.desc}</p>
                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                                    <span className="text-lg sm:text-xl font-bold text-white">INR {kit.price}</span>
                                    <Link to="/contact" className="text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300">
                                        Inquire
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
    const testimonials = [
        {
            text: "The STEM program has significantly enhanced student engagement in our institution. We have observed measurable improvements in academic performance.",
            author: 'Dr. Priya Sharma',
            role: 'Principal, DPS Delhi'
        },
        {
            text: "The hands-on robotics projects provided practical understanding of physics concepts that translated directly to competitive exam success.",
            author: 'Rajesh Kumar',
            role: 'Parent'
        },
        {
            text: "The certification program equipped me with comprehensive skills to establish and lead our institution's innovation laboratory.",
            author: 'Sneha Reddy',
            role: 'STEM Educator'
        }
    ];

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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Feedback</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 relative"
                        >
                            <FaQuoteLeft className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500/30 mb-3 sm:mb-4" />
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">"{item.text}"</p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm sm:text-base">{item.author}</div>
                                    <div className="text-gray-500 text-xs sm:text-sm">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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
                    className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                            Ready to Transform <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">STEM Education?</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                            Join 300+ institutions and 50,000+ students advancing their capabilities through our comprehensive programs.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
                            >
                                <FaSchool className="w-4 h-4 sm:w-5 sm:h-5" />
                                For Institutions
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all text-sm sm:text-base"
                            >
                                <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                                For Students
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE ====================
export default function STEMEducation() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen">
            <STEMHero />
            <WhatWeOffer />
            <ForWhom />
            <Process />
            <ProductsSection />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    );
}
