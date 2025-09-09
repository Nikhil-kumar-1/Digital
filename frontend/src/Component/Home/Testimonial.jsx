import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    feedback:
      "Nik Tech helped us scale our online presence. Our leads grew by 3x within months!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "E-commerce Owner",
    feedback:
      "Their SEO & PPC strategies are top-notch. My store now gets consistent sales.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Business Consultant",
    feedback:
      "The team is creative, data-driven, and delivers results beyond expectations!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-25"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682309758904-6cc9c7ba4cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1c3RvbWVyJTIwcmV2aWV3c3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-lg"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-500 object-cover"
              />
              <p className="text-lg italic text-gray-200 mb-6">
                “{testimonials[index].feedback}”
              </p>
              <h4 className="text-xl font-semibold text-yellow-500">
                {testimonials[index].name}
              </h4>
              <span className="block text-gray-400 text-sm">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
