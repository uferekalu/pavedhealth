"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Accessibility Statement" },
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Refund Policy" },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Subtle Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 w-full h-32 text-teal-500/5"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Logo + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              Paveé
              <span className="text-teal-600">Healthcare</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
              Compassionate care. Healing homes. Your health, our heartbeat.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialIcons.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-teal-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-gray-700"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-600" />
              <span className="font-medium">8328418468</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-600" />
              <a href="mailto:hope@paveehealthcare.com" className="hover:text-teal-600 transition">
                hope@paveehealthcare.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <p>
                12808 W Airport Blvd,
                <br />
                Sugar Land, TX, USA
              </p>
            </div>
          </motion.div>

          {/* Right: Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-start md:items-end space-y-3 text-sm text-gray-600"
          >
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                whileHover={{ x: 4, color: "#14b8a6" }}
                className="hover:text-teal-500 transition-all duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-300 text-center text-sm text-gray-500"
        >
          <p>
            © {currentYear} by Paveé Healthcare. All rights reserved.{" "}
            <span className="text-teal-600 font-medium">Powered and secured by hope</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}