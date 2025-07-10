'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Target, 
  Users, 
  Building, 
  DollarSign, 
  Heart, 
  
  Globe, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Calendar,

} from "lucide-react";

import { AppLayout, Button, Card, PageHero, Section, staggerContainer } from "@/ui/modules";

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  since: string;
  impact: string;
  featured?: boolean;
}

export const PartnersPage: React.FC = () => {
  // const [activeFilter, setActiveFilter] = useState<string>('all');

  const partners: Partner[] = [
    { 
      id: '1', 
      name: 'TechHub Lagos', 
      logo: '/api/placeholder/120/60', 
      category: 'Technology',
      description: 'Leading technology innovation hub in West Africa',
      since: '2023',
      impact: 'Helped scale 15+ startups',
      featured: true
    },
    { 
      id: '2', 
      name: 'Lagos State Government', 
      logo: '/api/placeholder/120/60', 
      category: 'Government',
      description: 'State government partnership for smart city initiatives',
      since: '2024',
      impact: 'Improved services for 20M+ residents'
    },
    { 
      id: '3', 
      name: 'Urban Development NGO', 
      logo: '/api/placeholder/120/60', 
      category: 'NGO',
      description: 'Community-focused urban development organization',
      since: '2023',
      impact: 'Reached 50K+ community members'
    },
    { 
      id: '4', 
      name: 'African Development Bank', 
      logo: '/api/placeholder/120/60', 
      category: 'Investment',
      description: 'Leading development finance institution',
      since: '2024',
      impact: '$10M+ investment facilitated',
      featured: true
    },
    { 
      id: '5', 
      name: 'Microsoft Africa', 
      logo: '/api/placeholder/120/60', 
      category: 'Technology',
      description: 'Technology platform and cloud services partner',
      since: '2023',
      impact: 'Cloud infrastructure for 100K+ users'
    },
    { 
      id: '6', 
      name: 'UN-Habitat', 
      logo: '/api/placeholder/120/60', 
      category: 'Urban Planning',
      description: 'United Nations agency for sustainable urbanization',
      since: '2024',
      impact: 'Policy guidance for 5 cities'
    },
    { 
      id: '7', 
      name: 'Federal Ministry of Housing', 
      logo: '/api/placeholder/120/60', 
      category: 'Government',
      description: 'Federal government housing policy partnership',
      since: '2024',
      impact: 'National housing platform integration'
    },
    { 
      id: '8', 
      name: 'Community Health Alliance', 
      logo: '/api/placeholder/120/60', 
      category: 'NGO',
      description: 'Healthcare access and community wellness',
      since: '2023',
      impact: 'Health services for 25K+ residents'
    }
  ];

  const partnershipTypes = [
    {
      icon: Building,
      title: 'Government Partners',
      description: 'State and federal agencies working to implement smart city solutions',
      count: partners.filter(p => p.category === 'Government').length,
      color: 'bg-blue-100 text-blue-600',
      benefits: ['Policy integration', 'Large-scale deployment', 'Regulatory compliance']
    },
    {
      icon: Zap,
      title: 'Technology Partners',
      description: 'Tech companies and innovation hubs driving technological advancement',
      count: partners.filter(p => p.category === 'Technology').length,
      color: 'bg-purple-100 text-purple-600',
      benefits: ['Technical expertise', 'Platform integration', 'Innovation acceleration']
    },
    {
      icon: Heart,
      title: 'NGO Partners',
      description: 'Non-profit organizations focused on community impact and social good',
      count: partners.filter(p => p.category === 'NGO').length,
      color: 'bg-green-100 text-green-600',
      benefits: ['Community outreach', 'Social impact', 'Grassroots engagement']
    },
    {
      icon: DollarSign,
      title: 'Investment Partners',
      description: 'Financial institutions and investors supporting sustainable growth',
      count: partners.filter(p => p.category === 'Investment').length,
      color: 'bg-orange-100 text-orange-600',
      benefits: ['Funding support', 'Financial guidance', 'Growth capital']
    }
  ];

  // const successStories = [
  //   {
  //     partner: 'Lagos State Government',
  //     title: 'Smart Traffic Management System',
  //     description: 'Reduced traffic congestion by 30% in key corridors through AI-powered traffic optimization.',
  //     impact: '30% congestion reduction',
  //     timeline: '6 months',
  //     icon: MapPin
  //   },
  //   {
  //     partner: 'African Development Bank',
  //     title: 'Housing Finance Platform',
  //     description: 'Digitized housing finance processes, making home ownership accessible to 10,000+ families.',
  //     impact: '10K+ families housed',
  //     timeline: '12 months',
  //     icon: Building
  //   },
  //   {
  //     partner: 'Microsoft Africa',
  //     title: 'Cloud Infrastructure Scale-up',
  //     description: 'Deployed scalable cloud infrastructure supporting 100,000+ daily active users.',
  //     impact: '100K+ users supported',
  //     timeline: '3 months',
  //     icon: Globe
  //   }
  // ];

  const partnershipBenefits = [
    {
      title: 'Market Access',
      description: 'Expand your reach across African urban markets',
      icon: Globe
    },
    {
      title: 'Innovation Acceleration',
      description: 'Accelerate product development through collaboration',
      icon: Zap
    },
    {
      title: 'Shared Resources',
      description: 'Access to shared expertise and infrastructure',
      icon: Users
    },
    {
      title: 'Impact Measurement',
      description: 'Track and measure social and economic impact',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce market entry risks through partnership',
      icon: Shield
    },
    {
      title: 'Brand Enhancement',
      description: 'Associate with sustainable urban development',
      icon: Award
    }
  ];

  // const filterCategories = [
  //   { id: 'all', label: 'All Partners', count: partners.length },
  //   { id: 'Technology', label: 'Technology', count: partners.filter(p => p.category === 'Technology').length },
  //   { id: 'Government', label: 'Government', count: partners.filter(p => p.category === 'Government').length },
  //   { id: 'NGO', label: 'NGOs', count: partners.filter(p => p.category === 'NGO').length },
  //   { id: 'Investment', label: 'Investment', count: partners.filter(p => p.category === 'Investment').length },
  //   { id: 'Urban Planning', label: 'Urban Planning', count: partners.filter(p => p.category === 'Urban Planning').length }
  // ];

  // const filteredPartners = activeFilter === 'all' 
  //   ? partners 
  //   : partners.filter(p => p.category === activeFilter);

  return (
    <AppLayout>
      <PageHero 
        title="Our Valued Partners"
        subtitle="Building the future of African cities through strategic partnerships and collaborative innovation."
      />

      {/* Partnership Philosophy */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Collaboration for Impact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe that meaningful change happens when diverse organizations come together with a shared vision. 
            Our partners are essential to scaling our solutions and creating sustainable urban transformation across Africa.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="border-2 border-orange-200">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Alliances</h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term partnerships that drive innovation and expand our reach across urban centers.
              </p>
            </div>
          </Card>
          
          <Card className="border-2 border-blue-200">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Partnerships that prioritize community needs and ensure our solutions serve real people.
              </p>
            </div>
          </Card>
          
          <Card className="border-2 border-green-200">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborations focused on delivering tangible results and sustainable urban development.
              </p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Partnership Types */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partnership Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with diverse organizations across multiple sectors to maximize our impact.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                  <type.icon size={24} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
                    {type.count}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="space-y-1">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle size={12} className="mr-1 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Success Stories */}
      {/* <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partnership Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from our collaborative efforts with partners across Africa.
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
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <story.icon size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-500 text-sm">{story.partner}</h4>
                    <h3 className="text-lg font-bold text-gray-900">{story.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Impact</p>
                    <p className="font-semibold text-gray-900">{story.impact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Timeline</p>
                    <p className="font-semibold text-gray-900">{story.timeline}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section> */}

      {/* Partners Grid */}
      {/* <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re proud to work with these exceptional organizations driving change across Africa.
          </p>
        </motion.div>

      
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          key={activeFilter} // Re-animate when filter changes
        >
          {filteredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                partner.featured ? 'ring-2 ring-orange-200' : ''
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              {partner.featured && (
                <div className="bg-orange-500 text-white px-3 py-1 text-xs font-medium flex items-center">
                  <Star size={12} className="mr-1" />
                  Featured Partner
                </div>
              )}
              <div className="p-6">
                <div className="w-full h-16 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-sm">{partner.name}</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                    {partner.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Partnership since:</span>
                    <span className="font-medium">{partner.since}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact:</span>
                    <span className="font-medium text-green-600">{partner.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section> */}

      {/* Partnership Benefits */}
      <Section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the benefits of joining our partnership ecosystem and creating lasting impact together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={24} className="text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Partnership Process */}
      <Section background="gray">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partnership Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures successful partnership development and implementation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Initial Contact', description: 'Reach out and share your vision' },
              { step: '02', title: 'Discovery Call', description: 'Explore alignment and opportunities' },
              { step: '03', title: 'Proposal Development', description: 'Create customized partnership framework' },
              { step: '04', title: 'Launch & Execute', description: 'Begin collaborative implementation' }
            ].map((phase, index) => (
              <Card key={index} className="p-6 text-center relative">
                <div className="text-4xl font-bold text-orange-500 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
                {index < 3 && (
                  <ArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-orange-500 hidden md:block" size={20} />
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership CTA */}
      <Section>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <Handshake size={64} className="text-orange-500 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our network of forward-thinking organizations committed to transforming African cities through 
            innovative technology and sustainable development. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 cursor-pointer hover:bg-orange-600 flex items-center">
              <Handshake  onClick={() => window.open("https://docs.google.com/forms/d/1M2_D99qXr7iMYv2zE31m_3Tq7Bn56a3NSXSuiM-cIL8/preview", "_blank")} size={20} className="mr-2" />
              Become a Partner
            </Button>
            <Button   onClick={() => window.open("https://calendly.com/wovenbyte/30min", "_blank")} size="lg" variant="outline" className="flex cursor-pointer items-center">
              <Calendar size={20} className="mr-2" />
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </Section>
    </AppLayout>
  );
};