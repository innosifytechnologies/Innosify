import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript,
  SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud,
  SiTailwindcss, SiGraphql, SiFlutter, SiSwift, SiKotlin,
  SiRust, SiGo, SiFigma, SiGithub, SiTensorflow, SiOpenai,
  SiFirebase, SiVercel, SiSupabase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  // Frontend
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },

  // Backend
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: FaJava, name: "Java", color: "#ED8B00" },
  { icon: SiGo, name: "Go", color: "#00ADD8" },
  { icon: SiRust, name: "Rust", color: "#DEA584" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },

  // Database & Cloud
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
  { icon: SiAmazonwebservices, name: "AWS", color: "#FF9900" },

  // DevOps & Tools
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },

  // AI & Design
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiOpenai, name: "OpenAI", color: "#412991" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ITTechnologies = () => {
  return (
    <div className="w-screen h-screen service-page flex items-center justify-center flex-col gap-y-4 sm:gap-y-6 lg:gap-y-10 px-4 relative overflow-hidden bg-[#0a0a0f]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-purple-950/30" />

      {/* Animated floating orbs - smaller on mobile */}
      <motion.div
        className="absolute top-10 left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 sm:w-56 lg:w-80 h-40 sm:h-56 lg:h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative z-10 px-2"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 mb-2 sm:mb-4"
        >
          Tech Stack
        </motion.span>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold max-w-3xl mx-auto leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Build Your Dream Software with
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Technologies
          </span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto hidden sm:block">
          We leverage cutting-edge tools and frameworks to deliver exceptional solutions
        </p>
      </motion.div>

      {/* Technologies Grid - Compact for mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-1 sm:mb-2">
          {technologies.slice(0, 8).map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="group flex flex-col items-center gap-1 cursor-pointer"
            >
              <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 opacity-80 group-hover:opacity-100" style={{ color: tech.color }} />
              <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 group-hover:text-white transition-colors text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-1 sm:mb-2">
          {technologies.slice(8, 17).map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="group flex flex-col items-center gap-1 cursor-pointer"
            >
              <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 opacity-80 group-hover:opacity-100" style={{ color: tech.color }} />
              <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 group-hover:text-white transition-colors text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {technologies.slice(17, 25).map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="group flex flex-col items-center gap-1 cursor-pointer"
            >
              <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 opacity-80 group-hover:opacity-100" style={{ color: tech.color }} />
              <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 group-hover:text-white transition-colors text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Hint - Only visible on first slide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-16 sm:bottom-20 lg:bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider">
          Scroll to explore
        </span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1"
        >
          <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-20 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full" />
    </div>
  );
};

export default ITTechnologies;
