import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Download,
  Star,
  GraduationCap,
  Target,
  Clock,
  Zap,
  Trophy,
  Heart,
  Building,
  Lightbulb,
  Cog,
  Stethoscope,
  Microscope,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";

const CoursesAfter10th = () => {
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [expandedFeature, setExpandedFeature] = useState(null);

  const programs = [
    {
      id: "technical",
      title: "Technical Polytechnic Programme",
      icon: <Cog className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      description:
        "Comprehensive technical education with practical skills and industry-driven curriculum",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
      specializations: [
        "Automobile Engineering",
        "Biomedical Engineering",
        "Computer Science Engineering",
        "Electrical & Electronics Engineering",
        "Electronics & Communication Engineering",
        "Food Processing Engineering",
        "Mechanical Engineering",
        "Mechatronics Engineering",
        "Telecommunication Engineering",
        "Aeronautics Engineering",
        "Civil Engineering",
      ],
      features: [
        {
          title: "Practical Skills",
          description:
            "The primary focus of technical polytechnic programs is to equip students with the practical skills and knowledge needed to excel in specific industries or professions.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Specialized Fields",
          description:
            "These programs cover a wide range of specialized fields, including engineering, computer science, automotive technology, electrical and electronics, manufacturing, construction, healthcare, and more.",
          icon: <Award className="w-6 h-6" />,
        },
        {
          title: "Shorter Duration",
          description:
            "Technical polytechnic programs are typically shorter in duration compared to traditional bachelor's degree programs. They can range from several months to three years, depending on the program and country.",
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: "Industry-Driven Curriculum",
          description:
            "The curriculum is designed in collaboration with industry experts and employers to ensure that students receive education that is relevant to current industry needs.",
          icon: <Building className="w-6 h-6" />,
        },
        {
          title: "Hands-On Training",
          description:
            "Technical polytechnic programs prioritize hands-on training and practical experience. Students often spend a significant portion of their time in labs, workshops, and real-world projects.",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: "Internships and Work Placements",
          description:
            "Many technical polytechnic programs incorporate internships, cooperative education (co-op), or work placements, allowing students to gain practical experience and make valuable industry connections.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Career-Focused",
          description:
            "Graduates of technical polytechnic programs are well-prepared for immediate entry into the workforce. They possess the skills and knowledge required for specific job roles within their chosen fields.",
          icon: <Trophy className="w-6 h-6" />,
        },
        {
          title: "Flexible Entry Requirements",
          description:
            "Entry requirements for technical polytechnic programs can vary, but they are often more flexible than those for traditional universities. Some programs may accept students with a high school diploma or equivalent.",
          icon: <Heart className="w-6 h-6" />,
        },
        {
          title: "Global Recognition",
          description:
            "Many technical polytechnic programs are recognized internationally, enabling graduates to work and study in various countries.",
          icon: <Star className="w-6 h-6" />,
        },
        {
          title: "Continuing Education Opportunities",
          description:
            "While technical polytechnic programs are career-oriented, some polytechnics offer pathways for graduates to continue their education and pursue higher degrees if they choose to do so.",
          icon: <Lightbulb className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "paramedical",
      title: "Para-Medical Diploma Programme",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "green",
      gradient: "from-green-500 to-teal-600",
      description:
        "Specialized healthcare training programs for medical support and diagnostic professionals",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
      specializations: ["Diploma in Radiology", "Diploma in Agriculture"],
      features: [
        {
          title: "Paramedic Training",
          description:
            "Paramedics are highly trained medical professionals who provide pre-hospital emergency care. They respond to emergencies, assess patients, administer medications, and provide life-saving interventions.",
          icon: <Stethoscope className="w-6 h-6" />,
        },
        {
          title: "Medical Laboratory Technology",
          description:
            "Medical laboratory technicians and technologists perform diagnostic tests on patient samples, such as blood, urine, and tissue, to help healthcare providers diagnose and treat diseases.",
          icon: <Microscope className="w-6 h-6" />,
        },
        {
          title: "Radiologic Technology",
          description:
            "Radiologic technologists operate imaging equipment like X-ray machines, CT scanners, and MRI machines to create diagnostic images of patients' internal structures.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Respiratory Therapy",
          description:
            "Respiratory therapists evaluate and treat patients with breathing disorders, such as asthma, chronic obstructive pulmonary disease (COPD), and respiratory distress.",
          icon: <Heart className="w-6 h-6" />,
        },
        {
          title: "Occupational Therapy Assistant",
          description:
            "Occupational therapy assistants work under the guidance of occupational therapists to help patients regain or develop the skills necessary for daily living and work.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Physical Therapy Assistant",
          description:
            "Physical therapy assistants assist physical therapists in providing rehabilitative care to patients recovering from injuries, surgeries, or physical impairments.",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: "Dental Hygiene",
          description:
            "Dental hygienists clean and examine patients' teeth, provide preventive dental care, and educate patients on oral health practices.",
          icon: <Star className="w-6 h-6" />,
        },
        {
          title: "Emergency Medical Technician (EMT)",
          description:
            "EMTs are trained to provide basic emergency medical care in critical situations, including accidents and medical emergencies.",
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: "Pharmacy Technician",
          description:
            "Pharmacy technicians assist pharmacists in dispensing medications, managing inventory, and providing information to patients.",
          icon: <Building className="w-6 h-6" />,
        },
        {
          title: "Optometry Technician",
          description:
            "Optometry technicians support optometrists by performing initial vision tests, assisting with eye exams, and maintaining patient records.",
          icon: <Award className="w-6 h-6" />,
        },
      ],
    },
  ];

  const filteredPrograms =
    selectedProgram === "all"
      ? programs
      : programs.filter((program) => program.id === selectedProgram);

  const ProgramCard = ({ program }) => {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] mx-10">
        {/* Header with gradient background */}
        <div
          className={`relative bg-gradient-to-br ${program.gradient} p-8 text-white`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                {program.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="text-white/90 text-sm mt-1">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Specializations */}
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            We Offer Specializations In:
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {program.specializations.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-colors group"
              >
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${program.gradient} group-hover:scale-125 transition-transform`}
                ></div>
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const FeatureCard = ({ feature, index, program }) => {
    const isExpanded = expandedFeature === `${program.id}-${index}`;

    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="p-6 ">
          <div className="flex items-start gap-4 ">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${program.gradient} text-white shrink-0`}
            >
              {feature.icon}
            </div>
            <div className="flex-1 ">
              <div className="flex items-center justify-between mb-2 ">
                <h4 className="text-lg font-bold text-gray-900">
                  {String(index + 1).padStart(2, "0")}
                </h4>
                <button
                  onClick={() =>
                    setExpandedFeature(
                      isExpanded ? null : `${program.id}-${index}`
                    )
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
              <h5 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h5>
              {isExpanded && (
                <p className="text-gray-600 leading-relaxed animate-fadeIn">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 mt-10">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto mt-36">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Courses After
              </span>
              <span className="text-gray-900"> Matriculate (10th)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Seva Shiksha Trust is committed to promoting the right to
              education (21A) for all in our country, as enshrined in our
              Constitution. Our core mission revolves around providing
              scholarships to students who are unable to afford tuition fees,
              thereby removing financial barriers to education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-[1.05]">
                Explore All Programs
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              number: "15+",
              label: "Course Specializations",
              color: "blue",
              icon: <BookOpen className="w-8 h-8" />,
            },
            {
              number: "5,000+",
              label: "Students Enrolled",
              color: "green",
              icon: <Users className="w-8 h-8" />,
            },
            {
              number: "95%",
              label: "Placement Rate",
              color: "purple",
              icon: <Trophy className="w-8 h-8" />,
            },
            {
              number: "300+",
              label: "Partner Industries",
              color: "orange",
              icon: <Building className="w-8 h-8" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}
              >
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Program Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 mx-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedProgram("all")}
              className={`px-6 py-3 rounded-xl transition-all
                 duration-300 font-semibold ${
                   selectedProgram === "all"
                     ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                 }`}
            >
              All Programs
            </button>

            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 ${
                  selectedProgram === program.id
                    ? `bg-gradient-to-r ${program.gradient} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {program.icon}
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-16 mb-16">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="space-y-8">
              <ProgramCard program={program} />

              {/* Key Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mx-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-r ${program.gradient} text-white`}
                  >
                    {program.icon}
                  </div>
                  Key Features of {program.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  Discover what makes our {program.title.toLowerCase()} stand
                  out from the rest
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {program.features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      feature={feature}
                      index={index}
                      program={program}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="bg-white rounded-3xl p-12 mb-16 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technical and professional education that bridges the gap between academic learning and industry-ready career skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Industry-Recognized Certification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our programs provide certificates that are recognized by
                industry leaders and employers globally, ensuring your qualification holds value worldwide.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-green-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Expert Faculty & Mentorship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced professionals and industry experts with
                years of practical knowledge and real-world experience.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Hands-On Practical Training
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get hands-on experience with real-world projects and state-of-the-art equipment, labs, and industry-standard tools.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-slate-900 to-gray-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Shape Your Professional Future?
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the next step in your educational journey. Join thousands of successful graduates who started their career with Seva Shiksha Trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]">
                Apply Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Download className="w-5 h-5 inline mr-2" />
                Watch Success Stories
              </button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              ✓ Free Counseling Session ✓ Scholarship Opportunities Available ✓
              Flexible Payment Options
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesAfter10th;