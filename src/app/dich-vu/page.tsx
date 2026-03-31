"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBullhorn,
  FaMicrophone,
  FaLightbulb,
  FaPhotoVideo,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const { t, language, changeLanguage } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      title: t("services.eventOrganization.title"),
      icon: <FaCalendarAlt className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      description: t("services.eventOrganization.description"),
      detail: t("services.eventOrganization.detail"),
    },
    {
      title: t("services.artPerformance.title"),
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      description: t("services.artPerformance.description"),
      detail: t("services.artPerformance.detail"),
    },
    {
      title: t("services.brandMedia.title"),
      icon: <FaBullhorn className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      description: t("services.brandMedia.description"),
      detail: t("services.brandMedia.detail"),
    },
    {
      title: t("services.eventEquipment.title"),
      icon: <FaMicrophone className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      description: t("services.eventEquipment.description"),
      detail: t("services.eventEquipment.detail"),
    },
    {
      title: t("services.conceptScript.title"),
      icon: <FaLightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      description: t("services.conceptScript.description"),
      detail: t("services.conceptScript.detail"),
    },
    {
      title: t("services.mediaProduction.title"),
      icon: <FaPhotoVideo className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      description: t("services.mediaProduction.description"),
      detail: t("services.mediaProduction.detail"),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-6 py-20 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text">
            {t("services.title")}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/40 hover:scale-105 transition-all"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 gold-text">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* MODAL CHI TIẾT */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-gray-900 max-w-2xl w-full rounded-lg p-8 border border-[#D4AF37]/30"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 gold-text">
                {selectedService.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {selectedService.detail}
              </p>

              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 px-6 py-2 bg-[#D4AF37] text-black rounded"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
