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
    // {
    //   id: 7,
    //   image: "https://sevashiksha.in/wp-content/uploads/2025/07/471512483_1104225214486928_7632097580683522277_n.jpg",
    //   title: "Orientation Program",
    //   category: "Program"
    // },
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
    // {
    //   id: 12,
    //   image: "https://sevashiksha.in/wp-content/uploads/2025/07/472311805_1111899963719453_4811271653282307702_n.jpg",
    //   title: "Class Activity",
    //   category: "Academic"
    // },
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
    },
    {
      id: 41,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.40_188a3d02.jpg",
      title: "Recent Activity",
      category: "Events"
    },
    {
      id: 42,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.40_d4f45c4d.jpg",
      title: "Student Moment",
      category: "Students"
    },
    {
      id: 43,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.40_edf8c4e4.jpg",
      title: "Class Session",
      category: "Academic"
    },
    {
      id: 44,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.41_158c3ca2.jpg",
      title: "Workshop Activity",
      category: "Workshop"
    },
    {
      id: 45,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.41_dfdb9f3f.jpg",
      title: "Group Discussion",
      category: "Discussion"
    },
    {
      id: 46,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.42_0ebd44a2.jpg",
      title: "Campus Event",
      category: "Events"
    },
    {
      id: 47,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.42_421380b3.jpg",
      title: "Student Gathering",
      category: "Students"
    },
    {
      id: 48,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.44_90592562.jpg",
      title: "Learning Session",
      category: "Academic"
    },
    {
      id: 49,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.44_bc784307.jpg",
      title: "Program Activity",
      category: "Program"
    },
    {
      id: 50,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.45_47f60a32.jpg",
      title: "Interactive Session",
      category: "Interactive"
    },
    {
      id: 51,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.45_cb6a50dc.jpg",
      title: "Campus Life",
      category: "Campus"
    },
    {
      id: 52,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.46_af467035.jpg",
      title: "Team Meeting",
      category: "Events"
    },
    {
      id: 53,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.47_871bb3f7.jpg",
      title: "Student Success",
      category: "Students"
    },
    {
      id: 54,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.48_82c694fd.jpg",
      title: "Workshop Session",
      category: "Workshop"
    },
    {
      id: 55,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.48_c9d350cb.jpg",
      title: "Group Work",
      category: "Academic"
    },
    {
      id: 56,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.48_f1d864bf.jpg",
      title: "Training Program",
      category: "Program"
    },
    {
      id: 57,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.49_aefb2ceb.jpg",
      title: "Event Highlight",
      category: "Events"
    },
    {
      id: 58,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.49_bf18a345.jpg",
      title: "Student Interaction",
      category: "Students"
    },
    {
      id: 59,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.50_1f39a299.jpg",
      title: "Campus Tour",
      category: "Campus"
    },
    {
      id: 60,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.50_6bbddfaf.jpg",
      title: "Learning Activity",
      category: "Academic"
    },
    {
      id: 61,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.51_6c641586.jpg",
      title: "Discussion Session",
      category: "Discussion"
    },
    {
      id: 62,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.52_13d46748.jpg",
      title: "Celebration Moment",
      category: "Events"
    },
    {
      id: 63,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.52_8958428b.jpg",
      title: "Student Program",
      category: "Program"
    },
    {
      id: 64,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.52_9b1f1736.jpg",
      title: "Interactive Learning",
      category: "Interactive"
    },
    {
      id: 65,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.53_3de3c989.jpg",
      title: "Campus Scene",
      category: "Campus"
    },
    {
      id: 66,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.54_5ac813e2.jpg",
      title: "Workshop Day",
      category: "Workshop"
    },
    {
      id: 67,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.54_9e3e6499.jpg",
      title: "Group Photo",
      category: "Students"
    },
    {
      id: 68,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.55_8a60aaa8.jpg",
      title: "Academic Session",
      category: "Academic"
    },
    {
      id: 69,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.56_1cc3d2a7.jpg",
      title: "Event Photo",
      category: "Events"
    },
    {
      id: 70,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.56_2bbb7e79.jpg",
      title: "Student Moment",
      category: "Students"
    },
    {
      id: 71,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.56_edd5fd75.jpg",
      title: "Campus Activity",
      category: "Campus"
    },
    {
      id: 72,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.57_87baa4c7.jpg",
      title: "Program Highlight",
      category: "Program"
    },
    {
      id: 73,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.58_1b974390.jpg",
      title: "Training Session",
      category: "Workshop"
    },
    {
      id: 74,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.58_31c90f17.jpg",
      title: "Learning Together",
      category: "Academic"
    },
    {
      id: 75,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.59_244c4322.jpg",
      title: "Discussion Group",
      category: "Discussion"
    },
    {
      id: 76,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.59_a563730d.jpg",
      title: "Event Celebration",
      category: "Events"
    },
    {
      id: 77,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.59_c7fec841.jpg",
      title: "Student Success",
      category: "Students"
    },
    {
      id: 78,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.59_e262acaa.jpg",
      title: "Campus Life",
      category: "Campus"
    },
    {
      id: 79,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.00_cea192f6.jpg",
      title: "Interactive Program",
      category: "Interactive"
    },
    {
      id: 80,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.00_d251d282.jpg",
      title: "Workshop Activity",
      category: "Workshop"
    },
    {
      id: 81,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.01_42648e18.jpg",
      title: "Academic Excellence",
      category: "Academic"
    },
    {
      id: 82,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.01_b026d1e1.jpg",
      title: "Program Moment",
      category: "Program"
    },
    {
      id: 83,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.01_d76eaf89.jpg",
      title: "Event Gathering",
      category: "Events"
    },
    {
      id: 84,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.02_3ba9adcb.jpg",
      title: "Student Achievement",
      category: "Students"
    },
    {
      id: 85,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.02_6572da69.jpg",
      title: "Campus Celebration",
      category: "Campus"
    },
    {
      id: 86,
      image: "/media/WhatsApp Image 2025-11-25 at 14.21.02_960d4847.jpg",
      title: "Special Event",
      category: "Events"
    },
    {
      id: 87,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.32_25a2f686.jpg",
      title: "People Review",
      category: "Review"
    },
    {
      id: 88,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.33_6f56bad7.jpg",
       title: "People Review",
      category: "Review"
    },
    {
      id: 89,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.33_f119686d.jpg",
      title: "People Review",
      category: "Review"
    },
    {
      id: 90,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.34_9e494406.jpg",
       title: "People Review",
      category: "Review"
    },
    {
      id: 91,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.36_047e6dd6.jpg",
      title: "People Review",
      category: "Review"
    },
    {
      id: 92,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.38_09cd3fdb.jpg",
      title: "People Review",
      category: "Review"
    },
    {
      id: 93,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.38_99e11fcd.jpg",
      title: "People Review",
      category: "Review"
    },
    {
      id: 94,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.38_c738f82f.jpg",
       title: "People Review",
      category: "Review"
    },
    {
      id: 95,
      image: "/media/WhatsApp Image 2025-11-25 at 14.20.39_97fb7273.jpg",
      title: "People Review",
      category: "Review"
    },

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
      <div className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 px-2"
          >
            Explore all the moments from Seva Shiksha Trust
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('recent')}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
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
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
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
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
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
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-4">
                    <h3 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2">{photo.title}</h3>
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
