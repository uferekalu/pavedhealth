"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div>
            <main className="relative h-screen min-h-[100dvh] w-full overflow-hidden pt-24">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/hero.png"
                        alt="Healthcare Hero Image"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Glass + Embossed Text Container */}
                <div className="flex h-[60%] w-full items-center justify-start px-8 md:px-20 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="
            max-w-2xl 
            backdrop-blur-xl 
            bg-black/40 
            p-10 md:p-14 
            rounded-3xl 
            shadow-[0_8px_60px_rgba(0,0,0,0.4)]
            border border-white/30
            text-white
            md:text-left 
            text-center
          "
                    >
                        <h1
                            className="
              text-4xl md:text-6xl 
              font-bold 
              leading-tight 
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
              tracking-tight
              text-white
            "
                            style={{
                                textShadow:
                                    "0 4px 14px rgba(0,0,0,0.9), 0 0 20px rgba(255,255,255,0.25)",
                            }}
                        >
                            Your Health
                            <br /> Our Journey
                        </h1>

                        <p
                            className="
              mt-6 
              text-lg md:text-2xl 
              leading-relaxed 
              text-gray-100
              drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]
            "
                        >
                            Discover premier healthcare services tailored to your needs.
                            <br />
                            Because your health is our priority.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="
              mt-10 
              px-8 py-4 
              rounded-full 
              bg-white/30 
              border border-white/40 
              text-white 
              font-semibold 
              backdrop-blur-xl 
              hover:bg-white/40 
              transition 
              shadow-xl
              cursor-pointer
            "
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}