import { useState, useEffect } from "react";

export function useTask(taskId) {
  const [tasks, setTasks] = useState([
    { id: 14434, userId: "userfisejfs", date: "", task: "this is a task" },
    { id: 14223, userId: "userfisejfs", date: "", task: "this is a Video" },
  ]);
  return tasks;
}
