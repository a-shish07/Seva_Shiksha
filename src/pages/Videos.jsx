import React, { useState } from 'react'
import { Play, ExternalLink, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedLocalVideo, setSelectedLocalVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: "Student Oath Ceremonies",
      thumbnail: "https://img.youtube.com/vi/zWmn9Ks5n2k/maxresdefault.jpg",
      link: "/student-oath-videos",
      description: "Watch students take their oath to pursue quality education",
      isInternal: true
    },
    {
      id: 2,
      title: "Student Success Stories",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/7.jpeg",
      link: "https://www.facebook.com/101429641433162/posts/pfbid0vZ4bKKjTkmDHAnAAVRYYvLBSiUPt5QsZGF2PsWuyr7uJV2sZpovPdfSsdHztEZ1Jl/?d=w&mibextid=qC1gEa",
      description: "Inspiring stories from our scholarship students"
    },
    {
      id: 3,
      title: "Educational Programs Overview",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/6.jpeg",
      link: "https://fb.watch/nDTJzYyflA/?mibextid=qC1gEa",
      description: "Explore our comprehensive educational programs"
    },
    {
      id: 4,
      title: "Scholarship Program Benefits",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/1-1015x1024.jpeg",
      link: "https://www.facebook.com/100064110904198/posts/pfbid02GB2nhtRyXbcuNjs79duLSe856SPsq8LUZLnD1dZLUc2Zz1ZgqJ265hNZKeyoqNiFl/?d=w&mibextid=qC1gEa",
      description: "Discover how we support students financially"
    },
    {
      id: 5,
      title: "University Partnerships",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner19.png",
      link: "https://fb.watch/nDTwRRW8zh/?mibextid=qC1gEa",
      description: "Our network of university and college partnerships"
    },
    {
      id: 6,
      title: "Seva Shiksha Trust Vision",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/8.jpeg",
      link: "https://www.facebook.com/101429641433162/posts/pfbid02CQikUkiVibVswMhrHtfDcSqdgSb89Bit2ixnUbQhbKH5oio6ZN4ZD9q3WTh6p12Dl/?d=w&mibextid=qC1gEa",
      description: "Learn about our mission to make quality education accessible"
    },
    {
      id: 7,
      title: "Seva Shiksha Trust Introduction",
      thumbnail: "/images/logo.jpg",
      videoSrc: "/video/AQMa-yRPFX9v9DcZEJ2PU3LB0B9fw1Xxfbh9F_8_gZLTcf6ms9Z891Si1Q0qBPGMe_khtXlmcAlTadeydn3Y12AfCGrLqIwx5zyYRRQ7iALnYQ.mp4",
      description: "Welcome to Seva Shiksha Trust - our mission and vision",
      isLocal: true
    },
    {
      id: 8,
      title: "Student Achievement Highlights",
      thumbnail: "/images/chairmain.jpeg",
      videoSrc: "/video/AQMi7IQumHx1CG6e__YcL9QsUSdU9l0YIYWaYovoxnQkT2jYqse_JRUJ8SNJEe8uq7G4MyxOi8mdyimON9kXfWjKbFKcfC7uzn7T3RLL3OGQrA.mp4",
      description: "Celebrating student achievements and milestones",
      isLocal: true
    },
    {
      id: 9,
      title: "Educational Workshops & Seminars",
      thumbnail: "/images/logo 2.jpg",
      videoSrc: "/video/AQN2Wp8LUFSZIaQoYWhdxwziWH9tvLCAXLC-OzLUSMwAwxkS-ZVnqmKNkDmhC_UNz8AmCcvgS5-nHwQQvU5QKL6D6ElpBzJnfLBv4NImFgumCA.mp4",
      description: "Interactive learning sessions and skill development programs",
      isLocal: true
    },
    {
      id: 10,
      title: "Community Outreach Programs",
      thumbnail: "/images/chairmain.jpeg",
      videoSrc: "/video/AQNsH4JIUfkKXs4fstn96ippFChMnO-JJOKqeDaLSh4D1f6KTj4m7w4pznDSndW6y0h2bwmD7JM65gvFUVHXkZV63SfFpMbpUwHiUVc5TytErw.mp4",
      description: "Our initiatives to support education in rural communities",
      isLocal: true
    },
    {
      id: 11,
      title: "Mentorship Program Overview",
      thumbnail: "/images/logo.jpg",
      videoSrc: "/video/AQOaXYDMC0g3jnGsWXvEMjruyRVKc9tN8w9r44Lr3hsFk0-JWo6iusW5yAL4TZfdlntq4Z7P7048X3v9clG27O_W.mp4",
      description: "How our expert mentors guide students towards success",
      isLocal: true
    },
    {
      id: 12,
      title: "Scholarship Distribution Events",
      thumbnail: "/images/logo 2.jpg",
      videoSrc: "/video/AQPoNQf7LX829GJg3YdkqfX3UU1QsvUj_DwUPzfMhzhd8TZ1qP7AYsKoepyxbXQR7yhEwjlmHrs3n7_LxkQdj-1XL3b7m2pD6hAsJbolGR3ZhA.mp4",
      description: "Heartwarming moments from scholarship award ceremonies",
      isLocal: true
    },
    {
      id: 13,
      title: "Annual Achievement Awards",
      thumbnail: "/images/chairmain.jpeg",
      videoSrc: "/video/AQPPXvkH-Mm5u-TWI8niGJohgtk2fTzSSxURBC-wIN_qohlSAPfJ-pzY7RvssWBYbIEqbOkj70dZ7c-JkvBH3B3cd8rLCAHX4rmfaqBGgiqmmQ.mp4",
      description: "Recognizing excellence in education and community service",
      isLocal: true
    }
  ]

  const handlePlayVideo = (video) => {
    if (video.isLocal) {
      setSelectedLocalVideo(video)
    } else if (video.isInternal) {
      window.location.href = video.link
    } else {
      window.open(video.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-700">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Video Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-white/90"
          >
            Watch our latest videos to learn more about our programs and success stories
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Videos Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/40 h-full flex flex-col">
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden aspect-video cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => handlePlayVideo(video)}
                    >
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </motion.div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow">
                      {video.description}
                    </p>
                    
                    <button
                      onClick={() => handlePlayVideo(video)}
                      className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors group/btn"
                    >
                      Watch Now
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow us on our social media channels to stay updated with the latest videos, 
              news, and success stories from Seva Shiksha Trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100064110904198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
              <a
                href="https://www.youtube.com/@sevashikshatrust"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Local Video Modal */}
      <AnimatePresence>
        {selectedLocalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLocalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{selectedLocalVideo.title}</h3>
                <button
                  onClick={() => setSelectedLocalVideo(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="p-6">
                <video
                  src={selectedLocalVideo.videoSrc}
                  controls
                  className="w-full rounded-lg"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
                <p className="mt-4 text-gray-600">{selectedLocalVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Videos
