import React, { useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue } from "../context";
import Modal from "./Modal";
function SingleProject({ project }) {
  const [showModal, setShowModal] = useState(false);
  const { deleteProject } = useProjectsValue();
  return (
    <>
      <VscDebugBreakpointData style={{color: project.color}} className="sidebar__dot" />
      <span className="sidebar__project-name"> {project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="project-delete"
        onClick={() => setShowModal(!showModal)}
      >
        <FaTrashAlt />
        {showModal && (
          <Modal
            modalTitle={"Delete Project?"}
            confirmButtonText="Delete"
            confirmButtonHandler={() => deleteProject(project.docId)}
          >
            <div className="project-delete-modal">
              <p>
                Are you sure you want to delete <span>{project.name}</span>?
              </p>
            </div>
          </Modal>
        )}
      </span>
    </>
  );
}

export default SingleProject;
