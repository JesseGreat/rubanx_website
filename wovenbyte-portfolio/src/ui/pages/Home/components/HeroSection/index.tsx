"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleOnHover, staggerContainer } from "@/ui/modules";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative min-h-screen mt-4 flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.pixabay.com/photo/2024/08/07/04/57/ai-generated-8950842_960_720.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container z-10 mx-auto px-4 text-white text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            Powering African Cities with Digital Innovation
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            At WovenByte, we build scalable solutions to real-life city problems
            through innovative technology and urban planning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => router.push("/solutions")}
              className="bg-orange-500 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
              {...scaleOnHover}
            >
              <span>Explore Our Solutions</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              onClick={() => router.push("/partners")}
              className="border-2 border-gray-300 cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-colors"
              {...scaleOnHover}
            >
              Get Involved
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={fadeInUp}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};
