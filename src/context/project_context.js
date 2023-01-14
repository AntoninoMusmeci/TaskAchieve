import { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProjects();
  const [selectedProject, setSelectedProject] = useState("INBOX");

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
