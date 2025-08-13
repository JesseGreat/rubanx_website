'use client'
import React, { ReactNode } from 'react';
import { Header, Footer } from "@/ui/partials";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  className = "min-h-screen bg-white" 
}) => {
  return (
    <div className={className}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};