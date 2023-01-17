import React, { useEffect, useState } from "react";
import { useProjectsValue } from "../context";
import { useTask } from "../hooks";
import Checkbox from "./Checkbox";
import { getProjectName } from "../utilities";
import AddTask from "./AddTask";
function Tasks() {
  const { selectedProject, projects } = useProjectsValue();
  const tasks = useTask(selectedProject);
  const [showMainAddTask, setShowMainAddTask] = useState(false);
  const projectName = getProjectName(projects, selectedProject);
  useEffect(() => {setShowMainAddTask(false)},[selectedProject])
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name"> {projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      {!showMainAddTask && (
        <div
          className="tasks__add-task"
          onClick={() => {
            setShowMainAddTask(!showMainAddTask);
          }}
        >
          <span className="tasks__add-task-plus" test-dataid="add-task-action"> +
          </span>
          <span> Add Task</span>
        </div>
      )}
      {showMainAddTask && <AddTask showMainAddTask={showMainAddTask} setShowMainAddTask= {setShowMainAddTask} projectName={projectName}/>}
      
    </div>
  );
}

export default Tasks;
