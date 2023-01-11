import React from "react";

function Checkbox({ id }) {
  const archiveTask = () => {
    // update the task with archived = true
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"> </span>
    </div>
  );
}

export default Checkbox;
