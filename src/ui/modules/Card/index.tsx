import { motion } from 'framer-motion';

export const Card: React.FC<{
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
  }> = ({ children, className = '', hover = true }) => {
    return (
      <motion.div
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${hover ? 'hover:shadow-2xl' : ''} transition-shadow duration-300 ${className}`}
        whileHover={hover ? { y: -10 } : {}}
      >
        {children}
      </motion.div>
    );
  };