import { createContext, useContext, useState } from "react";
import { useTask } from "../hooks";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const addTask = (taskName, date, projectId) => {
    console.log(taskName, date, projectId);
    firebase.firestore().collection("tasks").add({
      id: uuidv4(),
      archived: false,
      projectId: projectId,
      task: taskName,
      date: date,
      userId: process.env.REACT_APP_FIREBASE_TEST_USER_ID,
    }).then();
  };

  return (
    <TasksContext.Provider
      value={{
        useTask,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksValue = () => useContext(TasksContext);
