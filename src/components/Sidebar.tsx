import { motion, AnimatePresence } from "motion/react";
import SmallLogo from "../assets/dev/isadev-small.jpeg";
import { X } from "lucide-react";
import { links } from "../utilities";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type SidebarProps = {
  onClose: () => void;
  theme: string;
  onToggleTheme: () => void;
};

const Sidebar = ({ onClose, theme, onToggleTheme }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-64 h-full bg-(--nav-bg) border-r border-(--border-primary) z-20 p-4"
      >
        {/* Header (Logo, Name and HamburgerClose)*/}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img
              src={SmallLogo}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-bold font-serif text-(--text-primary)">
              IsaDev
            </span>
          </div>
          <button
            aria-label="Close Sidebar"
            className="text-(--text-primary) hover:text-(--accent) cursor-pointer"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        {/* Lists */}

        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.to}>
              <a
                href={`#${link.to}`}
                className={`capitalize hover:text-(--accent) transition-colors duration-300 ${activeLink === link.link ? "text-(--accent)" : "text-(--text-primary)"}`}
                onClick={() => handleLinkClick(link.link)}
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <div className="mt-8">
          <a
            href="/Issa-Abdulwaris-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-2 bg-(--light-blue) text-white rounded-lg hover:bg-(--accent) transition-colors duration-300 border"
          >
            Resume
          </a>
        </div>

        {/* theme */}
        <button
          type="button"
          className="cursor-pointer p-2 rounded-lg text-(--gray-50) hover:bg-(--gray-600) transition-colors absolute bottom-4 left-1/2 -translate-x-1/2"
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
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
