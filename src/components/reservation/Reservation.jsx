import React from 'react';
import '../../sass/components/_reservation.scss';

const Reservation = ({room}) => {
  return (
    <div className='wrapper'>
      <input className="checkbox" type="checkbox" id="room" name="room"/>
      <label className="label" htmlFor="room">{room}</label>
    </div>
  )
}

export default Reservation;