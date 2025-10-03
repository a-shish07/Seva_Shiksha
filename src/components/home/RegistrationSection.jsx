import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, FileText, Upload, CreditCard, CheckCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const RegistrationSection = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    category: '',
    states: [],
    gender: '',
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    mobile: '',
    dob: '',
    address: '',
    yearOfPassing: '',
    howDidYouKnow: '',
    dateOfSubmission: '',
    agreeToTerms: false
  })

  const categories = ['ST', 'SC', 'OBC', 'General']
  const states = ['Delhi NCR', 'Haryana', 'Rajasthan', 'Punjab', 'U.P', 'Chandigarh', 'Karnataka', 'Other']
  const howDidYouKnow = ['Newspaper', 'Social Media', 'Pamphlet', 'Friend']

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      if (name === 'states') {
        setFormData(prev => ({
          ...prev,
          states: checked 
            ? [...prev.states, value]
            : prev.states.filter(state => state !== value)
        }))
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Registration form submitted successfully!')
    setShowForm(false)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Get Started
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your Journey
            <span className="block gradient-text">Today</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your bright future. Register now and get access to quality education 
            with our scholarship programs.
          </p>
        </div>

        {/* Registration Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Student Registration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Student Registration</h3>
                <p className="text-gray-600">For aspiring students</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Register as a student to access our scholarship programs and quality education opportunities. 
              Get financial support for your higher education journey.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Complete college fee coverage</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Quality education access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Career guidance included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary flex-1"
              >
                Quick Register
              </button>
              <Link to="/student-registration" className="btn-secondary flex-1 text-center">
                Detailed Form
              </Link>
            </div>
          </motion.div>

          {/* Membership Registration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Membership Registration</h3>
                <p className="text-gray-600">For coordinators & partners</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Join as a coordinator or partner institution to help us expand our mission and 
              reach more students who need educational support.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Partnership opportunities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Coordinator benefits</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Network expansion</span>
              </div>
            </div>

            <Link to="/membership-registration" className="btn-primary w-full text-center">
              Register as Member
            </Link>
          </motion.div>
        </div>

        {/* Quick Registration Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Quick Registration</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile*</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category*</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you know about us?*
                    </label>
                    <select
                      name="howDidYouKnow"
                      value={formData.howDidYouKnow}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Option</option>
                      {howDidYouKnow.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mr-3"
                    />
                    <label className="text-sm text-gray-700">
                      I confirm all the details are correct to the best of my knowledge*
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 btn-primary"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Fee Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white text-center"
          data-aos="fade-up"
        >
          <CreditCard className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Registration Fee</h3>
          <p className="text-lg mb-4">
            Please pay the registration fee of ₹999/- to complete your application process
          </p>
          <p className="text-gold-100 text-sm">
            * Registration fee is non-refundable and helps us process your application efficiently
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationSection