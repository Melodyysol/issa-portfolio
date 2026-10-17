import { MdDarkMode, MdLightMode } from "react-icons/md";
import type { Theme } from "../utilities";
import devLogo from "../assets/dev/logo.jpeg";

const links = [
  { link: "about me", to: "about" },
  { link: "skills", to: "skills" },

  { link: "projects", to: "projects" },
  { link: "contact", to: "contact" },
];
type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 -top-75 w-full max-w-250 h-150 rounded-full bg-(--eclipse-bg) blur-[150px]"></div>
      <nav className="sticky z-10 flex items-center justify-between h-20 bg-(--nav-bg) rounded-[20px] px-4 sm:px-8 lg:px-12 py-2 border border-(--border-primary) mt-6 top-2 w-[calc(100%-2rem)] max-w-300">
        <div className="image-container px-3 py-2.5 bg-(--medium-blue) border border-(--border-primary) drop-shadow-sm drop-shadow-black rounded-full cursor-pointer">
          <img
            src={devLogo}
            alt="Developer Logo"
            className="w-10 sm:w-16.25 rounded-full"
          />
        </div>

        <ul className="nav-links flex gap-1 sm:gap-3 items-center">
          {links.map(({ link, to }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                className={`px-2 sm:px-3 lg:px-5 py-2.5 border border-(--border-secondary) capitalize text-(--text-primary) rounded-[10px] cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 ${link === "contact" ? "text-white bg-(--light-blue)" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2.5 items-center">
          <button
            type="button"
            className="cursor-pointer p-2 rounded-lg text-(--gray-50) hover:bg-(--gray-600) transition-colors"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "myDark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "myLight"}
          >
            {theme === "myDark" ? (
              <MdLightMode size={20} aria-hidden="true" />
            ) : (
              <MdDarkMode size={20} aria-hidden="true" />
            )}
          </button>
          <a
            href="/Issa-Abduwaris-Resume.docx"
            download="Issa-Abdulwaris-Resume.docx"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 px-5 py-2.5 rounded-[10px] bg-(--light-blue) text-white"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
