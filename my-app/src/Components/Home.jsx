import React from "react";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import homeLogo from "../Assets/home-main.svg";
import myImg from "../Assets/avatar.svg";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "برنامه نویس هوش مصنوعی",
          "طراح رابط کاربری",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

function Home() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">سلام! 👋🏻</h1>
          <h2 className="text-3xl font-semibold mb-6">من <span className="text-purple-400">حسین اکبری</span> هستم</h2>
          <div className="text-lg">
            <Type />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={homeLogo} alt="home pic" className="max-h-96" />
        </div>
      </div>
      <Home2 />
    </section>
  );
}

function Home2() {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">بگذارید خودم را معرفی کنم</h2>
          <p className="text-lg leading-relaxed">
            من به برنامه نویسی علاقه‌مند شدم و حداقل چیزی یاد گرفته‌ام، فکر می‌کنم… 🤷‍♂️
            <br />
            من در زبان‌های کلاسیک مثل <span className="text-purple-400">C++، جاوااسکریپت و Go</span> مسلط هستم.
            <br />
            علاقه‌مند به ساخت <span className="text-purple-400">فناوری‌های وب و بلاکچین</span> هستم.
            <br />
            از <span className="text-purple-400">Node.js، React.js و Next.js</span> برای توسعه استفاده می‌کنم.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
          <Tilt>
            <img src={myImg} className="rounded-lg shadow-lg" alt="avatar" />
          </Tilt>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">مرا در اینجا پیدا کنید</h2>
        <p className="text-lg mb-4">لطفاً با من <span className="text-purple-400">ارتباط</span> برقرار کنید.</p>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="https://github.com/soumyajit4419" target="_blank" className="text-white hover:text-purple-400"><AiFillGithub /></a>
          <a href="https://twitter.com/Soumyajit4419" target="_blank" className="text-white hover:text-purple-400"><AiOutlineTwitter /></a>
          <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" className="text-white hover:text-purple-400"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/soumyajit4419" target="_blank" className="text-white hover:text-purple-400"><AiFillInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
