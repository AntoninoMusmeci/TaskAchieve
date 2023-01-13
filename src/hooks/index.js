import { useState, useEffect } from "react";

export function useTask(taskId) {
  const [tasks, setTasks] = useState([
    { id: 14434, userId: "userfisejfs", date: "", task: "this is a task" },
    { id: 14223, userId: "userfisejfs", date: "", task: "this is a Video" },
  ]);
  return tasks;
}

export function useProjects() {
  const [project, setProjects] = useState([
    {
      id: 14434,
      userId: "userfisejfs",
      date: "",
      name: "MUSIC",
      projectId: 2434,
      docId: 434,
    },
    {
      id: 14223,
      userId: "userfisejfs",
      date: "",
      name: "VIDEO",
      projectId: 45,
      docId: 34,
    },
  ]);
  return [project, setProjects];
}
