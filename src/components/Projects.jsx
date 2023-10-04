import { useFetchProjects } from "./FetchProjects";
// import HRow from "./HRow";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";
import Section from "./Section";
import SpinningLoader from "./SpinningLoader";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) return <SpinningLoader />;
  return (
    <section>
      <div className="align-element my-16">
        <Section sectionName="Projects" />
        <ProjectHeader />
        <div className="grid md:grid-cols-5 gap-y-2">
          <div className="hidden md:block md:col-span-3"></div>

          {/* This is for the project part */}

          <div className="flex flex-col justify-center  gap-4 md:col-span-2">
            {/* Define heading project and count */}
            {projects.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;