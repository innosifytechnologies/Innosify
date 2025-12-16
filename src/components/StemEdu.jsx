import React from "react";
import { motion } from "framer-motion";
import { FaAtom, FaMicrochip, FaCalculator, FaRobot } from "react-icons/fa";

const StemEdu = () => {
  return (
    <div className="w-screen h-screen service-page flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-blue-950/20" />

      {/* Animated Blobs - smaller on mobile */}
      <motion.div
        className="absolute top-10 right-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-600/10 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-600/10 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-3">
            STEM Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            STEM <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-4 hidden sm:block">
            Empowering the next generation with hands-on learning in Science, Technology, Engineering & Math.
          </p>
          <p className="text-gray-400 text-xs sm:hidden mb-4">
            Empowering the next generation with hands-on STEM learning.
          </p>

          {/* Learning Areas - Compact on mobile */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-sm mx-auto lg:mx-0">
            {[
              { icon: FaAtom, label: "Science", color: "text-blue-400" },
              { icon: FaMicrochip, label: "Technology", color: "text-cyan-400" },
              { icon: FaCalculator, label: "Engineering", color: "text-purple-400" },
              { icon: FaRobot, label: "Math", color: "text-pink-400" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                <span className="text-white text-xs sm:text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual - Compact on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          <div className="relative">
            {/* Central element */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 mx-auto rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 border border-purple-400/40 flex items-center justify-center">
                <FaAtom className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-purple-400" />
              </div>
            </div>

            {/* Floating elements - hidden on smaller screens */}
            <motion.div
              className="absolute -top-4 -right-4 lg:top-0 lg:right-0 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaMicrochip className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 lg:bottom-0 lg:left-0 p-3 rounded-lg bg-pink-500/10 border border-pink-500/30 hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaRobot className="w-6 h-6 text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StemEdu;