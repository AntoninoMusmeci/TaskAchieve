import { useState, useEffect, useRef } from "react";
import firebase from "../firebase";
import moment from "moment/moment";
import { taskGroupExist } from "../utilities";

const userId = process.env.REACT_APP_FIREBASE_TEST_USER_ID;

export const useTask = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let task_data = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", userId);

    if (selectedProject && !taskGroupExist(selectedProject))
      task_data = task_data.where("projectId", "==", selectedProject);
    else if (selectedProject === "TODAY")
      task_data = task_data.where("date", "==", moment().format("DD/MM/YYYY"));
    else if (selectedProject === "INBOX")
      task_data = task_data.where("date", "==", "");
    else if (selectedProject === "COMPLETED")
      task_data = task_data.where("archived", "==", true);

    task_data = task_data.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        docId: task.id,
        id: task.data().id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "WEEK"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : selectedProject !== "COMPLETED"
          ? newTasks.filter((task) => task.archived !== true)
          : newTasks
      );
    });

    return () => task_data();
  }, [selectedProject]);
  return [tasks, setTasks];
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", userId)
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          projectId: project.data().projectId,
          userId: project.data().userId,
          name: project.data().name,
          docId: project.id,
          color: project.data().color.color,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return [projects, setProjects];
};

export const useClickOutside = (handler) => {
  let nodeRef = useRef();

  useEffect(() => {
    let domHandler = (e) => {
      if (!nodeRef.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", domHandler);
    return () => {
      document.removeEventListener("mousedown", domHandler);
    };
  });

  return nodeRef;
};
