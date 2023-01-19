import { createContext, useContext, useState } from "react";
import { useTask } from "../hooks";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const addTask = (newTask) => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        id: uuidv4(),
        ...newTask,
        userId: process.env.REACT_APP_FIREBASE_TEST_USER_ID,
      })
      .then();
  };

  const deleteTask = (docId) => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(docId)
      .delete()
      .then(() => {});
  };
  const editTask = (task, newTask) => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(task.docId)
      .update({
        id: task.id,
        ...newTask,
        userId: task.userId,
      })
      .then();
  };

  
  return (
    <TasksContext.Provider
      value={{
        useTask,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksValue = () => useContext(TasksContext);
