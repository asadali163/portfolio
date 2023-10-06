import { useFetchProjects } from "./FetchProjects";
// import HRow from "./HRow";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";
import Section from "./Section";
import SpinningLoader from "./SpinningLoader";
import { useDispatch } from "react-redux";
import { fetchProjectsOnce } from "../Redux/Project/projectSlice";
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
      <div className="align-element my-16">
        <Section sectionName="Projects" />
        <ProjectHeader />
        <div className="grid md:grid-cols-5 ">
          <div className="hidden md:block md:col-span-3 md:h-[600px]">
            {selectedProject && (
              <div className="h-5/6 w-5/6 self-start relative rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={selectedProject?.img}
                  alt={selectedProject?.name}
                  className="h-full w-full  "
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
