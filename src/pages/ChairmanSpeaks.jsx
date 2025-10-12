import React from "react";
import { Quote, Award, Users, Target, Heart, Book } from "lucide-react";

const ChairmanSpeaks = () => {
  const achievements = [
    {
      icon: Users,
      number: "5000+",
      title: "Students Guided",
      description:
        "Successfully guided students towards their educational goals",
    },
    {
      icon: Award,
      number: "15+",
      title: "Years of Service",
      description: "Dedicated service in educational counseling and guidance",
    },
    {
      icon: Target,
      number: "95%",
      title: "Success Rate",
      description: "Students achieving their desired educational outcomes",
    },
    {
      icon: Heart,
      number: "100+",
      title: "Partner Institutions",
      description: "Strong network of educational institutions",
    },
  ];

  const visionPoints = [
    {
      title: "Accessible Education",
      description:
        "Making quality education accessible to students from all backgrounds, especially those from rural and underprivileged communities.",
    },
    {
      title: "Holistic Development",
      description:
        "Fostering not just academic excellence but also character building, leadership skills, and moral values in every student.",
    },
    {
      title: "Innovation in Learning",
      description:
        "Embracing modern teaching methodologies and technology to enhance the learning experience and outcomes.",
    },
    {
      title: "Community Impact",
      description:
        "Creating a positive ripple effect in communities by empowering individuals through education and skill development.",
    },
  ];

  const messages = [
    {
      title: "A Message of Hope",
      content:
        "Education is not just about acquiring knowledge; it's about transformation. Every student who walks through our doors carries dreams, aspirations, and the potential to change their world. Our role is to nurture these dreams and provide the right guidance to make them a reality.",
    },
    {
      title: "Our Commitment",
      content:
        "We are committed to breaking barriers that prevent deserving students from accessing quality education. Whether it's financial constraints, lack of information, or geographical limitations, we strive to find solutions that work for every student.",
    },
    {
      title: "Looking Forward",
      content:
        "As we continue to grow, our focus remains on maintaining the personal touch that makes Seva Shiksha unique. We will continue to innovate while staying true to our core values of integrity, compassion, and excellence in service.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-20 mt-20">
          <h1 className="text-5xl font-bold text-black mb-6">
            Chairman Speaks
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif">
            Words of inspiration and vision from the leadership of Seva Shiksha
            Trust
          </p>
        </div>

        {/* Chairman Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meet Our Chairman
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>

              <div className="text-gray-600 space-y-4 mb-8">
                <p className="text-lg leading-normal">
                  With over 15 years of experience in educational counseling and
                  guidance, our Chairman has dedicated his life to making
                  quality education accessible to all students, regardless of
                  their background or circumstances.
                </p>
                <p className="text-lg leading-normal">
                  Under his leadership, the trust has grown from a small
                  counseling center to a comprehensive educational support
                  organization, touching the lives of students from diverse
                  backgrounds and helping them achieve their dreams.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="text-blue-600 mb-4" size={32} />
                <p className="text-gray-800 font-medium italic text-lg">
                  "Education is the most powerful tool for transforming lives
                  and building a better society. Every student deserves the
                  opportunity to unlock their potential and achieve their
                  dreams."
                </p>
                <div className="mt-4 text-right">
                  <span className="text-blue-600 font-semibold">
                    - Chairman, Seva Shiksha Trust
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-r-2xl lg:rounded-l-none lg:rounded-r-2xl flex items-center justify-center p-6">
                <div className="text-center text-white max-w-sm">
                  {/* Chairman Photo */}
                  <div className="w-40 h-40 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-6">
                    <img
                      src="/images/chairmain.jpeg"
                      alt="Chairman"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold mb-2">
                    Educational Leader
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Transforming Lives Through Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow hover:bg-sky-200 hover:border-2 hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="bg-sky-100 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-4 text-blue-500">
              Our Vision for Education
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              A comprehensive approach to educational development that goes
              beyond traditional boundaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6  border-black">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div className="space-y-8 mb-12">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {message.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Educational Philosophy
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              The principles and values that guide every decision we make and
              every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Compassionate Service</h3>
              <p className="text-blue-100">
                We approach every student with empathy and understanding,
                recognizing their unique circumstances and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Goal-Oriented Approach</h3>
              <p className="text-blue-100">
                Every interaction is designed to move students closer to their
                educational and career objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence in Service</h3>
              <p className="text-blue-100">
                We continuously strive to improve our services and maintain the
                highest standards of quality and integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center">
          <Quote className="text-blue-600 mx-auto mb-6" size={48} />
          <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed mb-8 max-w-4xl mx-auto">
            "As we look to the future, our commitment remains unwavering: to
            serve as a bridge between dreams and reality, to provide hope where
            there is doubt, and to ensure that no deserving student is left
            behind in their educational journey. Together, we will continue to
            build a brighter, more educated, and more equitable society."
          </blockquote>
          <div className="text-right max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-blue-600">Chairman</p>
            <p className="text-gray-600">Seva Shiksha Trust</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanSpeaks;
