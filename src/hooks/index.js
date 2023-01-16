import { useState, useEffect } from "react";
import firebase from "../firebase";
import moment from "moment/moment";
import { taskGroupExist } from "../utilities";

const userId = process.env.REACT_APP_FIREBASE_TEST_USER_ID;

export const useTask = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    console.log("useEffect")
    let task_data = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", userId);

    if (selectedProject && !taskGroupExist(selectedProject))
      task_data = task_data.where("projectId", "==", selectedProject);
    else if (selectedProject === "TODAY")
      task_data = task_data.where("date", "==", moment().format("DD/MM/YYYY"));
    else if (selectedProject === "INBOX" || selectedProject === 0)
      task_data = task_data.where("date", "==", "");

    task_data = task_data.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "WEEK"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => task_data();
  }, [selectedProject]);
  console.log(tasks);

  return tasks;
};

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
          color: project.data().color
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  });

  return [projects, setProjects];
};
