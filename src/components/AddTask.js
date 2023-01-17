import { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { useProjectsValue } from "../context";
import TaskDate from "./TaskDate";
function AddTask({ showMainAddTask, setShowMainAddTask, projectName = "" }) {
  const [taskName, setTaskName] = useState("");
  const [showTaskDate, setShowTaskDate] = useState(false);
  // const {selectedProject} = useProjectsValue()
 
  return (
    <div className={showMainAddTask ? "add-task" : "add-task-absolute"}>
      <div className="add-task__setting">
        <div>
          <input
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            placeholder="Task Name"
          />
        </div>
        <div className="add-task__setting-buttons">
          <button onClick={() => setShowTaskDate(true)}>
            {" "}
            {showTaskDate && <TaskDate></TaskDate>} <FaRegCalendarAlt /> date
          </button>

          <button>
            {" "}
            <FaRegListAlt /> {projectName}{" "}
          </button>
        </div>
      </div>
      <div className="add-task__add">
        <button onClick={() => setShowMainAddTask(false)}> Cancel </button>
        <button disabled={taskName ? false : true}>Add Task</button>
      </div>
    </div>
  );
}

export default AddTask;
