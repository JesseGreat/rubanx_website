import { motion } from 'framer-motion';
import { scaleOnHover } from '../animationVariants';
export const Button: React.FC<{
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined
    className?: string;
    disabled?: boolean
  }> = ({ children, variant = 'primary', size = 'md', onClick, className = '', type,disabled }) => {
    const baseClasses = 'font-medium cursor-pointer rounded-lg transition-colors duration-200 inline-flex items-center justify-center';
    
    const variants = {
      primary: 'bg-orange-500 text-white hover:bg-orange-600',
      secondary: 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white',
      outline: 'border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    return (
      <motion.button
      type={type}
      disabled={disabled}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...scaleOnHover}
      >
        {children}
      </motion.button>
    );
  };