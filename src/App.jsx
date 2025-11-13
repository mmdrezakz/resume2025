import React, { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const content = {
  fa: {
    sectionTitles: {
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "سوابق کاری",
      education: "تحصیلات",
    },
    name: "محمدرضا کاظمی",
    title: "طراح وب (frontEnd)",
    about: "طراحی وب سایت  با  دیزاین عالی و ریسپانسیو را بلدم و علاقه به برنامه نویسی دارم و حدود 5 سال هست که توی این حوزه مشغول یادگیری و کارهستم ",
    skills: ["HTML, CSS, JavaScript", "React", "ReactRouter", "ContextApi","Tailwind","Bootstrap","طراحی سایت ریسپانسیو"],
    experience: {
      role: "مهندس نرم افزار",
      company: "شرکت آریا کامین - فولادمبارکه| 1395–1400",
      desc: "انجام امور اداری و نرم افزاری",
    },
    education: "مهندسی نرم افزار کامپیوتر | دانشگاه خوراسگان ر تهران",
    contact: "ایمیل: mellboybeatprod@gmail..com    |     تلفن: 09921499833",
  },
  en: {
    sectionTitles: {
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
    name: "Amir Rezaei",
    title: "Web Designer & Graphic Artist",
    about: "Creative designer with experience in Persian typography and UI design",
    skills: ["HTML, CSS, JavaScript", "Persian Typography Design", "Adobe XD, Figma"],
    experience: {
      role: "UI Designer",
      company: "Ava Co. | 2021–2023",
      desc: "Designed web pages focused on Persian user experience",
    },
    education: "B.A. in Graphic Design | Tehran University of Art",
    contact: "Email: amir@example.com | Phone: +98-912-123-4567",
  },




};
  

const projects= [
  {
    title: "سایت دانلود فیلم ",
    title2: "برای مشاهده سایت فیلتر شکن را روشن کنید ",
    image: "/img/1.png", // ✅ درست
    link: "https://odmovie.vercel.app/",
  },
  {
    title: "سایت دانلود فیلم ",
    title2: "برای مشاهده سایت فیلتر شکن را روشن کنید ",
    image: "/img/2.png",
    link: "https://odmovie.vercel.app/",
  },
  {
    title: "سایت دانلود فیلم ",
    title2: "برای مشاهده سایت فیلتر شکن را روشن کنید ",
    image: "/img/3.png",
    link: "https://odmovie.vercel.app/",
  },
]
export default function App() {
  const [lang, setLang] = useState("fa");
  const [darkMode, setDarkMode] = useState(false);
  const data = content[lang];
  const isRTL = lang === "fa";

  return (
    <div
      className={`min-h-screen   transition-all duration-500 ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800"
      } ${isRTL ? "rtl" : "ltr"} font-sans px-4 py-8  relative`}
      dir={isRTL ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-0 rtl:space-x-reverse rtl:space-x-reverse">
          <button
            onClick={() => setLang("fa")}
            className={`px-4 py-2 rounded-l transition  ${
              lang === "fa" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-700 dark:text-white"
            } border hover:scale-105`}
          >
            فارسی
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded-r transition ${
              lang === "en" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-700 dark:text-white"
            } border hover:scale-105`}
          >
            English
          </button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 border rounded-full dark:text-white hover:scale-105 transition"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header */}
     <div className="flex justify-center items-center gap-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl mb-8 p-6 rounded-xl transition">
<img
  src="../img/profile.jpg"
  alt="Profile"
  className="mx-auto md:mx-0 border-4 border-blue-500 rounded-full w-32 object-cover aspect-square hover:scale-105 transition"
/>
        <div className="md:text-left text-center" style={{ order: isRTL ? 1 : 2 }}>
          <h1 className="font-extrabold text-blue-700 dark:text-blue-400 text-4xl">{data.name}</h1>
          <h2 className="mt-2 text-gray-400 dark:text-gray-300 text-lg">{data.title}</h2>
          
        </div>
      </div>

      {/* Sections */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <SectionCard title={data.sectionTitles.about}>{data.about} <div className="flex justify-center bg-white dark:bg-gray-400 mt-4 p-4 rounded-2xl w-1/3 text-gray-800 dark:text-white"><a className="flex justify-center" href="https://github.com/mmdrezakz"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>لینک گیت هابم</a></div></SectionCard>
        <SectionCard title={data.sectionTitles.skills}>
          <ul className="pl-5 list-disc">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title={data.sectionTitles.experience}>
          <h4 className="font-bold text-blue-600 dark:text-blue-400">{data.experience.role}</h4>
          <p>{data.experience.company}</p>
          <p>{data.experience.desc}</p>
        </SectionCard>
        <SectionCard title={data.sectionTitles.education}>{data.education}</SectionCard>
      </div>
{/* Projects Slider */}
<div className="mt-10 mb-6" title={isRTL ? "نمونه پروژه‌ها" : "Projects"}>
  <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-xl transition">

  <h2 className="flex justify-center items-center mb-6 font-semibold text-blue-700 dark:text-blue-400 text-3xl">پروژه</h2>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    navigation={true}
    className="!pb-10"
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center items-center">
          <div className="px-4 w-full max-w-7xl">
            <div className="bg-white dark:bg-gray-300 shadow-lg hover:shadow-2xl p-6 rounded-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-lg w-full h-[500px] object-cover transition duration-300"
              />
              <h5 className="mb-4 font-bold text-blue-700 dark:text-blue-400 text-2xl text-center">
                {project.title}
              </h5>
              <h4 className="mb-4 font-bold text-blue-700 dark:text-blue-400 text-2xl text-center">
                {project.title2}
              </h4>
              <div className="text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition"
                >
                  {isRTL ? "مشاهده سایت" : "View Website"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
    </div>
</div>
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-xl text-slate-800 dark:text-white text-xl transition">

      <div className="flex justify-center" >
        <p>{data.contact}</p>
      </div>
      </footer>
    </div>
  );
}

// Reusable Section Card
function SectionCard({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-xl hover:scale-[1.02] transition">
      <h3 className="mb-3 font-semibold text-blue-700 dark:text-blue-400 text-xl">{title}</h3>
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}