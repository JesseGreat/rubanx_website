'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { navItems } from '../../constants';
import { Button } from '@/ui/modules';
import { Calendar } from 'lucide-react';

export const MobileNavigation: React.FC<{ 
    isOpen: boolean; 
    currentPage: string; 
    onNavigate: (page: string) => void;
    onClose: () => void;
  }> = ({ 
    isOpen, 
    currentPage, 
    onNavigate,
    onClose 
  }) => {
    const handleNavigate = (page: string) => {
      onNavigate(page);
      onClose();
    };
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden mt-4 pb-4 border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  className={`flex items-center cursor-pointer space-x-3 px-4 py-3   transition-colors text-left ${
                    currentPage === item.href 
                      ? 'border-b border-orange-500  text-orange-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigate(item.href)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
              
              {/* Mobile Schedule Button */}
              <motion.div className="pt-4">
                <Button className="w-full flex items-center justify-center">
                  <Calendar size={18} className="mr-2" />
                  Schedule Meeting
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  