import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, Info, BookOpen, GraduationCap, Award, Users, Calendar, ArrowUp, ExternalLink, Eye, Star, Clock, CheckCircle, Sparkles } from 'lucide-react'

const Brochure = () => {
  const [hoveredBrochure, setHoveredBrochure] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [downloadCount, setDownloadCount] = useState(2847)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const brochures = [
    {
      id: 1,
      title: "SEVA SHIKSHA TRUST - Complete Guide 2025",
      description: "Comprehensive information about our scholarship programs, eligibility criteria, application process, and success stories. Your complete roadmap to free quality education.",
      fileSize: "3.2 MB",
      pages: "16 pages",
      downloadLink: "https://sevashiksha.in/wp-content/uploads/2025/01/New-broucher.pdf",
      category: "Main Guide",
      featured: true,
      color: "from-blue-500 to-purple-600",
      icon: <Award className="w-8 h-8" />,
      highlights: ["Scholarship Programs", "Eligibility Criteria", "Application Process", "Success Stories"],
      lastUpdated: "January 2025",
      downloads: 1247
    },
    {
      id: 2,
      title: "Courses After 10th - Career Pathways",
      description: "Detailed guide covering all diploma, certificate, and degree courses available after Class 10. Explore diverse career opportunities and make informed choices.",
      fileSize: "2.4 MB",
      pages: "12 pages",
      downloadLink: "#",
      category: "Career Guide",
      featured: false,
      color: "from-green-500 to-teal-600",
      icon: <BookOpen className="w-8 h-8" />,
      highlights: ["Diploma Courses", "ITI Programs", "Career Counseling", "Industry Trends"],
      lastUpdated: "December 2024",
      downloads: 892
    },
    {
      id: 3,
      title: "Courses After 12th - Higher Education",
      description: "Complete guide to undergraduate programs, professional courses, and specialized degrees. Navigate your path to higher education with confidence.",
      fileSize: "2.8 MB",
      pages: "14 pages",
      downloadLink: "#",
      category: "Higher Education",
      featured: false,
      color: "from-orange-500 to-red-600",
      icon: <GraduationCap className="w-8 h-8" />,
      highlights: ["UG Programs", "Professional Courses", "Entrance Exams", "College Selection"],
      lastUpdated: "December 2024",
      downloads: 1156
    },
    {
      id: 4,
      title: "Post-Graduation & Professional Development",
      description: "Advanced courses, research opportunities, and professional development programs for graduates. Take your career to the next level.",
      fileSize: "2.1 MB",
      pages: "10 pages",
      downloadLink: "#",
      category: "Professional",
      featured: false,
      color: "from-purple-500 to-pink-600",
      icon: <Users className="w-8 h-8" />,
      highlights: ["PG Programs", "Research Opportunities", "Skill Development", "Career Growth"],
      lastUpdated: "November 2024",
      downloads: 634
    },
    {
      id: 5,
      title: "Scholarship Application Guide 2025",
      description: "Step-by-step guide to applying for scholarships, required documents, deadlines, and tips for successful applications.",
      fileSize: "1.9 MB",
      pages: "8 pages",
      downloadLink: "#",
      category: "Scholarships",
      featured: false,
      color: "from-teal-500 to-cyan-600",
      icon: <FileText className="w-8 h-8" />,
      highlights: ["Application Process", "Required Documents", "Deadlines", "Success Tips"],
      lastUpdated: "January 2025",
      downloads: 758
    },
    {
      id: 6,
      title: "Success Stories & Alumni Network",
      description: "Inspiring stories of our scholarship recipients, their achievements, and how SEVA SHIKSHA transformed their lives.",
      fileSize: "2.6 MB",
      pages: "18 pages",
      downloadLink: "#",
      category: "Inspiration",
      featured: false,
      color: "from-indigo-500 to-blue-600",
      icon: <Star className="w-8 h-8" />,
      highlights: ["Success Stories", "Alumni Network", "Career Achievements", "Life Transformations"],
      lastUpdated: "December 2024",
      downloads: 445
    }
  ]

  const handleDownload = (brochure) => {
    if (brochure.downloadLink && brochure.downloadLink !== '#') {
      window.open(brochure.downloadLink, '_blank')
      setDownloadCount(prev => prev + 1)
    } else {
      alert('Brochure will be available soon!')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom section-padding mt-36">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Download
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Brochures</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get detailed information about our educational programs, scholarship opportunities, and career guidance through our comprehensive brochures.
          </p>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12 border border-primary-100"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Info className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Important Information</h3>
              <p className="text-gray-600 leading-relaxed">
                Our brochures contain the most up-to-date information about courses, eligibility criteria, 
                admission procedures, and scholarship details. All documents are available in PDF format 
                for easy download and sharing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Brochures Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {brochures.map((brochure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div>{brochure.fileSize}</div>
                  <div>{brochure.pages}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {brochure.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {brochure.description}
              </p>
              
              <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact for More Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-semibold mb-4">Need More Information?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about our courses or need additional materials, 
            feel free to contact our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-accent-400">
              <span className="font-medium">📞 094305 21027 / 8709283592</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-accent-400">
              <span className="font-medium">✉️ info@sevashiksha.in</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Brochure