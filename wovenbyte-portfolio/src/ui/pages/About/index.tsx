"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building, Globe, Calendar } from "lucide-react";
import Image from "next/image";
import tobi from "@/assets/tobi.png";

import {
  Card,
  PageHero,
  Section,
  staggerContainer,
  Button,
  AppLayout,
} from "@/ui/modules";
import { coreValues, milestones, team } from "./constants";
import { useRouter } from "next/navigation";

export const AboutPage: React.FC = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <PageHero
        title="About WovenByte"
        subtitle="Transforming African cities through innovative technology and collaborative urban solutions."
        background={
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        }
      />

      {/* Origin Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-justify">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Founder’s Story – WovenByte
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              During my NYSC service year in Abuja, I experienced the harsh
              realities many young Nigerians and urban dwellers face daily.
              Living far from the city center because I couldn’t afford the high
              rent, I had to endure long, exhausting commutes every day.
              Mornings were battles—fighting through crowded junctions just to
              secure a ride. Evenings weren’t any better, filled with dragging,
              waiting, and even altercations just to get home. The stress
              affected productivity, well-being, and quality of life—not just
              for me, but for thousands of workers, students, and market
              traders. But it didn’t stop there. When I tried to get closer to
              the city by looking for a better apartment, another layer of
              frustration unfolded. I had to deal with unreliable agents who
              inflated rent prices, added hidden charges, and complicated the
              entire process—all without the knowledge or consent of landlords.
              Finding a decent, affordable place felt like navigating a maze of
              exploitation. These two personal challenges—mobility and
              housing—revealed a deeper truth: urban living in Africa is broken
              for the everyday person.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That’s why I founded WovenByte—to create practical,
              people-centered solutions that make city life easier and more
              accessible for everyone. Our first product, Magic Ride, tackles
              the transportation crisis by letting commuters pre-book shared
              rides with verified drivers. But we&apos;re not stopping there.
              We’re also building platforms that connect house seekers directly
              with landlords, reduce middleman exploitation, and improve access
              to urban services across Africa. WovenByte is not just a tech
              company. It’s a movement to redefine urban living. We’re weaving
              smarter, fairer, more inclusive cities—starting from lived
              experience.
            </p>
          </motion.div>
          <motion.div
            className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={tobi}
              alt="Tobi, Founder of WovenByte"
              className="object-contain"
              fill
            />
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Purpose
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-4 border-orange-500">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Building className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To build inclusive platforms that solve transportation, housing,
                and service challenges in African cities, leveraging innovative
                technology to foster sustainable urban development and enhance
                quality of life for all residents.
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
                Smarter Cities for a Stronger Africa, where every citizen has
                seamless access to essential services, efficient mobility, and
                affordable housing, creating vibrant, equitable, and resilient
                urban environments.
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
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
                  <span className="text-2xl font-bold text-orange-500 mr-4">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of innovators, urban planners, and technologists
            united by a common vision.
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <h4 className="text-orange-500 font-semibold mb-4">
                {member.role}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
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
            Whether you&apos;re a city government, a business partner, or a
            citizen who shares our vision, we&apos;d love to collaborate with
            you in creating smarter, more inclusive African cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/partners")}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
            >
              Partner With Us
            </Button>
            <Button
              onClick={() => router.push("/solutions")}
              size="lg"
              variant="outline"
            >
              Learn About Our Solutions
            </Button>
          </div>
        </motion.div>
      </Section>
    </AppLayout>
  );
};
