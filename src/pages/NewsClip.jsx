import React, { useState } from 'react'
import { X, ZoomIn, Newspaper } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '../components/common/Lightbox'

const NewsClip = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const newsImages = [
    { id: 1, image: "/news photo/1.jpg", title: "News Clip 1" },
    { id: 2, image: "/news photo/2.jpg", title: "News Clip 2" },
    { id: 3, image: "/news photo/3.jpg", title: "News Clip 3" },
    { id: 4, image: "/news photo/4.jpg", title: "News Clip 4" },
    { id: 5, image: "/news photo/5.jpg", title: "News Clip 5" },
    { id: 6, image: "/news photo/6.jpg", title: "News Clip 6" },
    { id: 7, image: "/news photo/7.jpg", title: "News Clip 7" },
    { id: 8, image: "/news photo/8.jpg", title: "News Clip 8" },
    { id: 9, image: "/news photo/9.jpg", title: "News Clip 9" },
    { id: 10, image: "/news photo/10.jpg", title: "News Clip 10" },
    { id: 11, image: "/news photo/11.jpg", title: "News Clip 11" },
    { id: 12, image: "/news photo/12.jpg", title: "News Clip 12" },
    { id: 13, image: "/news photo/13.jpg", title: "News Clip 13" },
    { id: 14, image: "/news photo/14.jpg", title: "News Clip 14" },
    { id: 15, image: "/news photo/15.jpg", title: "News Clip 15" },
    { id: 16, image: "/news photo/16.jpg", title: "News Clip 16" },
    { id: 17, image: "/news photo/17.jpg", title: "News Clip 17" },
    { id: 18, image: "/news photo/18.jpg", title: "News Clip 18" },
    { id: 19, image: "/news photo/19.jpg", title: "News Clip 19" },
    { id: 20, image: "/news photo/20.jpg", title: "News Clip 20" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Newspaper className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">News Clips</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 max-w-2xl mx-auto"
            >
              Latest news and media coverage of SEVA SHIKSHA TRUST activities and achievements
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {newsImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">Click to view</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage.image}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default NewsClip