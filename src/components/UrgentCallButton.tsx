"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function UrgentCallButton() {
  const phoneNumber = "832-921-1232";
  const telLink = `tel:${phoneNumber.replace(/-/g, "")}`;

  return (
    <motion.a
      href={telLink}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: "0 20px 40px -10px rgba(45, 212, 191, 0.4)" 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative inline-flex items-center gap-3 p-3 bg-teal-600 text-white font-bold text-lg rounded-full shadow-2xl overflow-hidden group mt-6"
    >
      <span className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />
      <span className="absolute inset-1 rounded-full bg-red-500/20 animate-pulse" />
    
      <div className="relative">
        <Phone className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-teal-600 rounded-full animate-ping" />
        </span>
      </div>

      <span className="relative z-10 tracking-wide">
        URGENT CALL NOW
      </span>
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        {phoneNumber} ✆
      </motion.span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.a>
  );
}