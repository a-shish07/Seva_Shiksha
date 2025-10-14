import React from 'react'
import { Users, School, Heart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "FOR STUDENTS",
      description: "Under the SEVA SHIKSHA TRUST Scholarship programme we take the complete responsibility of College fees and the students get an opportunity to Complete their Higher Education by just paying only for Lodging, Fooding and Examination Charges.",
      features: [
        "Complete college fee coverage",
        "Quality higher education access",
        "Only pay for lodging & food",
        "Examination charges support",
        "Career guidance included"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <School className="w-12 h-12" />,
      title: "FOR COLLEGES",
      description: "Seva Shiksha Trust provide only Government University Approved Colleges like AICTE, ECI, NCI, NCBI, NBA, PCI and etc. Affiliated Colleges. Our trust does not provide any private deemed university.",
      features: [
        "Government approved colleges only",
        "AICTE certified institutions",
        "NBA accredited programs",
        "Quality assured education",
        "Recognized degree programs"
      ],
      color: "from-green-500 to-teal-600"
    }
  ]

  return (
    <section className="section-padding gradient-soft">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block surface-card text-secondary-600 px-4 py-2 rounded-full text-base font-semibold mb-4"
          >
            Our Service
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="gradient-text">Serve You</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 font-semibold">
            OUR MISSION IS TO MAKE FREE QUALITY HIGHER EDUCATION ACCESSIBLE TO EVERYONE.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-primary-600">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-medium text-base sm:text-xl text-center">Dedicated to Educational Excellence</span>
            <Heart className="w-5 h-5 fill-current" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
              data-aos={index === 0 ? "fade-right" : "fade-left"}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Learn More
                </motion.button>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:scale-110 transition-transform duration-500`}></div>
                <div className={`absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:scale-110 transition-transform duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection