"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { SiZalo, SiTiktok } from "react-icons/si";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-black border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="DT Entertainment"
                  width={40}
                  height={40}
                  className="object-contain rounded-full border border-[#D4AF37]"
                />{" "}
              </div>
              <span className="text-white text-xl font-bold gold-text">
                DT Entertainment
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576480288355"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://zalo.me/0333703374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                <SiZalo className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@dt_event_travel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {t("header.services")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {t("header.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {t("header.about")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {t("footer.contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">{t("footer.address")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">{t("footer.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">{t("footer.email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
