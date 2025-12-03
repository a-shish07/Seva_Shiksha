import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, User, FileText,
  ArrowUp, CheckCircle, Globe, Calendar, Users, Award, Sparkles,
  ChevronDown, ExternalLink, Navigation, Headphones, MessageCircle,
  VideoIcon, BookOpen, GraduationCap, Coffee, Star, Heart,
  Shield, Zap, Info, AlertCircle, ThumbsUp, Eye
} from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('contact')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formStats, setFormStats] = useState({
    totalInquiries: 2847,
    responseTime: '2 hours',
    satisfactionRate: '98%'
  })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const inquiryTypes = [
    { value: 'general', label: '🔍 General Inquiry', color: 'from-blue-500 to-cyan-500' },
    { value: 'admission', label: '🎓 Admission Process', color: 'from-purple-500 to-pink-500' },
    { value: 'course', label: '📚 Course Information', color: 'from-green-500 to-teal-500' },
    { value: 'scholarship', label: '💰 Scholarship Details', color: 'from-orange-500 to-red-500' },
    { value: 'support', label: '🛠️ Technical Support', color: 'from-indigo-500 to-blue-500' },
    { value: 'feedback', label: '💭 Feedback & Suggestions', color: 'from-teal-500 to-cyan-500' }
  ]

  const contactMethods = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Immediate assistance for urgent queries',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      primary: '+91 94305 21027',
      secondary: '+91 87092 83592',
      action: 'Call Now',
      availability: '9 AM - 6 PM (Mon-Fri)',
      responseTime: 'Instant',
      features: ['Direct Support', 'Admission Guidance', 'Emergency Help']
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Detailed responses to complex queries',
      icon: <Mail className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      primary: 'info@sevashiksha.in',
      secondary: 'support@sevashiksha.com',
      action: 'Send Email',
      availability: '24/7 Monitored',
      responseTime: '2-4 hours',
      features: ['Document Sharing', 'Detailed Responses', 'Follow-up Support']
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      description: 'Quick messaging with multimedia support',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-green-400 to-green-600',
      primary: 'Chat on WhatsApp',
      secondary: '+91 94305 21027',
      action: 'Start Chat',
      availability: 'Business Hours',
      responseTime: '5-10 minutes',
      features: ['Quick Replies', 'Media Sharing', 'Status Updates']
    },
    {
      id: 'visit',
      title: 'Office Visit',
      description: 'Personal consultation and document verification',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      primary: '301, N.K Market, Patna',
      secondary: 'Ashiana Digha Road',
      action: 'Get Directions',
      availability: 'Mon-Sat',
      responseTime: 'Immediate',
      features: ['Face-to-face', 'Document Verification', 'Campus Tour']
    }
  ]

  const quickActions = [
    {
      title: 'Download Brochure',
      description: 'Complete course & scholarship info',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      link: '/brochure',
      external: false
    },
    {
      title: 'Schedule Callback',
      description: 'Expert will call you back',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      action: () => toast.success('Callback request submitted! We\'ll call you within 30 minutes.')
    },
    {
      title: 'Live Chat Support',
      description: 'Instant help & guidance',
      icon: <Headphones className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      action: () => toast.success('Connecting you to our support team...')
    },
    {
      title: 'Virtual Office Tour',
      description: '360° campus experience',
      icon: <VideoIcon className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      action: () => toast.success('Virtual tour will open in a new window')
    },
    {
      title: 'Scholarship Calculator',
      description: 'Check eligibility instantly',
      icon: <Award className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      link: '/scholarship',
      external: false
    },
    {
      title: 'Career Guidance',
      description: 'Expert counseling session',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
      action: () => toast.success('Career guidance session booked successfully!')
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "What documents are required for course admission?",
      answer: "You'll need your educational certificates (10th, 12th, or graduation marks sheets), identity proof (Aadhar card, passport, etc.), address proof, passport-size photographs, and caste certificate (if applicable for quota benefits). We also accept scanned copies for initial application.",
      category: "Admissions",
      tags: ["documents", "admission", "requirements"]
    },
    {
      id: 2,
      question: "How can I check my scholarship eligibility?",
      answer: "You can use our online scholarship calculator or visit our office for a detailed eligibility assessment. Our counselors will review your academic records, family income, and other criteria to determine the best scholarship options available for you.",
      category: "Scholarships",
      tags: ["scholarship", "eligibility", "financial aid"]
    },
    {
      id: 3,
      question: "What are your office timings and how can I schedule a visit?",
      answer: "We're open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. You can walk in during these hours or schedule an appointment by calling us. We recommend scheduling for detailed course counseling to ensure dedicated time with our experts.",
      category: "General",
      tags: ["timing", "visit", "appointment"]
    },
    {
      id: 4,
      question: "Do you provide online classes and distance learning options?",
      answer: "Yes, we offer hybrid learning models including live online classes, recorded sessions, and interactive workshops. Our digital platform provides access to course materials, assignments, and direct interaction with instructors. Weekend batches are also available for working professionals.",
      category: "Courses",
      tags: ["online", "distance learning", "digital"]
    },
    {
      id: 5,
      question: "What career support do you provide after course completion?",
      answer: "We provide comprehensive career support including resume building, interview preparation, job placement assistance, and alumni networking opportunities. Our industry partnerships help students secure internships and job opportunities in their chosen fields.",
      category: "Career Support",
      tags: ["career", "placement", "job support"]
    },
    {
      id: 6,
      question: "How do I track my application status and get updates?",
      answer: "You'll receive a unique application ID upon submission. Use this ID to track your status online through our student portal. We also send SMS and email updates at each stage of the process. You can also call our helpline for immediate status updates.",
      category: "Application Process",
      tags: ["tracking", "status", "updates"]
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsFormSubmitting(true)

    try {
      const emailPayload = {
        ...formData,
        submissionDate: new Date().toISOString(),
        userAgent: navigator.userAgent,
        timestamp: new Date().getTime()
      };

      const response = await fetch('http://localhost:3001/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      console.log('Form data sent:', formData)
      toast.success(
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm text-gray-600">We'll respond within 2-4 hours</p>
          </div>
        </div>,
        { duration: 4000 }
      )

      // Update stats
      setFormStats(prev => ({
        ...prev,
        totalInquiries: prev.totalInquiries + 1
      }))

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <p className="font-medium">Failed to send message</p>
            <p className="text-sm text-gray-600">Please try again later</p>
          </div>
        </div>,
        { duration: 4000 }
      )
    } finally {
      setIsFormSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleQuickAction = (action) => {
    if (typeof action.action === 'function') {
      action.action()
    } else if (action.link) {
      if (action.external) {
        window.open(action.link, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = action.link
      }
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-36">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            padding: '16px',
          }
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-400/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Enhanced Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg animate-bounce">
            <Headphones className="w-5 h-5" />
            24/7 Support • Instant Response
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your educational journey starts with a simple conversation. Connect with our expert counselors 
            who are ready to guide you towards your dream career with personalized support.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{formStats.totalInquiries}+ Students Helped</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Zap className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Avg {formStats.responseTime} Response</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Heart className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">{formStats.satisfactionRate} Satisfaction Rate</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-lg border border-white/20"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'contact', label: 'Contact Methods', icon: <Phone className="w-5 h-5" /> },
              { id: 'form', label: 'Send Message', icon: <Send className="w-5 h-5" /> },
              { id: 'quick', label: 'Quick Actions', icon: <Zap className="w-5 h-5" /> },
              { id: 'faq', label: 'FAQ', icon: <Info className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Content Based on Active Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className={`bg-gradient-to-r ${method.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {method.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{method.description}</p>
                          
                          <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                              <span className="text-gray-900 font-medium">{method.primary}</span>
                            </div>
                            {method.secondary && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                                <span className="text-gray-700">{method.secondary}</span>
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-sm text-gray-500">Availability</p>
                              <p className="font-medium text-gray-900">{method.availability}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Response Time</p>
                              <p className="font-medium text-gray-900">{method.responseTime}</p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <p className="text-sm text-gray-500 mb-2">Features</p>
                            <div className="flex flex-wrap gap-2">
                              {method.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button 
                            onClick={() => {
                              if (method.id === 'phone') {
                                window.location.href = `tel:${method.primary.replace(/\D/g, '')}`
                              } else if (method.id === 'email') {
                                window.location.href = `mailto:${method.primary}`
                              } else if (method.id === 'whatsapp') {
                                window.open(`https://wa.me/919430521027`, '_blank', 'noopener,noreferrer')
                              } else if (method.id === 'visit') {
                                window.open('https://maps.google.com/?q=301,N.K Market,Patna', '_blank', 'noopener,noreferrer')
                              }
                            }}
                            className={`bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-105`}
                          >
                            {method.action}
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4">Visit Our Campus</h3>
                    <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                      Experience our world-class facilities and meet our expert counselors in person. 
                      Get a complete tour of our campus and detailed information about all programs.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center group">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Address</h4>
                      <p className="text-blue-200 text-sm">
                        301, N.K Market, Ashiana Digha Road<br />
                        Ramnagri More, Opposite 9 to 9 Super Market<br />
                        Patna - 800025, Bihar, India
                      </p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Office Hours</h4>
                      <p className="text-blue-200 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <Navigation className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Getting Here</h4>
                      <p className="text-blue-200 text-sm">
                        Easy access by public transport<br />
                        Parking available<br />
                        Wheelchair accessible
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Contact Form */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                      <p className="text-gray-600">We'll respond within 2-4 hours during business days</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Selector */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        What can we help you with? <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type.value })}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                              formData.inquiryType === type.value
                                ? `bg-gradient-to-r ${type.color} text-white border-transparent shadow-lg`
                                : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            <span className="font-medium text-sm">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Brief subject of your inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Please describe your inquiry in detail. Include any specific questions about courses, admissions, scholarships, or other services you're interested in..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isFormSubmitting}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isFormSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                          inquiryType: 'general'
                        })}
                        className="px-8 py-4 border-2 border-gray-200 text-gray-600 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-medium"
                      >
                        Clear Form
                      </button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Privacy & Response Information</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Your information is secure and will never be shared with third parties</li>
                            <li>• Average response time: 2-4 hours during business days</li>
                            <li>• For urgent matters, please call us directly at +91 94305 21027</li>
                            <li>• We'll send confirmation and updates to your email address</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'quick' && (
            <motion.div
              key="quick"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quick Actions */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Get instant help with these one-click solutions for common needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => handleQuickAction(action)}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:scale-105">
                        <div className={`bg-gradient-to-r ${action.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {action.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {action.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {action.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-green-600 font-medium">
                            Click to access
                          </div>
                          <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:rotate-45" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Support Options */}
                <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
                  <div className="text-center mb-8">
                    <Coffee className="w-12 h-12 mx-auto text-green-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Personal Assistance?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Sometimes you need a personal touch. Our expert counselors are available for 
                      one-on-one consultations to help you make the best decisions for your future.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center group">
                      <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <Calendar className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Book Appointment</h4>
                      <p className="text-green-600 text-sm">Schedule a personal meeting</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <MessageSquare className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                      <p className="text-blue-600 text-sm">Instant messaging support</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                        <VideoIcon className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Video Call</h4>
                      <p className="text-purple-600 text-sm">Face-to-face consultation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* FAQ Section */}
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Find quick answers to common questions about our services, admissions, and support
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                            expandedFaq === faq.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedFaq === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {faq.answer}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span 
                                    key={tagIndex}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Still Have Questions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white text-center"
                >
                  <AlertCircle className="w-12 h-12 mx-auto text-blue-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                    Can't find what you're looking for? Our support team is always ready to help 
                    with personalized answers to your specific questions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => setActiveTab('form')}
                      className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                      Ask a Question
                    </button>
                    <button className="bg-white/20 text-white px-6 py-3 rounded-2xl font-medium hover:bg-white/30 transition-colors duration-300">
                      Call Us Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

export default ContactUs