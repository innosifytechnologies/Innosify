import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SlideParticles from "./SlideParticles";

import it1 from "../assets/services/it-1.png";
import it2 from "../assets/services/it-2.png";
import it3 from "../assets/services/it-3.png";
import it4 from "../assets/services/it-4.png";

const slides = [
  {
    title: "Transforming Ideas Through IT Excellence",
    about:
      "We deliver end-to-end IT services that help businesses grow faster with modern software solutions, cloud technologies, and secure digital infrastructures.",
    tags: ["IT Services", "Software Development", "Cloud", "Security"],
    images: [it1, it2, it3, it4],
    particleColor: "blue",
    backgroundImage: "/images/it-bg.png",
  },
  {
    title: "Shaping Young Minds Through STEM Innovation",
    about:
      "We bring hands-on STEM education to schools, empowering students with creativity, critical thinking, and real-world problem-solving skills for the future.",
    tags: ["STEM Education", "Innovation", "Learning", "Skill Development"],
    images: [it1, it2, it3, it4],
    particleColor: "purple",
    backgroundImage: "/images/stem-bg.png",
  },
  {
    title: "Engineering Smart Solutions for the Future",
    about:
      "We build intelligent engineering solutions powered by IoT, AI, robotics, automation, and instrumentation to solve complex industry challenges with precision and efficiency.",
    tags: ["IoT", "AI", "Automation", "Robotics", "Instrumentation"],
    images: [it1, it2, it3, it4],
    particleColor: "cyan",
    backgroundImage: "/images/eng-bg.png",
  },
];

// PERFECT DIRECTION-BASED ANIMATION
const slideVariants = {
  enter: (direction) => ({
    x: direction === 1 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction === 1 ? -150 : 150,
    opacity: 0,
  }),
};

// Title word animation variants
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// Description animation variants
const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const Hero = ({ autoplayDelay = 8000 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(-1);
  const timeoutRef = useRef(null);
  const heroRef = useRef(null);

  const changeSlide = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // AUTOPLAY
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, autoplayDelay);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Static Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark Gradient Background */}
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f18 50%, #0a0a0f 100%)',
          }}
        />

        {/* 3D Background Image - Changes with slide + subtle animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0, scale: 1.15, x: 0 }}
            animate={{
              opacity: 0.2,
              scale: 1,
              x: [0, 10, 0, -10, 0],
              y: [0, -5, 0, 5, 0],
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 0.8, ease: "easeInOut" },
              x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[index].backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Static ambient glow orbs with CSS animation only */}
        <div className="hero-glow-orb hero-glow-orb-1" />
        <div className="hero-glow-orb hero-glow-orb-2" />
        <div className="hero-glow-orb hero-glow-orb-3" />
      </div>

      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay absolute inset-0" />

      {/* Additional dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />



      {/* Main Content */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-16 lg:pt-10 px-4 sm:px-6">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-16 w-full max-w-6xl">
          {/* LEFT ARROW */}
          <motion.button
            onClick={prev}
            className="hero-arrow text-white text-base sm:text-lg lg:text-xl p-2 sm:p-3 lg:p-4 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft />
          </motion.button>

          {/* SLIDE CONTENT */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full max-w-[800px] text-center flex flex-col gap-y-3 sm:gap-y-4 lg:gap-y-5"
            >
              {/* Animated Title with word-by-word reveal */}
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug"
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                key={`title-${index}`}
                style={{ perspective: "1000px" }}
              >
                {slides[index].title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-2 sm:mr-3"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Animated Description */}
              <motion.p
                className="text-white/90 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4 px-2"
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                key={`desc-${index}`}
              >
                {slides[index].about}
              </motion.p>

              {/* ANIMATED TAGS */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center text-white text-xs sm:text-sm lg:text-base mt-4 sm:mt-5 lg:mt-6">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  For
                </motion.span>
                {slides[index].tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="shimmer-tag px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg cursor-pointer border border-white/20 backdrop-blur-sm text-xs sm:text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 lg:gap-8 mt-6 sm:mt-7 lg:mt-8">
                <motion.button
                  className="hero-btn-secondary text-white flex items-center justify-center gap-2 sm:gap-3 cursor-pointer group text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  For More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <FaArrowCircleRight />
                  </motion.span>
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    className="hero-btn-primary px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-700 rounded-full text-white cursor-pointer font-medium text-sm sm:text-base w-full sm:w-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT ARROW */}
          <motion.button
            onClick={next}
            className="hero-arrow text-white text-base sm:text-lg lg:text-xl p-2 sm:p-3 lg:p-4 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* ANIMATED DOTS */}
        <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => changeSlide(i)}
              className={`hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${index === i ? "bg-white active" : "bg-white/40"
                }`}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              animate={index === i ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1.5 sm:pt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
