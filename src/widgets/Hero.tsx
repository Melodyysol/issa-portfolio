import { Dot } from "lucide-react";
import DevImage from "../assets/dev/image.jpeg";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between px-5 py-15 w-full max-w-300">
      <div className="flex flex-col gap-6 items-start w-full lg:w-auto">
        <div className="flex items-center gap-2.5 px-2 py-4 bg-(--border-secondary) rounded-full border border-(--border-primary)">
          <Dot size={8} className="bg-(--light-green) rounded-full" />
          <span className="uppercase text-(--text-primary) text-[12px] font-medium tracking-[0.2rem]">
            available for work
          </span>
        </div>

        <div className="flex flex-col w-full max-w-189.5 items-start capitalize">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            frontend developer{" "}
            <span className="bg-linear-to-r  from-(--light-blue) to-(--deep-blue) bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </h1>
        </div>
        <h2 className="text-(--gray-300) text-[18px] font-serif w-full max-w-130">
          I build responsive, user-friendly web applications with React and
          TypeScript, focusing on clean interfaces, performance, and practical
          solutions.
        </h2>
        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 capitalize bg-(--light-blue) text-white rounded-full font-bold cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 capitalize bg-transparent text-(--gray-50) border border-(--border-primary) rounded-full font-bold cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95"
          >
            contact me
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center p-2.5 rounded-3xl bg-(--medium-blue) border border-(--border-primary) gap-2.5 max-w-full">
        <h3 className="flex w-full h-9 gap-8 p-4 bg-(--navy-blue) items-center">
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#27CA3F]" />
          </div>
          {/* spacing */}
          <span className="px-5 text-[11px] font-mono text-(--gray-300)">
            developer.js
          </span>
        </h3>
        <img
          src={DevImage}
          alt="Developer Image"
          className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover"
        />
        <pre className="text-[12px] bg-[#0F111C] p-4 rounded-xl text-(--gray-100)">
          <span className="text-[#C586C0]">const</span>{" "}
          <span className="text-[#4FC1FF]">developer</span> = {"{"}
          <br /> <span className="text-[#9CDCFE]">name</span>:{" "}
          <span className="text-[#CE9178]">"Max"</span>,
          <br /> <span className="text-[#9CDCFE]">role</span>:{" "}
          <span className="text-[#CE9178]">"Frontend Dev"</span>,
          <br /> <span className="text-[#9CDCFE]">stack</span>: [
          <span className="text-[#CE9178]">"React"</span>,{" "}
          <span className="text-[#CE9178]">"TS"</span>,{" "}
          <span className="text-[#CE9178]">"Tailwind"</span>],
          <br /> <span className="text-[#9CDCFE]">available</span>:{" "}
          <span className="text-[#569CD6]">true</span>
          <br />
          {"}"};
        </pre>
      </div>
    </section>
  );
};

export default Hero;
