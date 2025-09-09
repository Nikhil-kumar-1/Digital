import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaChartLine, FaArrowUp } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Plan",
    description: "We analyze your business and create a data-driven strategy.",
  },
  {
    icon: <FaRocket className="text-yellow-500 text-4xl" />,
    title: "Execute",
    description: "We launch campaigns across digital platforms for maximum reach.",
  },
  {
    icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    title: "Optimize",
    description: "We track results and optimize campaigns for better performance.",
  },
  {
    icon: <FaArrowUp className="text-yellow-500 text-4xl" />,
    title: "Grow",
    description: "We scale your campaigns to drive long-term business growth.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white text-black py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-yellow-500">Process</span>
        </motion.h2>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{step.description}</p>

              {/* Connector Line (only for desktop, except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-1 bg-yellow-500 mt-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
