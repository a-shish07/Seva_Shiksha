import React, { useState, useCallback, useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from '../components/common/Lightbox'

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('recent')

  const recentGallery = [
    {
      id: 1,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/84981492_105194297723363_4090189818036748288_n.jpg",
      title: "Event Moment",
      category: "Events"
    },
    {
      id: 2,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/166600236_280541880188603_9209093885981184626_n.jpg",
      title: "Student Gathering",
      category: "Students"
    },
    {
      id: 3,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/470202181_1098805375028912_2977288317256462686_n.jpg",
      title: "Academic Activity",
      category: "Academic"
    },
    {
      id: 4,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/470583171_1098805378362245_8124890948991957940_n.jpg",
      title: "Workshop",
      category: "Workshop"
    },
    {
      id: 5,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471266672_1104224091153707_7963971009260206715_n.jpg",
      title: "Campus Visit",
      category: "Campus"
    },
    {
      id: 7,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471512483_1104225214486928_7632097580683522277_n.jpg",
      title: "Orientation Program",
      category: "Program"
    },
    {
      id: 8,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471492968_1104244221151694_5832561491923558739_n.jpg",
      title: "Group Session",
      category: "Discussion"
    },
    {
      id: 9,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471276730_1104244517818331_6984591706136087635_n.jpg",
      title: "Campus Moment",
      category: "Campus"
    },
    {
      id: 10,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471282544_1104244524484997_3705503312262963239_n.jpg",
      title: "Student Event",
      category: "Events"
    },
    {
      id: 11,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472664202_1111896313719818_6404931825508900531_n.jpg",
      title: "Interactive Session",
      category: "Interactive"
    },
    {
      id: 12,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472311805_1111899963719453_4811271653282307702_n.jpg",
      title: "Class Activity",
      category: "Academic"
    },
    {
      id: 13,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472314935_1111928363716613_1784576212494906963_n.jpg",
      title: "Meeting",
      category: "Events"
    },
    {
      id: 14,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472261335_1111928387049944_1248665207053325449_n.jpg",
      title: "Gathering",
      category: "Students"
    },
    {
      id: 15,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472313033_1111928217049961_8494637198938831601_n.jpg",
      title: "Conference",
      category: "Events"
    },
    {
      id: 16,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/472735198_1112980373611412_36353083812816353_n.jpg",
      title: "Workshop Day",
      category: "Workshop"
    },
    {
      id: 17,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473166926_1117852419790874_8688774432353474987_n.jpg",
      title: "Learning Session",
      category: "Academic"
    },
    {
      id: 18,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473161459_1117852116457571_8489558478576612489_n.jpg",
      title: "Group Photo",
      category: "Students"
    },
    {
      id: 19,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473183114_1117853496457433_7299003575012833450_n.jpg",
      title: "Campus Scene",
      category: "Campus"
    },
    {
      id: 20,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473041761_1117465146496268_1230483806750999904_n.jpg",
      title: "Student Program",
      category: "Program"
    },
    {
      id: 21,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473599906_1117871636455619_8105786993566858305_n.jpg",
      title: "Event Highlight",
      category: "Events"
    },
    {
      id: 22,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/473199674_1118157129760403_6573431136733743839_n.jpg",
      title: "Activity Time",
      category: "Students"
    },
    {
      id: 23,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/474758032_1124791249096991_2423450446491242967_n.jpg",
      title: "Celebration",
      category: "Events"
    },
    {
      id: 24,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/485665124_1083230830490604_6688374532097037127_n.jpg",
      title: "Campus Life",
      category: "Campus"
    },
    {
      id: 25,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/491816161_1108283071318713_4889018891600160668_n.jpg",
      title: "Learning Together",
      category: "Academic"
    },
    {
      id: 26,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/492699366_1108282581318762_9061944782463116302_n.jpg",
      title: "Workshop Session",
      category: "Workshop"
    },
    {
      id: 27,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/492548258_1110912737722413_8658242697728945063_n.jpg",
      title: "Team Meeting",
      category: "Events"
    },
    {
      id: 28,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/500164372_1137096331770720_6384284398828123135_n.jpg",
      title: "Student Success",
      category: "Students"
    },
    {
      id: 29,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/500479378_1137100661770287_6182251442385729979_n.jpg",
      title: "Program Moment",
      category: "Program"
    },
    {
      id: 30,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/506111893_1150463910433962_3768989802538098802_n.jpg",
      title: "Campus Event",
      category: "Events"
    },
    {
      id: 31,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/505483960_1150463757100644_7537563102058359170_n.jpg",
      title: "Learning Activity",
      category: "Academic"
    },
    {
      id: 32,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/505810538_1151555623658124_4009253968840611969_n.jpg",
      title: "Student Interaction",
      category: "Students"
    },
    {
      id: 33,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/507787160_1151555140324839_4876305815692261748_n.jpg",
      title: "Campus Tour",
      category: "Campus"
    },
    {
      id: 34,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/508809124_1153891323424554_8293744129431586207_n.jpg",
      title: "Workshop Activity",
      category: "Workshop"
    },
    {
      id: 35,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/508724049_1153891410091212_6610939270073938556_n.jpg",
      title: "Group Work",
      category: "Academic"
    },
    {
      id: 36,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/509149323_1153891326757887_1514297376746603800_n.jpg",
      title: "Class Session",
      category: "Academic"
    },
    {
      id: 37,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/508568355_1153889000091453_4432558971681715178_n.jpg",
      title: "Student Moment",
      category: "Students"
    },
    {
      id: 38,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/508889513_1153891413424545_133210157921931970_n.jpg",
      title: "Training Session",
      category: "Workshop"
    },
    {
      id: 39,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/84591475_105194261056700_8546538397060038656_n.jpg",
      title: "Event Photo",
      category: "Events"
    },
    {
      id: 40,
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/84690078_105899307652862_175329640288616448_n.jpg",
      title: "Campus Celebration",
      category: "Campus"
    }
  ]

  const archivedGallery = [
    {
      id: 41,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/7-1-768x432.jpeg",
      title: "Previous Event",
      category: "Archive"
    },
    {
      id: 42,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-5-1-768x576.jpeg",
      title: "Student Program",
      category: "Archive"
    },
    {
      id: 43,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/10-768x576.jpeg",
      title: "Educational Workshop",
      category: "Archive"
    },
    {
      id: 44,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/11.jpeg",
      title: "Campus Activity",
      category: "Archive"
    },
    {
      id: 45,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/8-768x432.jpeg",
      title: "Student Gathering",
      category: "Archive"
    },
    {
      id: 46,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-5-768x576.jpeg",
      title: "Training Session",
      category: "Archive"
    },
  ]

  const allImages = activeTab === 'recent' ? recentGallery : archivedGallery
  const categories = ['All', ...new Set(allImages.map(img => img.category))]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-white/90"
          >
            Explore all the moments from Seva Shiksha Trust
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('recent')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'recent'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
            }`}
          >
            Recent Photos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('archived')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'archived'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
            }`}
          >
            Archive
          </motion.button>
        </div>

        {/* Photos Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {allImages.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(photo)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm">{photo.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage?.image}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}

export default Photos
