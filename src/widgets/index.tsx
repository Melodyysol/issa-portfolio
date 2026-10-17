import type { Theme } from "../utilities";
import Navbar from "../components/Navbar";
import Hero from "./Hero";

type HomeProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const Home = ({ theme, onToggleTheme }: HomeProps) => {
  return (
    <section className="flex flex-col items-center w-full">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <Hero />
    </section>
  );
};

export default Home;
