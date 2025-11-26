import React, { useState, useCallback, useRef, useEffect } from 'react'
import { X, ZoomIn, ExternalLink, RefreshCw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('recent')
  const [imageStates, setImageStates] = useState({})
  const [retryCount, setRetryCount] = useState({})
  const observerRef = useRef(null)

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
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/471282544_1104244524484997_3705503312272963239_n.jpg",
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
      image: "https://sevashiksha.in/wp-content/uploads/2025/07/505810538_1151555623658124_4009253968960611969_n.jpg",
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
    {
      id: 47,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/6-768x674.jpeg",
      title: "Academic Event",
      category: "Archive"
    },
    {
      id: 48,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/7-768x432.jpeg",
      title: "Event Highlights",
      category: "Archive"
    },
    {
      id: 49,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/1-768x775.jpeg",
      title: "Student Success",
      category: "Archive"
    },
    {
      id: 50,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner42-768x485.png",
      title: "Anniversary Banner",
      category: "Archive"
    },
    {
      id: 51,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner39-768x538.png",
      title: "Promotional Banner",
      category: "Archive"
    },
    {
      id: 52,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner36-768x525.png",
      title: "Event Banner",
      category: "Archive"
    },
    {
      id: 53,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner25-1-768x757.png",
      title: "Information Banner",
      category: "Archive"
    },
    {
      id: 54,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner26-768x768.png",
      title: "Program Banner",
      category: "Archive"
    },
    {
      id: 55,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner19-1-768x775.png",
      title: "Course Banner",
      category: "Archive"
    },
    {
      id: 56,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner18-768x768.png",
      title: "Achievements Banner",
      category: "Archive"
    },
    {
      id: 57,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner10-768x768.png",
      title: "Success Banner",
      category: "Archive"
    },
    {
      id: 58,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner25-768x757.png",
      title: "Learning Banner",
      category: "Archive"
    },
    {
      id: 59,
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner2-768x768.png",
      title: "Opportunity Banner",
      category: "Archive"
    },
    {
      id: 60,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG_20221010_172907-Copy.jpg",
      title: "Campus Photo",
      category: "Archive"
    },
    {
      id: 61,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG-20210920-WA0002-Copy-768x353.jpg",
      title: "Student Activity",
      category: "Archive"
    },
    {
      id: 62,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG-20210920-WA0040-Copy-768x576.jpg",
      title: "Group Activity",
      category: "Archive"
    },
    {
      id: 63,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG-20220427-WA0008-Copy-768x576.jpg",
      title: "Meeting Session",
      category: "Archive"
    },
    {
      id: 64,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG-20220427-WA0013-Copy-768x576.jpg",
      title: "Discussion Class",
      category: "Archive"
    },
    {
      id: 65,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/IMG-20221212-WA0004-Copy.jpg",
      title: "Celebration Moment",
      category: "Archive"
    },
    {
      id: 66,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-6-768x576.jpeg",
      title: "Student Interaction",
      category: "Archive"
    },
    {
      id: 67,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-7-768x576.jpeg",
      title: "Workshop Activity",
      category: "Archive"
    },
    {
      id: 68,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.41.26-PM-768x573.jpeg",
      title: "Team Work",
      category: "Archive"
    },
    {
      id: 69,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-4.42.06-PM-768x576.jpeg",
      title: "Class Photo",
      category: "Archive"
    },
    {
      id: 70,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-1-768x521.jpeg",
      title: "Event Moment",
      category: "Archive"
    },
    {
      id: 71,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-2-768x342.jpeg",
      title: "Success Story",
      category: "Archive"
    },
    {
      id: 72,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-3-768x344.jpeg",
      title: "Learning Session",
      category: "Archive"
    },
    {
      id: 73,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-4-768x768.jpeg",
      title: "Group Gathering",
      category: "Archive"
    },
    {
      id: 74,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-5-768x576.jpeg",
      title: "Campus Event",
      category: "Archive"
    },
    {
      id: 75,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-6.jpeg",
      title: "Program Highlight",
      category: "Archive"
    },
    {
      id: 76,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-7.jpeg",
      title: "Student Moment",
      category: "Archive"
    },
    {
      id: 77,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-8.jpeg",
      title: "Achievement",
      category: "Archive"
    },
    {
      id: 78,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-9.jpeg",
      title: "Celebration Time",
      category: "Archive"
    },
    {
      id: 79,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.41-PM-768x736.jpeg",
      title: "Happy Moment",
      category: "Archive"
    },
    {
      id: 80,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.44-PM-1-768x364.jpeg",
      title: "Event Coverage",
      category: "Archive"
    },
    {
      id: 81,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.44-PM-2-768x346.jpeg",
      title: "Activity Shot",
      category: "Archive"
    },
    {
      id: 82,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.44-PM-3-768x354.jpeg",
      title: "Workshop Day",
      category: "Archive"
    },
    {
      id: 83,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.44-PM-4.jpeg",
      title: "Training Moment",
      category: "Archive"
    },
    {
      id: 84,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.15.44-PM-768x509.jpeg",
      title: "Program Moment",
      category: "Archive"
    },
    {
      id: 85,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-1.jpeg",
      title: "Campus Scene",
      category: "Archive"
    },
    {
      id: 86,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-2-768x576.jpeg",
      title: "Student Life",
      category: "Archive"
    },
    {
      id: 87,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-3-768x576.jpeg",
      title: "Academic Session",
      category: "Archive"
    },
    {
      id: 88,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-4-768x576.jpeg",
      title: "Class Together",
      category: "Archive"
    },
    {
      id: 89,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-5-768x432.jpeg",
      title: "Learning Time",
      category: "Archive"
    },
    {
      id: 90,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-6-768x432.jpeg",
      title: "Workshop Session",
      category: "Archive"
    },
    {
      id: 91,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-7.jpeg",
      title: "Student Success",
      category: "Archive"
    },
    {
      id: 92,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-8.jpeg",
      title: "Achievement Photo",
      category: "Archive"
    },
    {
      id: 93,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-9.jpeg",
      title: "Celebration Photo",
      category: "Archive"
    },
    {
      id: 94,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.35-PM-768x576.jpeg",
      title: "Event Photo",
      category: "Archive"
    },
    {
      id: 95,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.36-PM-1.jpeg",
      title: "Group Photo",
      category: "Archive"
    },
    {
      id: 96,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.36-PM-2-768x576.jpeg",
      title: "Team Meeting",
      category: "Archive"
    },
    {
      id: 97,
      image: "https://sevashiksha.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-2.31.36-PM-3-768x641.jpeg",
      title: "Success Moment",
      category: "Archive"
    }
  ]

  const currentGallery = activeTab === 'recent' ? recentGallery : archivedGallery

  // Image loading states management
  const updateImageState = useCallback((imageId, state) => {
    setImageStates(prev => ({
      ...prev,
      [imageId]: { ...prev[imageId], ...state }
    }))
  }, [])

  const handleImageLoad = useCallback((imageId) => {
    updateImageState(imageId, { 
      isLoaded: true, 
      isLoading: false, 
      hasError: false 
    })
  }, [updateImageState])

  const handleImageError = useCallback((imageId) => {
    const currentRetry = retryCount[imageId] || 0
    const maxRetries = 2
    
    if (currentRetry < maxRetries) {
      // Retry loading the image
      setRetryCount(prev => ({ ...prev, [imageId]: currentRetry + 1 }))
      updateImageState(imageId, { 
        isLoading: true, 
        hasError: false,
        retrying: true 
      })
      // Force reload by adding timestamp
      setTimeout(() => {
        updateImageState(imageId, { 
          shouldReload: Date.now(),
          retrying: false 
        })
      }, 1000)
    } else {
      // Set fallback image
      updateImageState(imageId, { 
        isLoaded: false, 
        isLoading: false, 
        hasError: true,
        fallbackImage: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&q=80`
      })
    }
  }, [updateImageState, retryCount])

  const handleImageLoadStart = useCallback((imageId) => {
    updateImageState(imageId, { 
      isLoading: true, 
      isLoaded: false, 
      hasError: false 
    })
  }, [updateImageState])

  // Reset image states when tab changes
  useEffect(() => {
    setImageStates({})
    setRetryCount({})
  }, [activeTab])

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  // Lazy loading intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            const imageId = img.dataset.imageId
            if (!imageStates[imageId]?.isLoaded && !imageStates[imageId]?.isLoading) {
              handleImageLoadStart(imageId)
            }
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [imageStates, handleImageLoadStart])

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Image component with full loading states
  const GalleryImage = ({ item, index }) => {
    const imageState = imageStates[item.id] || {}
    const imgRef = useRef(null)
    
    useEffect(() => {
      if (imgRef.current && observerRef.current) {
        observerRef.current.observe(imgRef.current)
      }
      
      return () => {
        if (imgRef.current && observerRef.current) {
          observerRef.current.unobserve(imgRef.current)
        }
      }
    }, [])

    const getImageSrc = () => {
      if (imageState.hasError && imageState.fallbackImage) {
        return imageState.fallbackImage
      }
      const baseUrl = item.image
      return imageState.shouldReload ? `${baseUrl}?v=${imageState.shouldReload}` : baseUrl
    }

    return (
      <div 
        ref={imgRef}
        data-image-id={item.id}
        className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
      >
        <div className="aspect-square overflow-hidden relative">
          {/* Loading skeleton */}
          {imageState.isLoading && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
              <div className="absolute inset-0 shimmer-effect"></div>
            </div>
          )}

          {/* Retry indicator */}
          {imageState.retrying && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
              <div className="text-center">
                <RefreshCw className="w-6 h-6 text-primary-600 animate-spin mx-auto mb-2" />
                <p className="text-sm text-gray-600">Retrying...</p>
              </div>
            </div>
          )}

          {/* Error state */}
          {imageState.hasError && !imageState.retrying && (
            <div className="absolute inset-0 bg-red-50 border-2 border-red-200 flex items-center justify-center z-10">
              <div className="text-center p-4">
                <div className="text-red-500 mb-2">⚠️</div>
                <p className="text-xs text-red-600">Image unavailable</p>
                <p className="text-xs text-gray-500 mt-1">Using fallback</p>
              </div>
            </div>
          )}

          {/* Main image */}
          <img
            src={getImageSrc()}
            alt={item.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
              imageState.isLoading ? 'opacity-0' : 'opacity-100'
            } ${imageState.hasError ? 'opacity-70' : ''}`}
            loading="lazy"
            onLoadStart={() => handleImageLoadStart(item.id)}
            onLoad={() => handleImageLoad(item.id)}
            onError={() => handleImageError(item.id)}
          />

          {/* Success indicator for loaded images */}
          {imageState.isLoaded && !imageState.hasError && (
            <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.category}</p>
          </div>
        </div>
      </div>
    )
  }

  // Modal Image component with advanced loading
  const ModalImage = ({ src, alt, title, category }) => {
    const [modalImageState, setModalImageState] = useState({
      isLoading: true,
      isLoaded: false,
      hasError: false
    })
    const [highResLoaded, setHighResLoaded] = useState(false)
    
    const handleModalImageLoad = () => {
      setModalImageState({
        isLoading: false,
        isLoaded: true,
        hasError: false
      })
    }

    const handleModalImageError = () => {
      setModalImageState({
        isLoading: false,
        isLoaded: false,
        hasError: true
      })
    }

    // Create high resolution version
    const getHighResImage = (url) => {
      return url.replace(/(\.[^.]+)$/, '_hd$1').replace(/w=\d+/, 'w=1200').replace(/h=\d+/, 'h=800')
    }

    useEffect(() => {
      // Preload high resolution image
      const highResImg = new Image()
      highResImg.onload = () => setHighResLoaded(true)
      highResImg.src = getHighResImage(src)
    }, [src])

    return (
      <div className="relative">
        {/* Loading state */}
        {modalImageState.isLoading && (
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading full size image...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {modalImageState.hasError && (
          <div className="w-full h-96 bg-red-50 flex items-center justify-center border-2 border-red-200">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🚫</div>
              <p className="text-red-600 font-medium mb-2">Failed to load image</p>
              <p className="text-gray-600 text-sm">The image could not be loaded at this time</p>
            </div>
          </div>
        )}

        {/* Main image */}
        <img
          src={highResLoaded ? getHighResImage(src) : src}
          alt={alt}
          className={`w-full h-auto max-h-[70vh] object-contain transition-opacity duration-500 ${
            modalImageState.isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleModalImageLoad}
          onError={handleModalImageError}
        />

        {/* High-res indicator */}
        {highResLoaded && modalImageState.isLoaded && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-80">
            HD Quality
          </div>
        )}

        {/* Image info */}
        <div className="p-6 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                {category}
              </p>
            </div>
            
            {/* Image status indicators */}
            <div className="flex flex-col gap-2">
              {modalImageState.isLoaded && (
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Loaded
                </div>
              )}
              {highResLoaded && (
                <div className="flex items-center gap-1 text-blue-600 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  HD Ready
                </div>
              )}
            </div>
          </div>

          {/* Additional metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 pt-4 border-t">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Gallery Image
            </div>
            {highResLoaded && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                High Resolution
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-base font-semibold mb-4"
          >
            Our Moments
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            GALLERY
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of memorable moments, events, and activities that showcase 
            our vibrant educational community and student life
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'recent'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Recent Gallery
            </button>
            <button
              onClick={() => setActiveTab('archived')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'archived'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Archive Gallery
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {currentGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openImageModal(item);
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <GalleryImage item={item} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative max-w-4xl max-h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={24} />
                </button>
                
                {/* Modal Image with Loading States */}
                <ModalImage 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  title={selectedImage.title}
                  category={selectedImage.category}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default GallerySection