"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function TelehealthBookButton() {
  const bookingLink = "https://calendar.app.google/o9wQ6yXxG9LywbM66";

  return (
    <motion.a
      href={bookingLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 20px 40px -10px rgba(45, 212, 191, 0.4)",
      }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative inline-flex items-center justify-center gap-3 mt-8 p-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-lg rounded-full shadow-xl overflow-hidden group w-full max-w-sm mx-auto"
    >
      <Video className="w-8 h-8 relative z-10" />

      <span className="relative z-10 tracking-wide">BOOK TELEHEALTH VISIT</span>

      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/85 text-white text-sm px-5 py-2.5 rounded-xl whitespace-nowrap pointer-events-none shadow-lg"
      >
        Via Google Meet – Secure Video
      </motion.span>
    </motion.a>
  );
}