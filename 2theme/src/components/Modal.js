import React, { useEffect } from "react";

function Modal({
  isVisible = false,
  title = "Project Name",
  content = "Lorem ipsum dolor sit amet consectetur.",
  footer = "Date: January 2017",
  onClose,
  img
}) {
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key }) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="modal-content">
              <p className="modal-content__top">{content}</p>
              <img src={img} alt="modal" className="modal-image" />
              <p className="modal-content__desc">
                Use this area to describe your project. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Est blanditiis dolorem culpa
                incidunt minus dignissimos deserunt repellat aperiam quasi sunt
                officia expedita beatae cupiditate, maiores repudiandae,
                nostrum, reiciendis facere nemo!
              </p>
            </div>
          </div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
