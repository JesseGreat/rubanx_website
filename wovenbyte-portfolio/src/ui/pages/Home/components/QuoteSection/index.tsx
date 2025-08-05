"use client";
import React from "react";
import { motion } from "framer-motion";

export const QuoteSection = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.pixabay.com/photo/2019/04/20/11/39/japan-4141578_960_720.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-8 max-w-4xl mx-auto leading-relaxed">
            &quot;I&apos;ve get cities right, we just might survive the 21st
            century. We get them wrong, and we&apos;re done.&quot;
          </blockquote>
          <cite className="text-xl font-medium">- Robert Muggah</cite>
        </motion.div>
      </div>
    </section>
  );
};
