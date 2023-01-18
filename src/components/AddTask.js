import { useEffect, useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { useProjectsValue, useTasksValue } from "../context";
import moment from "moment/moment";
import TaskDate from "./TaskDate";

function AddTask({ showMainAddTask, setShowMainAddTask, projectName = "" }) {
  const [taskName, setTaskName] = useState("");
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [date, setDate] = useState("");
  const { addTask } = useTasksValue();
  const { selectedProject } = useProjectsValue();

  useEffect(() => {
    console.log("useEffectdate");
    setShowTaskDate(false);
  }, [date]);
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
            {showTaskDate && (
              <div onClick={(e) => e.stopPropagation()}>
                <div
                  style={{
                    cursor: "default",
                    top: 0,
                    left: 0,
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={() => {
                    setShowTaskDate(false);
                  }}
                ></div>
                <TaskDate setDate={setDate} date={date} />
              </div>
            )}{" "}
            <FaRegCalendarAlt />{" "}
            {date === moment().format("DD/MM/YYYY")
              ? "Today"
              : date === moment().add(1, "d").format("DD/MM/YYYY")
              ? "Tomorrow"
              : date}
          </button>

          <button>
            <FaRegListAlt /> {projectName}{" "}
          </button>
        </div>
      </div>
      <div className="add-task__add">
        <button onClick={() => setShowMainAddTask(false)}> Cancel </button>
        <button
          onClick={() => addTask(taskName, date, selectedProject)}
          disabled={taskName ? false : true}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
