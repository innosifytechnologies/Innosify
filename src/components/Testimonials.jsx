import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, TechFlow",
        content: "Innosify transformed our digital presence. The attention to detail and animations are world-class.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp X",
        content: "The best development team we've worked with. Delivered on time and exceeded all design expectations.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emily Davis",
        role: "Product Manager, Innovate",
        content: "Their expertise in modern web technologies helped us scale our platform to millions of users.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "David Wilson",
        role: "Director, FutureRes",
        content: "Professional, creative, and technical wizards. The new site has doubled our conversion rates.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
];

const Testimonials = () => {
    return (
        <div className="w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <span className="text-blue-400 font-medium tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">Testimonials</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Innovators</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
                        See what industry leaders are saying about our solutions and impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <div className="mb-3 sm:mb-4 text-blue-400">
                                <FaQuoteLeft className="w-5 h-5 sm:w-6 sm:h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 min-h-[60px] sm:min-h-[80px]">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20"
                                />
                                <div>
                                    <h4 className="text-white text-xs sm:text-sm font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-[10px] sm:text-xs">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-0.5 sm:gap-1 mt-3 sm:mt-4 text-yellow-500/50 text-[10px] sm:text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
