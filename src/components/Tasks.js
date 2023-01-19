import React, { useEffect, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { useProjectsValue, useTasksValue } from "../context";
import { getProjectName } from "../utilities";
import AddTask from "./AddTask";
import SingleTask from "./SingleTask";

function Tasks() {
  const { selectedProject, projects } = useProjectsValue();
  const { useTask } = useTasksValue();
  const [tasks, setTasks, archivedTasks, setArchivedTasks] = useTask(selectedProject);
  const [showMainAddTask, setShowMainAddTask] = useState(false);
  const projectName = getProjectName(projects, selectedProject);
  console.log(archivedTasks)
  useEffect(() => {
    setShowMainAddTask(false);
  }, [selectedProject]);
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name"> {projectName}</h2>
      <ul
     
        className="tasks__list"
      >
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
          <span className="tasks__add-task-plus" test-dataid="add-task-action">
            {" "}
            +
          </span>
          <span> Add Task</span>
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

// import React from "react";
// import Todo from "./Todo";
// import styled from "styled-components";
// import { Reorder } from "framer-motion";
// function Todolist({ todos, setTodos, filteredTodos, setFilteredTodos }) {
//   const removeTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const checkTodo = (id) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id === id) return { ...todo, completed: !todo.completed };
//         return todo;
//       })
//     );
//   };

//   return (
//     <TodoList
//         axis="y"
//         values={filteredTodos}
//         onReorder={setFilteredTodos}
//       >
//         {filteredTodos.map((todo) => (
//           <Reorder.Item key={todo.id} value={todo}>
//             <Todo key={todo.id} todo={todo} removeTodo={removeTodo} checkTodo={checkTodo} />
//           </Reorder.Item>
//         ))}

//     </TodoList>
//   );
// }

// const TodoList = styled(Reorder.Group)`
//   list-style-type: none;
//   padding: 0;

//   ul{
//     padding: 0;
//     margin: 0;
//   };
//   li{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//   }
// `;
// export default Todolist;
