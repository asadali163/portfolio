import { useFetchProjects } from "./FetchProjects";
// import HRow from "./HRow";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";
import Section from "../General/Section";
import SpinningLoader from "../General/SpinningLoader";
import { useDispatch } from "react-redux";
import { fetchProjectsOnce } from "../../Redux/Project/projectSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Projects = () => {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state) => state.project);

  const { loading, projects } = useFetchProjects();
  useEffect(() => {
    dispatch(fetchProjectsOnce(projects));
  }, [projects, dispatch]);
  if (loading) return <SpinningLoader />;
  return (
    <section>
      <div className="align-element my-16" id="portfolio">
        <Section sectionName="Projects" />
        <ProjectHeader />
        <div className="grid md:grid-cols-5 gap-10 ">
          <div className="hidden md:block md:col-span-3 md:h-[500px] ">
            {selectedProject && (
              <div className="h-full w-full self-start relative rounded-2xl shadow-2xl overflow-hidden pt-[-2rem] ">
                {/* transform transition-transform hover:scale-110 */}
                <img
                  src={selectedProject?.img}
                  alt={selectedProject?.name}
                  className="h-full w-full "
                />
                <div className="absolute top-0 left-0 h-full w-full"></div>
              </div>
            )}
          </div>

          {/* This is for the project part */}

          <div className="flex flex-col self-start justify-center gap-2 md:col-span-2">
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
