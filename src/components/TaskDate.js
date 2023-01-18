import moment from "moment/moment";
import React, {useState} from "react";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";
import { MdWeekend } from "react-icons/md";
import DataPicker from "./DataPicker";

function TaskDate({ date, setDate}) {
  
  // const date = moment();
  return (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              // setShowTaskDate(false);
              setDate(moment().format('DD/MM/YYYY'));
            }}

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
            onClick={() => {
              // setShowTaskDate(false);
              setDate(moment().add(1,"d").format('DD/MM/YYYY'));
            }}

            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <MdWeekend />
            </span>
            <span>Tomorrow</span>
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

        <DataPicker setDate={setDate} date= {date}/>
      </ul>
    </div>
  );
}

export default TaskDate;
