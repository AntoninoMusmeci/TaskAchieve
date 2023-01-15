import React, { useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue } from "../context";
function SingleProject({ project }) {
  const [showModal, setShowModal] = useState(false);
  const { deleteProject } = useProjectsValue();

  return (
    <>
      <VscDebugBreakpointData className="sidebar__dot" />
      <span className="sidebar__project-name"> {project.name}</span>
      <span
        className="sidebar__project-delete"
        test-dataid="project-delete"
        onClick={() => setShowModal(!showModal)}
      >
        <FaTrashAlt />
        {showModal && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__content">
              <h3>Delete Project?</h3>
              <p>
                Are you sure you want to delete <span>{project.name}</span>?
              </p>
              <div>
                <button> Cancel </button>
                <button onClick={() => deleteProject(project.docId)}> Delete </button>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  );
}

export default SingleProject;
