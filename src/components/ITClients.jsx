import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
const iotap = "/gifs/iotap.gif";
const svsschool = "/gifs/svsschool.gif";
const kakinadapaints = "/gifs/kakinadapaints.gif";

const projects = [
  {
    title: "School Management",
    description: "Complete academic management system with attendance tracking.",
    image: svsschool,
    website: "svsschool.in",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Interior Design",
    description: "Modern portfolio website with elegant presentation.",
    image: kakinadapaints,
    website: "kakinadapaints.in",
    link: "#",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "IoT Platform",
    description: "Real-time IoT solution with device monitoring.",
    image: iotap,
    website: "iotap.innosify.com",
    link: "https://iotap.vercel.app",
    tags: ["React", "IoT"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ITClients = () => {
  return (
    <div id="clients" className="w-screen h-screen service-page flex items-center justify-center flex-col gap-y-4 sm:gap-y-6 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20" />
      <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 mb-2 sm:mb-4"
        >
          Our Portfolio
        </motion.span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Proof of
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 relative z-10 max-w-5xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="w-[140px] sm:w-[200px] md:w-[260px] lg:w-[300px] group"
          >
            <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
              {/* Image Container */}
              <div className="relative h-24 sm:h-32 lg:h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

                {/* Floating link button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block">
                  {project.description}
                </p>

                {/* Tags - Hidden on mobile */}
                <div className="flex flex-wrap gap-1 hidden sm:flex">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Website Link */}
                <a
                  href={project.link}
                  className="flex items-center gap-1 text-[10px] sm:text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaGlobe className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="truncate">{project.website}</span>
                </a>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ITClients;
