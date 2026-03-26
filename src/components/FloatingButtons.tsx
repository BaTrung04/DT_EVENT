"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaPhone, FaFacebookMessenger, FaArrowUp } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function FloatingButtons() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttons = [
    {
      id: "phone",
      href: "tel:0333703374",
      label: "0333703374",
      icon: <FaPhone className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: "zalo",
      href: "https://zalo.me/0333703374",
      label: t("floatingButtons.zalo"),
      icon: <SiZalo className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "messenger",
      href: "https://m.me/cosmoentertainment",
      label: t("floatingButtons.messenger"),
      icon: <FaFacebookMessenger className="w-5 h-5" />,
      color: "from-blue-400 to-blue-500",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    },
  };

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 left-6 flex flex-col gap-4 z-[9999]"
        initial="hidden"
        animate="visible"
      >
        {buttons.map((button) => (
          <motion.a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="group relative flex items-center z-10 hover:z-50"
          >
            {/* Ping (KHÔNG bắt chuột) */}
            <span className="absolute w-12 h-12 rounded-full bg-white/20 animate-ping pointer-events-none"></span>

            {/* Button */}
            <div
              className={`relative flex items-center rounded-full bg-gradient-to-r ${button.color} text-white shadow-lg overflow-hidden`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                {button.icon}
              </div>

              {/* Text */}
              <span className="max-w-0 group-hover:max-w-[200px] transition-all duration-500 overflow-hidden whitespace-nowrap pr-0 group-hover:pr-4 text-sm font-medium">
                {button.label}
              </span>
            </div>
          </motion.a>
        ))}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 50 }}
              transition={{
                type: "spring" as const,
                stiffness: 260,
                damping: 20,
              }}
              onClick={scrollToTop}
              className="group relative flex items-center z-10 hover:z-50"
            >
              {/* Ping (KHÔNG bắt chuột) */}
              <span className="absolute w-12 h-12 rounded-full bg-white/20 animate-ping pointer-events-none"></span>

              {/* Button */}
              <div className="relative flex items-center rounded-full bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg overflow-hidden">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <FaArrowUp className="w-5 h-5" />
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
