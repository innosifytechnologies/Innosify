import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaMicrochip,
    FaCogs,
    FaChartLine,
    FaIndustry,
    FaCheckCircle,
    FaArrowRight,
    FaBolt,
    FaShieldAlt,
    FaClock,
    FaDatabase,
    FaFlask
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
function EngineeringHero() {
    const stats = [
        { value: '99.7%', label: 'System Uptime' },
        { value: '12ms', label: 'Avg. Latency' },
        { value: '150+', label: 'Deployments' },
        { value: '73%', label: 'Efficiency Gain' }
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a1a1a] to-[#0a0a0f]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 sm:mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-300 text-xs sm:text-sm font-medium">Industrial Engineering Solutions</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                        >
                            <span className="text-white">Engineering Systems That</span>
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Measure, Control & Automate
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Embedded systems, precision instrumentation, and automation platforms for research and industry.
                            Transforming complex engineering challenges into intelligent, scalable solutions.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-sm sm:text-base"
                            >
                                <FaIndustry className="w-4 h-4 sm:w-5 sm:h-5" />
                                Request Consultation
                                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all text-sm sm:text-base"
                            >
                                <FaFlask className="w-4 h-4 sm:w-5 sm:h-5" />
                                View R&D Portfolio
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Visual - System Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-3xl border border-emerald-500/20 p-6 lg:p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-gray-400 text-sm ml-2">Live System Dashboard</span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <div className="text-gray-500 text-xs mb-1">Sensor Uptime</div>
                                    <div className="text-emerald-400 text-lg font-bold">99.7%</div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                        <div className="w-[99%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <div className="text-gray-500 text-xs mb-1">Latency</div>
                                    <div className="text-cyan-400 text-lg font-bold">12ms</div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                        <div className="w-[24%] h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <div className="text-gray-500 text-xs mb-1">Error Rate</div>
                                    <div className="text-green-400 text-lg font-bold">0.03%</div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                        <div className="w-[3%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl">
                                <div className="text-gray-400 text-xs mb-3">Temperature Sensor (24h)</div>
                                <svg viewBox="0 0 200 60" className="w-full">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#10B981" />
                                            <stop offset="100%" stopColor="#06B6D4" />
                                        </linearGradient>
                                    </defs>
                                    <polyline
                                        fill="none"
                                        stroke="url(#chartGradient)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        points="10,40 40,35 70,30 100,25 130,30 160,35 190,32"
                                    />
                                    {[10, 40, 70, 100, 130, 160, 190].map((x, i) => (
                                        <circle key={i} cx={x} cy={[40, 35, 30, 25, 30, 35, 32][i]} r="3" fill="#10B981" />
                                    ))}
                                </svg>
                            </div>

                            <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-xs">
                                <span>Live prototypes</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                <span>Data-backed design</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                <span>Field-tested</span>
                            </div>

                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ==================== CAPABILITIES ====================
function Capabilities() {
    const capabilities = [
        {
            icon: FaMicrochip,
            title: 'Embedded Systems',
            description: 'Custom firmware development, edge AI integration, and board bring-up for performance-critical applications.',
            features: ['Firmware Development', 'Edge AI & ML', 'Board Bring-up', 'Real-time Systems'],
            color: 'emerald'
        },
        {
            icon: FaChartLine,
            title: 'Instrumentation',
            description: 'Precision data acquisition, signal conditioning, and calibration solutions for research and industry.',
            features: ['Data Acquisition', 'Signal Conditioning', 'Calibration Labs', 'Sensor Integration'],
            color: 'teal'
        },
        {
            icon: FaCogs,
            title: 'Automation',
            description: 'PLC/edge control systems, SCADA integration, and digital twin implementations for smart operations.',
            features: ['PLC/Edge Control', 'SCADA Integration', 'Digital Twin', 'Process Optimization'],
            color: 'cyan'
        }
    ];

    const colorClasses = {
        emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20 text-emerald-400',
        teal: 'from-teal-500/20 to-teal-600/10 border-teal-500/20 text-teal-400',
        cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400'
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Core Capabilities
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Engineering <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Excellence</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        End-to-end engineering solutions from concept to deployment, backed by deep expertise in embedded systems and industrial automation.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${colorClasses[cap.color]} border backdrop-blur-sm hover:scale-105 transition-transform`}
                        >
                            <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${colorClasses[cap.color]} w-fit mb-4 sm:mb-6`}>
                                <cap.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{cap.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{cap.description}</p>
                            <ul className="space-y-2">
                                {cap.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                                        <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-medium mt-4 sm:mt-6 hover:text-emerald-300"
                            >
                                View use-cases
                                <FaArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== R&D HIGHLIGHTS ====================
function RDHighlights() {
    const projects = [
        { name: 'SmartSense-X2', status: 'Active', description: 'Multi-modal industrial sensor fusion platform' },
        { name: 'EdgeCtrl-Pro', status: 'Testing', description: 'Ultra-low latency edge controller' },
        { name: 'TwinSync-API', status: 'Beta', description: 'Real-time digital twin synchronization' },
        { name: 'CalibMax-Suite', status: 'Released', description: 'Automated calibration management' }
    ];

    const statusColors = {
        'Active': 'bg-emerald-500/20 text-emerald-400',
        'Testing': 'bg-amber-500/20 text-amber-400',
        'Beta': 'bg-blue-500/20 text-blue-400',
        'Released': 'bg-green-500/20 text-green-400'
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent">
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Innovation Lab
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        R&D <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Highlights</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Advancing the boundaries of instrumentation and automation technology.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-6 sm:gap-8"
                >
                    {/* Project List */}
                    <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Active Projects</h3>
                        <div className="space-y-3 sm:space-y-4">
                            {projects.map((project, index) => (
                                <div key={index} className="p-3 sm:p-4 bg-white/5 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white font-medium text-sm sm:text-base">{project.name}</span>
                                        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${statusColors[project.status]}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-xs sm:text-sm">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Telemetry Dashboard */}
                    <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Real-time Telemetry</h3>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-lg sm:text-2xl font-bold text-white">99.7%</div>
                                <div className="text-gray-500 text-[10px] sm:text-xs">Sensor Uptime</div>
                            </div>
                            <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                <FaBolt className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-lg sm:text-2xl font-bold text-white">12ms</div>
                                <div className="text-gray-500 text-[10px] sm:text-xs">Avg. Latency</div>
                            </div>
                            <div className="p-3 sm:p-4 bg-white/5 rounded-xl text-center">
                                <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto mb-1 sm:mb-2" />
                                <div className="text-lg sm:text-2xl font-bold text-white">0.03%</div>
                                <div className="text-gray-500 text-[10px] sm:text-xs">Error Rate</div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 bg-white/5 rounded-xl">
                            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Sensor Readings (24h)</div>
                            <svg viewBox="0 0 400 120" className="w-full">
                                <defs>
                                    <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                                    </linearGradient>
                                </defs>
                                {[20, 40, 60, 80, 100].map((y) => (
                                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" />
                                ))}
                                <path
                                    d="M0,80 Q50,60 100,70 T200,50 T300,60 T400,55 L400,120 L0,120 Z"
                                    fill="url(#areaGradient2)"
                                />
                                <path
                                    d="M0,80 Q50,60 100,70 T200,50 T300,60 T400,55"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ==================== PRODUCTS ====================
function ProductsSection() {
    const products = [
        {
            name: 'EdgeCore X1',
            category: 'Hardware Platform',
            description: 'High-performance edge computing module with industrial-grade reliability',
            specs: ['ARM Cortex-A72', '8GB DDR4', '-40°C to +85°C', '24V Industrial'],
            badge: 'Popular'
        },
        {
            name: 'SenseHub Pro',
            category: 'Controller',
            description: 'Multi-channel data acquisition and control hub for distributed systems',
            specs: ['32 Analog Inputs', '16 Digital I/O', 'Modbus/OPC-UA', 'PoE Powered'],
            badge: 'New'
        },
        {
            name: 'InnoStack SDK',
            category: 'Software Suite',
            description: 'Complete development toolkit for rapid instrumentation prototyping',
            specs: ['Python/C++ APIs', 'Web Dashboard', 'Cloud Sync', 'MQTT/REST'],
            badge: null
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
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    >
                        Product Portfolio
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
                    >
                        Platform <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Products</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        Production-ready hardware and software solutions for rapid deployment.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors relative"
                        >
                            {product.badge && (
                                <span className={`absolute top-4 sm:top-6 right-4 sm:right-6 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${product.badge === 'Popular' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-400'
                                    }`}>
                                    {product.badge}
                                </span>
                            )}
                            <div className="text-emerald-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">{product.category}</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{product.name}</h3>
                            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{product.description}</p>
                            <ul className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                {product.specs.map((spec, idx) => (
                                    <li key={idx} className="text-gray-500 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-3 sm:gap-4">
                                <Link to="/contact" className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white flex items-center gap-1.5 sm:gap-2">
                                    <FaDatabase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    Datasheet
                                </Link>
                                <Link to="/contact" className="text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300">
                                    Request Quote
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ==================== CASE STUDY ====================
function CaseStudy() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                Featured Case Study
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                                Reducing Downtime by 73% for Manufacturing Enterprise
                            </h3>

                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <div>
                                    <div className="text-emerald-400 text-xs sm:text-sm font-medium mb-1">Challenge</div>
                                    <p className="text-gray-400 text-sm sm:text-base">Legacy instrumentation causing frequent production halts and data gaps.</p>
                                </div>
                                <div>
                                    <div className="text-teal-400 text-xs sm:text-sm font-medium mb-1">Approach</div>
                                    <p className="text-gray-400 text-sm sm:text-base">Deployed edge-based sensor fusion with predictive maintenance AI and real-time SCADA integration.</p>
                                </div>
                                <div>
                                    <div className="text-cyan-400 text-xs sm:text-sm font-medium mb-1">Impact</div>
                                    <p className="text-gray-400 text-sm sm:text-base">73% reduction in unplanned downtime, 2.4x improvement in data resolution, ROI achieved in 8 months.</p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium hover:shadow-lg transition-all text-sm sm:text-base"
                            >
                                Read Full Case Study
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl text-center">
                                <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">73%</div>
                                <div className="text-gray-400 text-xs sm:text-sm">Downtime Reduction</div>
                            </div>
                            <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl text-center">
                                <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">2.4x</div>
                                <div className="text-gray-400 text-xs sm:text-sm">Data Resolution</div>
                            </div>
                            <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl text-center">
                                <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">8mo</div>
                                <div className="text-gray-400 text-xs sm:text-sm">ROI Achievement</div>
                            </div>
                        </div>
                    </div>
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
                    className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-900/50 to-teal-900/30 border border-emerald-500/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                            R&D as a <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Service</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                            Prototyping, Testing, Certification — Partner with our engineering team to accelerate your product development from concept to production.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all text-sm sm:text-base"
                            >
                                Schedule Technical Consultation
                                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all text-sm sm:text-base"
                            >
                                Download Capability Deck
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ==================== MAIN PAGE ====================
export default function EngineeringSolutions() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen">
            <EngineeringHero />
            <Capabilities />
            <RDHighlights />
            <ProductsSection />
            <CaseStudy />
            <CTASection />
            <Footer />
        </div>
    );
}
