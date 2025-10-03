import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const HonoursSection = () => {
  const honours = [
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner25-1.png",
      alt: "Achievement Certificate 1",
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner26.png",
      alt: "Achievement Certificate 2",
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner39.png",
      alt: "Achievement Certificate 3",
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner36.png",
      alt: "Achievement Certificate 4",
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner19-1.png",
      alt: "Achievement Certificate 5",
    },
    {
      image: "https://sevashiksha.in/wp-content/uploads/2023/09/Banner42.png",
      alt: "Achievement Certificate 6",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gold-100 text-gold-600 px-5 py-3 rounded-full text-base font-semibold mb-4"
          >
            Recognitions
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Honours</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Recognition and achievements that validate our commitment to
            educational excellence and social service
          </p>
        </div>

        {/* Honours Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {honours.map((honour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(honour.image)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="w-full h-40 flex items-center justify-center bg-gray-100">
                  <img
                    src={honour.image}
                    alt={honour.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white bg-black/50 p-2 rounded-full hover:bg-black transition"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        )}

        {/* Floating Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                Proudly Recognized for Our Educational Excellence
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto text-gray-800">
                These honours reflect our unwavering dedication to providing
                quality education and making a positive impact in the lives of
                students across the nation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-gold-100">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-gold-100">Awards Received</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-gold-100">Commitment to Quality</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoursSection;
