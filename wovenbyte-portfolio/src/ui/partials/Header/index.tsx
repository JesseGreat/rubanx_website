'use client'

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from 'framer-motion';
import { DesktopNavigation, MobileNavigation } from "./components";
import { Button } from "@/ui/modules";
import { Calendar, Menu, X } from "lucide-react";
import Image from "next/image";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
  
    const getCurrentPage = () => {
      if (pathname === '/') return 'home';
      return pathname.slice(1); // Remove leading slash
    };
  
    const currentPage = getCurrentPage();
  
    const handlePageChange = (page: string) => {
      if (page === 'home') {
        router.push('/');
      } else {
        router.push(`/${page}`);
      }
    };
  
    return (
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handlePageChange('home')}
            >
              <Image 
              width={400}
              height={400}
                src="/logo.jpeg" // Replace with your actual logo path
                alt="WovenByte Logo"
                className="h-[100px] w-auto"
              />
            </motion.div>
  
            {/* Desktop Navigation */}
            <DesktopNavigation
              currentPage={currentPage}
              onNavigate={handlePageChange}
            />
  
            {/* Desktop Schedule Button */}
            <div className="hidden md:block">
            <Button     onClick={() => window.open("https://calendly.com/wovenbyte/30min", "_blank")} className="flex items-center">
              <Calendar size={18} className="mr-2" />
              Schedule Meeting
            </Button> 
            </div>
         
  
            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} color="#000"/> : <Menu size={24} color="#000"/>}
            </motion.button>
          </div>
  
          {/* Mobile Navigation */}
          <MobileNavigation 
            isOpen={isMenuOpen}
            currentPage={currentPage}
            onNavigate={handlePageChange}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </motion.header>
    );
  };