import React, { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import AddTask from "../AddTask";
function Header() {
  const [showMainAddTask, setShowMainAddTask] = useState(false);
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
                setShowMainAddTask(!showMainAddTask);
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
      {showMainAddTask && (
        <div
          onClick={() => {
            setShowMainAddTask(!showMainAddTask);
          }}
          style={{ position: "fixed", width: "100%", height: "100%" }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <AddTask />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
