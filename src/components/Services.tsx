"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "services.eventOrganization.title",
      descriptionKey: "services.eventOrganization.description",
      icon: "🎭",
    },
    {
      titleKey: "services.artPerformance.title",
      descriptionKey: "services.artPerformance.description",
      icon: "🎪",
    },
    {
      titleKey: "services.brandMedia.title",
      descriptionKey: "services.brandMedia.description",
      icon: "📢",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
              variants={itemVariants}
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
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
            className="gold-gradient text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("services.learnMore")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
