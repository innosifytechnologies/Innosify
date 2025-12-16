import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaServer, FaCoffee, FaHeartbeat, FaMoneyBillWave } from "react-icons/fa";
import Footer from "../components/Footer";

const jobs = [
    {
        title: "Senior Frontend Engineer",
        type: "Full-time",
        location: "Remote / Hybrid",
        department: "Engineering",
        icon: FaLaptopCode,
    },
    {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Remote",
        department: "Design",
        icon: FaPaintBrush,
    },
    {
        title: "Backend Developer",
        type: "Contract",
        location: "Remote",
        department: "Engineering",
        icon: FaServer,
    },
];

const benefits = [
    { icon: FaMoneyBillWave, title: "Competitive Salary", desc: "Top of market compensation packages." },
    { icon: FaLaptopCode, title: "Remote First", desc: "Work from anywhere in the world." },
    { icon: FaHeartbeat, title: "Health & Wellness", desc: "Comprehensive health coverage." },
    { icon: FaCoffee, title: "Learning Budget", desc: "Stipend for courses and conferences." },
];

const CareersPage = () => {
    return (
        <div className="bg-[#0a0a0f] min-h-screen pt-16 sm:pt-20">
            {/* Hero */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
                    >
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Revolution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4"
                    >
                        We're building the future of digital experiences. If you're passionate about innovation, we want you on our team.
                    </motion.p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 text-center">Why Join Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 sm:mb-4" />
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 text-center">Open Positions</h2>
                    <div className="space-y-3 sm:space-y-4">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.01 }}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl group hover:border-purple-500/50 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-purple-600 transition-colors flex-shrink-0">
                                        <job.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-1">
                                            <span>{job.department}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>{job.type}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 sm:mt-0 w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm sm:text-base">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
