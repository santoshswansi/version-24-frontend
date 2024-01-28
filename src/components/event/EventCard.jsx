import "./EventCard.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

const EventCard = () => {
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
      <h2>EVENT NAME</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        hendrerit accumsan ex vel varius. Nullam at lacus ut ante vehicula
        tincidunt nec a dolor. Maecenas imperdiet turpis velit, ut malesuada.
      </p>
    </Modal>
  );

  return (
    <div className="EventCard">
      <div className="card">
        <div className="front"></div>
        <div className="back">
          <h2>EVENT NAME</h2>
          <p> Info about date and time. </p>
          <Button onClick={() => setOpenModal(true)}>Register</Button>
          {openModal && mainModal}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
