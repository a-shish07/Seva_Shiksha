import React, { useState } from 'react';
import { Star, Award, BookOpen, Users, Calendar, X, Quote, Heart, Crown, Lightbulb, GraduationCap, Globe } from 'lucide-react';

const OurMentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const mentors = [
    {
      id: 1,
      name: "Jyotirao Phule",
      title: "Pioneer of Modern Education",
      era: "1827 - 1890",
      category: "Social Reformer & Educator",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jyotirao_Phule.jpg/220px-Jyotirao_Phule.jpg",
      quote: "Education is the third eye of man.",
      shortDescription: "Visionary educator who opened the first school for girls in India",
      biography: "Jyotirao Govindrao Phule was an Indian social activist, thinker, anti-caste social reformer and writer from Maharashtra. His work extended to many fields, including eradication of untouchability and the caste system and for his efforts in educating women and oppressed caste people. He and his wife, Savitribai Phule, were pioneers of women's education in India.",
      keyContributions: [
        "Opened first school for girls in India (1848)",
        "Established schools for the untouchables",
        "Founded Satyashodhak Samaj (Society of Truth Seekers)",
        "Authored several books on social reform",
        "Champion of women's rights and education"
      ],
      legacy: "Father of Indian social revolution and modern education system",
      awards: ["Social Reform Pioneer", "Women's Education Champion", "Caste System Challenger"],
      impactStats: {
        schoolsEstablished: "18+",
        studentsImpacted: "10,000+",
        yearsActive: "40+",
        booksWritten: "15+"
      },
      philosophy: "Believed that education was the most powerful weapon against social injustice and inequality. He emphasized that without education, particularly for women and lower castes, true social progress was impossible.",
      modernRelevance: "His progressive ideas about inclusive education and social equality continue to inspire modern educational policies and social reform movements worldwide."
    },
    {
      id: 2,
      name: "Dr. A.P.J. Abdul Kalam",
      title: "The People's President & Missile Man",
      era: "1931 - 2015",
      category: "Scientist, Educator & Statesman",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
      quote: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
      shortDescription: "Inspirational leader who combined scientific excellence with educational vision",
      biography: "Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and statesman who served as the 11th President of India. Known as the Missile Man of India for his work on ballistic missile and launch vehicle technology, he was a beloved teacher and motivational speaker.",
      keyContributions: [
        "Led India's missile development programs",
        "Served as 11th President of India (2002-2007)",
        "Authored numerous inspirational books",
        "Mentored thousands of students across India",
        "Advanced India's space and defense technology"
      ],
      legacy: "People's President and Youth Icon who inspired millions to pursue science and technology",
      awards: ["Bharat Ratna (1997)", "Padma Vibhushan (1990)", "Padma Bhushan (1981)", "Honorary Doctorates from 48 Universities"],
      impactStats: {
        schoolsVisited: "1000+",
        studentsImpacted: "100,000+",
        yearsActive: "50+",
        booksWritten: "25+"
      },
      philosophy: "Believed in the power of dreams and hard work. He emphasized that education should ignite the minds of young people and encourage them to become innovative problem-solvers for society.",
      modernRelevance: "His vision of transforming India into a developed nation through education, science, and technology continues to guide India's educational and technological advancement."
    },
    {
      id: 3,
      name: "Anand Kumar",
      title: "Founder of Super 30",
      era: "1973 - Present",
      category: "Mathematics Educator",
      image: "https://images.hindustantimes.com/img/2023/08/11/550x309/anand-kumar_1691741745077_1691741745364.jpg",
      quote: "If you fight for your dreams, then the whole universe conspires to help you achieve it.",
      shortDescription: "Mathematics genius who provides free coaching to underprivileged students for IIT entrance",
      biography: "Anand Kumar is an Indian mathematics educator, best known for his Super 30 program, which he started in Patna, Bihar. Under this program, he provides free coaching to 30 academically talented students from economically backward sections of society for the Joint Entrance Examination (JEE).",
      keyContributions: [
        "Founded Super 30 program in 2002",
        "Achieved 100% success rate multiple times",
        "Helped 500+ students crack IIT-JEE",
        "Featured in international media and films",
        "Pioneered inclusive excellence in education"
      ],
      legacy: "Revolutionary educator who proved that talent exists everywhere but opportunities don't",
      awards: ["Padma Shri (2023)", "CNN-IBN Real Heroes Award", "Rashtriya Bal Kalyan Award", "Maulana Abul Kalam Azad Shiksha Puraskar"],
      impactStats: {
        studentsCoached: "600+",
        iitSelections: "500+",
        yearsActive: "20+",
        successRate: "95%"
      },
      philosophy: "Believes that economic background should not determine educational opportunities. He demonstrates that with proper guidance and dedication, students from any background can excel in the most competitive examinations.",
      modernRelevance: "His model has inspired numerous educational initiatives worldwide, proving that inclusive education can achieve excellence while maintaining social equity."
    },
    {
      id: 4,
      name: "Dr. Sarvepalli Radhakrishnan",
      title: "Philosopher, Teacher & Statesman",
      era: "1888 - 1975",
      category: "Philosopher & Educator",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sarvepalli_Radhakrishnan.jpg/220px-Sarvepalli_Radhakrishnan.jpg",
      quote: "Teachers should be the best minds in the country.",
      shortDescription: "Renowned philosopher whose birthday is celebrated as Teacher's Day in India",
      biography: "Dr. Sarvepalli Radhakrishnan was an Indian philosopher, academic, and statesman who served as the first Vice President of India and the second President of India. He was a distinguished teacher, philosopher, and champion of education who bridged Eastern and Western thought.",
      keyContributions: [
        "Served as Vice President and President of India",
        "Established Teacher's Day tradition (September 5th)",
        "Authored seminal works on Indian philosophy",
        "Built bridges between Eastern and Western philosophy",
        "Elevated the status of teachers in society"
      ],
      legacy: "Teacher of Teachers whose birthday is celebrated as Teacher's Day across India",
      awards: ["Bharat Ratna (1954)", "Knight Bachelor (1931)", "Order of Merit (1963)", "Peace Prize of German Book Trade"],
      impactStats: {
        booksWritten: "40+",
        universitiesServed: "10+",
        yearsTeaching: "50+",
        internationalRecognition: "Global"
      },
      philosophy: "Believed that teachers are the architects of civilization and that education should develop not just the intellect but also character, fostering a harmonious integration of thought and life.",
      modernRelevance: "His emphasis on the dignity of teaching profession and holistic education continues to shape modern educational philosophy and teacher training programs worldwide."
    },
    {
      id: 5,
      name: "Savitribai Phule",
      title: "First Female Teacher of India",
      era: "1831 - 1897",
      category: "Social Reformer & Educator",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Savitribai_Phule_1861.jpg/220px-Savitribai_Phule_1861.jpg",
      quote: "Go, get education. Be self-reliant. Be industrious. Work, gather wisdom and riches.",
      shortDescription: "India's first female teacher who championed women's education against all odds",
      biography: "Savitribai Phule was an Indian social reformer, educationalist, and poet from Maharashtra. Along with her husband, Jyotirao Phule, she played a crucial role in improving women's rights in India. She is considered to be the first female teacher of the first women's school in India.",
      keyContributions: [
        "India's first female teacher (1848)",
        "Co-founded first girls' school in India",
        "Established schools for different castes",
        "Started India's first childcare center",
        "Fought against child marriage and sati"
      ],
      legacy: "Pioneer of women's education who broke social barriers to teach and empower women",
      awards: ["Women's Liberation Pioneer", "Educational Revolutionary", "Social Reform Champion"],
      impactStats: {
        schoolsEstablished: "18+",
        femaleStudents: "Thousands",
        yearsActive: "30+",
        poemsWritten: "50+"
      },
      philosophy: "Believed that education was the key to women's liberation and social progress. She faced social ostracism but continued her mission to educate girls and fight for women's rights.",
      modernRelevance: "Her courage and dedication continue to inspire modern feminist movements and educational policies focused on gender equality and inclusive education."
    },
    {
      id: 6,
      name: "Rabindranath Tagore",
      title: "The Poet & Universal Educator",
      era: "1861 - 1941",
      category: "Poet, Philosopher & Educator",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rabindranath_Tagore_in_1909.jpg/220px-Rabindranath_Tagore_in_1909.jpg",
      quote: "The highest education is that which does not merely give us information, but makes our life in harmony with all existence.",
      shortDescription: "Nobel laureate who revolutionized education with his progressive philosophy",
      biography: "Rabindranath Tagore was a Bengali polymath - poet, writer, playwright, composer, philosopher, social reformer and painter. He reshaped Bengali literature and music as well as Indian art with Contextual Modernism. He became the first non-European to win the Nobel Prize in Literature in 1913.",
      keyContributions: [
        "Founded Visva-Bharati University (1921)",
        "First Asian Nobel Prize winner in Literature",
        "Composed national anthems of India and Bangladesh",
        "Pioneered progressive education methods",
        "Champion of universal humanism"
      ],
      legacy: "Visionary educator who created a unique model of holistic education that integrated arts, nature, and human values",
      awards: ["Nobel Prize in Literature (1913)", "Knighthood (1915)", "Bharat Ratna equivalent recognition"],
      impactStats: {
        booksWritten: "100+",
        songsComposed: "2,230",
        studentsInfluenced: "Millions",
        universitiesInspired: "Countless"
      },
      philosophy: "Advocated for an education system that emphasized creativity, critical thinking, and harmony with nature. He believed in learning through experience and the importance of cultural exchange.",
      modernRelevance: "His educational philosophy of learning in natural environments and emphasis on arts and creativity continues to influence modern alternative education systems worldwide."
    }
  ];

  const MentorCard = ({ mentor, index }) => (
    <div
      className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setHoveredCard(mentor.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => setSelectedMentor(mentor)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-blue-200">
        {index % 2 === 0 ? <Crown size={24} /> : <Lightbulb size={24} />}
      </div>
      
      <div className="relative p-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={mentor.image} 
                alt={mentor.name}
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            {hoveredCard === mentor.id && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                <GraduationCap className="text-blue-600" size={16} />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {mentor.name}
            </h3>
            <p className="text-blue-600 font-semibold text-sm">{mentor.title}</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Calendar className="text-gray-500" size={12} />
              <span className="text-gray-600 text-sm">{mentor.era}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3">
            <Quote className="text-blue-400 mb-1 mx-auto" size={16} />
            <p className="text-gray-700 italic text-sm leading-relaxed">"{mentor.quote}"</p>
          </div>

          <div className="mt-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const MentorModal = ({ mentor, onClose }) => {
    if (!mentor) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white p-1">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">{mentor.name}</h2>
                  <p className="text-blue-100 font-semibold text-lg">{mentor.title}</p>
                  <p className="text-blue-200 text-sm">{mentor.era}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Quote Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-center">
              <Quote className="text-blue-500 mb-4 mx-auto" size={32} />
              <p className="text-xl italic text-gray-800 font-medium">"{mentor.quote}"</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="text-blue-600" />
                    Biography
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{mentor.biography}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-purple-600" />
                    Key Contributions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mentor.keyContributions.map((contribution, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 font-medium">{contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="text-yellow-600" />
                    Philosophy
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400">{mentor.philosophy}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="text-green-600" />
                    Modern Relevance
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">{mentor.modernRelevance}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Legacy */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6">
                  <Crown className="mb-4" size={32} />
                  <h4 className="font-bold text-lg mb-3">Legacy</h4>
                  <p className="text-blue-100">{mentor.legacy}</p>
                </div>

                {/* Impact Stats */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <Users className="text-blue-600" />
                    Impact Statistics
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(mentor.impactStats).map(([key, value], index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-bold text-blue-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <Award className="text-yellow-600" />
                    Recognition & Awards
                  </h4>
                  <div className="space-y-3">
                    {mentor.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="text-gray-700 text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <GraduationCap className="mx-auto mb-4 text-blue-200" size={64} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Eternal Mentors
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Celebrating the visionary educators and reformers who shaped India's educational landscape 
            and continue to inspire generations of learners
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Heart className="text-red-300" size={20} />
              <span>Inspiring Millions</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <Star className="text-yellow-300" size={20} />
              <span>Timeless Wisdom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Icons of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Educational Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each mentor represents a unique journey of dedication, innovation, and transformative impact on education and society
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Carry Forward Their Legacy</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            These visionary mentors paved the way for modern education. Let their wisdom guide your educational journey 
            and inspire you to create positive change in society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Explore Our Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMentor && (
        <MentorModal 
          mentor={selectedMentor} 
          onClose={() => setSelectedMentor(null)} 
        />
      )}
    </div>
  );
};

export default OurMentors;