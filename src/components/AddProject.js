import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";
import ColorList from "./ColorList";
import ListElement from "./ListElement";
import { useProjectsValue } from "../context";
function AddProject() {
  const [showModal, setShowModal] = useState(false);
  const [showColorList, setShowColorList] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectColor, setProjectColor] = useState({ color: "", name: "" });
  const { addProject } = useProjectsValue();

  const addNewProject = () => {
    addProject(projectColor, projectName);
    setShowModal(false)
  };

  useEffect(() => {
    if (showModal === false) {
      setProjectColor({ color: "", name: "" });
      setShowColorList(false);
      setProjectName("");
    }
  }, [showModal]);
  const closeModal = () => {
    setShowModal(!showModal);
  };
  const chooseColor = (color) => {
    setProjectColor(color);
    setShowColorList(false);
  };
  return (
    <div onClick={() => closeModal()}>
      <FaPlus />
      {showModal && (
        <Modal
          modalTitle={"Add New Project"}
          confirmButtonText="Add"
          confirmButtonHandler={addNewProject}
          cancelButtonHandler={closeModal}
        >
          <div className="project-add-modal">
            <div className="project-add-modal__input">
              <label> Name </label>
              <input
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                className="project-add-modal__name"
                data-testid="project-name"
                type="text"
              />
              <div />
              <div className="project-add-modal__input">
                <label> Color </label>

                <button
                  className="project-add-modal__color"
                  data-testid="project-color"
                  onClick={() => {
                    setShowColorList(!showColorList);
                  }}
                >
                  <ListElement
                    color={projectColor.color}
                    name={projectColor.name}
                  />
                </button>
                {showColorList && <ColorList chooseColor={chooseColor} />}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AddProject;
