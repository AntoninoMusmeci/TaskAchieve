import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import Task from "../Task";
function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          <span> Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span> Today</span>
        </li>
        <li data-testid="week" className="week">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span> Week</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2> Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects list</ul>
      <div> Add Project component </div>
      <Task />
    </div>
  );
}

export default Sidebar;

// bem ( block element modifier)
