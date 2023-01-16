import React from "react";

function Modal({
  children,
  modalTitle,
  confirmButtonText,
  confirmButtonHandler,
  cancelButtonHandler
}) {
  return (
    <div className="modal">
      <div className="modal__content" onClick = {(e) => e.stopPropagation()}>
        <h3 className = "modal__content-title">{modalTitle}</h3>
        {children}
        <div className="modal__content-button">
          <button onClick={cancelButtonHandler}> Cancel </button>
          <button onClick={confirmButtonHandler}>{confirmButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
