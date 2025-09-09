import React, { useState } from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamStats = [
    { number: "50+", label: "Digital Experts" },
    { number: "12", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "95%", label: "Client Retention" }
  ];

  const values = [
    {
      icon: "💎",
      title: "Excellence",
      description: "We pursue perfection in every project we undertake"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Staying ahead of trends with cutting-edge solutions"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work with you, not just for you"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85"></div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 'vw', 
                y: Math.random() * 100 + 'vh' 
              }}
              animate={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-yellow-500 mr-4"></div>
            <span className="text-yellow-500 uppercase tracking-widest text-sm font-medium">Our Identity</span>
            <div className="w-16 h-0.5 bg-yellow-500 ml-4"></div>
          </div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Who <span className="text-yellow-500">We Are</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We are a team of innovative thinkers, creative marketers, and skilled
            developers dedicated to transforming businesses into powerful digital
            brands. Our mission is simple — to deliver measurable results through
            data-driven strategies and bold ideas that stand out in the digital
            world.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-500 group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, backgroundColor: 'rgba(0,0,0,0.5)' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div 
                className="text-5xl mb-6"
                animate={{ 
                  scale: hoveredCard === index ? 1.2 : 1,
                  rotate: hoveredCard === index ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {teamStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/about"
            className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg text-lg hover:bg-yellow-400 transition-colors group relative overflow-hidden flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Learn More About Us
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
          
          <motion.a
            href="/contact"
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg text-lg hover:bg-yellow-500 hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;