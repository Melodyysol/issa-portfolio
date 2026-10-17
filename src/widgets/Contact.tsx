import { ArrowRight } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-300 bg-(--blue-950) border border-(--border-primary) shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-t-3xl flex flex-col items-center gap-10 px-5 sm:px-10 py-20 sm:py-25 text-text-muted"
    >
      <header className="flex flex-col gap-2.5 items-center w-full">
        <h2 className="text-[12px] text-(--light-blue) uppercase tracking-[0.2em]">
          contact
        </h2>
        <h3 className="font-bold text-(--gray-50) text-center text-[40px] max-w-175 leading-[1.2] capitalize">
          Let's <span className="text-(--light-blue)">work</span> together
        </h3>
        <p className="max-w-125 text-center">
          I’m open to frontend roles and freelance projects. Let’s build
          something great.
        </p>
      </header>

      <div className="flex gap-12 flex-wrap items-center justify-center w-full">
        <a
          href="mailto:issaabdulwaris212@gmail.com"
          className="flex bg-(--light-blue) text-white px-8 py-3.5 gap-2 text-sm font-extrabold rounded-full cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95"
        >
          Email <ArrowRight size={18} color="white" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Melodyysol"
          target="_blank"
          rel="noreferrer"
          className="flex bg-(--gray-950) border text-(--gray-50) border-(--border-info) px-6 py-3 gap-2 text-sm font-extrabold rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
        >
          GitHub <BsGithub size={18} aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/issa-abdulwaris-b4329639b"
          target="_blank"
          rel="noreferrer"
          className="flex bg-(--gray-950) border border-(--border-info) text-(--gray-50) px-6 py-3 gap-2 text-sm font-extrabold rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
        >
          LinkedIn <BsLinkedin size={18} aria-hidden="true" />
        </a>
        <footer className="flex items-center justify-center w-full py-6 bg-(--gray-950) font-bold text-[12px] text-(--gray-400)">
          © 2026 Issa Abdulwaris Atere. Built with React & Tailwind
        </footer>
      </div>
    </section>
  );
};

export default Contact;
