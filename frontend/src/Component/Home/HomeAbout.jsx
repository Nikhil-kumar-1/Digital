import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="overflow-hidden max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-oswald">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We are{" "}
            <span className="text-yellow-500 font-semibold">Nik Tech</span>, a
            dedicated digital marketing team helping brands grow online. From
            SEO and social media campaigns to content marketing and web design,
            we craft strategies that deliver measurable results.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            With a team of creative professionals, we combine data-driven
            strategies with innovative solutions to maximize your brand’s online
            presence and engagement.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow duration-300"
          >
            Work With Us
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Digital Marketing Team"
            className="rounded-xl shadow-lg w-full h-100"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
