import { MdDarkMode, MdLightMode } from "react-icons/md";
import { links, type Theme } from "../utilities";
import LargeLogo from "../assets/dev/isadev-large.jpeg";
import SmallLogo from "../assets/dev/isadev-small.jpeg";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import Sidebar from "./Sidebar";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <Sidebar
          onClose={() => setIsMenuOpen(false)}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
      )}
      <div className="absolute left-1/2 -translate-x-1/2 -top-75 w-full max-w-250 h-150 rounded-full bg-(--eclipse-bg) blur-[150px]"></div>
      <AnimatePresence mode="wait">
        {!isMenuOpen && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky z-10 flex items-center justify-between h-20 bg-(--nav-bg) rounded-[20px] px-2 sm:px-8 lg:px-12 py-2 border border-(--border-primary) mt-6 top-2 w-[calc(100%-2rem)] max-w-300"
          >
            <div className="image-container p-0.5 sm:px-3 sm:py-2.5 bg-(--medium-blue) border border-(--border-primary) drop-shadow-sm drop-shadow-black rounded-full cursor-pointer">
              <img
                src={LargeLogo}
                alt="Developer Web Logo"
                className="h-15 rounded-full"
              />
            </div>

            <ul className="nav-links gap-1 hidden sm:flex sm:gap-3 items-center">
              {links.map(({ link, to }) => (
                <li key={to}>
                  <a
                    href={`#${to}`}
                    className={`px-3 py-2.5 lg:px-5 border border-(--border-secondary) capitalize text-(--text-primary) rounded-[10px] cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 ${link === "contact" ? "text-white bg-(--light-blue)" : ""}`}
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
                  <MdLightMode
                    aria-label="Switch to light mode"
                    size={20}
                    aria-hidden="true"
                  />
                ) : (
                  <MdDarkMode
                    aria-label="Switch to dark mode"
                    size={20}
                    aria-hidden="true"
                  />
                )}
              </button>
              <a
                href="/Issa-Abdulwaris-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 px-5 py-2.5 rounded-[10px] bg-(--light-blue) text-white"
              >
                Resume
              </a>
              <button
                type="button"
                aria-label="Open menu"
                className="sm:hidden cursor-pointer p-2 rounded-lg text-(--gray-50) hover:bg-(--gray-600) transition-all duration-500 hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu size={24} aria-hidden="true" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
