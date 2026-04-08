"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 gold-gradient opacity-20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 rounded-xl flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 gold-gradient rounded-full flex items-center justify-center mb-1">
                    <Image
                      src="/logo.svg"
                      alt="DT EVENT & TRAVEL - Professional Event Organization Services"
                      width={355}
                      height={355}
                      className="object-contain rounded-full border border-[#D4AF37] w-full h-full"
                    />{" "}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">{t("about.title")}</span>
            </h2>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("about.description")}
            </motion.p>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("about.subDescription")}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold gold-text mb-2">2026</div>
                <div className="text-gray-400">{t("about.founded")}</div>
              </motion.div> */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold gold-text mb-2">100+</div>
                <div className="text-gray-400">
                  {t("about.successfulEvents")}
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              className="gold-gradient text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              onClick={() => router.push("/ve-chung-toi")}
            >
              {t("about.learnMore")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
