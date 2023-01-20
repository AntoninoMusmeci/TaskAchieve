import { useState } from "react";
import Checkbox from "./Checkbox";
import AddTask from "./AddTask";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useTasksValue } from "../context";
function SingleTask({ task }) {
  const { deleteTask } = useTasksValue();
  const [showEditTask, setShowEditTask] = useState(false);
  return !showEditTask ? (
    <li>
      <div className="task__wrapper">
        <Checkbox task={task} />
        <div className="task__description">
          <span className="task__description-name">{task.task}</span>{" "}
          <span className="task__description-date"> {task.date} </span>
        </div>
        <AiOutlineEdit
          className="task__edit"
          onClick={() => {
            setShowEditTask(!showEditTask);
          }}
        />
        <FaTrashAlt
          className="task__edit"
          onClick={() => {
            deleteTask(task.docId);
          }}
        />
      </div>
    </li>
  ) : (
    <AddTask
      showMainAddTask={showEditTask}
      setShowMainAddTask={setShowEditTask}
      projectName={task.projectId}
      showEditTask={showEditTask}
      task={task}
    />
  );
}

export default SingleTask;
