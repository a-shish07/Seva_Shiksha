import React, { useState } from "react"
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
  Check
} from "lucide-react"
import {
  bsccsHighlights,
  bsccsDocuments,
  bsccsCourseGroups
} from "../components/home/BiharStudentCreditCardSection"

const BiharStudentCreditCard = () => {
  const [faqOpen, setFaqOpen] = useState(null)

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
    <div className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex gap-2 bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              <CreditCard className="w-4 h-4" />
              सरकार की प्रमुख योजना
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              बिहार स्टूडेंट क्रेडिट कार्ड योजना (BSCCS)
            </h1>
            <p className="text-lg text-gray-600 leading-8">
              आर्थिक रूप से कमजोर लेकिन मेधावी विद्यार्थियों के लिए बिहार सरकार की यह पहल उच्च शिक्षा के द्वार खोलती है। शिक्षा वित्त निगम द्वारा संचालित यह योजना छात्रों को बैंक से 4 लाख रुपये तक का ऋण उपलब्ध कराती है, जिसमें राज्य सरकार स्वयं गारंटर होती है।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {bsccsHighlights.map((item, index) => (
                <div key={index} className="surface-card rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.7nishchay-yuvaupmission.bihar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Apply Online
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918252845590"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Helpline
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6"
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
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
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
                  <h2 className="text-3xl font-bold text-gray-900">BSCCS Interest Form</h2>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    499 रुपये की प्रोसेसिंग फीस का भुगतान करने के लिए QR या बैंक विवरण का उपयोग करें। भुगतान के पश्चात हमारी टीम आपको कॉल करेगी।
                  </p>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile*</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter mobile"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="12th / Graduation"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course*</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select Course</option>
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="अपनी शिक्षा व फंडिंग आवश्यकता लिखें"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Interest
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 text-lg font-semibold bg-white/10 px-5 py-2 rounded-full border border-white/20">
                  <CreditCard className="w-5 h-5" />
                  Processing Fee
                </div>
                <div className="text-5xl font-black mt-6">₹499</div>
                <p className="text-white/80 mt-2 text-sm">
                  डेमो QR स्कैन कर शुल्क जमा करें और ट्रांजैक्शन का स्क्रीनशॉट अपलोड करें।
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
                    भुगतान सत्यापन के बाद आपकी प्रोसेसिंग शुरू होगी।
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-3 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-200 mt-0.5" />
                  <span>प्रोसेसिंग शुल्क वापसी के योग्य नहीं है।</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-200 mt-0.5" />
                  <span>स्वीकृति बैंक और सरकार की गाइडलाइन अनुसार।</span>
                </div>
              </div>
            </motion.div>
          </div>
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
                  <span>+91 9430521027</span>
                </div>
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
    </div>
  )
}

export default BiharStudentCreditCard
