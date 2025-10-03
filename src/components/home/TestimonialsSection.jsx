import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "ARCHANA SHARMA",
      role: "Parent",
      content: "Enrolling my child in the programs offered by the SEVA SHIKSHA TRUST has been one of the best decisions I've made for their academic journey. The dedication of the faculty and staff is truly commendable.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "ANKIT KUMAR",
      role: "Student",
      content: "I am truly grateful for the incredible work that SEVA SHIKSHA TRUST has been doing in the field of education. The dedication and passion with which the trust has been nurturing young minds and providing them with opportunities are truly commendable.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Mr. Abhishek Jha",
      role: "Parent",
      content: "As a parent, I've witnessed the positive impact of SEVA SHIKSHA TRUST's initiatives firsthand. My child has been a beneficiary of your educational programs, and the transformation I've seen in their academic growth and personal development is remarkable.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "SALONI SHARMA",
      role: "Student",
      content: "The trust's vision to make education accessible to all, regardless of socio-economic backgrounds, is inspiring. The support and guidance I received helped me achieve my academic goals.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Mr. Anubhav Singh",
      role: "Parent",
      content: "As a Parent, I wholeheartedly recommend SEVA SHIKSHA TRUST to all parents and students seeking a brighter, more promising future. Your dedication to education and the holistic development of students is a beacon of hope.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Success Stories
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            OUR SUCCESS
            <span className=" gradient-text">  STORIES</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our students and their families about how Seva Shiksha Trust 
            has transformed their educational journey and future prospects
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote size={80} className="text-primary-600" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="w-6 h-6 text-gold-500 fill-current mx-1" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full text-primary-600 hover:text-primary-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full text-primary-600 hover:text-primary-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Student Satisfaction</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-gold-100">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection