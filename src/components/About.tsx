"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useRouter } from "next/navigation";

export default function About() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 gold-gradient opacity-20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 gold-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-black font-bold text-4xl">DT</span>
                  </div>
                  <div className="text-white">
                    <div className="text-3xl font-bold gold-text mb-2">DT</div>
                    <div className="text-xl">Entertainment</div>
                    <div className="text-sm text-gray-400 mt-2">Since 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-text">{t("about.title")}</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("about.description")}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t("about.subDescription")}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold gold-text mb-2">2026</div>
                <div className="text-gray-400">{t("about.founded")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gold-text mb-2">100+</div>
                <div className="text-gray-400">
                  {t("about.successfulEvents")}
                </div>
              </div>
            </div>

            <button
              className="gold-gradient text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              onClick={() => router.push("/ve-chung-toi")}
            >
              {t("about.learnMore")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
