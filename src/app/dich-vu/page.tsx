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
  const { t } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      title: "Tổ chức sự kiện",
      icon: <FaCalendarAlt className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      description:
        "Tổ chức trọn gói các sự kiện như khai trương, lễ khánh thành, hội nghị, hội thảo chuyên nghiệp.",
      detail:
        "Chúng tôi cung cấp dịch vụ tổ chức sự kiện trọn gói từ A-Z: lên ý tưởng, kịch bản, thiết kế, thi công và vận hành. Đảm bảo sự kiện diễn ra chuyên nghiệp, ấn tượng và đúng mục tiêu thương hiệu.",
    },
    {
      title: "Biểu diễn nghệ thuật",
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      description:
        "Cung cấp các tiết mục nghệ thuật đặc sắc: ca sĩ, dancer, MC, ban nhạc...",
      detail:
        "Đa dạng các loại hình biểu diễn nghệ thuật: ca sĩ nổi tiếng, nhóm nhảy, múa LED, band acoustic, DJ... giúp sự kiện của bạn trở nên sôi động và thu hút.",
    },
    {
      title: "Truyền thông thương hiệu",
      icon: <FaBullhorn className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      description:
        "Xây dựng và triển khai chiến lược truyền thông giúp tăng nhận diện thương hiệu.",
      detail:
        "Chúng tôi hỗ trợ xây dựng chiến lược truyền thông tổng thể: online + offline, kết hợp social media, KOLs và quảng cáo để tăng độ phủ thương hiệu.",
    },
    {
      title: "Cho thuê thiết bị sự kiện",
      icon: <FaMicrophone className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      description:
        "Cung cấp âm thanh, ánh sáng, màn LED, sân khấu chuyên nghiệp.",
      detail:
        "Hệ thống thiết bị hiện đại: âm thanh line array, ánh sáng sân khấu, màn hình LED, backdrop... đáp ứng mọi quy mô sự kiện.",
    },
    {
      title: "Ý tưởng & kịch bản",
      icon: <FaLightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      description:
        "Sáng tạo concept độc đáo, xây dựng kịch bản sự kiện chuyên nghiệp.",
      detail:
        "Đội ngũ sáng tạo giúp bạn xây dựng concept riêng biệt, tạo dấu ấn mạnh mẽ và khác biệt cho từng sự kiện.",
    },
    {
      title: "Media & sản xuất",
      icon: <FaPhotoVideo className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      description:
        "Quay phim, chụp ảnh, livestream và sản xuất video chuyên nghiệp.",
      detail:
        "Dịch vụ media trọn gói: quay phim, chụp ảnh, livestream, dựng video highlight giúp lan tỏa sự kiện mạnh mẽ.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text">
            Dịch vụ của chúng tôi
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Giải pháp tổ chức sự kiện & truyền thông trọn gói chuyên nghiệp
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
