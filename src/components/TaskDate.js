import moment from "moment/moment";
import React from "react";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";
import { MdWeekend } from "react-icons/md";
import DataPicker from "./DataPicker";

function TaskDate() {
  const date = moment()
  return (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            // onClick={() => {
            //   setShowTaskDate(false);
            //   setTaskDate(moment().format('DD/MM/YYYY'));
            // }}

            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaSun />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            // onClick={() => {
            //   setShowTaskDate(false);
            //   setTaskDate(moment().format('DD/MM/YYYY'));
            // }}

            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <MdWeekend />
            </span>
            <span>This Weekend</span>
          </div>
        </li>
        <li>
          <div
            // onClick={() => {
            //   setShowTaskDate(false);
            //   setTaskDate(moment().format('DD/MM/YYYY'));
            // }}

            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next week</span>
          </div>
        </li>
        <li>
         <DataPicker />
        </li>
      </ul>
    </div>
  );
}

export default TaskDate;
