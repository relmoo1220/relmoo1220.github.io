"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";

export default function IntroSection() {
  return (
    <div className="flex flex-col w-full h-full justify-center space-y-4">
      <div className="w-full flex space-x-2 items-center">
        <div>
          <img
            src="/gif/l.gif"
            alt="l-gif"
            className="h-32 w-32 md:h-48 md:w-48"
          />
        </div>
        <div>
          <img
            src="/gif/ryuk.gif"
            alt="ryuk-gif"
            className="h-32 w-32 md:h-48 md:w-48"
          />
        </div>
        <div>
          <img
            src="/gif/kira.gif"
            alt="kira-gif"
            className="h-32 w-32 md:h-48 md:w-48"
          />
        </div>
      </div>
      <div className="text-4xl text-amber-500 font-black">
        <span className="text-amber-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
          Hey, I&apos;m Zhen Cai
          <svg
            className="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.654866 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth="2"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="flex gap-2 text-amber-700 items-center">
          <IconUser size={16} />
          <span>Full Stack Software Engineer</span>
        </div>
        <div className="flex gap-2 text-amber-700 items-center">
          <IconMapPin size={16} />
          <span>Singapore</span>
        </div>
      </div>
      <div className="">
        I&apos;m a full stack software engineer, always excited to explore new
        ways to make web applications faster, more scalable, and user-friendly,
        enjoying collaboration with teams to deliver solutions that make a real
        impact.
      </div>
      <div className="">
        Outside of work, I enjoy brewing my own coffee and occasionally roasting
        my own beans, as I have a strong appreciation for the craft behind a
        great cup.
      </div>
      <div className="">
        Feel free to use the links below to reach out to me or check out my
        GitHub to explore some of my personal projects.
      </div>
      <div className="flex gap-3">
        <a
          className="rounded-full border-2 p-2 text-amber-700 hover:text-amber-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:shadow-amber-300/60"
          href="mailto:angzhencai@gmail.com"
        >
          <IconMail size={20} />
        </a>
        <a
          className="rounded-full border-2 p-2 text-amber-700 hover:text-amber-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:shadow-amber-300/60"
          href="https://www.linkedin.com/in/ang-zhen-cai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={20} />
        </a>
        <a
          className="rounded-full border-2 p-2 text-amber-700 hover:text-amber-500 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:shadow-amber-300/60"
          href="https://github.com/relmoo1220"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={20} />
        </a>
      </div>
    </div>
  );
}
