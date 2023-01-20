import React from "react";
import { useTasksValue } from "../context";
function Checkbox({ task }) {
  const {editTask} = useTasksValue()
  const archiveTask = () => {
    const newTask = {...task, archived: true}
    editTask(task,newTask)
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"> </span>
    </div>
  );
}

export default Checkbox;
