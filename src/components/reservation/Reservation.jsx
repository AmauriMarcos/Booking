import React from 'react';
import '../../sass/components/_reservation.scss';

const Reservation = ({room}) => {
  console.log(room.checkIn)
  return (
    <div className='wrapperRoom'>
       <p className={`number ${room.checkIn ? "unavailable" : "" }`}>{room.room}</p>
       <input type="checkbox" disabled={ room.checkIn  ? true : false}/>
    </div>
  )
}

export default Reservation;