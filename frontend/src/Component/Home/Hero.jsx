import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoError = () => {
    console.error("Video failed to load");
    setIsLoading(false);
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } },
    hover: { scale: 1.05, backgroundColor: "#D4AF37", color: "#000", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsLoading(false)}
          onError={handleVideoError}
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

        {/* Mute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        {/* Small Tagline */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-20 h-0.5 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-yellow-500 uppercase tracking-widest text-sm font-light">Digital Marketing</p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-oswald"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Grow Your <span className="text-yellow-500">Brand Online</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl font-light leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          We help businesses increase their online presence and generate more leads through SEO, Social Media Marketing, Content Marketing, and Paid Advertising.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-5" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
          <motion.a
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            href="#contact"
            className="bg-yellow-600 text-black px-8 py-4 rounded-sm font-semibold text-lg tracking-wider uppercase border border-yellow-600"
          >
            Get a Free Consultation
          </motion.a>

          <motion.a
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            href="#services"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-semibold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <p className="text-white text-sm mb-2 tracking-widest">SCROLL</p>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Marketing Stats */}
      <motion.div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center space-x-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-500">500+</div>
          <div className="text-gray-300 tracking-widest text-sm mt-1">SUCCESSFUL CAMPAIGNS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-500">300+</div>
          <div className="text-gray-300 tracking-widest text-sm mt-1">HAPPY CLIENTS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-500">50+</div>
          <div className="text-gray-300 tracking-widest text-sm mt-1">AWARD WINNING PROJECTS</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
