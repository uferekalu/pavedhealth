"use client";

import { motion } from "framer-motion";
import { Phone, Video, Zap, Syringe, Heart, Stethoscope } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Consultation",
    description:
      "Lifestyle assessments, nutrition guidance, and wellness planning to help prevent illness and promote long-term health.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Telehealth visit",
    description:
      "Routine check-ups, and general health concerns handled via secure video or phone call. Review prescriptions, adjust dosages, and get refills through virtual appointments with a provider.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Urgent Care Call",
    description:
      "Quick evaluations for non-emergency issues like cold symptoms, minor infections, or skin rashes—no waiting room required.",
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: "Injection Services",
    description:
      "Administration of prescribed medications such as antibiotics, vitamin B12, or hormonal therapies via intramuscular or subcutaneous routes. Adult and pediatric immunizations delivered safely at home.",
    badge: "Show more",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Womans Health Services",
    description:
      "Support for prenatal care, postpartum check-ins, contraception counseling, and menstrual health—all from home.",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Symptoms Assessment and Treatment",
    description:
      "Assessment of STD related symptoms, UTI, Yeast infections and Bacterial Vaginosis. Depending on visit a prescription may be sent to your desired pharmacy.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  return (
    <section className="relative w-full bg-gray-50 pt-16 pb-8 overflow-hidden">
      {/* Background Orbs – matching Commitment section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our
            <span className="block text-2xl sm:text-3xl md:text-4xl text-teal-600">Services</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare brought to you—anytime, anywhere.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-white/30 overflow-hidden transition-all duration-500"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Image (mimicking your screenshot) */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/service.png`}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="relative p-8">
                {/* Icon with glass effect */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-600 text-white shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Optional Badge (only for Injection Services) */}
                {service.badge && (
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="inline-block mt-6 text-teal-600 font-semibold text-sm tracking-wider cursor-pointer"
                  >
                    {service.badge} →
                  </motion.span>
                )}
              </div>

              {/* Subtle bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}