'use client'
import React from 'react';
import { motion } from 'framer-motion';

export const QuoteSection = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-8 max-w-4xl mx-auto leading-relaxed">
              "If we get our cities right, we just might survive the 21st century..."
            </blockquote>
            <cite className="text-xl font-medium">- Robert Muggah</cite>
          </motion.div>
        </div>
      </section>
    );
  };