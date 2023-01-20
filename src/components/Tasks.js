import React, { useEffect, useState } from "react";
import { useProjectsValue, useTasksValue } from "../context";
import { getProjectName } from "../utilities";
import AddTask from "./AddTask";
import SingleTask from "./SingleTask";

function Tasks() {
  const { selectedProject, projects } = useProjectsValue();
  const { useTask } = useTasksValue();
  const [tasks] = useTask(selectedProject);
  const [showMainAddTask, setShowMainAddTask] = useState(false);
  const projectName = getProjectName(projects, selectedProject);

  useEffect(() => {
    setShowMainAddTask(false);
  }, [selectedProject]);
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name"> {projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </ul>

      {!showMainAddTask && (
        <div
          className="tasks__add-task"
          onClick={() => {
            setShowMainAddTask(!showMainAddTask);
          }}
        >
          {selectedProject !== "COMPLETED" ? (
            <>
              <span
                className="tasks__add-task-plus"
                test-dataid="add-task-action"
              >
                +
              </span>
              <span> Add Task</span>{" "}
            </>
          ) : (
            ""
          )}
        </div>
      )}
      {showMainAddTask && (
        <AddTask
          showMainAddTask={showMainAddTask}
          setShowMainAddTask={setShowMainAddTask}
          projectName={projectName}
        />
      )}
    </div>
  );
}

export default Tasks;
