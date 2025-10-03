import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/7.jpeg",
      title: "We help the students in need",
      subtitle: "Providing quality education and scholarships to deserving students",
      buttonText: "Read More",
      buttonLink: "/about-seva-shiksha"
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner19.png",
      title: "We guide to outline your career",
      subtitle: "Professional guidance and mentorship for your bright future",
      buttonText: "Read More",
      buttonLink: "/about-seva-shiksha"
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/6.jpeg",
      title: "Secure Your Future with us",
      subtitle: "Join thousands of successful students who achieved their dreams",
      buttonText: "Read More",
      buttonLink: "/about-seva-shiksha"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      <div className="relative z-10 h-full">
        <div className="container-custom h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left Content */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="max-w-2xl px-4 py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left"
                  >
                    {/* Main Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <h2 className="text-gold-400 text-lg md:text-xl font-semibold mb-2">
                        SEVA SHIKSHA TRUST
                      </h2>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 text-shadow-lg">
                        {slides[currentSlide].title}
                      </h1>
                    </motion.div>

                    {/* Mission Statement */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-200 font-medium mb-2"
                    >
                      OUR MISSION IS TO MAKE FREE QUALITY
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg md:text-xl text-gold-400 font-bold mb-6"
                    >
                      HIGHER EDUCATION ACCESSIBLE TO EVERYONE.
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <Link
                        to={slides[currentSlide].buttonLink}
                        className="btn-primary text-lg px-8 py-4 animate-glow"
                      >
                        {slides[currentSlide].buttonText}
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative flex items-center justify-center mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full h-96 lg:h-full max-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - positioned on the right side with images */}
      <button
        onClick={prevSlide}
        className="absolute right-20 md:right-24 bottom-8 lg:bottom-12 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 bottom-8 lg:bottom-12 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-4 lg:left-1/2 lg:-translate-x-1/2 z-20 flex space-x-3 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold-400 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gold-900/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-32 left-32 w-12 h-12 bg-primary-400/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-32 w-14 h-14 bg-secondary-400/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

      {/* Scholarship Form Button */}
      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden xl:block"
      >
        <Link
          to="/student-registration"
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-4 px-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle"
        >
          SCHOLARSHIP FORM
        </Link>
      </motion.div> */}
    </section>
  )
}

export default HeroSection