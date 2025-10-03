import React from 'react'
import { motion } from 'framer-motion'

const UniversitiesSection = () => {
  const universities = [
    {
      name: "University Partner 1",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U1.jpg",
      alt: "University 1"
    },
    {
      name: "University Partner 2", 
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U2.jpg",
      alt: "University 2"
    },
    {
      name: "University Partner 3",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U3.jpg", 
      alt: "University 3"
    },
    {
      name: "University Partner 4",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U4.jpg",
      alt: "University 4"
    },
    {
      name: "University Partner 5",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U5.jpg",
      alt: "University 5"
    },
    {
      name: "University Partner 6", 
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U6.jpg",
      alt: "University 6"
    },
    {
      name: "University Partner 7",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U7.jpg",
      alt: "University 7"
    },
    {
      name: "University Partner 8",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U8.jpg",
      alt: "University 8" 
    },
    {
      name: "University Partner 9",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U9.jpg",
      alt: "University 9"
    },
    {
      name: "University Partner 10",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U10.jpg",
      alt: "University 10"
    },
    {
      name: "University Partner 11",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U11.jpg",
      alt: "University 11"
    },
    {
      name: "University Partner 12",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U12.jpg",
      alt: "University 12"
    },
    {
      name: "University Partner 13",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U13.jpg",
      alt: "University 13"
    },
    {
      name: "University Partner 14",
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/U14.jpg",
      alt: "University 14"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-base font-semibold mb-4"
          >
            Our Partners
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            OUR
            <span className="gradient-text"> UNIVERSITIES</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with government-approved universities and colleges including AICTE, ECI, NCI, NCBI, NBA, 
            PCI affiliated institutions to provide quality education to our students.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={university.image}
                    alt={university.alt}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accreditation Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
          data-aos="fade-up"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Government Approved & Accredited Institutions Only
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            All our partner universities and colleges are government-approved and hold proper accreditation 
            from recognized bodies. We do not associate with private deemed universities to ensure 
            the highest quality of education for our students.
          </p>

          {/* Accreditation Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['AICTE', 'ECI', 'NCI', 'NCBI', 'NBA', 'PCI', 'UGC'].map((accreditation, index) => (
              <motion.div
                key={accreditation}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
              >
                {accreditation}
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  )
}

export default UniversitiesSection