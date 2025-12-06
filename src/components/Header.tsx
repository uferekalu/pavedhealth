"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";

// Updated with proper href + id mapping
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Welcome", href: "#welcome" },
  { name: "Service List", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Testimonials", href: "#reviews" },
  { name: "Video Gallery", href: "#videos" },
  { name: "Book Online", href: "#book" },
];

const LANGUAGES = [
  { code: "US", label: "English", short: "EN" },
  { code: "ES", label: "Español", short: "ES" },
  { code: "FR", label: "Français", short: "FR" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [activeSection, setActiveSection] = useState("home"); // Tracks current section

  const langRef = useRef<HTMLDivElement | null>(null);
  const mobileLangRef = useRef<HTMLDivElement | null>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node) &&
        mobileLangRef.current &&
        !mobileLangRef.current.contains(e.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLanguageSelect = (lang: typeof LANGUAGES[0]) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-screen-2xl mx-auto h-[70px] flex items-center justify-between px-6">

          {/* LOGO */}
          <div className="text-xl font-bold tracking-tight text-[#8B0000]">
            Paveé Healthcare
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-7 text-black font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ scale: 1.05 }}
                  className="relative group text-sm tracking-wide transition-colors"
                >
                  <span className={isActive ? "text-[#8B0000]" : ""}>{link.name}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#8B0000] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* RIGHT SIDE (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="px-4 py-2 text-sm font-semibold border border-[#8B0000] text-[#8B0000] rounded-lg hover:bg-[#8B0000] hover:text-white transition">
              Login
            </button>

            {/* LANGUAGE DROPDOWN */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm shadow-sm hover:shadow transition"
              >
                <ReactCountryFlag countryCode={selectedLang.code} svg style={{ width: 18, height: 18 }} />
                {selectedLang.short}
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 w-44 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden z-50"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition ${
                          selectedLang.code === lang.code
                            ? "bg-[#8B0000] text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <ReactCountryFlag countryCode={lang.code} svg style={{ width: 18, height: 18 }} />
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu className="w-7 h-7 text-[#8B0000]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-xs bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b">
                <div className="text-lg font-bold text-[#8B0000]">Paveé</div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-7 h-7 text-black" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-10 space-y-10">
                <nav className="space-y-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        whileTap={{ scale: 0.97 }}
                        className={`block px-5 py-4 text-base text-black font-semibold rounded-xl transition ${
                          isActive
                            ? "bg-[#8B0000] text-white"
                            : "bg-gray-50 hover:bg-[#8B0000] hover:text-white"
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </nav>

                <button className="w-full py-4 bg-[#8B0000] text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-red-900 transition">
                  Login
                </button>

                {/* Mobile Language Switcher */}
                <div ref={mobileLangRef}>
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex justify-between w-full px-4 py-4 bg-[#880000] rounded-xl font-semibold text-sm"
                  >
                    <span className="flex items-center gap-3 text-white">
                      <ReactCountryFlag countryCode={selectedLang.code} svg style={{ width: 22, height: 22 }} />
                      {selectedLang.label}
                    </span>
                    <ChevronDown />
                  </button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="mt-2 space-y-2"
                      >
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang)}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl ${
                              selectedLang.code === lang.code
                                ? "bg-[#8B0000] text-white"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                          >
                            <ReactCountryFlag countryCode={lang.code} svg style={{ width: 22, height: 22 }} />
                            {lang.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}