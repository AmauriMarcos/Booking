import React from 'react';
import '../sass/components/_modal.scss';
import {useSelector, useDispatch} from 'react-redux';
import Reservation from './reservation/Reservation';

function Modal({setIsModalOpen, rooms}) {

  const closeModal = () => {
    document.body.classList.remove('noScrolling');
    setIsModalOpen(false);   
  }
  return (
    <div className="backgroundModal">
        <div className="containerModal">
            <p>Something</p>
            <button onClick={closeModal}>x</button>
            <form className="form">
                {rooms?.map((room) => (
                    <Reservation room={room.room} key={room.id}/>
                ))}
            </form>
        </div>
    </div>
  )
}

export default Modal