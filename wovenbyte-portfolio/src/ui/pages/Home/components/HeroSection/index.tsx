'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleOnHover, staggerContainer } from '@/ui/modules';
import { ArrowRight } from 'lucide-react';


  
export const HeroSection = () => {
 
    
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Building Tomorrow&apos;s
              <span className="text-orange-500 block">Smart Cities</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              At WovenByte, we build scalable solutions to real-life city problems through innovative technology and urban planning.
            </motion.p>
  
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                {...scaleOnHover}
              >
                <span>Explore Our Solutions</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-colors"
                {...scaleOnHover}
              >
                Watch Demo
              </motion.button>
            </motion.div>
  
            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100k+</div>
                <div className="text-gray-600">Daily Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                <div className="text-gray-600">User Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };