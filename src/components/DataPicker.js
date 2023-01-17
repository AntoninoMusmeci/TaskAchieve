import React, { useEffect, useState } from "react";
import moment from "moment/moment";
function DataPicker() {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const [currentDate, setCurrentDate] = useState(moment());
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [days, setDays] = useState([]);
  const updateMonth = (n) => {
    const date = moment(currentDate);
    date.add(n, "M");
    setCurrentDate(date);
  };

  useEffect(() => {
    console.log("useEffect");
    const currentMonth = currentDate.format("MMM")
    setMonth(currentMonth);
    setYear(currentDate.format("YYYY"));

    const startOfMonth = moment(currentDate.startOf("month"));
    const endOfMonth = moment(currentDate.endOf("month"));
    const start = startOfMonth.clone().weekday(0);
    const end = endOfMonth.clone().weekday(6);
    console.log(start);
    let days = [];
    let week = [];
    
    while (start < end) {
      console.log( start.format("MMM"), month) 
      const day = start.format("MMM") === currentMonth ? start.format("D") : ""
      week.push(day);
      if (start.day() === 6) {
        days.push(week);
        week = [];
      }
     
      start.add(1, "d");
    }
    console.log(days)
    setDays(days);
  }, [currentDate]);

  return (
    <div className="data-picker">
      <div className="data-picker__header">
        <span>{month + " " + year}</span>

        <div>
          <span
            onClick={() => {
              updateMonth(-1);
            }}
          >
            {"<"}
          </span>
          <span> </span>
          <span
            onClick={() => {
              updateMonth(1);
            }}
          >
            {">"}
          </span>
        </div>
      </div>
  
      <ul className="data-picker__week">
        {weekdays.map((day, index) => (
          <li className="data-picker__element" key={index}> {day} </li>
        ))}
      </ul>

        {days.map((week) => (
 
            <ul className="data-picker__week">
              {week.map((day,index) => (
                <li className="data-picker__element" key ={index}>{day}</li>
              ))}
            </ul>
   
        ))}
  
    </div>
  );
}

export default DataPicker;
