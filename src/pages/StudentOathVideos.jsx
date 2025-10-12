import React, { useState } from 'react';
import { Play, Video, Users, Award, Heart, TrendingUp } from 'lucide-react';

const StudentOathVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Student oath videos - Real videos from Seva Shiksha Trust YouTube channel
  const videos = [
    {
      id: 1,
      title: "Student Oath Ceremony - Community Testimonial",
      thumbnail: "https://img.youtube.com/vi/uKqZAkl9aPk/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/uKqZAkl9aPk",
      description: "समायल अहमद साहब shares his experience about students taking oath to pursue quality education with dedication and commitment under Seva Shiksha Trust",
      date: "April 2024",
      students: 150,
      location: "Patna, Bihar"
    },
    {
      id: 2,
      title: "Student Oath - National Recognition Ceremony",
      thumbnail: "https://img.youtube.com/vi/SZ_N7fzyJuE/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/SZ_N7fzyJuE",
      description: "Students pledge their commitment to education excellence during national recognition event with 2 Lakh Private Schools India",
      date: "April 2024",
      students: 200,
      location: "Delhi, NCR"
    },
    {
      id: 3,
      title: "Student Pledge - Understanding Education System",
      thumbnail: "https://img.youtube.com/vi/cdIszs6ZxSE/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/cdIszs6ZxSE",
      description: "Students take oath to overcome education system challenges and commit to their academic journey with Seva Shiksha Trust's guidance",
      date: "April 2024",
      students: 300,
      location: "Patna, Bihar"
    },
    {
      id: 4,
      title: "Student Oath - Admission Ceremony",
      thumbnail: "https://img.youtube.com/vi/zWmn9Ks5n2k/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/zWmn9Ks5n2k",
      description: "New students take their oath during admission ceremony, pledging to maintain discipline and pursue quality education with dedication",
      date: "February 2024",
      students: 120,
      location: "Patna, Bihar"
    },
    {
      id: 5,
      title: "Student Oath - Inspiring Commitment to Education",
      thumbnail: "https://img.youtube.com/vi/35Kdv1gfQAU/maxresdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/35Kdv1gfQAU",
      description: "Students pledge to follow the inspiring journey of dedication to education and commit to helping fellow students achieve their dreams",
      date: "February 2024",
      students: 180,
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
        <div className="relative container mx-auto px-4 text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Video className="w-12 h-12 text-orange-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Student Oath Videos
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">1,000+</h3>
            <p className="text-gray-600">Students Pledged</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Video className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{videos.length}</h3>
            <p className="text-gray-600">Oath Ceremonies</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <Award className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">100%</h3>
            <p className="text-gray-600">Commitment Rate</p>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleVideoClick(video)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-amber-500 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{video.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{video.location}</span>
                  </div>
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
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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