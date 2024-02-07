import "./EventCard.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

const EventCard = ({ eventProp }) => {
  const { id, name, date, time, thumbnail, description } = eventProp;
  const [openModal, setOpenModal] = useState(false);

  const handleCloseButton = (
    // <button className="register" onClick={() => setOpenModal(false)}>
    //   Register
    // </button>
    <Button onClick={() => setOpenModal(false)}>Register</Button>
  );

  const mainModal = (
    <Modal
      onClose={() => setOpenModal(false)}
      handleCloseButton={handleCloseButton}
    >
      <h2 className="modal-title">{name}</h2>
      <p className="modal-details">{description}</p>
    </Modal>
  );

  return (
    <div className="EventCard">
      <div className="card">
        <div
          className="front"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className="back">
          <h2>{name}</h2>
          <p> Info about date and time. </p>
          <Button onClick={() => setOpenModal(true)}>Register</Button>
          {openModal && mainModal}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
