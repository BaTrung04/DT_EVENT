"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const { t, language, changeLanguage } = useLanguage();

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: t("contact.phone"),
      content: t("footer.phone"),
      href: `tel:${t("footer.phone").replace("+84", "0").replace(/\s/g, "")}`,
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: t("contact.email"),
      content: t("footer.email"),
      href: `mailto:${t("footer.email")}`,
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: t("contact.address"),
      content: t("footer.address2"),
      href: "#",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: t("contact.address2"),
      content: t("footer.address"),
      href: "#",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: t("contact.workingHours"),
      content: t("contact.workingHoursContent"),
      href: "#",
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
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 gold-text">
              {t("contact.contactInfo")}
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 p-4 bg-gray-900 border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37]/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 gold-text">
                      {info.title}
                    </h3>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 gold-text">Gửi tin nhắn</h2>
            
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label className="block text-sm font-medium mb-2">Họ và tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/20 rounded-lg focus:border-[#D4AF37]/40 focus:outline-none transition-all duration-300"
                  placeholder="Nhập họ và tên của bạn"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/20 rounded-lg focus:border-[#D4AF37]/40 focus:outline-none transition-all duration-300"
                  placeholder="Nhập email của bạn"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label className="block text-sm font-medium mb-2">Tin nhắn</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/20 rounded-lg focus:border-[#D4AF37]/40 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Nhập nội dung tin nhắn"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full gold-gradient text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Gửi tin nhắn
              </motion.button>
            </form>
          </motion.div> */}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 gold-text">
            {t("contact.quickResponse")}
          </h2>
          <p className="text-gray-300 mb-6">{t("contact.quickResponseDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
              {t("contact.professional")}
            </span>
            <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
              {t("contact.fast")}
            </span>
            <span className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
              {t("contact.effective")}
            </span>
          </div>
        </motion.div> */}
      </main>

      <Footer />
    </div>
  );
}
