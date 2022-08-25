import React from "react";
import "../sass/components/_modal.scss";
import { useSelector, useDispatch } from "react-redux";
import Reservation from "./reservation/Reservation";

function Modal({ setIsModalOpen, rooms }) {
  const closeModal = () => {
    document.body.classList.remove("noScrolling");
    setIsModalOpen(false);
  };

  const getRoomType = (roomsArr, type) => {
    const filtered = roomsArr?.filter((room) => {
      return room.roomType.includes(type);
    });

    return filtered;
  };

  const deluxe = getRoomType(rooms, "Deluxe");
  const master = getRoomType(rooms, "Master");
  const standard = getRoomType(rooms, "Standard");

  return (
    <div className="backgroundModal">
      <div className="containerModal">
        <div className="up">
          <button className="btn" onClick={closeModal}>x</button>
          <h2 className="title">Rooms available</h2>
        </div>

        <div className="bottom">
          <div className="desc">

            {deluxe.length !== 0 &&<div className="room">
              <div className="square d"></div>
              <p>Deluxe Room</p>
            </div>}

            {master.length !== 0 && <div className="room">
              <div className="square m"></div>
              <p>Master Room</p>
            </div>}

            {standard.length !== 0 && <div className="room">
              <div className="square s"></div>
              <p>Standard Room</p>
            </div>}

          </div>
          {deluxe.length !== 0 && <div className="bloc deluxe">
            <div className="form">
              {deluxe?.map((room) => (
                <Reservation room={room} key={room.id} />
              ))}
            </div>
          </div>}

          {master.length !== 0 && <div className="bloc master">
            <div className="form">
              {master?.map((room) => (
                <Reservation room={room} key={room.id} />
              ))}
            </div>
          </div>}
          {standard.length !== 0 && <div className="bloc standard">
            <div className="form">
              {standard?.map((room) => (
                <Reservation room={room} key={room.id} />
              ))}
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
