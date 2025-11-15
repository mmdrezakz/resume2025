import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";



import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CustomizedSwitches from "./Mui";
import ControlledSwitches from "./Mui";



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
    education: "مهندسی نرم افزار کامپیوتر | دانشگاه خوراسگان اصفهان",
    contact: "ایمیل: mellboybeatprod@gmail..com    |     تلفن: 09921499833",
  },
en: {
  sectionTitles: {
    about: "About Me",
    skills: "Skills",
    experience: "Work Experience",
    education: "Education",
  },
  name: "Mohammadreza Kazemi",
  title: "Front-End Web Developer",
  about:
    "I specialize in designing responsive and visually appealing websites. With over 5 years of experience in web development, I’m passionate about coding and continuously learning new technologies.",
  skills: [
    "HTML, CSS, JavaScript",
    "React",
    "React Router",
    "Context API",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
  ],
  experience: {
    role: "Software Engineer",
    company: "Arya Kamin Co. – Foolad Mobarakeh | 2016–2021",
    desc: "Handled administrative and software-related tasks within the organization.",
  },
  education: " Software Engineering | Khorasgan University, Isfahan",
  contact: "Email: mellboybeatprod@gmail.com | Phone: +98-992-149-9833",
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
      
      
    >
        

      {/* Controls */}
      <div className={`flex justify-between items-center mb-6 `} dir={isRTL ? "rtl" : "ltr"} lang={lang} >
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
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className={`  " text-sm " md:text-lg bg-gray-200 dark:bg-gray-700 px-4 py-2 border rounded-full dark:text-white hover:scale-105 transition`}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button> */}
        <button   onClick={() => setDarkMode(!darkMode)} >
          <ControlledSwitches  />
        </button>

      </div>

      {/* Header */}
     <div   className={` flex justify-center items-center gap-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl mb-8 p-6 rounded-xl transition`}   >
<img
  src="./profile.jpg"
  alt="Profile"
  className="mx-auto md:mx-0 border-4 border-blue-500 rounded-full w-32 object-cover aspect-square hover:scale-105 transition"
/>
        <div   className={` md:text-left text-center" `}style={{ order: isRTL ? 1 : 2 }}>
          <h1 lang={lang}  className={`${lang ==="en" &&  " text-sm "}  font-extrabold text-blue-700 dark:text-blue-400 md:text-4xl`}>{data.name}</h1>
          <h2 lang={lang} className={` ${lang ==="en" &&  " text-xs "} mt-2 text-gray-400 dark:text-gray-300 md:text-lg`}>{data.title}</h2>
          
        </div>
      </div>

      {/* Sections */}
      <div dir={isRTL ? "rtl" : "ltr"} lang={lang} className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <SectionCard title={data.sectionTitles.about}>{data.about} <div className="flex justify-center bg-white dark:bg-gray-400 mt-4 p-4 rounded-2xl w-1/3 text-gray-800 dark:text-white">
        <a className="flex justify-center items-center gap-1 w-full h-full text-xs lg:text-lg" href="https://github.com/mmdrezakz">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg><span>{lang ==="fa"  ? "لینک گیت هابم" : "Github Link"}</span></a></div></SectionCard>
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
<div className="mt-10 mb-6" >
  <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-xl transition">

  <h2 className="flex justify-center items-center mb-6 font-semibold text-blue-700 dark:text-blue-400 text-3xl" >{isRTL ? "نمونه پروژه" : "Project"}</h2>

<Swiper

  modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  autoplay={{ delay: 4000 }}
  pagination={{ clickable: true }}
  navigation={true}
  className="relative pb-12"
>

    {projects.map((project, index) => (
<SwiperSlide key={index} className="pb-16">
  <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl p-4 rounded-2xl h-full transition-all duration-300">
<a href="https://odmovie.vercel.app/">

<img
  src={project.image}
  alt={project.title}
  className="bg-center bg-fixed mb-6 rounded-xl w-full md:h-[500px] lg:h-[700px] object-cover transition duration-300"
/>
    <div className="flex flex-col flex-grow justify-between">
      <div>
        <h3 className="mb-2 font-bold text-blue-700 dark:text-blue-400 text-xl text-center">
          {isRTL ? project.title : "Download Movie"}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{isRTL ? project.title2 : "To access the website, kindly turn on your VPN."}</p>
      </div>

    </div>

  </a>
  </div>

</SwiperSlide>
    ))}
  </Swiper>
              <div className="mt-4 text-center">
        <a
          href="https://odmovie.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white transition"
        >
          {isRTL ? "مشاهده سایت" : "View Website"}
        </a>
      </div>
    </div>
</div>
      {/* Footer */}
      <footer  dir={isRTL ? "rtl" : "ltr"} lang={lang} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-xl text-slate-800 dark:text-white text-xl transition">

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