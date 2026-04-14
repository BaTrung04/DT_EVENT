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

  // const projects = [
  //   {
  //     titleKey: "projects.kiemToanNhaNuoc.title",
  //     descriptionKey: "projects.kiemToanNhaNuoc.description",
  //     categoryKey: "projects.kiemToanNhaNuoc.category",
  //     image: "/images/kiem-toan-nha-nuoc.jpg",
  //     date: "24/06/2025",
  //     dsc: (
  //       <main className="max-w-7xl mx-auto">
  //         {/* Title */}
  //         <h1 className="text-2xl md:text-3xl font-bold mb-3">
  //           Đại hội đại biểu Đảng bộ Kiểm toán nhà nước lần thứ VIII, nhiệm kỳ
  //           2025 - 2030
  //         </h1>

  //         {/* Meta */}
  //         <div className="text-sm text-gray-500 mb-4">Chính trị • 2025</div>

  //         {/* Intro */}
  //         <p className="font-semibold mb-4">
  //           Đại hội có sự tham dự của Chủ tịch Quốc hội Trần Thanh Mẫn cùng
  //           nhiều lãnh đạo cấp cao và 177 đại biểu.
  //         </p>

  //         {/* Content */}
  //         <div className="leading-7 text-white">
  //           <p>
  //             Đại hội đại biểu Đảng bộ Kiểm toán nhà nước lần thứ VIII diễn ra
  //             trong bối cảnh quan trọng, đánh dấu 30 năm phát triển của ngành.
  //           </p>

  //           <p>
  //             Nhiệm kỳ 2020–2025, Đảng bộ đã hoàn thành xuất sắc nhiệm vụ, khẳng
  //             định vai trò trong hệ thống chính trị.
  //           </p>

  //           <h2 className="text-xl font-semibold mt-6">
  //             Xây dựng Đảng vững mạnh
  //           </h2>

  //           <p>
  //             Công tác xây dựng Đảng được đổi mới toàn diện, tăng cường kiểm
  //             tra, giám sát và nâng cao năng lực lãnh đạo.
  //           </p>

  //           <p>
  //             Đã tổ chức 35 hội nghị với gần 22.000 lượt cán bộ, đảng viên tham
  //             dự.
  //           </p>

  //           <p>
  //             Nhiều tập thể, cá nhân được khen thưởng trong học tập và làm theo
  //             tư tưởng Hồ Chí Minh.
  //           </p>

  //           <h2 className="text-xl font-semibold mt-6">
  //             Nhiệm vụ chính trị nổi bật
  //           </h2>

  //           <p>
  //             Ban hành 4 nghị quyết chiến lược nhằm phát triển ngành đến năm
  //             2030.
  //           </p>

  //           <p>
  //             Tinh gọn bộ máy, nâng cao chất lượng nhân lực, đẩy mạnh chuyển đổi
  //             số.
  //           </p>

  //           <p>
  //             Kiến nghị xử lý tài chính hơn 281.000 tỷ đồng và sửa đổi hơn 1.000
  //             văn bản.
  //           </p>

  //           <p>Tỷ lệ thực hiện kiến nghị đạt 81%, cao hơn nhiệm kỳ trước.</p>

  //           <h2 className="text-xl font-semibold mt-6">
  //             Định hướng nhiệm kỳ 2025–2030
  //           </h2>

  //           <p>
  //             Phương châm: “Kỷ cương - liêm chính - chuyên nghiệp - chất lượng -
  //             hội nhập”.
  //           </p>

  //           <p>
  //             Tập trung nâng cao chất lượng kiểm toán, tăng cường phòng chống
  //             tham nhũng.
  //           </p>

  //           <p>
  //             Đẩy mạnh ứng dụng công nghệ, hoàn thiện pháp lý và phát triển
  //             nguồn nhân lực.
  //           </p>

  //           <p className="font-semibold">
  //             Mục tiêu: Xây dựng Kiểm toán nhà nước vững mạnh, khẳng định vai
  //             thế trong quản lý tài chính công.
  //           </p>
  //         </div>
  //       </main>
  //     ),
  //   },
  //   {
  //     titleKey: "projects.hoiThaoVNPT.title",
  //     descriptionKey: "projects.hoiThaoVNPT.description",
  //     categoryKey: "projects.hoiThaoVNPT.category",
  //     image: "/images/su-kien-vnpt.jpg",
  //     date: "08/05/2025",
  //     dsc: "Hội thảo VNPT",
  //   },
  //   {
  //     titleKey: "projects.hoiCho.title",
  //     descriptionKey: "projects.hoiCho.description",
  //     categoryKey: "projects.hoiCho.category",
  //     image: "/images/hoicho.jpg",
  //     date: "13/01/2024",
  //     dsc: (
  //       <div className="text-gray-300 leading-8">
  //         <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
  //           Lễ hội Làng Giáng Sinh phố đi bộ Nguyễn Xiển – điểm check-in hot
  //           nhất Hà Nội
  //         </h1>

  //         <p className="mb-4 text-lg text-gray-400">
  //           Lễ hội Làng Giáng Sinh tại phố đi bộ Nguyễn Xiển (Thanh Xuân, Hà
  //           Nội) đang trở thành địa điểm “gây sốt” mùa Noel năm nay. Với không
  //           gian trang trí rực rỡ, lung linh ánh đèn, đây là nơi lý tưởng để
  //           chụp ảnh và tận hưởng không khí Giáng Sinh.
  //         </p>
  //         <div className="h- flex items-center justify-center">
  //           <Image
  //             src={"/images/hoicho2.jpg"}
  //             alt={t("projects.hoiCho.title")}
  //             className="w-full h-full object-cover"
  //             width={500}
  //             height={500}
  //           />
  //         </div>
  //         <h2 className="text-2xl font-semibold text-white mt-6 mb-2 border-l-4 border-[#D4AF37] pl-3">
  //           Không gian Noel cực đẹp tại Nguyễn Xiển
  //         </h2>

  //         <p className="mb-4">
  //           Lễ hội tái hiện một “làng Giáng Sinh” đầy màu sắc với cây thông lớn,
  //           ánh sáng lung linh và nhiều tiểu cảnh độc đáo. Đây là một trong
  //           những địa điểm chụp ảnh Noel đẹp nhất tại Thanh Xuân, Hà Nội.
  //         </p>

  //         <h2 className="text-2xl font-semibold text-white mt-6 mb-2 border-l-4 border-[#D4AF37] pl-3">
  //           Trải nghiệm không khí lễ hội cuối năm
  //         </h2>

  //         <p className="mb-4">
  //           Không chỉ là nơi check-in, phố đi bộ Nguyễn Xiển còn mang đến nhiều
  //           hoạt động vui chơi, giải trí hấp dẫn, thu hút đông đảo giới trẻ và
  //           gia đình đến tham quan, trải nghiệm.
  //         </p>

  //         <h2 className="text-2xl font-semibold text-white mt-6 mb-2 border-l-4 border-[#D4AF37] pl-3">
  //           Địa điểm hot mùa Giáng Sinh 2023
  //         </h2>

  //         <p className="mb-6">
  //           Nếu bạn đang tìm kiếm địa điểm chụp ảnh đẹp hay muốn hòa mình vào
  //           không khí lễ hội Noel tại Hà Nội, Lễ hội Làng Giáng Sinh Nguyễn Xiển
  //           chắc chắn là lựa chọn không thể bỏ qua.
  //         </p>

  //         {/* Keywords */}
  //         <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4 text-sm">
  //           <strong className="text-[#D4AF37]">Keywords:</strong>
  //           <p className="mt-2 text-gray-400">
  //             Lễ hội Giáng Sinh 2023 Nguyễn Xiển, chụp ảnh Noel đẹp Hà Nội, địa
  //             điểm chụp ảnh Giáng Sinh, phố đi bộ Nguyễn Xiển, sự kiện Giáng
  //             Sinh Hà Nội, lễ hội cuối năm Hà Nội
  //           </p>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     titleKey: "projects.vnptKinhTeDoThi.title",
  //     descriptionKey: "projects.vnptKinhTeDoThi.description",
  //     categoryKey: "projects.vnptKinhTeDoThi.category",
  //     image: "/images/vnpt-kinh-te-do-thi.jpg",
  //     date: "16/05/2025",
  //     dsc: "VNPT Kinh Tế Đô Thị",
  //   },
  //   {
  //     titleKey: "projects.duLichQuangNinh.title",
  //     descriptionKey: "projects.duLichQuangNinh.description",
  //     categoryKey: "projects.duLichQuangNinh.category",
  //     image: "/images/du-lich-quang-ninh.png",
  //     date: "08/07/2025",
  //     dsc: "Du lịch Quảng Ninh",
  //   },
  //   {
  //     titleKey: "projects.vnptFamilyRun.title",
  //     descriptionKey: "projects.vnptFamilyRun.description",
  //     categoryKey: "projects.vnptFamilyRun.category",
  //     image: "/images/vnpt-family-run.png",
  //     date: "21/06/2025",
  //     dsc: "VNPT Family Run",
  //   },
  //   {
  //     titleKey: "projects.duLichQuyNhon.title",
  //     descriptionKey: "projects.duLichQuyNhon.description",
  //     categoryKey: "projects.duLichQuyNhon.category",
  //     image: "/images/du-lich-quy-nhon.webp",
  //     date: "08/08/2025",
  //     dsc: "Du lịch Quy Nhơn",
  //   },
  // ];

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
