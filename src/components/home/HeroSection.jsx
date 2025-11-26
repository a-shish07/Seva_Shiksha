import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/7.jpeg",
      title: "We help the students in need",
      subtitle: "Providing quality education and scholarships to deserving students",
      buttonText: "Read More",
      buttonLink: "/about-seva-shiksha",
      highlight: {
        label: "Featuring:",
        name: "National President of Pvt School Children Welfare Association"
      }
    },
    {
      image: "/slide.jpg",
      title: "Your Dreams, Our Mission",
      subtitle: "Transforming Lives Through Education",
      content: "यह कोई कहानी नहीं है… यह कड़वी सच्चाई है। यहाँ आँसू भी हैं… और सपने भी। यहाँ एक तरफ़ चुनौतियाँ हैं— और दूसरी तरफ़ वो उम्मीद, जो हर माँ–बाप अपने बच्चे के लिए लेकर चलते हैं… कि उनका बेटा या बेटी पढ़कर एक बेहतर भविष्य बनाए।",
      buttonText: "Join Us",
      buttonLink: "/student-registration",
      highlight: {
        label: "Our Promise:",
        name: "No child left behind due to financial constraints"
      }
    }
  ]

  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const heroContent = slides[currentSlide]

  return (
    <section className="relative overflow-hidden gradient-soft">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-soft-light"></div>
      
      <div className="relative z-10 h-full bg-orange-600 mt-10">
        <div className="container-custom px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-16 lg:py-24">
            {/* Left Content */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-2xl px-2 sm:px-4 py-8 sm:py-12 md:py-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left"
                  >
                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 sm:mb-6"
                  >
                    <h2 className="text-gold-400 text-base sm:text-lg md:text-xl font-semibold mb-2">
                      SEVA SHIKSHA TRUST
                    </h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 text-shadow-lg">
                      {heroContent.title}
                    </h1>
                  </motion.div>

                  {/* Mission Statement */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-medium mb-2"
                  >
                    OUR MISSION IS TO MAKE FREE QUALITY
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gold-400 font-bold mb-4 sm:mb-6"
                  >
                    HIGHER EDUCATION ACCESSIBLE TO EVERYONE.
                  </motion.p>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed"
                  >
                    {heroContent.subtitle}
                  </motion.p>

                  {/* Poem Content - Show only on second slide */}
                  {heroContent.content && (
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 sm:mb-8 leading-relaxed italic text-justify"
                    >
                      {heroContent.content}
                    </motion.p>
                  )}

                  {/* Highlighted Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-md text-white shadow-lg mb-6 sm:mb-8"
                  >
                    <p className="text-xs sm:text-sm text-gray-200 uppercase tracking-wide mb-1">
                      {heroContent.highlight.label}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gold-300">
                      {heroContent.highlight.name}
                    </p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  >
                    <Link
                      to={heroContent.buttonLink}
                      className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-glow"
                    >
                      {heroContent.buttonText}
                    </Link>
                  </motion.div>
                </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center mt-8 sm:mt-10 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full max-h-[500px] sm:max-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={heroContent.image}
                    alt={heroContent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-3 text-white shadow-lg">
                    <p className="text-xs uppercase tracking-wider text-gold-300">
                      {heroContent.highlight.label}
                    </p>
                    <p className="text-sm font-semibold">
                      {heroContent.highlight.name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gold-900/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-32 left-32 w-12 h-12 bg-primary-400/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-32 w-14 h-14 bg-secondary-400/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

      {/* Slider Navigation - Previous Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full p-2 sm:p-3 text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Slider Navigation - Next Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full p-2 sm:p-3 text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setAutoPlay(false)
              setTimeout(() => setAutoPlay(true), 5000)
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 hover:bg-white/70 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

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