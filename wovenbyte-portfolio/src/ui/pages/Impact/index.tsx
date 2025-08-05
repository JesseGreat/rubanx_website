"use client";

import React from "react";
import {
  Building,
  DollarSign,
  Heart,
  MapPin,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  PageHero,
  Section,
  staggerContainer,
  Button,
  AppLayout,
} from "@/ui/modules";

export const ImpactPage: React.FC = () => {
  const partnerTypes = [
    {
      title: "NGOs",
      description:
        "Collaborate on community projects to maximize social impact and reach underserved populations.",
      icon: <Heart className="text-orange-500" size={32} />,
      benefits: [
        "Community outreach",
        "Social programs",
        "Grassroots initiatives",
      ],
    },
    {
      title: "Investors",
      description:
        "Fuel our growth and expand our innovative solutions across African cities for sustainable returns.",
      icon: <DollarSign className="text-orange-500" size={32} />,
      benefits: ["Scalable ROI", "Market expansion", "Innovation funding"],
    },
    {
      title: "Government Bodies",
      description:
        "Implement smart city initiatives and improve essential public services for citizens.",
      icon: <Building className="text-orange-500" size={32} />,
      benefits: ["Policy integration", "Public services", "Smart governance"],
    },
    {
      title: "Urban Planners",
      description:
        "Integrate WovenByte solutions into future city designs and sustainable master plans.",
      icon: <MapPin className="text-orange-500" size={32} />,
      benefits: [
        "Strategic planning",
        "Future-ready cities",
        "Sustainable design",
      ],
    },
  ];

  // const impactMetrics = [
  //   {
  //     icon: Users,
  //     number: "50,000+",
  //     label: "Lives Improved",
  //     description: "Citizens benefiting from our mobility solutions",
  //     growth: "+150%"
  //   },
  //   {
  //     icon: Clock,
  //     number: "2.5M",
  //     label: "Hours Saved",
  //     description: "Reduced commute time through smart routing",
  //     growth: "+200%"
  //   },
  //   {
  //     icon: TrendingUp,
  //     number: "$15M",
  //     label: "Economic Value",
  //     description: "Generated through productivity improvements",
  //     growth: "+180%"
  //   },
  //   {
  //     icon: Building,
  //     number: "12",
  //     label: "City Partnerships",
  //     description: "Active collaborations with local governments",
  //     growth: "+300%"
  //   }
  // ];

  // const successStories = [
  //   {
  //     title: "Lagos Transport Revolution",
  //     description: "Reduced average commute time by 35% through intelligent route optimization and real-time traffic management.",
  //     impact: "150,000 daily users",
  //     icon: MapPin,
  //     metrics: ["35% time reduction", "150K users", "₦2.8B savings"]
  //   },
  //   {
  //     title: "Abuja Housing Connect",
  //     description: "Connected 10,000+ families with affordable housing options through our digital platform.",
  //     impact: "10,000+ families housed",
  //     icon: Building,
  //     metrics: ["10K+ families", "40% cost reduction", "95% satisfaction"]
  //   },
  //   {
  //     title: "Port Harcourt Smart Services",
  //     description: "Digitized municipal services, reducing bureaucratic delays by 60% and improving citizen satisfaction.",
  //     impact: "60% faster services",
  //     icon: Zap,
  //     metrics: ["60% faster", "25K+ services", "4.8/5 rating"]
  //   }
  // ];

  const sustainabilityGoals = [
    {
      title: "Carbon Footprint Reduction",
      description:
        "Optimize transport routes to reduce emissions by 25% by 2026",
      progress: 65,
      icon: Globe,
    },
    {
      title: "Digital Inclusion",
      description:
        "Ensure 80% of urban populations have access to our platforms",
      progress: 45,
      icon: Users,
    },
    {
      title: "Economic Empowerment",
      description: "Create 50,000 indirect jobs through our ecosystem",
      progress: 30,
      icon: TrendingUp,
    },
    {
      title: "Smart Infrastructure",
      description: "Deploy solutions in 25 African cities by 2027",
      progress: 20,
      icon: Building,
    },
  ];

  return (
    <AppLayout>
      <PageHero
        title="Driving Real Change in African Cities"
        subtitle="At WovenByte, we measure our success by the tangible, positive impact we create in urban communities across Africa."
        background={
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        }
      />

      {/* Impact Metrics */}
      {/* <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable outcomes that demonstrate our commitment to transforming African cities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="text-center p-6 border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <metric.icon size={32} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-2">{metric.label}</h4>
              <p className="text-gray-600 text-sm mb-3">{metric.description}</p>
              <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                <TrendingUp size={16} className="mr-1" />
                <span>{metric.growth} YoY</span>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section> */}

      {/* Success Stories */}
      {/* <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations happening in African cities through our innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <story.icon size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-orange-500 font-semibold text-sm mb-3">{story.impact}</p>
                  <div className="space-y-2">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section> */}

      {/* Urban Stats & Growth Projections */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Urban Stats & Growth Projections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scale of urban challenges and opportunities across
            Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Population Growth Chart */}
          <Card className="overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                African Urban Population Growth
              </h3>
              <p className="text-gray-600 mb-6">
                Projected population growth in African urban centers by 2050 (in
                millions).
              </p>

              <div className="relative h-64 bg-gradient-to-t from-orange-50 to-blue-50 rounded-lg flex items-end justify-center p-6">
                <div className="flex items-end space-x-8">
                  <div className="text-center">
                    <div className="bg-blue-500 w-16 h-32 rounded-t-lg shadow-lg flex items-end justify-center pb-2">
                      <span className="text-white font-bold text-sm">550M</span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2 block font-medium">
                      2020
                    </span>
                  </div>
                  <ArrowRight className="text-orange-500 mb-16" size={24} />
                  <div className="text-center">
                    <div className="bg-orange-500 w-16 h-48 rounded-t-lg shadow-lg flex items-end justify-center pb-2">
                      <span className="text-white font-bold text-sm">
                        2.2B+
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2 block font-medium">
                      2050
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Growth Rate
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    +300%
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Traffic Impact Chart */}
          <Card className="overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Economic Impact of Traffic Congestion
              </h3>
              <p className="text-gray-600 mb-6">
                Annual economic losses due to traffic inefficiencies across
                major African cities (in billions USD).
              </p>

              <div className="relative h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                {[
                  { height: 3, city: "Accra", value: "$3B" },
                  { height: 5, city: "Nairobi", value: "$5B" },
                  { height: 7, city: "Cairo", value: "$7B" },
                  { height: 9, city: "Lagos", value: "$9B" },
                  { height: 11, city: "J'burg", value: "$11B" },
                  { height: 12, city: "Total", value: "$35B+" },
                ].map((item, index) => (
                  <div key={index} className="text-center flex-1">
                    <div
                      className={`${
                        index === 5 ? "bg-orange-500" : "bg-blue-500"
                      } mx-1 rounded-t transition-all hover:opacity-80 flex items-end justify-center pb-1`}
                      style={{ height: `${item.height * 12}px` }}
                    >
                      <span className="text-white text-xs font-bold transform -rotate-90">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 mt-1 block">
                      {item.city}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Total Annual Loss
                  </span>
                  <span className="text-lg font-bold text-red-600">
                    $35B+ USD
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Sustainability Goals */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sustainability Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to building sustainable, resilient cities for future
            generations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sustainabilityGoals.map((goal, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <goal.icon size={24} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-green-600">
                        {goal.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Partnership Types */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WovenByte seeks collaborative alliances with organizations that
            share our vision for innovative urban development and sustainable
            growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {partnerTypes.map((partner, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    {partner.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {partner.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {partner.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits:
                  </h4>
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle size={16} className="text-orange-500 mr-2" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Call to Action */}
      <Section background="gray">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <Award size={64} className="text-orange-500 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Impact Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join us in building the next generation of African cities. Whether
            you&apos;re looking to invest, partner, or collaborate, we have
            opportunities that align with your goals and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1M2_D99qXr7iMYv2zE31m_3Tq7Bn56a3NSXSuiM-cIL8/preview",
                  "_blank"
                )
              }
              size="lg"
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 flex items-center"
            >
              Become a Partner
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </AppLayout>
  );
};
