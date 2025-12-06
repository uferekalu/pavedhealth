"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
    {
        image: "/images/article1.png",
        author: "Hope Miller",
        title: "Explore Telehealth Services for Convenient Healthcare Access",
        excerpt:
            "In today's fast‑paced world, convenience is key, especially when it comes to healthcare. Telehealth services have emerged as a...",
    },
    {
        image: "/images/article2.png",
        author: "Hope Miller",
        title: "Effective Wound Care: Tips and Treatments Explained",
        excerpt:
            "Wound care is an essential skill that everyone should know. Whether you're a parent, a caregiver, or just someone who enjoys outdoor...",
    },
    {
        image: "/images/article3.png",
        author: "Hope Miller",
        title: "Mobile Healthcare Solutions: Your Path to Healing",
        excerpt:
            "In today's fast‑paced world, healthcare is evolving rapidly. Mobile healthcare solutions are at the forefront of this change. They offer...",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Article() {
    return (
        <section className="relative w-full bg-gray-50 pt-20 pb-24 overflow-hidden">
            {/* Floating background orbs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-0 w-[450px] h-[450px] bg-teal-400/10 rounded-full blur-3xl -translate-x-1/3" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-3xl translate-x-1/4" />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Latest <span className="text-teal-600">Articles</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with healthcare insights, tips, and resources crafted to support your wellbeing.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-7 relative">
                                <p className="text-sm text-gray-500 mb-2">{article.author}</p>
                                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-teal-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-6 text-teal-600 font-semibold text-sm tracking-wide"
                                >
                                    Read more →
                                </motion.button>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}