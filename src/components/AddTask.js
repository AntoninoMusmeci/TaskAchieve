import { useEffect, useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { useProjectsValue, useTasksValue } from "../context";
import moment from "moment/moment";
import TaskDate from "./TaskDate";
import ProjectList from "./ProjectList";
function AddTask({
  showMainAddTask,
  setShowMainAddTask,
  projectName = "",
  setShowHeaderAddTask,
  showEditTask = false,
  task = "",
}) {
  const [project, setProject] = useState()
  const [taskName, setTaskName] = useState(showEditTask ? task.task : "");
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false)
  const [date, setDate] = useState("");
  const { addTask, editTask } = useTasksValue();
  const { selectedProject } = useProjectsValue();
  const createNewTask = () => {
    const newTask = {
      archived: false,
      projectId: selectedProject,
      task: taskName,
      date: date,
    };
    addTask(newTask);
    setDate("");
    setTaskName("");
  };

  const updateTask = () => {
    const newTask = {
      archived: false,
      projectId: task.projectId,
      task: taskName,
      date: date !== task.date ? date : task.date,
    };
    editTask(task, newTask)
    setShowMainAddTask(false)
    setDate("");
    setTaskName("");
  };
  useEffect(() => {
    setShowTaskDate(false);
  }, [date]);

  useEffect(() => {
    setShowTaskList(false);
  }, [project]);
  return (
    <div className={showMainAddTask ? "add-task" : "add-task-absolute"}>
      <div className="add-task__setting">
        <div>
          <input
            value={taskName}
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
            )}
            <FaRegCalendarAlt />
            {date === moment().format("DD/MM/YYYY")
              ? "Today"
              : date === moment().add(1, "d").format("DD/MM/YYYY")
              ? "Tomorrow"
              : date}
          </button>

     
          <button onClick={() => setShowTaskList(true)}>
            {showTaskList && (
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
                    setShowTaskList(false);
                  }}
                ></div>
                <ProjectList setProject={setProject} />
              </div>
            )}
   
            <FaRegListAlt /> {project? project.name : projectName}
          </button>
        </div>
      </div>
      <div className="add-task__add">
        <button onClick={() => {showMainAddTask ? setShowMainAddTask(false) : setShowHeaderAddTask(false)}}> Cancel </button>
        <button
          onClick={showEditTask ? updateTask : createNewTask}
          disabled={taskName ? false : true}
        >
          {showEditTask ? "Save" : "Add Task"}
        </button>
      </div>
    </div>
  );
}

export default AddTask;
