"use client";

import React from "react";
import { motion } from "framer-motion";

import { navItems } from "../../constants";

// Desktop Navigation Component
export const DesktopNavigation: React.FC<{
  currentPage: string;
  onNavigate: (page: string) => void;
}> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        <motion.button
          key={item.label}
          className={`flex items-center cursor-pointer space-x-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === item.href
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate(item.href)}
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </motion.button>
      ))}
    </nav>
  );
};
