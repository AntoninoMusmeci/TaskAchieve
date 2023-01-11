import React, { useState } from "react";

import { useTask } from "../hooks";
import Checkbox from "./Checkbox";
function Task() {
  const tasks = useTask("task");
  let projectName = "";

  return (
    <div className="tast" data-testid="task">
      Task
      <h2 data-testid="project-name"> {projectName}</h2>
      <ul className="task__list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
