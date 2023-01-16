import { useProjectsValue } from "../context";
import SingleProject from "./SingleProject";

function Projects() {
  const { projects, selectedProject, setSelectedProject } = useProjectsValue();

  return (
    <div>
      {projects &&
        projects.map((project) => {
          return (
            <li
              key={project.docId}
              data-testid="project-object"
              data-doc-id={project.docId}
              className={
                selectedProject === project.projectId
                  ? "active sidebar__project"
                  : "sidebar__project"
              }
              onClick={() => {
                setSelectedProject(project.projectId);
              }}
            >
              <SingleProject project={project} />
            </li>
          );
        })}
    </div>
  );
}

export default Projects;
