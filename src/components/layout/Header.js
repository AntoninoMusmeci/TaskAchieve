import React, { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineBars3, HiOutlineXMark} from "react-icons/hi2";

import AddTask from "../AddTask";
import { useProjectsValue } from "../../context";
function Header() {
  const { show, setShow } = useProjectsValue();
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav className="settings">
        <ul>
          <li onClick={() => setShow(!show)} className="settings__add">
           { !show ? <HiOutlineBars3/> : <HiOutlineXMark/>
            }
          </li>
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
            <AddTask setShowHeaderAddTask={setShowAddTask} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
