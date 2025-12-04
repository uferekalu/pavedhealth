"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Commitment() {
    return (
        <section className="relative w-full bg-gray-50 py-16 md:py-24 overflow-hidden">
            {/* Soft Background Orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-10 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-x-1/3" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text + Small Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        {/* Refined Heading */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Our
                            <span className="block text-teal-600">Commitment</span>
                            to Care
                        </h2>

                        {/* Shorter, Punchier Text */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                            At Paveé Healthcare, we specialize in advanced wound care and mobile health solutions —
                            delivered through telehealth and in-person visits. Your healing is our purpose.
                        </p>

                        {/* Small Floating Image (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative mt-10 w-full max-w-xs sm:max-w-sm"
                        >
                            <div className="absolute -inset-3 bg-teal-500/20 rounded-3xl blur-2xl -z-10" />
                            <Image
                                src="/images/commitment2.png"
                                alt="Checking blood pressure"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-xl object-cover border-8 border-white"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right: Large Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Decorative Glass Card */}
                            <div className="absolute -top-6 -left-6 w-52 h-52 bg-white/15 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl -z-10 hidden lg:block" />

                            {/* Main Image - Now Guaranteed to Load */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/commitment1.jpg"
                                    alt="Doctor smiling with patient"
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                    priority={true}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-teal-600 text-white px-6 py-5 rounded-2xl shadow-2xl text-center"
                            >
                                <p className="text-2xl md:text-3xl font-bold">15+ Years</p>
                                <p className="text-xs md:text-sm opacity-90">of Trusted Care</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}