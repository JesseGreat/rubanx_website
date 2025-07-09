'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { scaleOnHover } from '@/ui/modules';

export const CTASection = () => {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-orange-500 md:text-5xl font-bold mb-6">
              Be part of the urban transformation.
            </h2>
            <p className="text-xl mb-8 text-orange-500 max-w-2xl mx-auto opacity-90">
              Join us in building smarter, more sustainable cities for the future. Let&apos;s create solutions that matter.
            </p>
            <motion.button
             onClick={() => window.open("https://calendly.com/wovenbyte/30min", "_blank")}
              className="bg-orange-500 text-white cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg  transition-colors inline-flex items-center space-x-2"
              {...scaleOnHover}
            >
              <Calendar size={20} />
              <span>Schedule a Meeting</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  };