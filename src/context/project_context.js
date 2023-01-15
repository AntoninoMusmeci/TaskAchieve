import { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";
import firebase from "../firebase";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProjects();
  const [selectedProject, setSelectedProject] = useState("INBOX");

  const deleteProject = (docId) =>{
    console.log("delete")
    firebase
    .firestore()
    .collection("projects")
    .doc(docId)
    .delete()
    .then(() => {
      console.log(projects)
      setProjects([...projects])
      setSelectedProject("INBOX")
    })
  }

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, deleteProject, selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
