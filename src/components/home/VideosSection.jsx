import React, { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: "Seva Shiksha Trust Introduction",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-5.jpeg",
      link: "https://www.facebook.com/101429641433162/posts/pfbid02he6f8yDoj55pqqeRc5Ehg2ZhkCxdw6g6ofuKmMioheUhvizytg6fgExJCjMA44U9l/?d=w&mibextid=qC1gEa",
      description: "Learn about our mission and vision"
    },
    {
      id: 2,
      title: "Student Success Stories",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/7.jpeg",
      link: "https://www.facebook.com/101429641433162/posts/pfbid0vZ4bKKjTkmDHAnAAVRYYvLBSiUPt5QsZGF2PsWuyr7uJV2sZpovPdfSsdHztEZ1Jl/?d=w&mibextid=qC1gEa",
      description: "Inspiring stories from our students"
    },
    {
      id: 3,
      title: "Educational Programs Overview",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/6.jpeg",
      link: "https://fb.watch/nDTJzYyflA/?mibextid=qC1gEa",
      description: "Overview of our educational programs"
    },
    {
      id: 4,
      title: "Scholarship Program Benefits",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/1-1015x1024.jpeg",
      link: "https://www.facebook.com/100064110904198/posts/pfbid02GB2nhtRyXbcuNjs79duLSe856SPsq8LUZLnD1dZLUc2Zz1ZgqJ265hNZKeyoqNiFl/?d=w&mibextid=qC1gEa",
      description: "Learn about our scholarship benefits"
    },
    {
      id: 5,
      title: "University Partnerships",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner19.png",
      link: "https://fb.watch/nDTwRRW8zh/?mibextid=qC1gEa",
      description: "Our university and college partnerships"
    },
    {
      id: 6,
      title: "Student Testimonials",
      thumbnail: "https://sevashiksha.in/wp-content/uploads/2023/10/8.jpeg",
      link: "https://www.facebook.com/101429641433162/posts/pfbid02CQikUkiVibVswMhrHtfDcSqdgSb89Bit2ixnUbQhbKH5oio6ZN4ZD9q3WTh6p12Dl/?d=w&mibextid=qC1gEa",
      description: "What our students say about us"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Media Gallery
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            RECENT
            <span className=" text-gold-400"> VIDEOS</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Watch our latest videos to learn more about our programs, success stories, 
            and the impact we're making in students' lives
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/40">
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
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
                    onClick={() => window.open(video.link, '_blank')}
                  >
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    {video.description}
                  </p>
                  
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors group"
                  >
                    Watch Now
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          data-aos="fade-up"
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
    </section>
  )
}

export default VideosSection