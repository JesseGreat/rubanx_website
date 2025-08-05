"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MapPin } from "lucide-react";
import { contactInfo } from "./constants/contactInfo";
import { handleNavigation } from "./utils";
import { navLinks } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

export const Footer: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              width={400}
              height={400}
              src="/logo.jpeg" // Replace with your actual logo path
              alt="WovenByte Logo"
              className="h-[100px] mb-6 w-auto"
            />
            <p className="text-gray-400 mb-4">
              Building scalable solutions to real-life city problems through
              innovative technology.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span>Abuja, Nigeria</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      handleNavigation(link.href, router, pathname)
                    }
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <contact.icon size={16} />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} WovenByte. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
