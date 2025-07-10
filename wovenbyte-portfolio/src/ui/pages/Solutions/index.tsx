'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 

  CheckCircle,
  ArrowRight,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { AppLayout } from '@/ui/modules';
import { solutions } from './data';
import { useRouter } from 'next/navigation';

export const SolutionsPage: React.FC = () => {
const router = useRouter()

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container pt-[100px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Urban Solutions for a Digital Africa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              At WovenByte, we leverage technology to tackle Afric&apos;s most pressing urban challenges, transforming daily life through innovative and accessible digital tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From seamless transportation to affordable housing and integrated city services, our solutions are designed to build smarter, more connected, and sustainable urban communities for a stronger Africa.
            </p>
          </motion.div>

          {/* Individual Solutions */}
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Solution Image/Demo */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {solution.id === 'magic-ride' ? (
                    <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-80 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                          <div className="bg-white rounded-2xl h-full p-4 relative overflow-hidden">
                            {/* Phone Screen Content */}
                            <div className="text-center mb-4">
                              <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs inline-block">
                                Apollo
                              </div>
                            </div>
                            
                            <div className="bg-gray-100 rounded-lg p-3 mb-4">
                              <h3 className="font-bold text-sm mb-2">Shared ride</h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                  <span>🟢 Victoria Island</span>
                                  <span>📍 Ikeja</span>
                                </div>
                                <div className="w-full h-1 bg-orange-200 rounded">
                                  <div className="w-1/3 h-full bg-orange-500 rounded"></div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-xs space-y-2 mb-4">
                              <div className="flex items-center">
                                <div className="w-6 h-6 bg-orange-200 rounded-full mr-2"></div>
                                <span>John Doe</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-6 h-6 bg-blue-200 rounded-full mr-2"></div>
                                <span>Sarah Hassan</span>
                              </div>
                            </div>
                            
                            <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                              JOIN
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : solution.id === 'housing-tools' ? (
                    <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 p-8">
                        <div className="bg-white rounded-lg h-full p-6 shadow-lg">
                          {/* Search Bar */}
                          <div className="flex gap-2 mb-4">
                            <input 
                              className="flex-1 px-3 py-2 border rounded-lg text-sm" 
                              placeholder="Location"
                              value="Lagos"
                              readOnly
                            />
                            <input 
                              className="flex-1 px-3 py-2 border rounded-lg text-sm" 
                              placeholder="Budget"
                              value="₦500k"
                              readOnly
                            />
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">
                              Search
                            </button>
                          </div>
                          
                          {/* Property Cards */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="w-full h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded mb-2"></div>
                              <p className="text-xs font-medium">Modern Apartment</p>
                              <p className="text-xs text-gray-600">₦450,000/month</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="w-full h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded mb-2"></div>
                              <p className="text-xs font-medium">Family House</p>
                              <p className="text-xs text-gray-600">₦380,000/month</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="w-full h-16 bg-gradient-to-br from-green-200 to-green-300 rounded mb-2"></div>
                              <p className="text-xs font-medium">Studio Space</p>
                              <p className="text-xs text-gray-600">₦280,000/month</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="w-full h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded mb-2"></div>
                              <p className="text-xs font-medium">Shared Living</p>
                              <p className="text-xs text-gray-600">₦180,000/month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
                      <div className="absolute inset-0 p-8">
                        <div className="bg-white rounded-lg h-full p-6 shadow-lg">
                          {/* Digital Kiosk Interface */}
                          <div className="text-center mb-4">
                            <h3 className="font-bold text-lg text-gray-800">Public Services Kiosk</h3>
                            <p className="text-sm text-gray-600">Integrated City Services</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 h-3/4">
                            <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-blue-500 rounded-full mb-2 flex items-center justify-center">
                                <span className="text-white text-xs">🏥</span>
                              </div>
                              <span className="text-xs font-medium text-center">Healthcare Services</span>
                            </div>
                            
                            <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-green-500 rounded-full mb-2 flex items-center justify-center">
                                <span className="text-white text-xs">🎓</span>
                              </div>
                              <span className="text-xs font-medium text-center">Education Portal</span>
                            </div>
                            
                            <div className="bg-orange-100 rounded-lg p-4 flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-orange-500 rounded-full mb-2 flex items-center justify-center">
                                <span className="text-white text-xs">💡</span>
                              </div>
                              <span className="text-xs font-medium text-center">Utility Payments</span>
                            </div>
                            
                            <div className="bg-purple-100 rounded-lg p-4 flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-purple-500 rounded-full mb-2 flex items-center justify-center">
                                <span className="text-white text-xs">📋</span>
                              </div>
                              <span className="text-xs font-medium text-center">Government Forms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Solution Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      solution.status === 'In Development' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      Status: {solution.status}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-orange-500 mb-4">{solution.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">The Problem:</h4>
                    <p className="text-gray-600 leading-relaxed">{solution.problem}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Our Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{solution.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
  disabled={solution.status !== 'In Development'} 
  className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 ${
    solution.status === 'In Development'
      ? 'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer'
      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
  }`}
  whileHover={solution.status === 'In Development' ? { scale: 1.05 } : {}}
  whileTap={solution.status === 'In Development' ? { scale: 0.95 } : {}}
>
  {solution.buttonText}
  <ArrowRight size={20} className="ml-2" />
</motion.button>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Impact CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your City?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of users across Africa who are already experiencing the future of urban living through our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => window.open("https://calendly.com/wovenbyte/30min", "_blank")}
                className="bg-white cursor-pointer text-orange-500 px-8 py-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} className="mr-2 " />
                Schedule a Meeting
              </motion.button>
              <motion.button
                onClick={() => router.push('/impact')}
                className="border-2 cursor-pointer border-white text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-white hover:text-orange-500 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} className="mr-2" />
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
};