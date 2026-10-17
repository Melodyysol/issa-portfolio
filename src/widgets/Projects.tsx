import {
  ArrowUpRight,
  ArrowUpRightFromSquare,
  CheckCircle2,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { projects } from "../utilities";

const Projects = () => {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="flex flex-col gap-12 w-full max-w-300 px-5 text-text-muted"
    >
      <header className="flex flex-col gap-2.5 items-start justify-between">
        <h2 className="text-[12px] text-(--light-blue) uppercase tracking-[0.2em] w-full">
          my projects
        </h2>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full">
          <h3 className="font-bold text-(--gray-50) text-[40px] max-w-175 leading-[1.2]">
            Featured <span className="text-(--light-blue)">Projects</span>
          </h3>
          <p className="text-start max-w-132.5 font-bold text-[18px]">
            A selection of projects I’ve built to solve practical problems and
            strengthen my development skills.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {featuredProject && (
          <article className="grid md:grid-cols-2 items-center rounded-2xl p-4 gap-6 bg-(--gray-750) border border-(--border-accent)">
            <div className="flex flex-col gap-4 items-start">
              <div className="uppercase bg-(--light-blue)/20 text-(--light-blue) font-bold text-[10px] px-2 py-1 rounded-full">
                featured project
              </div>
              <h4 className="text-(--gray-50) text-[32px] font-bold leading-10">
                {featuredProject.title}
              </h4>
              <p className="font-medium leading-[1.7]">
                {featuredProject.description}
              </p>
              {featuredProject.features && (
                <ul className="space-y-2">
                  {featuredProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 items-center text-[13px]"
                    >
                      <CheckCircle2 size={18} color="var(--light-blue)" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="gap-2 flex flex-wrap">
                {featuredProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1.25 bg-(--gray-600) border border-(--border-accent) rounded-2xl text-[12px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {featuredProject.links && (
                <div className="flex gap-2 items-center">
                  {featuredProject.links.live && (
                    <a
                      href={featuredProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-(--light-blue)/40 border border-(--border-accent) flex py-1.5 px-2.5 transition-all duration-500 hover:scale-105 active:scale-95 gap-2 rounded-2xl capitalize items-center text-(--gray-50)"
                    >
                      <ArrowUpRightFromSquare size={16} />
                      live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {featuredProject.links.code && (
                    <a
                      href={featuredProject.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-(--gray-600) border border-(--border-accent) flex py-1.5 px-2.5 transition-all duration-500 hover:scale-105 active:scale-95 gap-2 rounded-2xl capitalize items-center text-(--gray-50)"
                    >
                      <BsGithub size={16} />
                      view code
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-xl border border-(--border-accent) overflow-hidden w-full">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} project preview`}
                className="object-cover w-full h-full"
              />
            </div>
          </article>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col items-start rounded-2xl p-4 gap-3 bg-(--gray-750) border border-(--border-accent)"
            >
              <div className="rounded-xl border border-(--border-accent) overflow-hidden w-full aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-(--gray-50) text-[20px] font-bold">
                {project.title}
              </h4>
              <p className="font-medium leading-[1.5] text-[14px] flex-1">
                {project.description}
              </p>
              <div className="gap-2 flex flex-wrap">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-(--gray-600) border border-(--border-accent) rounded-2xl text-[12px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="flex gap-2 pt-2 items-center">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-(--light-blue)/40 border border-(--border-accent) flex py-1.5 px-2.5 transition-all duration-500 hover:scale-105 active:scale-95 gap-2 rounded-[10px] capitalize items-center text-(--gray-50) text-[14px]"
                    >
                      <ArrowUpRightFromSquare size={16} />
                      live demo
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-(--gray-600) border border-(--border-accent) flex py-1.5 px-2.5 transition-all duration-500 hover:scale-105 active:scale-95 gap-2 rounded-[10px] capitalize items-center text-(--gray-50) text-[14px]"
                    >
                      <BsGithub size={16} />
                      view code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
