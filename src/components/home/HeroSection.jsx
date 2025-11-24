import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const heroContent = {
    image: "https://sevashiksha.in/wp-content/uploads/2023/10/7.jpeg",
    title: "We help the students in need",
    subtitle: "Providing quality education and scholarships to deserving students",
    buttonText: "Read More",
    buttonLink: "/about-seva-shiksha",
    highlight: {
      label: "Featuring:",
      name: "National President of Pvt School Children Welfare Association"
    }
  }

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
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
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
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center mt-8 sm:mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
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
            </div>
          </div>
        </div>
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