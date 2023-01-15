import React, { useState } from "react";
import Modal from "./Modal";
function AddProject() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div onClick={() => setShowModal(!showModal)}>
      AddProject
      {showModal && (
        <Modal
          modalTitle={"Add New Project"}
          confirmButtonText="Add"
          confirmButtonHandler={() => console.log("add")}
        >
          <form>
            <div style={{display: "flex", flexDirection: "column"}}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            </div>

          </form>
        </Modal>
      )}
    </div>
  );
}

export default AddProject;
