'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building,
  Globe,
  Users,
  Target,
  Award,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';

import { Card, PageHero, Section, staggerContainer, Button, AppLayout } from '@/ui/modules';
import { coreValues } from './constants';

// Additional data for the enhanced about page
const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "WovenByte was established with a vision to transform African cities through technology"
  },
  {
    year: "2024",
    title: "First Solution Launch",
    description: "Launched our first urban mobility platform serving Lagos metropolitan area"
  },
  {
    year: "2025",
    title: "Expansion Phase",
    description: "Expanding our solutions to multiple Nigerian cities and exploring new markets"
  }
];

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Users Served",
    description: "Citizens using our platforms"
  },
  {
    icon: MapPin,
    number: "5",
    label: "Cities",
    description: "Active in major Nigerian cities"
  },
  {
    icon: Building,
    number: "100+",
    label: "Partners",
    description: "Government and private partnerships"
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Satisfaction Rate",
    description: "User satisfaction with our solutions"
  }
];

const team = [
  {
    name: "Founder & CEO",
    role: "Visionary Leader",
    description: "Leading the charge in urban innovation across Africa",
    icon: Target
  },
  {
    name: "Engineering Team",
    role: "Tech Innovators",
    description: "Building scalable solutions for complex urban challenges",
    icon: Building
  },
  {
    name: "Urban Planners",
    role: "City Experts",
    description: "Understanding and solving real-world urban problems",
    icon: MapPin
  }
];

export const AboutPage: React.FC = () => {
  return (
    <AppLayout>
      <PageHero 
        title="About WovenByte"
        subtitle="Transforming African cities through innovative technology and collaborative urban solutions."
      />

      {/* Origin Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">It Started With A Commute.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              During my National Youth Service Corps (NYSC), I was posted to a government office in a busy Nigerian city. Like many others, I couldn't afford to live in the urban center. I lived far away and every evening, I joined crowds fighting for space in taxis and buses. I saw civil servants pushed, stressed, and exhausted.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That frustration birthed the idea for WovenByte – a company that would solve transport and housing challenges with technology, making African cities more livable for everyone.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
              <Building size={64} className="text-orange-600" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Purpose</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-4 border-orange-500">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Building className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To build inclusive platforms that solve transportation, housing, and service challenges in African cities, leveraging innovative technology to foster sustainable urban development and enhance quality of life for all residents.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Smarter Cities for a Stronger Africa, where every citizen has seamless access to essential services, efficient mobility, and affordable housing, creating vibrant, equitable, and resilient urban environments.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {coreValues.map((value, index) => (
            <Card key={index} className="border-2 border-orange-200">
              <div className="p-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Impact Statistics */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring success through the positive changes we bring to African cities and their citizens.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <stat.icon size={48} className="text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Journey Timeline */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple idea during NYSC to transforming cities across Africa.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                <Calendar size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-orange-500 mr-4">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Overview */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of innovators, urban planners, and technologists united by a common vision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <Card key={index} className="text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <member.icon size={40} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <h4 className="text-orange-500 font-semibold mb-4">{member.role}</h4>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Call to Action */}
      <Section>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Us in Building Better Cities
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you're a city government, a business partner, or a citizen who shares our vision, 
            we'd love to collaborate with you in creating smarter, more inclusive African cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline">
              Learn About Our Solutions
            </Button>
          </div>
        </motion.div>
      </Section>
    </AppLayout>
  );
};