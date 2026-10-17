import { Code2, GraduationCap, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: <Code2 size={24} color="var(--deep-blue)" />,
    title: "frontend development",
    des: "Building responsive interfaces with React, Typescript, and Tailwind CSS.",
  },
  {
    icon: <Lightbulb size={24} color="var(--deep-blue)" />,
    title: "problem solving",
    des: "Debugging issues, integrating APIs, and finding practical solutions to development challenges.",
  },
  {
    icon: <GraduationCap size={24} color="var(--deep-blue)" />,
    title: "backend exploration",
    des: "Exploring Node.js and Express to build end-to-end features and better understand APIs, databases, and server logic.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-300 px-5 flex flex-col gap-12 items-center"
    >
      <header className="flex flex-col gap-2.5 items-center">
        <h2 className="text-[12px] text-(--light-blue) uppercase tracking-[0.2em]">
          about me
        </h2>
        <h3 className="font-bold text-(--gray-50) text-center text-[40px] max-w-175 leading-[1.2]">
          Turning Ideas into{" "}
          <span className="text-(--light-blue)">useful digital</span>{" "}
          experiences.
        </h3>
      </header>
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
        <div className="w-full lg:w-140 gap-6 flex flex-col items-start text-text-muted">
          <h3 className="text-(--light-blue) text-[40px] font-bold  uppercase flex items-center gap-6">
            <div className="w-5 h-5 rounded-full bg-(--deep-blue)" />
            My Journey
          </h3>
          <p className="font-serif leading-[1.7] flex flex-col gap-4">
            <span>
              I’m a self-taught frontend developer who enjoys building
              responsive, user-friendly web applications that solve real
              problems.
            </span>
            <span>
              I worked primarily with React, Typescript, and modern frontend
              tools. Through my projects, I’ve gained experience integrating
              APIs, managing application state, working with Supabase, and
              solving development challenges.
            </span>
            <span>
              I’m continuously improving my skills and exploring backend
              development with Node.js and Express while looking for
              opportunities to contribute to real-world products and collaborate
              with other developers.
            </span>
          </p>
        </div>
        <div className="w-full lg:w-148 gap-4 flex flex-col items-start text-text-muted">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-(--gray-900) border border-(--gray-700) shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-2xl p-5 flex flex-col gap-4 w-full"
            >
              <h3 className="flex items-center gap-4">
                {card.icon}
                <span className="capitalize font-bold text-[18px] leading-10 text-(--gray-50)">
                  {card.title}
                </span>
              </h3>
              <p className="font-medium leading-[1.7]">{card.des}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
