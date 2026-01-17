"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sofia Kim",
    role: "Patient",
    text: "The telehealth service was incredibly convenient and made my treatment easier than ever. I felt truly cared for.",
    avatar: "/images/avatar.jpg",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Patient",
    text: "Professional, compassionate, and lightning-fast response. This is healthcare reimagined. Highly recommended!",
    avatar: "/images/avatar.jpg",
    rating: 5,
  },
  {
    name: "Amelia Hart",
    role: "Patient",
    text: "I saved hours and still got personalized care from the comfort of home. The future of medicine is here.",
    avatar: "/images/avatar.jpg",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Patient",
    text: "From booking to follow-up — seamless. The doctor was attentive and the experience felt premium.",
    avatar: "/images/avatar.jpg",
    rating: 5,
  },
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Loved by Patients
            <span className="block text-2xl text-teal-600 mt-2">Across the Country</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who chose better care — from home.
          </p>
        </motion.div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4 md:px-8"
                style={{ flex: "0 0 100%" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mx-auto max-w-4xl transition-all duration-700 ${
                    selectedIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-60"
                  }`}
                >
                  {/* Glassmorphic Card */}
                  <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                    {/* Gradient Top Glow */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-blue-500" />

                    <div className="p-10 md:p-14 text-center">
                      {/* Quote Icon */}
                      <Quote className="w-16 h-16 text-teal-600/20 mx-auto mb-8" />

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-8">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-7 h-7 fill-teal-500 text-teal-500"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-xl font-medium text-gray-800 leading-relaxed max-w-3xl mx-auto italic">
                        "{review.text}"
                      </p>

                      {/* Avatar + Name */}
                      <div className="flex flex-col items-center mt-12">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-teal-100 shadow-xl mb-4">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {review.name}
                        </h4>
                        <p className="text-gray-500">{review.role}</p>
                      </div>
                    </div>

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-70" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-300 ${
                selectedIndex === index
                  ? "w-12 h-3 bg-teal-600 rounded-full"
                  : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}