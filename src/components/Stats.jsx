import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    {
        value: 50,
        suffix: "+",
        label: "Projects Delivered",
        description: "Successful launches",
    },
    {
        value: 30,
        suffix: "+",
        label: "Happy Clients",
        description: "Across industries",
    },
    {
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
        description: "5-star reviews",
    },
    {
        value: 5,
        suffix: "+",
        label: "Years Experience",
        description: "In the industry",
    },
];

const AnimatedCounter = ({ value, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, inView]);

    return (
        <span className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
};

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Stats Container */}
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-8 lg:p-12 overflow-hidden">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-50 blur-xl" />

                    {/* Inner glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                {/* Number */}
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        inView={isInView}
                                    />
                                </div>

                                {/* Label */}
                                <div className="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{stat.label}</div>

                                {/* Description */}
                                <div className="text-gray-500 text-xs sm:text-sm">{stat.description}</div>

                                {/* Hover line */}
                                <motion.div
                                    className="h-0.5 sm:h-1 w-0 mx-auto mt-3 sm:mt-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-8 sm:group-hover:w-12 transition-all duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Stats;
