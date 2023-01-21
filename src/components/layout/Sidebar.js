import React, { useState } from "react";
import Projects from "../Projects";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaCheckCircle,
} from "react-icons/fa";

import AddProject from "../AddProject";
import { useProjectsValue,  } from "../../context";
// import { useClickOutside } from "../../hooks";
function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const { selectedProject, setSelectedProject, setShow, show } = useProjectsValue();
  return (
    <div className={show ? "sidebar_wrapper": ""} onClick= {() =>  setShow(false)}>
      <div className={show ? "sidebar show" : "sidebar"} data-testid="sidebar" onClick= {(e) =>e.stopPropagation() }>
        <ul className="sidebar__generic">
          <li
            data-testid="inbox"
            className={selectedProject === "INBOX" ? "active" : ""}
            onClick={() => {
              setSelectedProject("INBOX");
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span> Inbox</span>
          </li>
          <li
            data-testid="today"
            className={selectedProject === "TODAY" ? "active" : ""}
            onClick={() => {
              setSelectedProject("TODAY");
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span> Today</span>
          </li>
          <li
            data-testid="week"
            className={selectedProject === "WEEK" ? "active" : ""}
            onClick={() => {
              setSelectedProject("WEEK");
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span> Week</span>
          </li>
          <li
            data-testid="completed"
            className={selectedProject === "COMPLETED" ? "active" : ""}
            onClick={() => {
              setSelectedProject("COMPLETED");
            }}
          >
            <span>
              <FaCheckCircle />
            </span>
            <span> Completed</span>
          </li>
        </ul>
        <div
          className="sidebar__middle"
          onClick={() => setShowProjects(!showProjects)}
        >
          <h2> Projects</h2>
          <span className="sidebar__middle-projects">
            <FaChevronDown className={!showProjects ? "projects-hide" : ""} />
            <AddProject />
          </span>
        </div>
        <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      </div>
    </div>
  );
}

export default Sidebar;

// bem ( block element modifier)
