import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import toast, { Toaster } from "react-hot-toast"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { motion } from "framer-motion"
import {
  CreditCard,
  GraduationCap,
  CheckCircle,
  FileText,
  Users,
  Landmark,
  Shield,
  Calendar,
  MapPin,
  Phone,
  BookOpen,
  Sparkles,
  ArrowRight,
  Globe,
  Info,
  Check,
  User,
  Award
} from "lucide-react"
import {
  bsccsHighlights,
  bsccsDocuments,
  bsccsCourseGroups
} from "../components/home/BiharStudentCreditCardSection"

const BiharStudentCreditCard = () => {
  const navigate = useNavigate()
  const [faqOpen, setFaqOpen] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, control, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      console.log("Student Credit Card Registration:", data)

      // Redirect to payment page with form data
      navigate('/payment', {
        state: {
          formData: data,
          amount: 499,
          formType: 'Bihar Student Credit Card Registration'
        }
      })
    } catch (error) {
      toast.error("Error submitting form, please try again.")
      setIsLoading(false)
    }
  }



  const faqItems = [
    {
      question: "बीएससीसीएस योजना का मुख्य उद्देश्य क्या है?",
      answer:
        "राज्य में उच्च शिक्षा का स्तर बढ़ाना, आर्थिक रूप से कमजोर छात्रों को वित्तीय सहायता देना और बैंकिंग प्रक्रियाओं को सरल बनाना।"
    },
    {
      question: "लोन की राशि कितनी है और ब्याज दर क्या है?",
      answer:
        "छात्रों को 4 लाख रुपये तक का शिक्षा ऋण मिलता है। पढ़ाई पूर्ण होने के बाद 1 वर्ष की मोरेटोरियम अवधि मिलती है और ब्याज दर बेहद रियायती है।"
    },
    {
      question: "कौन आवेदन कर सकता है?",
      answer:
        "12वीं उत्तीर्ण विद्यार्थी जिन्होंने मान्यता प्राप्त उच्च शिक्षण संस्थान में दाखिला लिया है। उम्र सीमा सामान्य वर्ग के लिए 30 और SC/ST/महिला के लिए 33 वर्ष है।"
    },
    {
      question: "क्या गारंटर की आवश्यकता है?",
      answer:
        "नहीं। राज्य सरकार स्वयं गारंटर बनती है और शिक्षा वित्त निगम दस्तावेज़ी प्रक्रिया संभालता है।"
    }
  ]

  const steps = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "ऑनलाइन रजिस्ट्रेशन",
      description: "एपया पोर्टल पर लॉगिन कर आवेदन फॉर्म भरें और आवश्यक दस्तावेज अपलोड करें।"
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "काउंसलिंग और दस्तावेज सत्यापन",
      description: "जिला निबंधन एवं परामर्श केंद्र (DRCC) पर दस्तावेज सत्यापन और काउंसलिंग सम्पन्न होती है।"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "बैंक स्वीकृति",
      description: "सरकार के एमओयू वाले बैंकों से ऋण स्वीकृति एवं वितरण की प्रक्रिया पूरी होती है।"
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="container-custom px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 sm:gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-flex gap-2 bg-primary-100 text-primary-600 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>सरकार की प्रमुख योजना</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              बिहार स्टूडेंट क्रेडिट कार्ड योजना (BSCCS)
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-7 sm:leading-8">
              आर्थिक रूप से कमजोर लेकिन मेधावी विद्यार्थियों के लिए बिहार सरकार की यह पहल उच्च शिक्षा के द्वार खोलती है। शिक्षा वित्त निगम द्वारा संचालित यह योजना छात्रों को बैंक से 4 लाख रुपये तक का ऋण उपलब्ध कराती है, जिसमें राज्य सरकार स्वयं गारंटर होती है।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {bsccsHighlights.map((item, index) => (
                <div key={index} className="surface-card rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 text-primary-600 mb-2 sm:mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="https://www.7nishchay-yuvaupmission.bihar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
              >
                Apply Online
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918252845590"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" /> <span>Helpline</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white p-6">
              <div className="text-sm uppercase tracking-widest text-white/80 mb-2">
                Launch
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-10 h-10" />
                <div>
                  <div className="text-xl font-semibold">2 अक्टूबर 2016</div>
                  <div className="text-white/80 text-sm">शुरुआत मुख्यमंत्री सात निश्चय योजना के अंतर्गत</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-primary-100 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="font-semibold text-gray-800">सम्पूर्ण बिहार</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 text-sm">मान्यता प्राप्त कॉलेज एवं यूनिवर्सिटी में उपलब्ध कोर्स</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600 text-sm">लाभार्थी: 12वीं या समकक्ष उत्तीर्ण छात्र-छात्राएँ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">दस्तावेज़ चेकलिस्ट</h2>
                  <p className="text-gray-600 mt-2">
                    आवेदन के समय इन दस्तावेजों की स्कैन कॉपी तैयार रखें ताकि प्रक्रिया सुचारू रहे।
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {bsccsDocuments.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">आवेदन प्रक्रिया</h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white rounded-3xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">फीस संरचना एवं पुनर्भुगतान</h3>
                    <ul className="space-y-2 text-sm text-white/85">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-300 mt-1" />
                        <span>प्रोसेसिंग शुल्क ₹499 (डेमो)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-300 mt-1" />
                        <span>ऋण वापसी कोर्स समाप्ति के 1 वर्ष बाद या नौकरी लगने के 6 माह बाद</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-300 mt-1" />
                        <span>ब्याज दर सरकार द्वारा नियंत्रित</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center bg-white/10 p-5 rounded-2xl border border-white/30">
                    <div className="text-lg font-semibold">Contact</div>
                    <div className="flex items-center gap-2 justify-center mt-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 8252845590</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Phone className="w-4 h-4" />
                      <span>+91 8285344760</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl shadow-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Courses Covered</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    विज्ञान, वाणिज्य, कला, व्यावसायिक एवं प्रोफेशनल कोर्सेस सहित अनेक विकल्प।
                  </p>
                </div>
              </div>
              <a
                href="#bsccs-form"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Interest Form
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {bsccsCourseGroups.map((group, index) => (
                <div key={index} className="surface-card rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-primary-700">{group.title}</h4>
                    <span className="text-xs uppercase tracking-widest text-gray-400">BSCCS</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20" id="bsccs-form">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl shadow-lg">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Bihar Student Credit Card Registration</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Fill out the registration form to apply for Bihar Student Credit Card Scheme.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('fullName', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('mobileNumber', {
                          required: 'Mobile number is required',
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Please enter a valid mobile number'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter mobile number"
                      />
                      {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email ID
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter email address"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhaar Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('aadhaarNumber', {
                          required: 'Aadhaar number is required',
                          pattern: {
                            value: /^\d{12}$/,
                            message: 'Please enter a valid 12-digit Aadhaar number'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter Aadhaar number"
                      />
                      {errors.aadhaarNumber && <p className="text-red-500 text-sm mt-1">{errors.aadhaarNumber.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father's Name
                      </label>
                      <input
                        {...register('fatherName')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter father's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother's Name
                      </label>
                      <input
                        {...register('motherName')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter mother's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
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
                            maxDate={new Date()}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholderText="Select date of birth"
                          />
                        )}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={[
                              { value: 'Male', label: 'Male' },
                              { value: 'Female', label: 'Female' },
                              { value: 'Other', label: 'Other' }
                            ]}
                            placeholder="Select Gender"
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    Address Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Permanent Address
                      </label>
                      <textarea
                        {...register('permanentAddress')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter permanent address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        District
                      </label>
                      <input
                        {...register('district')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter district"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pin Code
                      </label>
                      <input
                        {...register('pinCode', {
                          pattern: {
                            value: /^\d{6}$/,
                            message: 'Please enter a valid 6-digit PIN code'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter PIN code"
                      />
                      {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Family Information */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Family Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father's Occupation
                      </label>
                      <input
                        {...register('fatherOccupation')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter father's occupation"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Family Income
                      </label>
                      <input
                        {...register('annualIncome')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter annual family income (₹)"
                      />
                    </div>
                  </div>
                </div>

                {/* Declaration */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      {...register('declaration')}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I declare that the information provided by me is true and correct. I agree to follow all rules and terms of Bihar Student Credit Card Scheme.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-12 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Submitting...' : 'SUBMIT & PAY'}
                  </button>
                </div>
              </form>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-100 rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <span className={`text-primary-600 transition-transform ${faqOpen === index ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    {faqOpen === index && (
                      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Need Guidance?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                हमारी काउंसलर टीम आपके दस्तावेज तैयार करने से लेकर बैंक स्वीकृति तक के हर चरण में मदद करती है।
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 8252845590</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 8285344760</span>
                </div>
              </div>
              <div className="mt-8 bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Visit DRCC</h4>
                <p className="text-white/80 text-sm">
                  जिला निबंधन एवं परामर्श केंद्र पर अपॉइंटमेंट प्राप्त कर दस्तावेज सत्यापन करवाएं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="top-right" />
    </div>
  )
}

export default BiharStudentCreditCard
