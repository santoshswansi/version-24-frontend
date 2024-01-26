import "../styles/Modal.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, handleCloseButton }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="wrapper" onClick={onClose}></div>
      <div className="container">
        {children}
        {handleCloseButton}
      </div>
    </div>,
    document.querySelector(".modal-root")
  );
};

export default Modal;
