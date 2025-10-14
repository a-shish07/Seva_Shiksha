import React, { useState, useEffect, useRef } from 'react'
import { Heart, Star, Users, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const StatsSection = () => {
  const [counters, setCounters] = useState({
    support: 0,
    rating: 0,
    partners: 0,
    students: 0
  })
  
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const finalValues = {
    support: 1000,
    rating: 98,
    partners: 50,
    students: 5000
  }

  const statsData = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Support Given",
      value: counters.support,
      suffix: "+",
      color: "from-red-500 to-pink-600",
      description: "Students supported with scholarships"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Guardian Rating",
      value: counters.rating,
      suffix: "%",
      color: "from-gold-500 to-yellow-600",
      description: "Parent satisfaction rate"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supporting Partners",
      value: counters.partners,
      suffix: "+",
      color: "from-blue-500 to-indigo-600",
      description: "University and college partners"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Happy Students",
      value: counters.students,
      suffix: "+",
      color: "from-green-500 to-emerald-600",
      description: "Successfully graduated students"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        support: Math.floor(finalValues.support * progress),
        rating: Math.floor(finalValues.rating * progress),
        partners: Math.floor(finalValues.partners * progress),
        students: Math.floor(finalValues.students * progress)
      })

      if (currentStep >= steps) {
        setCounters(finalValues)
        clearInterval(timer)
      }
    }, increment)
  }

  return (
    <section 
      ref={sectionRef} 
      className="section-padding gradient-soft-alt relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-soft-light"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/40 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-200/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-saffron-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block surface-card text-primary-600 px-4 py-2 rounded-full text-base font-semibold mb-6"
          >
            Our Impact
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SEVA SHIKSHA
            <span className="text-primary-500"> ABHIYAN</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            OUR MISSION IS TO MAKE FREE QUALITY HIGHER EDUCATION ACCESSIBLE TO EVERYONE.
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These numbers represent the lives we've touched and the dreams we've helped achieve
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="surface-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 group">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    <motion.span
                      className="inline-block"
                      key={stat.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value.toLocaleString()}
                    </motion.span>
                    <span className="text-primary-500">{stat.suffix}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-primary-100 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StatsSection