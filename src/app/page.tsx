'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavBar } from '@/components/ui/tubelight-navbar'
import { StarBorder } from '@/components/ui/star-border'
import { Home as HomeIcon, User, Briefcase, FileText, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FF8C42]/10 to-[#FFA726]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#FF8C42]/8 to-[#FF7043]/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-[#FF8C42]/6 to-[#FF5722]/6 rounded-full blur-3xl"></div>
        </div>

      {/* Navigation Bar */}
      <NavBar 
        items={[
          { name: 'Home', url: '#home', icon: HomeIcon },
          { name: 'Features', url: '#features', icon: Shield },
          { name: 'How it Works', url: '#how-it-works', icon: Zap },
          { name: 'About', url: '#about', icon: User }
        ]} 
      />

      {/* Header */}
      <header id="home" className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-white font-clash-display font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-clash-display font-bold text-white">
              <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] bg-clip-text text-transparent">Argus</span>
            </span>
          </div>
          

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] backdrop-blur-sm rounded-full shadow-lg border border-[#FF8C42]/30 mb-12"
          >
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-2.5 animate-pulse"></span>
            <span className="text-sm font-outfit font-semibold text-white tracking-wide">
              <span className="text-[#FF8C42] font-clash-display font-black text-base">50,000+</span> users trust Argus
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-clash-display font-bold text-white mb-8 leading-tight tracking-tight text-center"
          >
            Detect AI content with
            <br />
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] bg-clip-text text-transparent font-outfit font-light tracking-wider">
              unprecedented accuracy
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#A0A0A0] mb-16 max-w-3xl mx-auto leading-relaxed font-space-grotesk font-medium tracking-wide text-center"
          >
            Experience the future of content analysis with 
            <span className="font-clash-display font-bold text-[#FF8C42] mx-2 tracking-tight">Argus</span>. 
            Our advanced AI detection technology provides instant, accurate results with 
            <span className="font-outfit font-bold text-[#FF8C42]">99.9% precision</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white font-clash-display font-bold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <StarBorder className="px-8 py-4 bg-[#1A1A1A] text-white font-outfit font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Watch Demo
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '99.9%', label: 'Detection Accuracy', icon: '🎯' },
              { number: '<1s', label: 'Processing Speed', icon: '⚡' },
              { number: '50K+', label: 'Global Users', icon: '🌍' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#1A1A1A] border border-[#FF8C42]/30 rounded-2xl hover:shadow-xl hover:border-[#FF8C42] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-[#A0A0A0] font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-clash-display font-bold text-white mb-4 tracking-tight">
              Why choose Argus?
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto font-space-grotesk font-medium">
              Our cutting-edge technology combines multiple AI models to deliver the most accurate 
              content detection available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Advanced OCR',
                description: 'State-of-the-art optical character recognition with 99.9% accuracy across all languages.'
              },
              {
                icon: '🤖',
                title: 'Multi-Model AI',
                description: 'Combines 50+ AI models for comprehensive content analysis and detection.'
              },
              {
                icon: '📊',
                title: 'Real-time Analytics',
                description: 'Instant results with detailed confidence scores and analysis breakdowns.'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Process documents in under 1 second, even with complex formatting.'
              },
              {
                icon: '🛡️',
                title: 'Enterprise Security',
                description: 'Bank-level encryption and compliance with all major security standards.'
              },
              {
                icon: '🌐',
                title: 'Global Support',
                description: 'Available in 50+ languages with 24/7 customer support worldwide.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#1A1A1A] border border-[#FF8C42]/30 rounded-2xl hover:shadow-xl hover:border-[#FF8C42] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-4">
              How It Works
            </h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Simple, Easy Process
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Start with ease and watch your business thrive from the get-go with personalized guidance every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 'Step 1',
                title: 'Upload Content',
                description: 'Simply upload your document, image, or paste text directly into our platform.',
                icon: '📄'
              },
              {
                step: 'Step 2',
                title: 'AI Analysis',
                description: 'Our advanced AI models analyze your content using multiple detection algorithms.',
                icon: '🤖'
              },
              {
                step: 'Step 3',
                title: 'Instant Results',
                description: 'Get detailed results with confidence scores and analysis breakdowns in seconds.',
                icon: '⚡'
              },
              {
                step: 'Step 4',
                title: 'Take Action',
                description: 'Use our insights to make informed decisions about your content strategy.',
                icon: '🎯'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-[#1A1A1A] border border-[#FF8C42]/30 rounded-2xl hover:shadow-xl hover:border-[#FF8C42] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-sm text-[#FF8C42] font-medium mb-3">{step.step}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to experience the future?
            </h2>
            <p className="text-xl text-[#A0A0A0] mb-8">
              Join thousands of users who trust Argus for their AI content detection needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 shadow-lg">
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="px-6 py-16 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">Argus</span>
              </div>
              <p className="text-[#A0A0A0]">
                Revolutionary AI detection technology for the modern world.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
                              <ul className="space-y-2 text-[#A0A0A0]">
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">API</a></li>
                </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
                              <ul className="space-y-2 text-[#A0A0A0]">
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Careers</a></li>
                </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
                              <ul className="space-y-2 text-[#A0A0A0]">
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-[#FF8C42] transition-colors">Status</a></li>
                </ul>
            </div>
          </div>
          
          <div className="border-t border-[#404040] mt-12 pt-8 text-center text-[#A0A0A0]">
            <p>&copy; 2024 Argus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
