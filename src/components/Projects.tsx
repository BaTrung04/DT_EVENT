"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
  const { t } = useLanguage();
  const router = useRouter();
  const projects = [
    {
      titleKey: "projects.kiemToanNhaNuoc.title",
      descriptionKey: "projects.kiemToanNhaNuoc.description",
      categoryKey: "projects.kiemToanNhaNuoc.category",
      image: "/images/kiem-toan-nha-nuoc.jpg",
      date: "24/06/2025",
    },
    {
      titleKey: "projects.hoiThaoVNPT.title",
      descriptionKey: "projects.hoiThaoVNPT.description",
      categoryKey: "projects.hoiThaoVNPT.category",
      image: "/images/su-kien-vnpt.jpg",
      date: "08/05/2025",
    },
    {
      titleKey: "projects.vnptKinhTeDoThi.title",
      descriptionKey: "projects.vnptKinhTeDoThi.description",
      categoryKey: "projects.vnptKinhTeDoThi.category",
      image: "/images/vnpt-kinh-te-do-thi.jpg",
      date: "16/05/2025",
    },
    {
      titleKey: "projects.duLichQuangNinh.title",
      descriptionKey: "projects.duLichQuangNinh.description",
      categoryKey: "projects.duLichQuangNinh.category",
      image: "/images/du-lich-quang-ninh.png",
      date: "08/07/2025",
    },
    {
      titleKey: "projects.vnptFamilyRun.title",
      descriptionKey: "projects.vnptFamilyRun.description",
      categoryKey: "projects.vnptFamilyRun.category",
      image: "/images/vnpt-family-run.png",
      date: "21/06/2025",
    },
    {
      titleKey: "projects.duLichQuyNhon.title",
      descriptionKey: "projects.duLichQuyNhon.description",
      categoryKey: "projects.duLichQuyNhon.category",
      image: "/images/du-lich-quy-nhon.webp",
      date: "08/08/2025",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-black to-[#0a0a0a]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">{t("projects.title")}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#D4AF37] text-sm font-semibold">
                    {t(project.categoryKey)}
                  </span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {t(project.titleKey)}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {t(project.descriptionKey)}
                </p>

                <button className="text-[#D4AF37] font-semibold hover:text-[#F4E4BC] transition-colors duration-300 flex items-center gap-2">
                  {t("projects.viewDetails")}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => router.push("/du-an")}
          >
            {t("projects.viewAllProjects")}
          </button>
        </div>
      </div>
    </section>
  );
}
