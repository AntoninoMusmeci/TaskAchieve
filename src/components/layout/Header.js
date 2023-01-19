import React, { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import AddTask from "../AddTask";
function Header() {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/icon.svg" alt="taskachiever" width={20}></img>
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings__add"
              onClick={() => {
                setShowAddTask(!showAddTask);
              }}
            >
              +
            </li>
            <li className="settings__darkmode">
              <HiOutlineLightBulb></HiOutlineLightBulb>
            </li>
          </ul>
        </div>
      </nav>
      {showAddTask && (
        <div
          onClick={() => {
            setShowAddTask(!showAddTask);
          }}
          style={{ position: "fixed", width: "100%", height: "100%" }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <AddTask setShowHeaderAddTask = {setShowAddTask}/>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
