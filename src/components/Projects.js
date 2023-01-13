import React, { useState } from "react";
import { useProjectsValue } from "../context";
import SingleProject from "./SingleProject";
function Projects() {
  const { projects } = useProjectsValue();
  const [active, setActive] = useState(false);
  console.log(projects);
  return (
    <div>
      {projects &&
        projects.map((project) => {
          return (
            <li
              key={project.id}
              data-testid="project-object"
              data-doc-id={project.docId}
              className={
                active === project.projectId
                  ? "active sidebar__project"
                  : "sidebar__project"
              }
            >
              <SingleProject project={project} />
            </li>
          );
        })}
    </div>
  );
}

export default Projects;
