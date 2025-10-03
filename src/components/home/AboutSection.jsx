import React from "react";
import { Link } from "react-router-dom";
import { Play, Award, Users, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Education",
      description:
        "We ensure access to top-quality higher education through our partner institutions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced mentors and industry professionals",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Programs",
      description:
        "Wide range of courses across various fields and specializations",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Focused",
      description:
        "Our programs are designed to enhance your career prospects and opportunities",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                About Us
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SEVA SHIKSHA
                <span className="block text-3xl lg:text-4xl gradient-text">
                  ABHIYAN
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our core mission revolves around providing scholarships to
                students who are unable to afford tuition fees, thereby removing
                financial barriers to education. We firmly believe that
                education is a fundamental right, and it should be accessible to
                every individual, regardless of their financial circumstances.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/about-seva-shiksha" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-blue-300">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    1000+
                  </div>
                  <div className="text-base text-black">Students Helped</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-blue-300">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    20+
                  </div>
                  <div className="text-base text-black">
                    Partner Universities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div data-aos="fade-left" className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://sevashiksha.in/wp-content/uploads/2023/10/1-1015x1024.jpeg"
                  alt="Seva Shiksha students"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 px-6 lg:px-12" data-aos="fade-up">
          {/* Section Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">Seva Shiksha?</span>
            </h3>
            <p className="text-lg text-gray-600">
              We are committed to providing{" "}
              <span className="font-semibold text-black">
                Quality education {" "}
              </span>
                and dedicated support to help students achieve their dreams.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:bg-sky-100"
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 
          bg-gradient-to-r from-primary-500 to-secondary-500 text-white 
          rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
