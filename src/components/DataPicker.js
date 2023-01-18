import React, { useEffect, useState } from "react";
import moment from "moment/moment";
function DataPicker({setDate}) {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const [currentDate, setCurrentDate] = useState(moment());
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [days, setDays] = useState([]);
  const [selectedDay,setSelectedDay] = useState()
  const updateMonth = (n) => {
    const date = moment(currentDate);
    date.add(n, "M");
    setCurrentDate(date);

  };

  const selectDay = (day) => {
    console.log(day)
    let date = day +  "/" + month + "/" + year
    date = moment(date).format("DD/MM/YYYY")
    if(selectedDay === day){
      setSelectedDay("")
    }
    else setSelectedDay(day)
  }
  useEffect(() => {
    setDate(selectedDay)
  }, [setDate,selectedDay])

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
       
      const day = start.format("MMM") === currentMonth ? start.format("DD/MM/YYYY") : undefined
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
                <li className={day ? day === selectedDay ? "data-picker__element active" : "data-picker__element selectable" : "data-picker__element"} key ={index}
                onClick = {() => selectDay(day)}
                >{day?.split("/")[0]}</li>
              ))}
            </ul>
   
        ))}
  
    </div>
  );
}

export default DataPicker;
