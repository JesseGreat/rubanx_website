import { motion } from 'framer-motion';
export const PageHero: React.FC<{
    title: string;
    subtitle: string;
    background?: string;
  }> = ({ title, subtitle, background = 'bg-gradient-to-br from-orange-50 via-white to-orange-100' }) => {
    return (
      <section className={`py-32 ${background}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>
    );
  };