import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle, Search, Cookie, Globe, FileText, Users, Calendar, Phone, Mail, MapPin, ArrowUp, CheckCircle, Settings, Activity } from 'lucide-react'

const PrivacyPolicy = () => {
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
      title: "Information We Collect",
      content: "SEVA SHIKSHA collects personal information when you interact with our website including your name, contact information (email address, phone number, postal address), and information you provide when filling out forms on our website. We may also collect technical information about your browsing activities.",
      category: "Data Collection",
      color: "from-blue-500 to-blue-600",
      details: "We collect this information to respond to your inquiries, provide services, and improve your experience on our website."
    },
    {
      id: 2,
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "We use your personal information to respond to your inquiries and requests, send you updates and newsletters about our activities and events, improve our website and tailor content to your preferences, and comply with legal obligations as required.",
      category: "Data Usage",
      color: "from-green-500 to-green-600",
      details: "All usage of your data is limited to educational and administrative purposes only."
    },
    {
      id: 3,
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies and Tracking Technologies",
      content: "Our website uses cookies and similar tracking technologies to collect information about your browsing activities. This helps us improve your online experience and understand how our website is used. You can manage cookie preferences through your browser settings.",
      category: "Technology",
      color: "from-purple-500 to-purple-600",
      details: "Cookies help us personalize your experience and provide better service."
    },
    {
      id: 4,
      icon: <Settings className="w-6 h-6" />,
      title: "Your Privacy Rights",
      content: "You have the right to access and correct your personal information, opt-out of receiving marketing communications from us, request deletion of your personal data, and improve our website content based on your preferences.",
      category: "User Rights",
      color: "from-orange-500 to-red-500",
      details: "We respect your privacy choices and provide easy ways to exercise your rights."
    },
    {
      id: 5,
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security Measures",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes physical, electronic, and administrative safeguards to secure all collected information.",
      category: "Security",
      color: "from-red-500 to-pink-500",
      details: "Your data security is our top priority with industry-standard protection measures."
    },
    {
      id: 6,
      icon: <Database className="w-6 h-6" />,
      title: "Information Sharing Policy",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. Information may be shared with educational institutions, trusted service providers, or when required by law to protect our rights.",
      category: "Data Sharing",
      color: "from-teal-500 to-cyan-500",
      details: "Any data sharing is strictly controlled and limited to necessary purposes only."
    },
    {
      id: 7,
      icon: <Calendar className="w-6 h-6" />,
      title: "Policy Updates & Changes",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new effective date.",
      category: "Policy Changes",
      color: "from-indigo-500 to-blue-500",
      details: "We encourage you to review this policy periodically for any updates."
    },
    {
      id: 8,
      icon: <Globe className="w-6 h-6" />,
      title: "International Data Protection",
      content: "We comply with applicable data protection laws and regulations. If you are accessing our services from outside India, please be aware that your information may be transferred to, stored, and processed in India where our servers are located.",
      category: "Compliance",
      color: "from-cyan-500 to-teal-500",
      details: "We adhere to international standards for data protection and privacy."
    }
  ]

  const dataTypes = [
    "Personal identification information (name, address, phone number)",
    "Educational records and academic performance data",
    "Contact information (email address, phone number)",
    "Information provided when filling out website forms",
    "Technical information (IP address, browser type, device info)",
    "Cookies and similar tracking technologies data"
  ]

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
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg animate-bounce">
            <Shield className="w-5 h-5" />
            Privacy Protection • Data Security
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Privacy
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your privacy is our priority. Learn how SEVA SHIKSHA TRUST collects, uses, and protects 
            your personal information with complete transparency and industry-leading security measures.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Secure Data Handling</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Effective Sept 27, 2023</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
            </div>
          </div>
        </motion.div>

        {/* Search Section */}
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
                placeholder="Search privacy policies, data rights, or security measures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/90 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{filteredSections.length}</span>
              <span>privacy sections</span>
            </div>
          </div>
        </motion.div>

        {/* Important Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 bg-gradient-to-r from-green-400/10 via-teal-400/10 to-blue-400/10 backdrop-blur-sm border border-green-200/30 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔒 Privacy Introduction</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy outlines how SEVA SHIKSHA collects, uses, and safeguards your personal information 
                when you access and use our website. <strong>Effective Date: 27th September, 2023</strong>. 
                By using our website, you consent to the practices described in this Privacy Policy.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transparent Practices</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Lock className="w-4 h-4" />
                  <span>Secure Processing</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Users className="w-4 h-4" />
                  <span>User Rights Protected</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Collection Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We collect the following types of personal information when you interact with our website:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {dataTypes.map((type, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{type}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Sections Grid */}
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
                    activeSection === section.id ? 'ring-2 ring-green-400 ring-offset-2' : ''
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
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
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
                            <span>Privacy Protection Measure</span>
                          </div>
                          <div className="text-sm text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
                            Click to {activeSection === section.id ? 'collapse' : 'learn more'}
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
                        <div className="p-8 bg-gradient-to-r from-green-50/50 to-teal-50/50">
                          <div className="prose max-w-none">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Details</h4>
                            <p className="text-gray-600 mb-4">
                              {section.details}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-2 text-green-600">
                                <Shield className="w-4 h-4" />
                                <span>Privacy Protected</span>
                              </div>
                              <div className="flex items-center gap-2 text-blue-600">
                                <Lock className="w-4 h-4" />
                                <span>Secure Processing</span>
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

        {/* Privacy Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 rounded-3xl p-12 text-white relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Our Privacy Commitment</h3>
              <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
                SEVA SHIKSHA TRUST is committed to protecting your privacy and maintaining the confidentiality 
                of your personal information. We are committed to protecting your privacy and ensuring the security 
                of your personal information through industry-leading practices and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Data Protection</h4>
                <p className="text-green-200 text-sm">Advanced encryption & security protocols</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">User Rights</h4>
                <p className="text-green-200 text-sm">Complete control over your personal data</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Global Standards</h4>
                <p className="text-green-200 text-sm">Compliance with international privacy laws</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 border border-green-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            If you have questions or concerns about our Privacy Policy or our data practices, 
            please contact us at info@sevashiksha.com. We're committed to addressing your privacy concerns promptly and transparently.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Phone Support</h4>
              <p className="text-green-600 text-sm mb-3">Direct privacy consultation line</p>
              <p className="text-gray-900 font-medium">094305 21027 / 8709283592</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Email Support</h4>
              <p className="text-green-600 text-sm mb-3">Written privacy inquiries</p>
              <p className="text-gray-900 font-medium">info@sevashiksha.com</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Office Visit</h4>
              <p className="text-green-600 text-sm mb-3">In-person privacy consultation</p>
              <p className="text-gray-900 font-medium text-sm">301, N.K Market, Patna-800025</p>
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
              className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PrivacyPolicy