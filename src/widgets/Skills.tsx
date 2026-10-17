import { skillCards } from "../utilities";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-300 flex flex-col gap-12 items-center px-5 text-text-muted"
    >
      <header className="flex flex-col gap-2.5 items-center text-center">
        <h2 className="text-[12px] text-(--light-blue) uppercase tracking-[0.2em]">
          my toolkits
        </h2>
        <h3 className="font-bold text-(--gray-50) text-[40px] max-w-175 leading-[1.2]">
          Technologies <span className="text-(--light-blue)">I work</span> with.
        </h3>
        <p className="max-w-125">
          The tools I use to build responsive web applications, solve problems,
          and continue growing as a developer.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillCards.map((card) => (
          <article
            key={card.title}
            className="bg-(--gray-800) border border-(--gray-700) shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-2xl px-5 py-4 flex flex-col gap-4 w-full"
          >
            <h3 className="flex items-center gap-4">
              {card.icon}
              <span className="uppercase font-bold text-[18px] leading-10 text-(--gray-200)">
                {card.title}
              </span>
            </h3>
            <div className="gap-4 flex flex-wrap">
              {card.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex gap-2 px-4 py-2.5 bg-(--gray-850) border items-center border-(--border-tertiary) rounded-2xl"
                >
                  {skill.icon}
                  <span className="font-bold leading-[1.7] text-[12px]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
