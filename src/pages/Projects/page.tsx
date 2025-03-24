import { Github, ExternalLink } from "lucide-react";

import Ahanpress from"@/assets/projects/Ahanpress.png"
import Mentor from "@/assets/projects/Mentor.png"
import vibank from "@/assets/projects/vibank.jpg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "سایت فروش آهن پرس",
      description:
        "این سایت فروش آهن‌ آلات با استفاده از Next.js و Tailwind CSS طراحی شده است. وب‌سایت به کاربران امکان خرید انواع آهن‌آلات را با قابلیت جستجو، فیلتر و مشاهده جزئیات محصولات می‌دهد. همچنین، یک بخش برای ارسال درخواست‌های خاص و مشاوره به مشتریان نیز در نظر گرفته شده است. طراحی واکنش‌گرا و بهینه‌شده برای موبایل، باعث راحتی دسترسی به اطلاعات در هر دستگاهی می‌شود.",
      tags: ["Next.js", "Tailwind CSS", "E-Commerce", "Responsive Design"],
      links: {
        github: "https://github.com/seraprogrammer/ahanpress",
        demo: "https://ahanpress.com/",
      },
      image: Ahanpress,
      featured: true,
    },
    {
      title: "سایت منتورینگ",
      description:
        "این پروژه با React ساخته شده و برای ایجاد ارتباط مؤثر بین منتور‌ها و منتی‌ها طراحی شده است. کاربران می‌توانند پروفایل‌های خود را ایجاد کنند، مشاوره‌های آنلاین دریافت کنند و با منتورهای خود ارتباط برقرار کنند. این پلتفرم همچنین شامل سیستم رزرو جلسات و ارسال نظرات برای بهبود تجربه است.",
      tags: ["React", "Web Development", "Mentoring", "User Interaction"],
      links: {
        github: "https://github.com/seraprogrammer/mentor",
        demo: "https://mentorplatform.com/",
      },
      image: Mentor,
      featured: true,
    },
    {
      title: "پورتال بانکی برای یک شرکت مالی",
      description:
        "این پروژه با React طراحی شده و به شرکت‌های بانکی این امکان را می‌دهد که خدمات آنلاین بانکی را به مشتریان خود ارائه دهند. سایت شامل قابلیت‌هایی مانند مشاهده وضعیت حساب‌ها، انتقال پول، پرداخت قبوض و مشاهده تاریخچه تراکنش‌ها است. طراحی ساده و کاربرپسند آن، تجربه‌ای امن و راحت برای کاربران فراهم می‌کند.",
      tags: ["React", "Banking", "Financial Services", "Web Development"],
      links: {
        github: "https://github.com/",
        demo: "https://bankportal.com/",
      },
      image: vibank,
      featured: true,
    },
  ];
  

  return (
    <div
      className={`pt-40 min-h-screen p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 md:h-96 overflow-hidden rounded-lg ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card
              className={`md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-gray-900"
                  : "bg-gradient-to-br from-white to-gray-100"
              }`}
            >
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
