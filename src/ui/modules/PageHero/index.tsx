import { motion } from "framer-motion";
export const PageHero: React.FC<{
  title: string;
  subtitle: string;
  background?: React.ReactNode;
}> = ({ title, subtitle, background }) => {
  const defaultBackground = (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
  );

  return (
    <section className="relative py-[100px] mt-[100px] overflow-hidden">
      {background ?? defaultBackground}
      <div className="relative container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 ${
              background ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              background ? "text-white" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
