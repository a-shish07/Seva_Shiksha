import React from "react"
import { Link } from "react-router-dom"
import { GraduationCap, BookOpen, Award, Star, Clock } from "lucide-react"
import { motion } from "framer-motion"

const CoursesSection = () => {
  const courses = [
    {
      tag: "Beginner",
      icon: <BookOpen className="w-8 h-8" />,
      title: "After 10th Programs",
      subtitle: "Diploma & Certification",
      rating: 4.8,
      duration: "6–12 Months",
      features: ["Skill Development", "Industry Training", "Career Guidance"],
      link: "/courses-after-10th",
      color: "from-pink-500 to-rose-500",
    },
    {
      tag: "Popular",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "After 12th Programs",
      subtitle: "Undergraduate & Professional",
      rating: 4.9,
      duration: "3–4 Years",
      features: ["Bachelor’s Degree", "Professional Courses", "Entrance Prep"],
      link: "/courses-after-12th",
      color: "from-blue-500 to-indigo-500",
    },
    {
      tag: "Advanced",
      icon: <Award className="w-8 h-8" />,
      title: "After Graduation",
      subtitle: "Postgraduate & Masters",
      rating: 4.7,
      duration: "1–2 Years",
      features: ["MBA & PG", "Specialized Courses", "Research Opportunities"],
      link: "/courses-after-graduation",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-base font-semibold mb-4 shadow-lg"
          >
            🚀 Our Courses
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Whether you're just starting out or looking to specialize, we've got the perfect
            program designed to help you achieve your career goals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}  // ✅ Removed 3D rotation
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              viewport={{ once: true }}
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 bg-white/70 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              {/* Ribbon Tag */}
              <div
                className={`absolute top-0 right-0 bg-gradient-to-r ${course.color} text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-xl`}
              >
                {course.tag}
              </div>

              {/* Floating Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${course.color} text-white shadow-lg mb-4 sm:mb-6 animate-bounce`}
              >
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">{course.subtitle}</p>

              {/* Rating & Duration */}
              <div className="flex justify-between items-center mb-4 sm:mb-6 text-gray-700 text-xs sm:text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4 sm:mb-6 text-gray-600 text-xs sm:text-sm md:text-base hover:text-black">
                {course.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="line-clamp-1 sm:line-clamp-none">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={course.link}
                  className="inline-block w-full text-center font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg border-2 border-transparent bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm sm:text-base hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-md"
                >
                  Start Learning 🚀
                </Link>
              </motion.div>

              {/* Glow Effect (✅ now clickable since pointer-events-none) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition duration-200 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
