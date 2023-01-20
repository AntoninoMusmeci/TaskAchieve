import { createContext, useContext, useState } from "react";
import { useProjects } from "../hooks";
import firebase from "../firebase";
import {v4 as uuidv4} from 'uuid';
export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useProjects();
  const [selectedProject, setSelectedProject] = useState("INBOX");
  const [show,setShow] = useState(true)

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  const addProject = (projectColor, projectName) => {
    firebase
      .firestore()
      .collection("projects")
      .add({
        name: projectName,
        color: projectColor,
        userId: "2vUUm9oXjDn16lzz3MlG",
        projectId:uuidv4()
      })
      .then(() => [setProjects([...projects])]);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        deleteProject,
        selectedProject,
        setSelectedProject,
        addProject,
        show,
        setShow
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
