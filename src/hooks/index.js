import { useState, useEffect } from "react";
import firebase from "../firebase";
export function useTask(taskId) {
  const [tasks, setTasks] = useState([
    { id: 14434, userId: "userfisejfs", date: "", task: "this is a task" },
    { id: 14223, userId: "userfisejfs", date: "", task: "this is a Video" },
  ]);
  return tasks;
}

const userId = process.env.REACT_APP_FIREBASE_TEST_USER_ID;

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // debugger;
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", userId)
      // .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          projectId: project.data().projectId,
          userId: project.data().userId,
          name: project.data().name,
          docId: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  });

  return [projects, setProjects];
};
