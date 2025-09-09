import React, { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      name: "Social Media Marketing",
      icon: "📱",
      items: [
        "Facebook Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Twitter Marketing",
        "Social Media Management",
        "Influencer Marketing",
      ],
      link: "/services/social-media",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Search Engine Optimization",
      icon: "🔍",
      items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "SEO Audits"],
      link: "/services/seo",
      color: "from-blue-500 to-teal-600"
    },
    {
      name: "PPC Advertising",
      icon: "💰",
      items: [
        "Google Ads",
        "Meta Ads (Facebook/Instagram)",
        "Display Advertising",
      ],
      link: "/services/ppc",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Content Marketing",
      icon: "✍️",
      items: ["Blog Writing", "Video Content", "Infographics"],
      link: "/services/content-marketing",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Analytics & Reporting",
      icon: "📊",
      items: ["Google Analytics", "Conversion Tracking", "ROI Analysis"],
      link: "/services/analytics",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Web Development",
      icon: "💻",
      items: ["UI/UX Design", "App Development", "E-commerce Solutions"],
      link: "/services/development",
      color: "from-purple-500 to-pink-600"
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply opacity-20 blur-xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-600">Digital Marketing</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From social media campaigns to SEO and paid ads, we cover all aspects
            of digital marketing to grow your business.
          </p>
        </motion.div>

        {/* Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${service.color} h-32 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-6 left-6 text-4xl">
                  {service.icon}
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <ul className="text-gray-700 space-y-3 mb-6">
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors group/link"
                  whileHover={{ x: 5 }}
                >
                  Explore Services
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Ready to transform your digital presence?</p>
          <motion.button 
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;