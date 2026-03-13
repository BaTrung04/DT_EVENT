"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "projects.eventAnniversary.title",
      descriptionKey: "projects.eventAnniversary.description",
      categoryKey: "projects.eventAnniversary.category",
      date: "Ngày 23 tháng 07 năm 2025",
    },
    {
      titleKey: "projects.productLaunch.title",
      descriptionKey: "projects.productLaunch.description",
      categoryKey: "projects.productLaunch.category",
      date: "Ngày 23 tháng 07 năm 2025",
    },
    {
      titleKey: "projects.posterDesign.title",
      descriptionKey: "projects.posterDesign.description",
      categoryKey: "projects.posterDesign.category",
      date: "Ngày 08 tháng 07 năm 2025",
    },
    {
      titleKey: "projects.digitalAds.title",
      descriptionKey: "projects.digitalAds.description",
      categoryKey: "projects.digitalAds.category",
      date: "Ngày 08 tháng 07 năm 2025",
    },
    {
      titleKey: "projects.digitalSignage.title",
      descriptionKey: "projects.digitalSignage.description",
      categoryKey: "projects.digitalSignage.category",
      date: "Ngày 08 tháng 07 năm 2025",
    },
    {
      titleKey: "projects.ledScreens.title",
      descriptionKey: "projects.ledScreens.description",
      categoryKey: "projects.ledScreens.category",
      date: "Ngày 08 tháng 07 năm 2025",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]"
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
              <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">
                    {t(project.titleKey).charAt(0)}
                  </span>
                </div>
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
          <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            {t("projects.viewAllProjects")}
          </button>
        </div>
      </div>
    </section>
  );
}
