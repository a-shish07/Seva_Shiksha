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

  const { register, handleSubmit, control, formState: { errors } } = useForm()



  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      console.log("Mahila Scholarship Form:", data)
      setShowPayment(true)
      toast.success("पंजीकरण फॉर्म सफलतापूर्वक जमा हुआ! अगला चरण जारी रखें।")
    } catch (error) {
      toast.error("फॉर्म सबमिट करने में समस्या आई, कृपया पुनः प्रयास करें।")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePayment = () => {
    toast.success("पंजीकरण सफल! आप सेवा शिक्षा महिला रोज़गार अभियान का हिस्सा बन गए हैं।")
  }

  const highlights = [
    {
      icon: Award,
      title: "महिला सशक्तिकरण",
      description:
        "महिलाओं को आर्थिक रूप से मजबूत बनाने का प्रयास और आत्मनिर्भरता एवं आत्मविश्वास बढ़ाना।"
    },
    {
      icon: Sparkles,
      title: "कौशल प्रशिक्षण",
      description:
        "Communication प्रशिक्षण, मार्केटिंग एवं सेल्स स्किल, और डिजिटल स्किल्स के माध्यम से ऑनलाइन कार्य के अवसर।"
    },
    {
      icon: GraduationCap,
      title: "शिक्षा और जागरूकता",
      description:
        "महिला शिक्षा को बढ़ावा देना और सामाजिक एवं आर्थिक अधिकारों के प्रति जागरूकता बढ़ाना।"
    },
    {
      icon: Users,
      title: "कम निवेश, अधिक अवसर",
      description:
        "न्यूनतम शुल्क के साथ ज्यादा कमाई के अवसर प्रदान करना।"
    }
  ]

  const eligibility = [
    "आवेदिका बिहार राज्य की निवासी होनी चाहिए",
    "महिलाओं को घर बैठे या सामूहिक रूप से कार्य करने का अवसर",
    "कौशल प्रशिक्षण प्राप्त करने के इच्छुक महिलाएँ",
    "आत्मनिर्भर बनने और आर्थिक स्थिति सुधारने की इच्छा",
    "सामाजिक एवं आर्थिक अधिकारों के प्रति जागरूकता प्राप्त करना"
  ]

  const documents = [
    "हाल ही का पासपोर्ट आकार का फोटो",
    "आधार कार्ड और निवास प्रमाण पत्र",
    "शैक्षिक योग्यता का प्रमाण पत्र",
    "मोबाइल नंबर और ईमेल पता",
    "बैंक खाता विवरण (वैकल्पिक)",
    "कौशल प्रशिक्षण में रुचि का प्रमाण"
  ]

  const steps = [
    {
      title: "ऑनलाइन पंजीकरण",
      description:
        "फॉर्म में व्यक्तिगत विवरण भरें और सेवा शिक्षा महिला रोज़गार अभियान में शामिल हों।"
    },
    {
      title: "कौशल प्रशिक्षण",
      description:
        "Communication, मार्केटिंग, सेल्स और डिजिटल स्किल्स का प्रशिक्षण प्राप्त करें।"
    },
    {
      title: "रोजगार अवसर",
      description:
        "प्रशिक्षण प्राप्त करने के बाद घर बैठे या सामूहिक रूप से कार्य करने के अवसर प्राप्त करें।"
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
              सेवा शिक्षा महिला रोज़गार अभियान
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
SEVA SHIKSHA MAHILA ROJGAR ABHIYAAN
            </h1>
            <p className="text-lg text-gray-600 leading-8">
              सेवा शिक्षा महिला रोज़गार अभियान एक सामाजिक पहल है, जिसका उद्देश्य भारत की महिलाओं को शिक्षा और रोजगार के अवसर प्रदान कर उन्हें आत्मनिर्भर बनाना है। यह अभियान महिलाओं को घर बैठे व सामूहिक रूप से कार्य करने, अपनी आर्थिक स्थिति सुधारने और आत्मविश्वास बढ़ाने में मदद करता है।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <h2 className="text-2xl font-bold mb-2">SEVA SHIKSHA MAHILA ROJGAR ABHIYAAN</h2>
              <p className="text-white/80 text-sm md:text-base">REGISTRATION FORM</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-amber-600" />
                  1. Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("fullName", { required: "Please enter your full name" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father/Husband Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("fatherHusbandName", { required: "Please enter father/husband name" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter father/husband name"
                    />
                    {errors.fatherHusbandName && <p className="text-red-500 text-sm mt-1">{errors.fatherHusbandName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{ required: "Please select date of birth" }}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={field.onChange}
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          yearDropdownItemNumber={50}
                          scrollableYearDropdown
                          placeholderText="Select date of birth"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      )}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("age", {
                        required: "Please enter your age",
                        min: { value: 18, message: "Age must be at least 18" },
                        max: { value: 65, message: "Age must be less than 65" }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter your age"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Please enter a valid mobile number"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alternate Mobile Number
                    </label>
                    <input
                      {...register("alternateMobile", {
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Please enter a valid mobile number"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter alternate mobile number"
                    />
                    {errors.alternateMobile && <p className="text-red-500 text-sm mt-1">{errors.alternateMobile.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  2. Education Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="highestQualification"
                      control={control}
                      rules={{ required: "Please select highest qualification" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={[
                            { value: "10th", label: "10th" },
                            { value: "12th", label: "12th" },
                            { value: "graduation", label: "Graduation" },
                            { value: "other", label: "Other" }
                          ]}
                          placeholder="Select highest qualification"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          isClearable
                        />
                      )}
                    />
                    {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience (if any) <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="experience-yes"
                          {...register("hasExperience", { required: "Please select experience status" })}
                          value="yes"
                          className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                        />
                        <label htmlFor="experience-yes" className="ml-2 text-sm text-gray-700">Yes</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="experience-no"
                          {...register("hasExperience", { required: "Please select experience status" })}
                          value="no"
                          className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                        />
                        <label htmlFor="experience-no" className="ml-2 text-sm text-gray-700">No</label>
                      </div>
                    </div>
                    {errors.hasExperience && <p className="text-red-500 text-sm mt-1">{errors.hasExperience.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-lime-600" />
                  Complete Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("district", { required: "Please enter district" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter district"
                    />
                    {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("state", { required: "Please enter state" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter state"
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pin Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("pinCode", {
                        required: "Please enter pin code",
                        pattern: {
                          value: /^\d{6}$/,
                          message: "Please enter 6-digit pin code"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter pin code"
                      maxLength={6}
                    />
                    {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  3. ID Proof
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("aadhaar", {
                        required: "Aadhar number is required",
                        pattern: {
                          value: /^\d{12}$/,
                          message: "Please enter 12-digit Aadhar number"
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter 12-digit Aadhar number"
                      maxLength={12}
                    />
                    {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Declaration</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    I declare that all the information I have provided is correct and any misrepresentation may result in my registration being cancelled.
                  </p>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="declaration-checkbox"
                      {...register("acceptDeclaration", { required: "Please accept the declaration" })}
                      className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="declaration-checkbox" className="text-sm text-gray-700">
                      <span className="text-red-500">*</span> I confirm that all information provided is true and accurate.
                    </label>
                  </div>
                  {errors.acceptDeclaration && <p className="text-red-500 text-sm mt-1">{errors.acceptDeclaration.message}</p>}
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Terms & Conditions</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>1. This campaign is for women only.</p>
                  <p>2. The registration fee of ₹99/- is non-refundable.</p>
                  <p>3. The information provided must be accurate.</p>
                  <p>4. Income is dependent on performance and not guaranteed.</p>
                  <p>5. Failure to comply with these rules may result in cancellation of membership.</p>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    {...register("acceptTerms", { required: "Please accept the terms and conditions" })}
                    className="h-5 w-5 text-rose-600 focus:ring-rose-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="terms-checkbox" className="text-sm text-gray-700">
                    <span className="text-red-500">*</span> I accept the terms and conditions.
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
                  {isLoading ? "Processing..." : "Register Now"}
                </button>
              </div>
            </form>
          </div>
          {showPayment && (
            <div className="mt-10 bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  पंजीकरण विवरण
                </h3>
                <p className="text-white/80 text-sm md:text-base">सेवा शिक्षा महिला रोज़गार अभियान में शामिल हों</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-rose-500">Registration Fee</div>
                    <div className="text-xl font-semibold text-gray-800">महिला रोज़गार अभियान</div>
                  </div>
                  <span className="text-3xl font-bold text-rose-600">₹99</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• कौशल प्रशिक्षण और मार्गदर्शन</li>
                  <li>• रोजगार अवसर और आर्थिक सहायता</li>
                  <li>• महिला सशक्तिकरण और आत्मविश्वास निर्माण</li>
                </ul>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handlePayment}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200"
                  >
                    पंजीकरण पूरा करें
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
                <h2 className="text-3xl font-bold text-gray-900">महिला सशक्तिकरण पात्रता</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  सेवा शिक्षा महिला रोज़गार अभियान में शामिल होने के लिए निम्न योग्यताएँ आवश्यक हैं।
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">महिला सशक्तिकरण प्रक्रिया</h2>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">पंजीकरण के लिए आवश्यक दस्तावेज़</h3>
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
                <h2 className="text-3xl font-bold">महिला सशक्तिकरण सहायता केंद्र</h2>
                <p className="text-white/85 text-sm md:text-base">
                  पंजीकरण के बाद हमारी टीम आपको कौशल प्रशिक्षण, रोजगार अवसरों और महिला सशक्तिकरण कार्यक्रमों के बारे में जानकारी प्रदान करती है।
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
                <h3 className="text-2xl font-bold mb-3">महिला सशक्तिकरण अनुस्मारक</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>₹99 पंजीकरण शुल्क का भुगतान करके महिला रोज़गार अभियान का हिस्सा बनें।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>कौशल प्रशिक्षण प्राप्त करके घर बैठे या सामूहिक रूप से कार्य करने के अवसर प्राप्त करें।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5" />
                    <span>आत्मनिर्भर बनने और आर्थिक स्थिति सुधारने के लिए हमारी टीम आपकी मदद करेगी।</span>
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
