"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "vi", name: "Tiếng Việt", flag: "" },
    { code: "en", name: "English", flag: "" },
    { code: "ko", name: "한국어", flag: "" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-40 bg-black/90 border-b border-[#D4AF37]/20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            variants={linkVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="DT EVENT & TRAVEL - Professional Event Organization Services Logo"
                width={40}
                height={40}
                className="object-contain rounded-full border border-[#D4AF37]"
              />

              <span className="text-white text-xl font-bold gold-text">
                DT Event
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {[
              { key: "home", href: "/" },
              { key: "projects", href: "/du-an" },
              { key: "services", href: "/dich-vu" },
              { key: "about", href: "/ve-chung-toi" },
              { key: "contact", href: "/lien-he" },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 inline-block ${
                    pathname === item.href
                      ? "text-[#D4AF37] font-semibold"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {t(`header.${item.key}`)}
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="relative"
              ref={dropdownRef}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 gold-gradient text-black px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <motion.svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: isLangDropdownOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-black border border-[#D4AF37]/20 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code as "vi" | "en" | "ko");
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#1a1a1a] transition-colors duration-300 ${
                          language === lang.code
                            ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                            : "text-white"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              className="gold-gradient text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("header.contactNow")}
            </motion.button>
          </div>

          <motion.button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
                animate={{
                  d: isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16",
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-[#D4AF37]/20 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { key: "home", href: "/" },
                  { key: "services", href: "/dich-vu" },
                  { key: "projects", href: "/du-an" },
                  { key: "about", href: "/ve-chung-toi" },
                  { key: "contact", href: "/lien-he" },
                ].map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors duration-300 inline-block ${
                        pathname === item.href
                          ? "text-[#D4AF37] font-semibold"
                          : "text-white hover:text-[#D4AF37]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`header.${item.key}`)}
                    </Link>
                  </motion.div>
                ))}

                <motion.div className="relative" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center space-x-2 gold-gradient text-black px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{currentLang?.flag}</span>
                    <span>{currentLang?.name}</span>
                    <motion.svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isLangDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        rotate: isLangDropdownOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>

                  <AnimatePresence>
                    {isLangDropdownOpen && (
                      <motion.div
                        className="absolute left-0 mt-2 w-48 bg-black border border-[#D4AF37]/20 rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {languages.map((lang, index) => (
                          <motion.button
                            key={lang.code}
                            onClick={() => {
                              changeLanguage(lang.code as "vi" | "en" | "ko");
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#1a1a1a] transition-colors duration-300 ${
                              language === lang.code
                                ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                                : "text-white"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.button
                  className="gold-gradient text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.contactNow")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
