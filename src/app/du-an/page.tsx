"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaRocket,
  FaPalette,
  FaAd,
  FaDesktop,
  FaTv,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "projects.eventAnniversary.title",
      descriptionKey: "projects.eventAnniversary.description",
      categoryKey: "projects.eventAnniversary.category",
      icon: <FaCalendarAlt className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      titleKey: "projects.productLaunch.title",
      descriptionKey: "projects.productLaunch.description",
      categoryKey: "projects.productLaunch.category",
      icon: <FaRocket className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      titleKey: "projects.posterDesign.title",
      descriptionKey: "projects.posterDesign.description",
      categoryKey: "projects.posterDesign.category",
      icon: <FaPalette className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      titleKey: "projects.digitalAds.title",
      descriptionKey: "projects.digitalAds.description",
      categoryKey: "projects.digitalAds.category",
      icon: <FaAd className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      titleKey: "projects.digitalSignage.title",
      descriptionKey: "projects.digitalSignage.description",
      categoryKey: "projects.digitalSignage.category",
      icon: <FaDesktop className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      titleKey: "projects.ledScreens.title",
      descriptionKey: "projects.ledScreens.description",
      categoryKey: "projects.ledScreens.category",
      icon: <FaTv className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text">
            {t("projects.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-6`}
              >
                {project.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm rounded-full mb-4">
                {t(project.categoryKey)}
              </span>
              <h3 className="text-2xl font-bold mb-4 gold-text">
                {t(project.titleKey)}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t(project.descriptionKey)}
              </p>
              <button className="gold-gradient text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300">
                {t("projects.viewDetails")}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="gold-gradient text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300">
            {t("projects.viewAllProjects")}
          </button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
