"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-gray-50 py-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-teal-600">Us</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At Paved Healthcare, we prioritize healing through compassionate
            connections. Led by Hope Miller, a board-certified nurse
            practitioner, our practice focuses on individualized and accessible
            care.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are committed to understanding your needs and supporting you on
            your healthcare journey—whether you're recovering from a complex
            wound, managing a chronic condition, or seeking preventive care.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            We provide personalized treatment rooted in evidence-based medicine
            and Christian values. We see every individual as a whole
            person—body, mind, and spirit—and strive to create a healing
            environment that reflects that belief.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition-colors duration-300 mx-auto lg:mx-0"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[420px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/about.jpg"
            alt="About Us Image"
            fill
            className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-[2500ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
