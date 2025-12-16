import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCogs, FaProjectDiagram, FaTools, FaIndustry, FaDraftingCompass, FaNetworkWired, FaRobot, FaCog, FaSatellite, FaArrowRight } from "react-icons/fa";

const engineeringServices = [
  { title: "Industrial Automation", desc: "Smart manufacturing", icon: FaIndustry },
  { title: "System Architecture", desc: "Scalable design", icon: FaProjectDiagram },
  { title: "Technical Consulting", desc: "Expert advice", icon: FaTools },
  { title: "Process Optimization", desc: "Efficiency boost", icon: FaCogs }
];

const instrumentationServices = [
  {
    id: "iot-instrumentation",
    title: "IoT",
    subtitle: "Instrumentation",
    icon: FaNetworkWired,
    description: "Smart sensor networks & real-time data acquisition",
    features: ["Sensor Networks", "Edge Computing", "DAQ Systems"],
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    id: "ai-instrumentation",
    title: "AI",
    subtitle: "Instrumentation",
    icon: FaRobot,
    description: "ML powered measurement & analytics",
    features: ["Predictive Analytics", "Anomaly Detection", "Computer Vision"],
    gradient: "from-violet-500 to-purple-400"
  },
  {
    id: "automation-instrumentation",
    title: "Automation",
    subtitle: "Instrumentation",
    icon: FaCog,
    description: "Industrial control & process optimization",
    features: ["SCADA Systems", "PLC Integration", "HMI Development"],
    gradient: "from-amber-500 to-orange-400"
  },
  {
    id: "robotics-instrumentation",
    title: "Robotics",
    subtitle: "Instrumentation",
    icon: FaSatellite,
    description: "Precision sensing for autonomous systems",
    features: ["Motion Control", "Force Sensing", "Vision Systems"],
    gradient: "from-red-500 to-pink-400"
  }
];

// Shared background component
const SharedBackground = () => (
  <>
    {/* Tech Grid Background */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}
    />
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-blue-950/30" />
  </>
);

// First Screen: Engineering Solutions
export const EngineeringSolutions = () => {
  return (
    <div className="w-screen h-screen service-page flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] px-4">
      <SharedBackground />

      <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Visuals Left (Desktop only) */}
        <motion.div
          className="relative h-[280px] sm:h-[350px] hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] border border-blue-500/20 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border border-dotted border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }} />
            <div className="w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] bg-blue-500/5 rounded-full backdrop-blur-xl border border-blue-500/30 flex items-center justify-center">
              <FaDraftingCompass className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400/80" />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="space-y-4 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-3">
              Engineering Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Engineering <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Solutions
              </span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto lg:mx-0 hidden sm:block">
              Precision engineering meets digital innovation. We design, build, and optimize complex systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {engineeringServices.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-3 sm:p-4 rounded-lg group hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{item.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Second Screen: Instrumentation Solutions
export const InstrumentationSolutions = () => {
  return (
    <div className="w-screen h-screen service-page flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] px-4">
      <SharedBackground />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-emerald-500/30 text-emerald-300 mb-2">
            Instrumentation Solutions
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            Instrumentation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-violet-400 to-red-400">
              Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto hidden sm:block">
            Advanced instrumentation across IoT, AI, Automation & Robotics.
          </p>
        </motion.div>

        {/* Instrumentation Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {instrumentationServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/services/${service.id}`}>
                <div className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />

                  {/* Icon */}
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-2`}>
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-0.5">
                    {service.title}
                  </h3>
                  <p className={`text-[10px] sm:text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-1 sm:mb-2`}>
                    {service.subtitle}
                  </p>

                  {/* Description - Hidden on mobile */}
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed hidden sm:block">
                    {service.description}
                  </p>

                  {/* Features - Hidden on mobile */}
                  <div className="space-y-1 mb-2 hidden lg:block">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-gray-300 text-[10px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <FaArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Combined component for backward compatibility (wraps both without extra container)
const EngSolutions = () => {
  return (
    <>
      <EngineeringSolutions />
      <InstrumentationSolutions />
    </>
  );
};

export default EngSolutions;