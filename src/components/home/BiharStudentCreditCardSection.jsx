import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  CreditCard,
  CheckCircle,
  FileText,
  GraduationCap,
  Landmark,
  Shield,
  Users,
  Phone,
  ArrowRight
} from "lucide-react"

export const bsccsHighlights = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "राज्य सरकार गारंटर",
    description:
      "लोन के लिए किसी अतिरिक्त गारंटर की जरूरत नहीं, बिहार सरकार स्वयं गारंटी देती है।"
  },
  {
    icon: <Landmark className="w-7 h-7" />,
    title: "4 लाख तक की सहायता",
    description:
      "उच्च शिक्षा के लिए छात्रों को बैंक से 4 लाख रुपये तक का क्रेडिट सपोर्ट मिलता है।"
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "30 वर्ष तक अवसर",
    description:
      "सामान्य वर्ग के लिए 30 वर्ष और एससी/एसटी व महिलाएं 33 वर्ष तक योजना का लाभ ले सकती हैं।"
  }
]

export const bsccsDocuments = [
  "आवेदक एवं सह-आवेदक का आधार व पैन",
  "10वीं और 12वीं की मार्कशीट व प्रमाण पत्र",
  "उच्च शिक्षण संस्थान में दाखिले का प्रमाण",
  "पहचान एवं निवास प्रमाण पत्र",
  "माता-पिता के आय व बैंक स्टेटमेंट",
  "आवेदक, माता-पिता और गारंटर के 2-2 पासपोर्ट फोटो"
]

export const bsccsCourseGroups = [
  {
    title: "For 12th (PCM)",
    items: ["B.Tech", "BCA", "B.Sc (IT, Agriculture, Fashion Tech)", "Direct Diploma 2nd Year"]
  },
  {
    title: "For 12th (PCB)",
    items: ["Paramedical", "Nursing", "Medical Journal", "Agriculture"]
  },
  {
    title: "For 12th (Commerce & Arts)",
    items: ["BBA", "BA LLB", "Hotel Management", "Mass Communication"]
  },
  {
    title: "For Graduation",
    items: ["MBA/MCA", "LLB", "Specialised Professional Programs"]
  },
  {
    title: "Girls Special Courses",
    items: ["GNM", "HM", "Fashion Designing", "Communication & Media"]
  },
  {
    title: "For 10th",
    items: ["Diploma in Engineering", "Skill-based Diplomas"]
  }
]

