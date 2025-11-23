import React, { useState } from 'react'
import { Play, Video, Users, Award, Heart, TrendingUp } from 'lucide-react'

const StudentOathVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Student oath videos - Local videos from public folder
  const videos = [
    {
      id: 1,
      title: "Student Oath Ceremony - Leadership Testimonial",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQM2zkGf1_1QqRgDrjvYBEUVvfrNYr37SfNeGZp1yeKH5fKBJvefqTmQ_ppXBCwXrT3ACQg82aWq34an0_TqZLDC.mp4",
      description: "समायल अहमद साहब shares inspiring insights about students taking oath to pursue quality education with dedication and commitment under Seva Shiksha Trust",
      date: "April 2024",
      students: 150,
      location: "Patna, Bihar"
    },
    {
      id: 2,
      title: "Students Recognized - National Excellence Event",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQMd2yww-Oa70Y5Db7S6amnsVi7HhSqmzTpWXUAx_sN3OOgLE2xcPHWoWahou5NXGHbj6D0cfNKLAwT-Xi76rNXR.mp4",
      description: "Watch students pledge their commitment to educational excellence during national recognition event with support from 2 Lakh Private Schools India",
      date: "April 2024",
      students: 200,
      location: "Delhi, NCR"
    },
    {
      id: 3,
      title: "Students Overcoming Challenges - Education System",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQMNDDRKjPUKXAR1hld3RX04XIuMvnzwRjdB9JOJM-3Puhw7zB7CslVsak9FYpKeRB3Hb9lIRQB_s95wg3C9YO4.mp4",
      description: "Inspiring documentary featuring students taking oath to overcome education system challenges and commit to their academic success with Seva Shiksha Trust's support",
      date: "April 2024",
      students: 300,
      location: "Patna, Bihar"
    },
    {
      id: 4,
      title: "Student Admission & Oath Ceremony",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQMNeRrIzNyU1tFkoiythkxjpZ_5nDkf4oT2CWq6iNXcnGaXNSSyE5ayPLDbJ5VdeujDlakFPUOGfPcCqTweOe6z.mp4",
      description: "Watch new students take their sacred oath during admission ceremony, pledging to maintain discipline and pursue quality education with complete dedication",
      date: "February 2024",
      students: 120,
      location: "Patna, Bihar"
    },
    {
      id: 5,
      title: "Student Success Stories - Inspiring Journeys",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQMpKZoeKKN492MZjonn3r__Oq857Gt4D1fH4D7W-8um1NiEnH6iTYhFEHTxXdyVLIVjb0MBoVYtLnyy4HLhxOo.mp4",
      description: "Heartwarming stories of students who left their dreams to help underprivileged children while committing to educational excellence with Seva Shiksha Trust",
      date: "February 2024",
      students: 180,
      location: "Patna, Bihar"
    },
    {
      id: 6,
      title: "Student Testimonials - Scholarship Recipients",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQN6PPdZ6kxLB6stMO_NphCPrLK_euYqvyjjedy7XCiTNGTNVuNXQiDIgB5TnBIGrB8QuOiufBQNbwc2ltHufYU.mp4",
      description: "Hear directly from scholarship recipients about their educational journey and the impact of Seva Shiksha Trust's scholarship program on their lives",
      date: "January 2024",
      students: 250,
      location: "Multiple Locations"
    },
    {
      id: 7,
      title: "Student Life at Seva Shiksha - Campus Tour",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQNa9SG1WkEHCPmfa9opvBt28Eu4Jn5kxkAkiR6vkBYE3cVYBIa7RfWjPQtrGMkVl8gCjMNnubosHrVemLMRP6do.mp4",
      description: "Experience a day in the life of Seva Shiksha students as they attend classes, participate in activities, and fulfill their educational commitments",
      date: "January 2024",
      students: 200,
      location: "Patna, Bihar"
    },
    {
      id: 8,
      title: "Students Pledge - Future Leaders Program",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQNHKmmjeLlHFDQXDFxqb6YsIePIWe8u3tPIBljrYlk8idwuDj1HUyTqbr0XcK80nM3_DyEfyCN49ae3zf7RZkA.mp4",
      description: "Young leaders in making - Students take oath to become change-makers and support underprivileged students while pursuing their own educational dreams",
      date: "December 2023",
      students: 175,
      location: "Patna, Bihar"
    },
    {
      id: 9,
      title: "Student Oath Ceremony - Part 9",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQNTCYWTzLA0tD3KmxnXg0x_kESdfOtDkxm6SJpo2x7BaBGEwoVEFLjjt6_noTutCN02AcBymsTXg61Yis5rddPR.mp4",
      description: "Additional student oath ceremony showcasing commitment to educational excellence",
      date: "November 2023",
      students: 160,
      location: "Patna, Bihar"
    },
    {
      id: 10,
      title: "Student Oath Ceremony - Part 10",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQOmLhrSlDD4ZepNTXBBRxJpfOkcv1FeMKtYWLdXVU6_KVmQ9vNgfNTCVkw_P5SrBdtimoWe25Dt-Z_sSTmcXiw.mp4",
      description: "More inspiring moments from student oath ceremonies",
      date: "October 2023",
      students: 140,
      location: "Patna, Bihar"
    },
    {
      id: 11,
      title: "Student Oath Ceremony - Part 11",
      thumbnail: "/images/placeholder.svg",
      videoUrl: "/Oath Video/AQOUxSUh6IjkKQd2713wykN7c4EjxzVQ3pXF3Gfl3roY5sZ4A9QpGiWQVK8bcWBmfvCkZt1IwrKuuR1ooyy-2gw.mp4",
      description: "Final collection of student oath videos demonstrating dedication",
      date: "September 2023",
      students: 130,
      location: "Patna, Bihar"
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 mt-10">
      {/* Header Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-amber-400/20"></div>
        <div className="relative container mx-auto px-4 text-center mt-36">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Video className="w-12 h-12 text-orange-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Student Videos
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Watch our students take their pledge to pursue quality education with dedication and commitment
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">1,500+</h3>
            <p className="text-gray-600">Students Pledged</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Video className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{videos.length}</h3>
            <p className="text-gray-600">Oath Videos</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Award className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">100%</h3>
            <p className="text-gray-600">Commitment Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">50K+</h3>
            <p className="text-gray-600">Video Views</p>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleVideoClick(video)}
            >
              {/* Direct Video */}
              <div className="relative h-48 bg-black overflow-hidden">
                <video
                  src={video.videoUrl}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-orange-500" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {video.date}
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl transform animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="relative bg-black">
              <video
                className="w-full h-auto max-h-[70vh]"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                controls
                autoPlay
              ></video>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {selectedVideo.title}
              </h2>
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span>{selectedVideo.students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>{selectedVideo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span>{selectedVideo.date}</span>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take Your Oath & Join Seva Shiksha
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Pledge your commitment to quality education and join thousands of dedicated students in our scholarship program
          </p>
          <a
            href="/student-registration"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Register & Take Oath
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentOathVideos;