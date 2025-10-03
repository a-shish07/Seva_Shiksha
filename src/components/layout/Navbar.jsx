import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, X, Phone, Mail, Facebook, Youtube, Star, ChevronDown, 
  User, MapPin, ArrowRight, BookOpen, Globe,
  GraduationCap, Users, Award, FileText, MessageCircle,
  Sparkles, Heart, Shield, Home
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const dropdownTimers = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])



  const handleDropdownToggle = (dropdown) => {
    if (dropdownTimers.current[dropdown]) {
      clearTimeout(dropdownTimers.current[dropdown])
      delete dropdownTimers.current[dropdown]
    }
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleDropdownMouseEnter = (dropdown) => {
    // Clear any existing timers for this dropdown
    if (dropdownTimers.current[dropdown]) {
      clearTimeout(dropdownTimers.current[dropdown])
      delete dropdownTimers.current[dropdown]
    }
    // Clear any existing timers for other dropdowns
    Object.keys(dropdownTimers.current).forEach(key => {
      if (key !== dropdown) {
        clearTimeout(dropdownTimers.current[key])
        delete dropdownTimers.current[key]
      }
    })
    setOpenDropdown(dropdown)
  }

  const handleDropdownMouseLeave = (dropdown) => {
    dropdownTimers.current[dropdown] = setTimeout(() => {
      setOpenDropdown(null)
    }, 200) // Reduced delay for better responsiveness
  }



  const handleQuickContact = (type) => {
    switch (type) {
      case 'phone':
        window.location.href = 'tel:+919430521027'
        break
      case 'email':
        window.location.href = 'mailto:info@sevashiksha.com'
        break
      case 'whatsapp':
        window.open('https://wa.me/919430521027', '_blank', 'noopener,noreferrer')
        break
      default:
        break
    }
  }

  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home className="w-4 h-4" />,
      description: 'Welcome to SEVA SHIKSHA'
    },
    {
      name: 'About Us',
      icon: <Users className="w-4 h-4" />,
      description: 'Learn about our mission',
      dropdown: [
        { 
          name: 'About Seva Shiksha', 
          path: '/about-seva-shiksha',
          description: 'Our story and mission',
          icon: <Heart className="w-4 h-4" />
        },
        { 
          name: 'Chairman Speaks', 
          path: '/chairman-speaks',
          description: 'Message from leadership',
          icon: <User className="w-4 h-4" />
        },
        { 
          name: 'Our Mentors', 
          path: '/our-mentors',
          description: 'Meet our expert team',
          icon: <Users className="w-4 h-4" />
        },
        { 
          name: 'Student Oath Videos', 
          path: '/student-oath-videos',
          description: 'Inspiring testimonials',
          icon: <Globe className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Courses',
      icon: <BookOpen className="w-4 h-4" />,
      description: 'Explore our programs',
      dropdown: [
        { 
          name: 'Courses After 10th', 
          path: '/courses-after-10th',
          description: 'Diploma & Certificate programs',
          icon: <BookOpen className="w-4 h-4" />
        },
        { 
          name: 'Courses After 12th', 
          path: '/courses-after-12th',
          description: 'Undergraduate opportunities',
          icon: <GraduationCap className="w-4 h-4" />
        },
        { 
          name: 'Courses After Graduation', 
          path: '/courses-after-graduation',
          description: 'Postgraduate programs',
          icon: <Award className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Registration',
      icon: <FileText className="w-4 h-4" />,
      description: 'Join our community',
      dropdown: [
        { 
          name: 'Student Registration', 
          path: '/student-registration',
          description: 'Apply for courses',
          icon: <User className="w-4 h-4" />
        },
        { 
          name: 'Membership Registration', 
          path: '/membership-registration',
          description: 'Become a member',
          icon: <Shield className="w-4 h-4" />
        }
      ]
    },
    { 
      name: 'News', 
      path: '/news',
      icon: <FileText className="w-4 h-4" />,
      description: 'Latest updates & announcements',
      badge: 'New'
    },
    {
      name: 'Resources',
      icon: <FileText className="w-4 h-4" />,
      description: 'Downloads & information',
      dropdown: [
        { 
          name: 'Brochure', 
          path: '/brochure',
          description: 'Course information PDFs',
          icon: <FileText className="w-4 h-4" />
        },
        { 
          name: 'Terms & Conditions', 
          path: '/terms-conditions',
          description: 'Legal information',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          name: 'Privacy Policy', 
          path: '/privacy-policy',
          description: 'Data protection policy',
          icon: <Shield className="w-4 h-4" />
        }
      ]
    },
    { 
      name: 'Contact Us', 
      path: '/contact-us',
      icon: <Phone className="w-4 h-4" />,
      description: 'Get in touch with us',
      highlight: true
    }
  ]

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Simplified Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-6">
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => handleQuickContact('phone')}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">094305 21027</span>
              </div>
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:text-green-300 transition-colors"
                onClick={() => handleQuickContact('email')}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">info@sevashiksha.com</span>
              </div>
              <div className="flex items-center space-x-2 text-green-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Patna, Bihar</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064110904198" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@sevashikshatrust" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-red-600 transition-colors duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://g.co/kgs/J8tnxXu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-yellow-500 transition-colors duration-300"
                >
                  <Star className="w-4 h-4" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuickContact('whatsapp')}
                  className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <Link 
                  to="/student-registration" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-1.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4" />
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-blue-100' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Elegant Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  SEVA SHIKSHA
                </h1>
                <p className="text-sm text-gray-600 font-medium">Trust • Excellence • Future</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative dropdown-container">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleDropdownMouseEnter(link.name)}
                      onMouseLeave={() => handleDropdownMouseLeave(link.name)}
                    >
                      <button
                        className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-2xl hover:bg-blue-50 group"
                        onClick={() => handleDropdownToggle(link.name)}
                      >
                        <span className="text-blue-600">{link.icon}</span>
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          openDropdown === link.name ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                        }`} />
                        {link.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                            {link.badge}
                          </span>
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                            onMouseEnter={() => handleDropdownMouseEnter(link.name)}
                            onMouseLeave={() => handleDropdownMouseLeave(link.name)}
                          >
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-blue-600">{link.icon}</span>
                                {link.name}
                              </h3>
                              <div className="space-y-2">
                                {link.dropdown.map((dropdownLink, dropIndex) => (
                                  <Link
                                    key={dropIndex}
                                    to={dropdownLink.path}
                                    className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mt-0.5">
                                      {dropdownLink.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {dropdownLink.name}
                                      </div>
                                      <div className="text-sm text-gray-500 group-hover:text-gray-600">
                                        {dropdownLink.description}
                                      </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-2 px-4 py-3 font-medium transition-all duration-300 rounded-2xl group ${
                        location.pathname === link.path 
                          ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                          : link.highlight
                            ? 'text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-lg'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span className={location.pathname === link.path ? 'text-white' : link.highlight ? 'text-white' : 'text-blue-600'}>
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                          {link.badge}
                        </span>
                      )}
                      {link.highlight && (
                        <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>



            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gradient-to-br from-white to-blue-50 border-t border-blue-100"
            >
              <div className="container mx-auto px-4 py-6">

                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <button
                            className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-300"
                            onClick={() => handleDropdownToggle(link.name)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-blue-600">{link.icon}</span>
                              <span className="font-medium">{link.name}</span>
                              {link.badge && (
                                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                              openDropdown === link.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {openDropdown === link.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-blue-100"
                              >
                                <div className="px-6 py-2 space-y-1">
                                  {link.dropdown.map((dropdownLink, dropIndex) => (
                                    <Link
                                      key={dropIndex}
                                      to={dropdownLink.path}
                                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-white hover:text-blue-600 rounded-xl transition-all duration-300"
                                      onClick={() => {
                                        setIsOpen(false)
                                        setOpenDropdown(null)
                                      }}
                                    >
                                      <span className="text-blue-600">{dropdownLink.icon}</span>
                                      <div>
                                        <div className="font-medium">{dropdownLink.name}</div>
                                        <div className="text-xs text-gray-500">{dropdownLink.description}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                            location.pathname === link.path 
                              ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                              : link.highlight
                                ? 'text-white bg-gradient-to-r from-green-600 to-teal-600 shadow-lg'
                                : 'text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 shadow-md'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className={
                            location.pathname === link.path ? 'text-white' : 
                            link.highlight ? 'text-white' : 'text-blue-600'
                          }>
                            {link.icon}
                          </span>
                          <div className="flex-1">
                            <div>{link.name}</div>
                            <div className={`text-xs ${
                              location.pathname === link.path ? 'text-blue-200' : 
                              link.highlight ? 'text-green-200' : 'text-gray-500'
                            }`}>
                              {link.description}
                            </div>
                          </div>
                          {link.badge && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                              {link.badge}
                            </span>
                          )}
                          {link.highlight && (
                            <Sparkles className="w-4 h-4 text-white animate-pulse" />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Contact & Social */}
                <div className="mt-8 pt-6 border-t border-blue-200 text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => handleQuickContact('phone')}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Call</span>
                    </button>
                    <button
                      onClick={() => handleQuickContact('whatsapp')}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </button>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a 
                      href="https://www.facebook.com/profile.php?id=100064110904198" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-blue-600 text-white rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@sevashikshatrust" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-red-600 text-white rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://g.co/kgs/J8tnxXu" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-yellow-500 text-white rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      <Star className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default Navbar