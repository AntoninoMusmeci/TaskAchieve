import React, { useState } from "react";
import Projects from "../Projects";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  
} from "react-icons/fa";
import AddProject from "../AddProject";
import { useProjectsValue } from "../../context";
function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const { selectedProject, setSelectedProject } = useProjectsValue();
  return (
    <div className="sidebar" data-testid="sidebar">
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
  );
}

export default Sidebar;

// bem ( block element modifier)
