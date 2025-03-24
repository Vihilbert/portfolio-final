import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";
import Logo from "../../assets/logo.png";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark" ? "bg-[#090f1c] text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-4xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            توسعه‌دهنده فرانت‌اند، خلاق و مبتکر
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="about illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="about illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                سلام! من حسین اکبری هستم، توسعه‌دهنده فرانت‌اند خلاق و متخصص در استفاده از تکنولوژی‌های جدید. من در پروژه‌های مختلفی همکاری کرده‌ام و همزمان با توسعه وب، به هوش مصنوعی و کاربردهای آن در حوزه پزشکی نیز علاقه‌مندم. هدف من این است که با استفاده از ابزارهای نوین، تجربه کاربری بهینه و کارآمدی بسازم.
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  در حال حاضر، تمرکز اصلی من بر روی پروژه‌های فرانت‌اند است،
                </span>{" "}
                و در کنار آن، فعالیت‌هایی در زمینه هوش مصنوعی دارم که از آن برای بهبود فرآیندهای پزشکی و کاربردهای آن در حوزه سلامت استفاده می‌کنم.
              </p>

              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                من به‌ویژه در فریم‌ورک‌های جاوااسکریپت مانند React و Next.js تجربه دارم و سعی می‌کنم همیشه با جدیدترین شیوه‌های کدنویسی و طراحی، پروژه‌های جذاب و کارآمدی را به نتیجه برسانم.
              </p>

              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                در پروژه‌های مختلف، توانسته‌ام از تکنولوژی‌های مختلف مانند هوش مصنوعی برای بهینه‌سازی عملکرد وب‌سایت‌ها و اپلیکیشن‌ها استفاده کنم. هدف من ایجاد راه‌حل‌های نوآورانه و کارآمد برای چالش‌های مختلف است.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    به‌عنوان یک توسعه‌دهنده فرانت‌اند و فردی که به هوش مصنوعی علاقه‌مند است، همواره در تلاش هستم تا راه‌حل‌های نوآورانه و مفید برای مشکلات پیچیده پیدا کنم و با استفاده از تکنولوژی‌های جدید، تجربه‌ای منحصر به فرد برای کاربران ایجاد کنم.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      حسین اکبری، توسعه‌دهنده فرانت‌اند و هوش مصنوعی
                    </cite>
                    <div className="flex items-center gap-2" dir="ltr">
                      <img
                        className={`h-5 w-fit ${theme === "dark" ? "" : ""}`}
                        src={Logo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span>Hossein Akbari</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
