import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, BookOpen, Target, Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const AboutSevaShiksha = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "We approach every student's journey with empathy and understanding"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in education and support services"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We believe in building strong educational communities"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Accessibility",
      description: "Education should be accessible to all, regardless of financial status"
    }
  ]

  const milestones = [
    { year: "2010", title: "Foundation", description: "Seva Shiksha Trust was established with a vision to make education accessible" },
    { year: "2015", title: "First 100 Students", description: "Reached milestone of supporting 100 students with scholarships" },
    { year: "2018", title: "50 University Partners", description: "Expanded network to include 50+ university and college partners" },
    { year: "2020", title: "Digital Transformation", description: "Adapted to digital learning during pandemic, supporting online education" },
    { year: "2023", title: "5000+ Success Stories", description: "Achieved milestone of 5000+ successfully graduated students" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mt-36">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
                About
                <span className="text-gold-400"> SEVA SHIKSHA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-serif">
                Transforming lives through education since 2010
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <div className="bg-sky-100 rounded-2xl p-8 hover:border-2 hover:border-blue-800 border-2 hover:bg-sky-200">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Our mission is to make free quality higher education accessible to everyone. 
                  We believe that education is a fundamental right, and it should be accessible 
                  to every individual.
                </p>
                <p className="text-gray-600 leading-relaxed font-serif">
                  Through our comprehensive scholarship programs, we remove financial barriers 
                  to education and provide students with opportunities to achieve their dreams 
                  and build successful careers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-aos="fade-left"
            >
              <div className="bg-sky-100 rounded-2xl p-8 hover:border-2 hover:border-blue-800 border-2 hover:bg-sky-200">
                <div className="flex items-center mb-6">
                  <Star className="w-10 h-10 text-secondary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  To create a world where quality education is not a privilege but a right 
                  available to all, fostering a society of educated, skilled, and empowered individuals.
                </p>
                <p className="text-gray-600 leading-relaxed font-serif">
                  We envision becoming India's leading educational trust, known for our commitment 
                  to excellence, transparency, and the successful transformation of students' lives 
                  through education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-br from-gray-100 to-primary-200">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core
              <span className="gradient-text"> Values</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="gradient-text"> Journey</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Milestones that mark our progress in transforming educational accessibility
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            <div className="space-y-2">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of our journey to make quality education accessible to all. 
              Together, we can transform more lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student-registration" className="btn-outline text-lg px-8 py-4">
                Apply for Scholarship
              </Link>
              <Link to="/contact-us" className="btn-outline text-lg px-8 py-4">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutSevaShiksha