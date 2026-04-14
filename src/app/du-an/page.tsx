/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  listHoiNghi,
  listKeyvisual,
  listHoiCho,
  listTheThao,
  listTruyenThongThuongHieu,
  listTrienLamAnh,
  listBieuDienNgheThuat,
  listVanHoaDanGian,
  listDuLich,
} from "@/mockData/du-an/project";

const ProjectModal = ({
  project,
  onClose,
}: {
  project: {
    titleKey: string;
    categoryKey: string;
    date: string;
    descriptionKey: string;
    image: string;
    dsc: any;
  };
  onClose: () => void;
}) => {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 max-w-4xl w-full rounded-lg py-8 pl-8 pr-4 border border-[#D4AF37]/30 max-h-[90vh] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">
              {t(project.titleKey)}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-6 overflow-y-auto max-h-[70vh] laij-thanh-scroll">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover"
                width={800}
                height={450}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[#D4AF37] text-sm font-semibold">
                  {t(project.categoryKey)}
                </span>
              </div>
            </div>

            <div>
              <p className="text-gray-300 leading-relaxed">
                {t(project.descriptionKey)}
              </p>
            </div>
            <div className="mt-6 text-white">{project.dsc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);


  const projects = [
    //hoi nghi
    {
      titleKey: "projects.hoinghi.title",
      descriptionKey: "projects.hoinghi.description",
      categoryKey: "projects.hoinghi.category",
      image: "/images/project/hoinghi.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listHoiNghi.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //keyvisual
    {
      titleKey: "projects.ThietkeKeyvisual.title",
      descriptionKey: "projects.ThietkeKeyvisual.description",
      categoryKey: "projects.ThietkeKeyvisual.category",
      image: "/images/project/keyvisual.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listKeyvisual.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //hoicho
    {
      titleKey: "projects.hoicho.title",
      descriptionKey: "projects.hoicho.description",
      categoryKey: "projects.hoicho.category",
      image: "/images/project/hoicho.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listHoiCho.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //thethao
    {
      titleKey: "projects.thethao.title",
      descriptionKey: "projects.thethao.description",
      categoryKey: "projects.thethao.category",
      image: "/images/project/thethao.png",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listTheThao.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //truyenthongthuonghieu
    {
      titleKey: "projects.truyenthongthuonghieu.title",
      descriptionKey: "projects.truyenthongthuonghieu.description",
      categoryKey: "projects.truyenthongthuonghieu.category",
      image: "/images/project/truyenthongthuonghieu.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listTruyenThongThuongHieu.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //trienlamanh
    {
      titleKey: "projects.trienlamanh.title",
      descriptionKey: "projects.trienlamanh.description",
      categoryKey: "projects.trienlamanh.category",
      image: "/images/project/trienlamanh.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listTrienLamAnh.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //bieudiennghethuat
    {
      titleKey: "projects.bieudiennghethuat.title",
      descriptionKey: "projects.bieudiennghethuat.description",
      categoryKey: "projects.bieudiennghethuat.category",
      image: "/images/project/bieudiennghethuat.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listBieuDienNgheThuat.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //vanhoadangian
    {
      titleKey: "projects.vanhoadangian.title",
      descriptionKey: "projects.vanhoadangian.description",
      categoryKey: "projects.vanhoadangian.category",
      image: "/images/project/vanhoadangian.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listVanHoaDanGian.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
    //dulich
    {
      titleKey: "projects.dulich.title",
      descriptionKey: "projects.dulich.description",
      categoryKey: "projects.dulich.category",
      image: "/images/project/dulich.jpg",
      dsc: (
        <main className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {listDuLich.map((project, index) => (
            <div key={index} className="">
              <Image
                src={project.image}
                alt={t(project.title)}
                className="object-cover rounded-lg"
                width={800}
                height={450}
              />
              <h1 className="text-gray-300 text-center italic text-[14px]">
                {t(project.title)}
              </h1>
            </div>
          ))}
        </main>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section
        id="projects"
        className="py-20 bg-linear-to-b from-black to-[#0a0a0a] mt-10"
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
                className="group bg-black border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                    {/* <span className="text-gray-500 text-sm">
                        {project.date}
                      </span> */}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {t(project.titleKey)}
                  </h3>

                  {/* <p className="text-gray-400 leading-relaxed mb-4">
                    {t(project.descriptionKey)}
                  </p> */}

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
        </div>
      </section>

      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
