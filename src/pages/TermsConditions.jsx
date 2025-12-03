import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Award, BookOpen, Gavel, Calendar, Phone, Mail, MapPin, ArrowUp, Lock, UserCheck, Search, ExternalLink } from 'lucide-react'

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    {
      id: 1,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Website Usage Agreement",
      content: "By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website. All content on this website, including text, images, graphics, and multimedia, is provided for informational purposes only.",
      category: "Legal",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Lock className="w-6 h-6" />,
      title: "Content Usage & Copyright",
      content: "You may not reproduce, distribute, or use any content from this website without our prior written permission. All materials provided are protected under intellectual property laws and are for informational and educational purposes only.",
      category: "Legal",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: <Shield className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: "You agree not to engage in any activities that may disrupt or interfere with the functioning of this website, including but not limited to hacking, unauthorized access, or distribution of harmful software. We reserve the right to terminate access for violators.",
      category: "Security",
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      icon: <FileText className="w-6 h-6" />,
      title: "Privacy Policy Integration",
      content: "Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using this website, you consent to the practices outlined in our Privacy Policy, which forms an integral part of these terms.",
      category: "Privacy",
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Information Accuracy Disclaimer",
      content: "The information provided on this website is for general informational purposes only. We make no warranties or representations regarding the accuracy, completeness, or suitability of this information for any purpose. Users should verify information independently.",
      category: "Disclaimer",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      icon: <Gavel className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use this website, even if we have been advised of the possibility of such damages. Your use is at your own risk.",
      category: "Legal",
      color: "from-gray-600 to-gray-700"
    },
    {
      id: 7,
      icon: <Calendar className="w-6 h-6" />,
      title: "Terms Modification Rights",
      content: "We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of this website after such changes indicates your acceptance of the modified terms. Please check this page periodically for updates.",
      category: "Updates",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 8,
      icon: <Award className="w-6 h-6" />,
      title: "Scholarship Program Terms",
      content: "For students applying for scholarships through SEVA SHIKSHA TRUST, additional terms apply including eligibility criteria, academic performance requirements, and reporting obligations. Scholarship recipients must maintain good academic standing and comply with institutional policies.",
      category: "Education",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 9,
      icon: <Users className="w-6 h-6" />,
      title: "User Conduct & Responsibilities",
      content: "All users must maintain respectful communication, provide accurate information, and use our services responsibly. Any misuse, fraud, or violation of these terms may result in immediate termination of access and potential legal action.",
      category: "Conduct",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 10,
      icon: <Phone className="w-6 h-6" />,
      title: "Contact & Support",
      content: "If you have any questions or concerns about these Terms and Conditions, please contact us at info@sevashiksha.in or call 094305 21027 / 8709283592. We are committed to addressing your queries promptly and professionally.",
      category: "Support",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const categories = ['All', 'Legal', 'Security', 'Privacy', 'Disclaimer', 'Education', 'Conduct', 'Support', 'Updates']

  const filteredSections = sections.filter(section =>
    searchTerm === '' || 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg animate-bounce">
            <Gavel className="w-5 h-5" />
            Legal Framework • User Agreement
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Terms &
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your comprehensive guide to using SEVA SHIKSHA TRUST services. 
            Please read these terms carefully as they constitute a binding legal agreement between you and our organization.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{sections.length} Key Terms</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Updated January 2025</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Legal Protection</span>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search terms, categories, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/90 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{filteredSections.length}</span>
              <span>terms found</span>
            </div>
          </div>
        </motion.div>

        {/* Important Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-orange-400/10 backdrop-blur-sm border border-amber-200/30 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⚖️ Legal Notice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms and conditions were last updated on <strong>27th September, 2023</strong> and are effective immediately. 
                By accessing or using our website and services, you acknowledge that you have read, understood, 
                and agree to be legally bound by these terms and our Privacy Policy.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Legally Binding</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <FileText className="w-4 h-4" />
                  <span>Comprehensive Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terms Grid */}
        <div className="space-y-8 mb-16">
          <AnimatePresence>
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    activeSection === section.id ? 'ring-2 ring-blue-400 ring-offset-2' : ''
                  }`}
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`bg-gradient-to-r ${section.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {section.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {section.title}
                          </h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${section.color} text-white text-xs font-semibold rounded-full`}>
                            {section.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {section.content}
                        </p>
                        
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Binding Agreement Term</span>
                          </div>
                          <div className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                            Click to {activeSection === section.id ? 'collapse' : 'expand'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-8 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
                          <div className="prose max-w-none">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Details</h4>
                            <p className="text-gray-600 mb-4">
                              This section forms part of our comprehensive legal framework designed to protect both 
                              SEVA SHIKSHA TRUST and our users. Your compliance with these terms ensures a safe, 
                              fair, and productive environment for all participants in our educational programs.
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-2 text-green-600">
                                <Shield className="w-4 h-4" />
                                <span>Protected Rights</span>
                              </div>
                              <div className="flex items-center gap-2 text-blue-600">
                                <Users className="w-4 h-4" />
                                <span>Community Standards</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Need Legal Clarification?</h3>
              <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                Our legal team is available to address any questions about these terms and conditions. 
                We're committed to transparency and ensuring you fully understand your rights and obligations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Phone Support</h4>
                <p className="text-blue-200 text-sm mb-3">Direct line to our legal team</p>
                <p className="text-white font-medium">094305 21027 / 8709283592</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Email Support</h4>
                <p className="text-blue-200 text-sm mb-3">Written inquiries and documentation</p>
                <p className="text-white font-medium">info@sevashiksha.in</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Office Address</h4>
                <p className="text-blue-200 text-sm mb-3">Visit us for in-person consultation</p>
                <p className="text-white font-medium text-sm">301, N.K Market, Patna-800025</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TermsConditions