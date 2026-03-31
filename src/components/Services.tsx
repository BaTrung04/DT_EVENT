"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaBullhorn } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Services() {
  const { t } = useLanguage();
  const router = useRouter();

  const services = [
    {
      titleKey: "services.eventOrganization.title",
      descriptionKey: "services.eventOrganization.description",
      icon: <FaCalendarAlt className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      titleKey: "services.artPerformance.title",
      descriptionKey: "services.artPerformance.description",
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      titleKey: "services.brandMedia.title",
      descriptionKey: "services.brandMedia.description",
      icon: <FaBullhorn className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("services.title")}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/40 hover:scale-105 transition-all"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 gold-text">
                {t(service.titleKey)}
              </h3>

              <p className="text-gray-400 text-sm">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="gold-gradient text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/dich-vu")}
          >
            {t("services.learnMore")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
