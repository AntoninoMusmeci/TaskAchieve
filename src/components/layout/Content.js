import React from "react";
import Sidebar from "./Sidebar";
import Task from "../Task";
function Content() {
  return (
    <section className="content">
      <Sidebar />
      <Task />
    </section>
  );
}

export default Content;
