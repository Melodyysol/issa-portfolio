import { useEffect, useState } from "react";
import type { Theme } from "./utilities";
import Home from "./widgets";
import About from "./widgets/About";
import Skills from "./widgets/Skills";
import Projects from "./widgets/Projects";
import Contact from "./widgets/Contact";

function App() {
  const [theme, setTheme] = useState<Theme>("myDark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main className="bg-linear-to-r from-(--bg-primary) to-(--bg-secondary) h-full min-h-screen flex items-center flex-col gap-20">
      <Home
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "myDark" ? "myLight" : "myDark",
          )
        }
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
