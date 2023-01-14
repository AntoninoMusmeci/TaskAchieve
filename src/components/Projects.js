import React, { useState } from "react";
import { useProjectsValue } from "../context";
import SingleProject from "./SingleProject";

function Projects() {
  const { projects, setSelectedProject } = useProjectsValue();
  const [active, setActive] = useState(false);
 
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
                active === project.projectId
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
