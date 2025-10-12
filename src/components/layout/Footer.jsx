import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Youtube, Star } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-300 via-green-400 to-emerald-500 text-gray-900">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SEVA SHIKSHA</h1>
                <p className="text-orange-600">Trust</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-orange-600">SEVA SHIKSHA ABHIYAN</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              OUR MISSION IS TO MAKE FREE QUALITY HIGHER EDUCATION ACCESSIBLE TO EVERYONE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our core mission revolves around providing scholarships to students who are unable to afford tuition fees, 
              thereby removing financial barriers to education. We firmly believe that education is a fundamental right, 
              and it should be accessible to every individual, regardless of their financial circumstances.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-6 text-orange-600">Featured Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-seva-shiksha" className="text-gray-700 hover:text-orange-600 transition-colors flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses-after-10th" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Courses After 10th
                </Link>
              </li>
              <li>
                <Link to="/courses-after-12th" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Courses After 12th
                </Link>
              </li>
              <li>
                <Link to="/courses-after-graduation" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Courses After Graduation
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 text-orange-600">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-700">094305 21027</p>
                  <p className="text-gray-700">8709283592</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500 flex-shrink-0" size={20} />
                <p className="text-gray-700">info@sevashiksha.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700 leading-relaxed">
                  301, N.K Market ashiana digha road, ramnagri more opposite 9 to 9 super market, patna-800025
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-orange-600">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064110904198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@sevashikshatrust" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors transform hover:scale-110"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="https://g.co/kgs/J8tnxXu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-600 hover:bg-yellow-700 p-3 rounded-full transition-colors transform hover:scale-110"
                >
                  <Star size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Seva Shiksha Trust. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="inline-flex items-center">
                <img src="https://cdn.gtranslate.net/flags/32/en.png" alt="English" className="w-5 h-4 mr-2" />
                <span className="text-gray-600">English</span>
              </span>
              <span className="inline-flex items-center">
                <img src="https://cdn.gtranslate.net/flags/32/hi.png" alt="Hindi" className="w-5 h-4 mr-2" />
                <span className="text-gray-600">Hindi</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer