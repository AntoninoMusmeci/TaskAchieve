import { createContext, useContext } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
export const taskGroups = [
  { key: "INBOX", name: "Inbox" },
  { key: "TODAY", name: "Today" },
  { key: "WEEK", name: "Week" },
  { key: "COMPLETED", name: "Completed" },
];
export const taskGroupExist = (selectedProject) => {
  return taskGroups.find((task) => task.key === selectedProject);
};
export const getProjectName = (projects = [], key = "INBOX") => {
  const project = projects.find((project) => project.projectId === key);

  return taskGroupExist(key)?.name || project?.name;
};


export const mockContext = createContext();
export const mockUseContext = useContext;
export const renderWithContext = (components, tasks = []) => {
  return render(
    <mockContext.Provider value={{deleteTask: () => {}, editTask: () => {}, useTask: (selectedProject) =>{return [tasks]} }}>
      {components}
    </mockContext.Provider>
  );
};