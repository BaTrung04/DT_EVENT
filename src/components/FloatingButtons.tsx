"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function FloatingButtons() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const buttons = [
    {
      id: "phone",
      href: "tel:0982815682",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
      title: t("floatingButtons.call"),
      color: "from-green-500 to-green-600",
    },
    {
      id: "zalo",
      href: "https://zalo.me/0982815682",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 11 5.5 14.5 8zm-7 0L11 10.5 8.5 13 6 10.5 8.5 8zm7 5L11 10.5 14.5 13 17 15.5 14.5 13z" />
        </svg>
      ),
      title: t("floatingButtons.zalo"),
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "messenger",
      href: "https://m.me/cosmoentertainment",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 11 5.5 14.5 8zm-7 0L11 10.5 8.5 13 6 10.5 8.5 8zm7 5L11 10.5 14.5 13 17 15.5 14.5 13z" />
        </svg>
      ),
      title: t("floatingButtons.messenger"),
      color: "from-blue-400 to-blue-500",
    },
    {
      id: "facebook",
      href: "https://facebook.com/cosmoentertainment",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      title: t("floatingButtons.facebook"),
      color: "from-blue-600 to-blue-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-[999999] flex flex-col gap-3"
        style={{
          zIndex: 999999,
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {buttons.map((button) => (
          <motion.a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-gradient-to-r ${button.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
            style={{
              position: "relative",
              zIndex: 999999,
              transform: "translateZ(0)",
              isolation: "isolate",
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {button.icon}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {button.title}
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
