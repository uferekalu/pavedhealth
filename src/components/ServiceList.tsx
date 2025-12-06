"use client";

import { motion } from "framer-motion";
import { Stethoscope, Video, Heart } from "lucide-react";
import Image from "next/image";

const bookingServices = [
  {
    title: "Wound Care Consultation",
    subtitle: "Heal with confidence",
    duration: "1 hr",
    price: "$100",
    icon: <Stethoscope className="w-10 h-10" />,
    image: "/images/wound-care.png",
  },
  {
    title: "Telehealth Visit",
    subtitle: "Care from anywhere",
    duration: "30 min",
    price: "$40",
    icon: <Video className="w-10 h-10" />,
    image: "/images/telehealth.png",
  },
  {
    title: "Medical Exam",
    subtitle: "Physical Assessment",
    duration: "1 hr",
    price: "$100",
    icon: <Heart className="w-10 h-10" />,
    image: "/images/medical-exam.png",
  },
  {
    title: "Inject Administration",
    subtitle: "Want a professionals hand",
    duration: "300 min",
    price: "$65",
    icon: <Heart className="w-10 h-10" />,
    image: "/images/injection.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function ServiceList() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h5 className="text-xl md:text-2xl font-bold text-gray-900">
            Select a service to begin
          </h5>
        </motion.div>

        {/* Services List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {bookingServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.4 },
              }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500"
            >
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
                {/* Left: Image + Icon */}
                <div className="flex items-center gap-8 flex-1">
                  {/* Circular Image */}
                  <div className="relative w-28 h-28 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{service.subtitle}</p>
                    <a
                      href="#"
                      className="text-teal-600 font-medium text-sm hover:underline mt-2 inline-block"
                    >
                      Read more
                    </a>
                  </div>
                </div>

                {/* Right: Duration, Price, Button */}
                <div className="flex items-center gap-12 text-right">
                  <div className="text-gray-700">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="text-lg font-semibold">{service.duration}</p>
                    <p className="text-xl font-bold text-teal-600 mt-1">
                      {service.price}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-teal-600 text-white font-medium rounded-xl shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}