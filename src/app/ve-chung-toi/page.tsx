"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <FaBuilding className="w-8 h-8" />,
      value: "2026",
      label: t("about.founded"),
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      value: "500+",
      label: t("about.successfulEvents"),
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
            {t("about.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-12 mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {t("about.subDescription")}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gold-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <button className="gold-gradient text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300">
              {t("about.learnMore")}
            </button>
          </motion.div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 text-center"
          >
            <FaUsers className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 gold-text">
              Đội ngũ chuyên nghiệp
            </h3>
            <p className="text-gray-300">
              Với đội ngũ nhân viên giàu kinh nghiệm và nhiệt huyết
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 text-center"
          >
            <FaCalendarAlt className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 gold-text">
              Kinh nghiệm lâu năm
            </h3>
            <p className="text-gray-300">
              Thực hiện thành công hàng trăm sự kiện lớn nhỏ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 text-center"
          >
            <FaTrophy className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 gold-text">
              Chất lượng hàng đầu
            </h3>
            <p className="text-gray-300">
              Cam kết mang đến dịch vụ tốt nhất cho khách hàng
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
