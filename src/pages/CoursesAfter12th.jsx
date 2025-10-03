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
  Scale,
  Paintbrush,
  Code,
} from "lucide-react";

const CoursesAfter12th = () => {
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [expandedFeature, setExpandedFeature] = useState(null);

  const programs = [
    {
      id: "technical",
      title: "Technical Programme",
      icon: <Cog className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      description:
        "Comprehensive technical education with practical skills and industry-driven curriculum for engineering excellence",
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
        "Petroleum Engineering",
        "Civil Engineering",
      ],
      features: [
        {
          title: "Advanced Technical Skills",
          description:
            "Develop cutting-edge technical expertise in your chosen engineering field with hands-on laboratory experience and industry-grade equipment.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Specialized Engineering Fields",
          description:
            "Choose from 12 specialized engineering domains including emerging fields like petroleum engineering and mechatronics.",
          icon: <Award className="w-6 h-6" />,
        },
        {
          title: "4-Year Comprehensive Program",
          description:
            "Complete bachelor's degree program designed to provide deep understanding of theoretical concepts and practical applications.",
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: "Industry-Driven Curriculum",
          description:
            "Curriculum developed in partnership with leading industries ensuring graduates are job-ready with current market skills.",
          icon: <Building className="w-6 h-6" />,
        },
        {
          title: "Research & Innovation Focus",
          description:
            "Engage in cutting-edge research projects and innovation labs to develop problem-solving and creative thinking abilities.",
          icon: <Lightbulb className="w-6 h-6" />,
        },
        {
          title: "Internships & Co-op Programs",
          description:
            "Mandatory internships with top companies providing real-world experience and valuable industry connections.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Professional Certification",
          description:
            "Additional professional certifications and training programs to enhance career prospects and industry recognition.",
          icon: <Trophy className="w-6 h-6" />,
        },
        {
          title: "Flexible Career Pathways",
          description:
            "Multiple career options available including higher studies (M.Tech), corporate jobs, entrepreneurship, and research positions.",
          icon: <Heart className="w-6 h-6" />,
        },
        {
          title: "Global Recognition",
          description:
            "Internationally recognized degree programs enabling opportunities for global career advancement and further studies abroad.",
          icon: <Star className="w-6 h-6" />,
        },
        {
          title: "Entrepreneurship Support",
          description:
            "Dedicated entrepreneurship cell providing mentorship, funding guidance, and incubation support for student startups.",
          icon: <Zap className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "paramedical",
      title: "Para-Medical Degree/Diploma Programme",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "green",
      gradient: "from-green-500 to-teal-600",
      description:
        "Specialized healthcare education programs for medical support, diagnostic professionals, and nursing excellence",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
      specializations: [
        "B.Sc Operation Theatre Technology",
        "B.Sc Anaesthesia Technology", 
        "B.Sc Renal Dialysis Technology",
        "B.Sc Radiology",
        "Physician Assistant",
        "B.Sc Optometry",
        "GNM/ANM Nursing",
        "PB Nursing",
        "B.Sc MLT",
        "B.Sc Nursing",
        "B.Pharmacy/D.Pharmacy",
      ],
      features: [
        {
          title: "Clinical Excellence Training",
          description:
            "Comprehensive clinical training in state-of-the-art medical facilities with exposure to latest medical technologies and procedures.",
          icon: <Stethoscope className="w-6 h-6" />,
        },
        {
          title: "Medical Laboratory Technology",
          description:
            "Advanced training in diagnostic testing, laboratory procedures, and medical equipment operation for accurate patient care.",
          icon: <Microscope className="w-6 h-6" />,
        },
        {
          title: "Hospital Rotations",
          description:
            "Extensive hands-on experience through rotations in various hospital departments including ICU, OT, emergency, and specialized units.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Nursing Care Excellence",
          description:
            "Comprehensive nursing education covering patient care, medical procedures, healthcare management, and compassionate service.",
          icon: <Heart className="w-6 h-6" />,
        },
        {
          title: "Pharmaceutical Sciences",
          description:
            "In-depth study of pharmaceutical sciences, drug development, medication management, and pharmacy practice.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Healthcare Technology",
          description:
            "Training on advanced medical equipment, diagnostic tools, and healthcare information systems used in modern hospitals.",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: "Patient Care Ethics",
          description:
            "Strong foundation in medical ethics, patient communication, healthcare laws, and professional conduct in medical settings.",
          icon: <Star className="w-6 h-6" />,
        },
        {
          title: "Emergency Medical Skills",
          description:
            "Specialized training in emergency medical procedures, first aid, trauma care, and critical care support.",
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: "Healthcare Administration",
          description:
            "Knowledge of healthcare administration, hospital management systems, medical records, and healthcare quality assurance.",
          icon: <Building className="w-6 h-6" />,
        },
        {
          title: "Continuing Medical Education",
          description:
            "Access to continuous professional development programs and medical conferences to stay updated with latest healthcare advances.",
          icon: <Award className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "other",
      title: "Other Professional Programmes",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      description:
        "Diverse professional programs in education, law, agriculture, computer applications, and creative fields",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&q=80",
      specializations: [
        "D.Ed (Diploma in Education)",
        "D.P.Ed (Diploma in Physical Education)",
        "BCA (Bachelor of Computer Applications)",
        "Integrated LLB (5 Years)",
        "B.Sc Agriculture",
        "Fashion Designing",
        "B.A (Bachelor of Arts)",
      ],
      features: [
        {
          title: "Education & Teaching Excellence",
          description:
            "Comprehensive teacher training programs focusing on modern pedagogy, child psychology, and educational technology integration.",
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          title: "Legal Studies & Practice",
          description:
            "Integrated 5-year LLB program covering constitutional law, criminal law, corporate law, and practical legal training through moot courts.",
          icon: <Scale className="w-6 h-6" />,
        },
        {
          title: "Computer Applications Mastery",
          description:
            "BCA program covering programming languages, software development, database management, and emerging technologies like AI and blockchain.",
          icon: <Code className="w-6 h-6" />,
        },
        {
          title: "Agricultural Sciences",
          description:
            "Modern agricultural practices, sustainable farming, crop science, soil management, and agribusiness for future farmers and agricultural professionals.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Creative Design & Fashion",
          description:
            "Fashion designing program covering textile technology, garment construction, fashion marketing, and creative design thinking.",
          icon: <Paintbrush className="w-6 h-6" />,
        },
        {
          title: "Liberal Arts Foundation",
          description:
            "B.A programs offering diverse subjects in humanities, social sciences, languages, and cultural studies for well-rounded education.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Physical Education & Sports",
          description:
            "D.P.Ed program focusing on sports science, fitness training, sports psychology, and career opportunities in physical education.",
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: "Industry Partnerships",
          description:
            "Strong partnerships with industries, law firms, educational institutions, and fashion houses for practical exposure and job placements.",
          icon: <Building className="w-6 h-6" />,
        },
        {
          title: "Skill Development Focus",
          description:
            "Emphasis on practical skills, soft skills development, communication abilities, and professional grooming for career success.",
          icon: <Trophy className="w-6 h-6" />,
        },
        {
          title: "Flexible Career Options",
          description:
            "Multiple career pathways available including teaching, legal practice, software development, agricultural consultancy, and creative industries.",
          icon: <Star className="w-6 h-6" />,
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
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.gradient} group-hover:scale-150 transition-transform`}
                ></div>
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="p-6 pt-0">
          <button
            className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-[1.02]`}
          >
            Explore Program Details
          </button>
        </div>
      </div>
    );
  };

  const FeatureCard = ({ feature, index, program }) => {
    const isExpanded = expandedFeature === `${program.id}-${index}`;

    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${program.gradient} text-white shrink-0`}
            >
              {feature.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Courses After
              </span>
              <span className="text-gray-900"> Intermediate (12th)</span>
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
              number: "30+",
              label: "Course Specializations",
              color: "blue",
              icon: <BookOpen className="w-8 h-8" />,
            },
            {
              number: "10,000+",
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
              number: "500+",
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
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
              We provide comprehensive higher education that prepares you for
              professional excellence and career success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                University-Recognized Degrees
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our programs provide degrees that are recognized by
                universities, professional bodies, and employers globally.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-green-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Expert Faculty & Research Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from distinguished professors, industry professionals, and
                researchers with extensive academic and practical experience.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Advanced Learning Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art laboratories, modern libraries, research
                facilities, and technology-enabled classrooms for enhanced
                learning.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Testimonials */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              See how our programs have transformed the lives and careers of
              thousands of students across diverse fields
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">
                "The Computer Science Engineering program at Seva Shiksha gave
                me the perfect foundation. Now I'm working as a Software
                Engineer at a leading tech company!"
              </p>
              <div className="text-white font-semibold">- Rajesh Kumar</div>
              <div className="text-blue-200 text-sm">
                Software Engineer, Google
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">
                "The B.Sc Nursing program provided excellent clinical training.
                I'm now serving as a Senior Nurse at AIIMS and continuing my
                higher studies!"
              </p>
              <div className="text-white font-semibold">- Priya Sharma</div>
              <div className="text-blue-200 text-sm">Senior Nurse, AIIMS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">
                "The Integrated LLB program opened doors to a successful legal
                career. The scholarship support made it possible for me to
                achieve my dreams!"
              </p>
              <div className="text-white font-semibold">- Amit Patel</div>
              <div className="text-blue-200 text-sm">Practicing Lawyer</div>
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
              Take the next step in your educational journey. Our expert
              counselors are here to help you choose the right program based on
              your interests, career aspirations, and academic background.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05]">
                Get Free Career Counseling
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Download className="w-5 h-5 inline mr-2" />
                Download Complete Brochure
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

export default CoursesAfter12th;