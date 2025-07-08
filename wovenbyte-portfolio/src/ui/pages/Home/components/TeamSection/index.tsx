'use client'
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { teamMembers } from './constants';
import { fadeInUp, staggerContainer } from '@/ui/modules';

export const TeamSection = () => {
 
  
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving urban transformation across Africa.
            </p>
          </motion.div>
  
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                    <Users size={48} className="text-orange-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  