const BiharStudentCreditCardSection = ({ sectionId = "bihar-student-credit-card" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    preferredCourse: "",
    message: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Thank you for your interest in the Bihar Student Credit Card. Our team will connect with you shortly.")
    setFormData({
      name: "",
      email: "",
      mobile: "",
      qualification: "",
      preferredCourse: "",
      message: ""
    })
  }

  return (
    <section id={sectionId} className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 "
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            <CreditCard className="w-4 h-4" />
            Bihar Student Credit Card Scheme
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
            आर्थिक हल, युवाओं को बल
            <span className="block gradient-text">Bihar Student Credit Card (BSCCS)</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            कई मेधावी विद्यार्थी आर्थिक अभाव के कारण उच्च शिक्षा जारी नहीं रख पाते। बीएससीसीएस योजना ऐसे ही विद्यार्थियों को 2 अक्टूबर 2016 से सुलभ शिक्षा ऋण प्रदान कर रही है। आवेदन एपया पोर्टल से ऑनलाइन, प्रोसेस तेजी से और पारदर्शी।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">योजना की खास बातें</h3>
                  <p className="text-gray-600 mt-1">
                    शिक्षा वित्त निगम के सहयोग से राज्य सरकार और अनेक बैंकों की साझेदारी में युवाओं को वह अवसर मिलता है जिसके वे हकदार हैं।
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bsccsHighlights.map((highlight, index) => (
                  <div key={index} className="surface-card rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-3">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">कैसे करें आवेदन?</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    https://www.7nishchay-yuvaupmission.bihar.gov.in पर जाकर ऑनलाइन पंजीकरण करें। बैंक शाखा के चक्कर के बिना ही लगभग एक माह में स्वीकृति प्रक्रिया पूरी होती है।
                  </p>
                </div>
                <div className="text-sm bg-white/15 px-5 py-3 rounded-2xl border border-white/30">
                  <div className="font-semibold">Admission Helpline</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4" />
                    <span>+91 8252845590</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 8285344760</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-500 text-white shadow-lg">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">जरूरी दस्तावेज</h3>
                <p className="text-gray-600 text-sm">
                  आवेदन से पहले इन दस्तावेजों को तैयार रखें ताकि प्रक्रिया सहज रहे।
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
            <div className="mt-8 rounded-2xl bg-primary-50 border border-primary-100 p-6">
              <div className="flex items-center gap-3 text-primary-700 font-semibold text-lg">
                <GraduationCap className="w-6 h-6" />
                हर छात्र के भविष्य का लक्ष्य
              </div>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                राज्य सरकार की यह पहल उच्च शिक्षा के ग्रॉस एनरोलमेंट रेशियो को बढ़ाने, टैलेंट को पंख देने और बैंक प्रक्रियाओं को आसान बनाने के लिए है।
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Courses Offered</h3>
              <p className="text-gray-600 mt-2">
                अपनी रुचि और विषय के अनुसार इन कोर्सेस में प्रवेश लेकर उज्ज्वल भविष्य की शुरुआत करें।
              </p>
            </div>
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl shadow-lg">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">BSCCS Interest Form</h3>
                <p className="text-gray-600 mt-2">
                  499 रुपये की प्रोसेसिंग फीस का भुगतान करते ही हमारी टीम आपसे संपर्क करेगी और विस्तृत मार्गदर्शन देगी।
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile*</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Qualification*</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course*</label>
                <select
                  name="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select course</option>
                  {bsccsCourseGroups.flatMap((group) => group.items).map((item, index) => (
                    <option key={`${item}-${index}`} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="अपनी शिक्षा की प्राथमिकताएँ बताएँ"
                ></textarea>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit & Confirm Interest
                </button>
                <Link
                  to="/bihar-student-credit-card"
                  className="w-full md:w-auto px-8 py-3 border border-primary-200 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white rounded-3xl p-8 lg:p-10 shadow-2xl"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-3 text-lg font-semibold bg-white/10 px-5 py-2 rounded-full border border-white/20">
                <CreditCard className="w-5 h-5" />
                Processing Fee
              </div>
              <div className="text-5xl font-black mt-6">₹499</div>
              <Link
                to="/bihar-student-credit-card"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2 bg-white/10 border border-white/30 rounded-full text-sm font-semibold"
              >
                View Full Details
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-white/80 mt-2 text-sm">
                डेमो QR स्कैन कर के शुल्क जमा करें और भुगतान का स्क्रीनशॉट अपलोड करें।
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-inner flex flex-col items-center gap-4">
              <img
                src="https://via.placeholder.com/240x240.png?text=QR+Demo"
                alt="QR Demo"
                className="w-48 h-48 object-cover rounded-2xl"
              />
              <div className="text-center">
                <p className="text-sm text-gray-600 font-medium">Scan & Pay ₹499</p>
                <p className="text-xs text-gray-500 mt-1">
                  सफल भुगतान के बाद हमारी टीम सत्यापन करेगी।
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3 text-sm text-white/85">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-200 mt-0.5" />
                <span>भुगतान केवल प्रोसेसिंग उद्देश्यों के लिए है, रिफंड योग्य नहीं।</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-200 mt-0.5" />
                <span>योजना के लिए अंतिम स्वीकृति बैंक एवं सरकार की दिशानिर्देशों के अनुसार होगी।</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BiharStudentCreditCardSection
