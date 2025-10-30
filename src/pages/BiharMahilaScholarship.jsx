import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"
import toast, { Toaster } from "react-hot-toast"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { motion } from "framer-motion"
import {
  Award,
  Users,
  FileText,
  CheckCircle,
  Calendar,
  Phone,
  MapPin,
  GraduationCap,
  Sparkles,
  Shield,
  User,
  BookOpen,
  CreditCard
} from "lucide-react"

const BiharMahilaScholarship = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm()

  const watchedEducation = watch("educationLevel")

  const stateOptions = [
    { value: "Bihar", label: "Bihar" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Delhi", label: "NCR / New Delhi" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Telangana", label: "Telangana" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Odisha", label: "Odisha" },
    { value: "Haryana", label: "Haryana" },
    { value: "Punjab", label: "Punjab" },
    { value: "Others", label: "अन्य राज्य" }
  ]

  const educationOptions = [
    { value: "intermediate", label: "इंटरमीडिएट / 10+2" },
    { value: "graduation", label: "स्नातक" },
    { value: "postgraduation", label: "स्नातकोत्तर / व्यावसायिक" }
  ]

  const coursesAfterInter = [
    { value: "engineering", label: "इंजीनियरिंग / B.Tech" },
    { value: "nursing", label: "बी.एससी. नर्सिंग" },
    { value: "paramedical", label: "पैरामेडिकल" },
    { value: "bba", label: "बीबीए / बीकॉम" },
    { value: "arts", label: "कला एवं मानविकी" }
  ]

  const coursesAfterGraduation = [
    { value: "mba", label: "एमबीए / प्रबंधन" },
    { value: "ma", label: "एमए / मानविकी" },
    { value: "msc", label: "एमएससी / विज्ञान" },
    { value: "law", label: "एलएलबी / विधि" },
    { value: "bEd", label: "बी.एड." }
  ]

  const coursesAfterPostGraduation = [
    { value: "research", label: "शोध / पीएचडी" },
    { value: "professional", label: "व्यावसायिक प्रमाणपत्र" },
    { value: "civilServices", label: "सिविल सेवा तैयारी" },
    { value: "international", label: "अंतरराष्ट्रीय छात्रवृत्ति" }
  ]

  const getCourseOptions = () => {
    if (watchedEducation?.value === "intermediate") return coursesAfterInter
    if (watchedEducation?.value === "graduation") return coursesAfterGraduation
    if (watchedEducation?.value === "postgraduation") return coursesAfterPostGraduation
    return []
  }

  const categoryOptions = [
    { value: "General", label: "सामान्य" },
    { value: "OBC", label: "ओबीसी" },
    { value: "SC", label: "एससी / एसटी" },
    { value: "Minority", label: "अल्पसंख्यक" }
  ]

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      console.log("Mahila Scholarship Form:", data)
      setShowPayment(true)
      toast.success("फॉर्म सफलतापूर्वक जमा हुआ! भुगतान जारी रखें।")
    } catch (error) {
      toast.error("फॉर्म सबमिट करने में समस्या आई, कृपया पुनः प्रयास करें।")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePayment = () => {
    toast.success("भुगतान सफल! आपकी पंजीकरण प्रक्रिया पूरी हो गई है।")
  }

  const highlights = [
    {
      icon: Award,
      title: "सरकारी पहल",
      description:
        "बिहार सरकार की विशेष छात्रवृत्ति योजना जो उच्च शिक्षा में महिलाओं को आर्थिक सहायता प्रदान करती है।"
    },
    {
      icon: Sparkles,
      title: "सिर्फ ₹99 आवेदन शुल्क",
      description:
        "सीमित प्रोसेसिंग शुल्क के साथ तेज़ आवेदन प्रक्रिया, जिससे अधिक छात्राएँ जुड़ सकें।"
    },
    {
      icon: GraduationCap,
      title: "कैरियर समर्थन",
      description:
        "अभ्यर्थियों को पाठ्यक्रम चयन, प्रवेश मार्गदर्शन और भविष्य की योजना में सहयोग।"
    }
  ]

  const eligibility = [
    "आवेदिका बिहार राज्य की निवासी होनी चाहिए और मान्यता प्राप्त संस्थान में प्रवेशित हो",
    "परिवार की वार्षिक आय निर्धारित सीमा (₹3 लाख तक) के भीतर हो",
    "10+2 या समकक्ष परीक्षा में न्यूनतम 60% अंक प्राप्त किए हों",
    "वर्तमान में स्नातक, व्यावसायिक या तकनीकी पाठ्यक्रम में अध्ययनरत छात्राएँ"
  ]

  const documents = [
    "हाल ही का पासपोर्ट आकार का फोटो",
    "आधार कार्ड और निवास प्रमाण पत्र",
    "पिछली परीक्षा की अंक तालिका",
    "संस्थान का प्रवेश प्रमाण पत्र",
    "परिवार की आय प्रमाण पत्र",
    "बैंक पासबुक की प्रति"
  ]

  const steps = [
    {
      title: "ऑनलाइन पंजीकरण",
      description:
        "फॉर्म में व्यक्तिगत, शैक्षणिक और बैंक विवरण भरें तथा ₹99 प्रोसेसिंग शुल्क का भुगतान करें।"
    },
    {
      title: "दस्तावेज़ अपलोड",
      description:
        "आवश्यक दस्तावेज़ों की स्पष्ट स्कैन कॉपी अपलोड करें और जमा करने से पहले विवरण जाँचें।"
    },
    {
      title: "सत्यापन एवं सहायता",
      description:
        "टीम द्वारा दस्तावेज़ सत्यापन के बाद पात्र अभ्यर्थियों को कॉल और ईमेल के माध्यम से मार्गदर्शन उपलब्ध कराया जाएगा।"
    }
  ]

  const support = [
    { label: "हेल्पलाइन", value: "+91 94305 21027" },
    { label: "ईमेल", value: "info@sevashiksha.com" },
    { label: "कार्यालय", value: "पटना, बिहार" }
  ]

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Toaster position="top-right" />
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex gap-2 bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              <Shield className="w-4 h-4" />
              बिहार महिला छात्रवृत्ति योजना 99
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              बिहार महिला छात्रावृत्ति योजना
            </h1>
            <p className="text-lg text-gray-600 leading-8">
              उच्च शिक्षा की ओर अग्रसर छात्राओं के लिए यह विशेष पहल आर्थिक बाधाओं को दूर करती है। मात्र ₹99 आवेदन शुल्क के साथ छात्राएँ गुणवत्तापूर्ण पाठ्यक्रमों तक पहुँच सकती हैं और मार्गदर्शकों से निरंतर सहयोग प्राप्त करती हैं।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="surface-card rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-600 mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://sevashiksha.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                अभी आवेदन करें
              </a>
              <a
                href="tel:+919430521027"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> सहायता केंद्र
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-pink-500 text-white p-6">
              <div className="text-sm uppercase tracking-widest text-white/80 mb-2">
                प्रोसेसिंग शुल्क
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-10 h-10" />
                <div>
                  <div className="text-xl font-semibold">₹99</div>
                  <div className="text-white/80 text-sm">अभ्यर्थियों के लिए एकमुश्त शुल्क</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-600" />
                <span className="font-semibold text-gray-800">पूरे बिहार में लागू</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-rose-600" />
                <span className="text-gray-600 text-sm">लाभार्थी: स्नातक, डिप्लोमा और व्यावसायिक पाठ्यक्रम की छात्राएँ</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-600" />
                <span className="text-gray-600 text-sm">हेल्पलाइन: +91 94305 21027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">महिला छात्रवृत्ति आवेदन फॉर्म</h2>
              <p className="text-white/80 text-sm md:text-base">नीचे दिए गए विवरण भरकर ₹99 प्रोसेसिंग शुल्क के साथ आवेदन पूरा करें</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-rose-600" />
                  कार्यक्रम विवरण
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      अध्ययन राज्य <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="studyState"
                      control={control}
                      rules={{ required: "कृपया राज्य चुनें" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={stateOptions}
                          placeholder="राज्य चुनें"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          isClearable
                        />
                      )}
                    />
                    {errors.studyState && <p className="text-red-500 text-sm mt-1">{errors.studyState.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      वर्तमान शिक्षा स्तर <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="educationLevel"
                      control={control}
                      rules={{ required: "कृपया शिक्षा स्तर चुनें" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={educationOptions}
                          placeholder="शिक्षा स्तर"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          isClearable
                        />
                      )}
                    />
                    {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      पाठ्यक्रम प्राथमिकता <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="preferredCourse"
                      control={control}
                      rules={{ required: "कृपया पाठ्यक्रम चुनें" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={getCourseOptions()}
                          placeholder="पाठ्यक्रम चुनें"
                          isDisabled={!watchedEducation}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          isClearable
                        />
                      )}
                    />
                    {errors.preferredCourse && <p className="text-red-500 text-sm mt-1">{errors.preferredCourse.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-amber-600" />
                  व्यक्तिगत जानकारी
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      पूरा नाम <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("fullName", { required: "कृपया अपना नाम दर्ज करें" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="अपना पूरा नाम लिखें"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      जन्म तिथि
                    </label>
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={field.onChange}
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          yearDropdownItemNumber={50}
                          scrollableYearDropdown
                          placeholderText="जन्म तिथि चुनें"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      मोबाइल नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("mobile", {
                        required: "कृपया मोबाइल नंबर दर्ज करें",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "मान्य मोबाइल नंबर दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="10 अंकों का मोबाइल नंबर"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      व्हाट्सएप नंबर
                    </label>
                    <input
                      {...register("whatsapp", {
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "मान्य व्हाट्सएप नंबर दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="यदि अलग है तो व्हाट्सएप नंबर दर्ज करें"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ईमेल पता
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "मान्य ईमेल पता दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="अपना ईमेल दर्ज करें"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      आधार नंबर
                    </label>
                    <input
                      {...register("aadhaar", {
                        pattern: {
                          value: /^\d{12}$/,
                          message: "12 अंकों का आधार नंबर दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="आधार नंबर (वैकल्पिक)"
                      maxLength={12}
                    />
                    {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      श्रेणी <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="category"
                      control={control}
                      rules={{ required: "कृपया श्रेणी चुनें" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={categoryOptions}
                          placeholder="श्रेणी चुनें"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          isClearable
                        />
                      )}
                    />
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  परिवार विवरण
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      अभिभावक का नाम
                    </label>
                    <input
                      {...register("guardianName")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="अभिभावक का नाम"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      अभिभावक का मोबाइल नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("guardianPhone", {
                        required: "अभिभावक का मोबाइल नंबर आवश्यक है",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "मान्य मोबाइल नंबर दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="अभिभावक का मोबाइल नंबर"
                    />
                    {errors.guardianPhone && <p className="text-red-500 text-sm mt-1">{errors.guardianPhone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      अभिभावक का व्यवसाय
                    </label>
                    <input
                      {...register("guardianOccupation")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="व्यवसाय / सेवा"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      वार्षिक पारिवारिक आय
                    </label>
                    <input
                      {...register("familyIncome")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="राशि रुपये में"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-lime-600" />
                  पता विवरण
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      पूरा पता <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("address", { required: "कृपया पूरा पता दर्ज करें" })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="घरेलू पता, पोस्ट ऑफिस, थाना आदि"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      जिला <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("district", { required: "कृपया जिला दर्ज करें" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="जिले का नाम"
                    />
                    {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      प्रखंड / ब्लॉक
                    </label>
                    <input
                      {...register("block")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="ब्लॉक / प्रखंड का नाम"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      पिन कोड
                    </label>
                    <input
                      {...register("pinCode", {
                        pattern: {
                          value: /^\d{6}$/,
                          message: "6 अंकों का पिन कोड दर्ज करें"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="पिन कोड"
                      maxLength={6}
                    />
                    {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="mahila-terms"
                    {...register("acceptTerms", { required: "कृपया नियमों से सहमति दें" })}
                    className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="mahila-terms" className="text-sm text-gray-700">
                    <span className="text-red-500">*</span> मैं पुष्टि करती हूँ कि सभी विवरण सत्य एवं पूर्ण हैं।
                  </label>
                </div>
                {errors.acceptTerms && <p className="text-red-500 text-sm mt-1">{errors.acceptTerms.message}</p>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 px-12 rounded-xl font-semibold text-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Processing..." : "सबमिट करें और भुगतान जारी रखें"}
                </button>
              </div>
            </form>
          </div>
          {showPayment && (
            <div className="mt-10 bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  भुगतान विवरण
                </h3>
                <p className="text-white/80 text-sm md:text-base">₹99 प्रोसेसिंग शुल्क ऑनलाइन जमा करें</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-rose-500">Processing Fee</div>
                    <div className="text-xl font-semibold text-gray-800">महिला छात्रवृत्ति आवेदन</div>
                  </div>
                  <span className="text-3xl font-bold text-rose-600">₹99</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• दस्तावेज़ सत्यापन और योग्यता जांच</li>
                  <li>• करियर काउंसलिंग एवं पाठ्यक्रम मार्गदर्शन</li>
                  <li>• छात्रवृत्ति अपडेट और सहायता</li>
                </ul>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handlePayment}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200"
                  >
                    भुगतान पूरा करें
                  </button>
                  <p className="text-xs text-gray-500 mt-3">UPI, नेट बैंकिंग, कार्ड भुगतान स्वीकार्य हैं</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-2xl shadow-lg">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">पात्रता मानदंड</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  आवेदन करने से पहले निम्न शर्तों को सुनिश्चित करें ताकि छात्रवृत्ति का लाभ प्राप्त हो सके।
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibility.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">आवेदन प्रक्रिया</h2>
              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">आवश्यक दस्तावेज़</h3>
              <div className="space-y-3">
                {documents.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-500 mt-1" />
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rose-600 via-rose-500 to-pink-500 text-white rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">प्रक्रिया सहायता केंद्र</h2>
                <p className="text-white/85 text-sm md:text-base">
                  आवेदन जमा करने के बाद 48 घंटों के भीतर हमारी सहायता टीम आपके दस्तावेज़ों की समीक्षा करती है और आवश्यकता होने पर आपको फोन या ईमेल पर संपर्क करती है।
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {support.map((item, index) => (
                    <div key={index} className="bg-white/10 border border-white/20 rounded-2xl p-4">
                      <div className="text-xs uppercase tracking-widest text-white/70 mb-1">
                        {item.label}
                      </div>
                      <div className="text-lg font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-xl">
                <h3 className="text-2xl font-bold mb-3">त्वरित आवेदन अनुस्मारक</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>₹99 का भुगतान UPI, नेट बैंकिंग या क्यूआर स्कैन से करें और रसीद संचित रखें।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>दस्तावेज़ स्पष्ट, बिना धुंधलेपन के और मोबाइल कैमरा से स्कैन किए हों।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>सभी संचार registered ईमेल और मोबाइल पर भेजे जाएंगे, कृपया नियमित रूप से जांचें।</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BiharMahilaScholarship
