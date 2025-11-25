import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  Menu, X, Phone, Mail, Facebook, Youtube, Star, ChevronDown, 
  User, MapPin, ArrowRight, BookOpen, Globe,
  GraduationCap, Users, Award, FileText, MessageCircle,
  Sparkles, Heart, Shield, Home, CreditCard, Image, Video
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
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

  const handleNavigateToSection = (sectionId) => {
    setIsOpen(false)
    setOpenDropdown(null)
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
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
          description: 'Watch student pledge ceremonies',
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
          description: 'Apply for courses - ₹999',
          icon: <User className="w-4 h-4" />
        },
        {
          name: 'Membership Registration',
          path: '/membership-registration',
          description: 'Become a member - Active: ₹9999, General: ₹2499',
          icon: <Shield className="w-4 h-4" />
        },
        { 
          name: 'Mahila Rojgar Abhiyaan', 
          path: '/bihar-mahila-scholarship',
          description: '₹99 आवेदन सहायक योजना',
          icon: <Award className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Media',
      icon: <Image className="w-4 h-4" />,
      description: 'Photos & Videos',
      dropdown: [
        {
          name: 'Photos',
          path: '/photos',
          description: 'Gallery of our events',
          icon: <Image className="w-4 h-4" />
        },
        {
          name: 'Videos',
          path: '/videos',
          description: 'Educational & event videos',
          icon: <Video className="w-4 h-4" />
        },
        {
          name: 'News Clip',
          path: '/news-clip',
          description: 'Latest news coverage',
          icon: <FileText className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'More',
      icon: <FileText className="w-4 h-4" />,
      description: 'News, Resources & More',
      dropdown: [
        { 
          name: 'News', 
          path: '/news',
          icon: <FileText className="w-4 h-4" />,
          description: 'Latest updates & announcements'
        },
        {
          name: 'BSCCS',
          path: '/bihar-student-credit-card',
          icon: <CreditCard className="w-4 h-4" />,
          description: 'Bihar Student Credit Card - ₹499'
        },
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
    }
  ]

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Simplified Top Bar */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 text-white py-2 px-3 sm:px-4">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <div className="hidden sm:flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-jasmine-200 transition-colors"
                onClick={() => handleQuickContact('phone')}
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium hidden lg:inline">094305 21027</span>
              </div>
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-accent-200 transition-colors hidden md:flex"
                onClick={() => handleQuickContact('email')}
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">info@sevashiksha.com</span>
              </div>
              <div className="flex items-center space-x-1 text-accent-200 hidden lg:flex">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span>Patna, Bihar</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064110904198" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1 md:p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary-500 transition-colors duration-300"
                >
                  <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@sevashikshatrust" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1 md:p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-accent-500 transition-colors duration-300"
                >
                  <Youtube className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <a 
                  href="https://g.co/kgs/J8tnxXu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1 md:p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gold-400 transition-colors duration-300"
                >
                  <Star className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={() => handleQuickContact('whatsapp')}
                  className="hidden md:flex items-center gap-1 bg-accent-600 hover:bg-accent-500 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors duration-300"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </button>
                <Link 
                  to="/contact-us" 
                  className="hidden md:flex items-center gap-1 bg-primary-600 hover:bg-primary-500 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors duration-300"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden lg:inline">Contact</span>
                </Link>
                <Link 
                  to="/student-registration" 
                  className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 px-2 md:px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Register Now</span>
                  <span className="sm:hidden">Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-jasmine-200' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center py-2 sm:py-3">
            {/* Elegant Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 group flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="Seva Shiksha Logo"
                className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="relative">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-primary-600 whitespace-nowrap">
                  SEVA SHIKSHA TRUST<sup className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black ml-1">®</sup>
                </h1>
                <p className="hidden sm:block text-xs md:text-xs lg:text-sm text-gray-600 font-medium">Trust • Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-0 md:space-x-0.5 lg:space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative dropdown-container">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleDropdownMouseEnter(link.name)}
                      onMouseLeave={() => handleDropdownMouseLeave(link.name)}
                    >
                      <button
                        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-2xl hover:bg-primary-50/80 group text-sm"
                        onClick={() => handleDropdownToggle(link.name)}
                      >
                        <span className="text-primary-600">{link.icon}</span>
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                          openDropdown === link.name ? 'rotate-180 text-primary-600' : 'group-hover:text-primary-600'
                        }`} />
                        {link.badge && (
                          <span className="bg-saffron-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
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
                            className={`absolute top-full mt-1 w-80 bg-white rounded-3xl shadow-2xl border border-jasmine-200 overflow-hidden z-50 ${
                              link.name === 'More' ? 'right-0' : 'left-0'
                            }`}
                            onMouseEnter={() => handleDropdownMouseEnter(link.name)}
                            onMouseLeave={() => handleDropdownMouseLeave(link.name)}
                          >
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-primary-600">{link.icon}</span>
                                {link.name}
                              </h3>
                              <div className="space-y-2">
                                {link.dropdown.map((dropdownLink, dropIndex) => (
                                  <Link
                                    key={dropIndex}
                                    to={dropdownLink.path}
                                    className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-300"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300 mt-0.5">
                                      {dropdownLink.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                        {dropdownLink.name}
                                      </div>
                                      <div className="text-sm text-gray-500 group-hover:text-gray-600">
                                        {dropdownLink.description}
                                      </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-all duration-300 group-hover:translate-x-1" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.scrollTarget ? (
                    <button
                      type="button"
                      onClick={() => handleNavigateToSection(link.scrollTarget)}
                      className="flex items-center space-x-1 px-3 py-2 font-medium text-white text-sm bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-white">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-1 px-3 py-2 font-medium transition-all duration-300 rounded-2xl group text-sm ${
                        location.pathname === link.path 
                          ? 'text-white bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 shadow-lg' 
                          : link.highlight
                            ? 'text-white bg-gradient-to-r from-accent-600 via-accent-500 to-green-500 hover:from-accent-700 hover:via-accent-600 hover:to-green-600 shadow-lg'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/80'
                      }`}
                    >
                      <span className={location.pathname === link.path ? 'text-white' : link.highlight ? 'text-white' : 'text-primary-600'}>
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="bg-saffron-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
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
              className="md:hidden p-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
              className="md:hidden bg-gradient-to-br from-white via-jasmine-50 to-accent-50 border-t border-jasmine-200"
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
                            className="flex items-center justify-between w-full px-5 py-3 text-left text-gray-700 hover:bg-primary-50/80 transition-colors duration-300"
                            onClick={() => handleDropdownToggle(link.name)}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-primary-600">{link.icon}</span>
                              <span className="font-medium">{link.name}</span>
                              {link.badge && (
                                <span className="bg-saffron-500 text-white text-xs px-2 py-0.5 rounded-full">
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
                                className="bg-gradient-to-r from-primary-50 via-jasmine-50 to-accent-50 border-t border-jasmine-200"
                              >
                                <div className="px-5 py-2 space-y-1">
                                  {link.dropdown.map((dropdownLink, dropIndex) => (
                                    <Link
                                      key={dropIndex}
                                      to={dropdownLink.path}
                                      className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-white hover:text-primary-600 rounded-xl transition-all duration-300"
                                      onClick={() => {
                                        setIsOpen(false)
                                        setOpenDropdown(null)
                                      }}
                                    >
                                      <span className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">{dropdownLink.icon}</span>
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
                      ) : link.scrollTarget ? (
                        <button
                          type="button"
                          onClick={() => handleNavigateToSection(link.scrollTarget)}
                          className="w-full flex items-center space-x-3 px-5 py-3 text-white bg-gradient-to-r from-primary-700 via-primary-500 to-accent-600 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <span className="text-white">
                            {link.icon}
                          </span>
                          <div className="flex-1 text-left">
                            <div>{link.name}</div>
                            <div className="text-xs text-primary-200">
                              {link.description}
                            </div>
                          </div>
                        </button>
                      ) : (
                        <Link
                          to={link.path}
                          className={`flex items-center space-x-3 px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                            location.pathname === link.path 
                              ? 'text-white bg-gradient-to-r from-primary-700 via-primary-500 to-accent-600 shadow-lg' 
                              : link.highlight
                                ? 'text-white bg-gradient-to-r from-saffron-500 via-primary-500 to-accent-600 shadow-lg'
                                : 'text-gray-700 bg-white hover:bg-primary-50/80 hover:text-primary-600 shadow-md'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className={
                            location.pathname === link.path ? 'text-white' : 
                            link.highlight ? 'text-white' : 'text-primary-600'
                          }>
                            {link.icon}
                          </span>
                          <div className="flex-1">
                            <div>{link.name}</div>
                            <div className={`text-xs ${
                              location.pathname === link.path ? 'text-primary-200' : 
                              link.highlight ? 'text-accent-200' : 'text-gray-500'
                            }`}>
                              {link.description}
                            </div>
                          </div>
                          {link.badge && (
                            <span className="bg-saffron-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
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
                <div className="mt-8 pt-6 border-t border-jasmine-200 text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => handleQuickContact('phone')}
                      className="flex items-center space-x-2 bg-accent-600 text-white px-4 py-2 rounded-lg hover:bg-accent-500 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Call</span>
                    </button>
                    <button
                      onClick={() => handleQuickContact('whatsapp')}
                      className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors duration-300"
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
                      className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-500 hover:scale-105 transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@sevashikshatrust" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-400 hover:scale-105 transition-all duration-300"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://g.co/kgs/J8tnxXu" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-accent-600 text-white rounded-full hover:bg-accent-500 hover:scale-105 transition-all duration-300"
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