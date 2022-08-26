import React, {useState, useEffect} from 'react';
import '../../sass/components/_reservation.scss';
import {useDispatch} from 'react-redux';
import { handleRoomNumber } from '../../features/roomSlice';

const Reservation = ({room}) => {
  const dispatch = useDispatch();
  const [roomNumber, setRoomNumber] = useState('');

  const onChangeValue = (event) => {
    setRoomNumber(event.target.value);
  }

  useEffect(() => {
    if(roomNumber !== ''){
      dispatch(handleRoomNumber(+roomNumber));
    }
   
  }, [dispatch, roomNumber]);

  return (
    <div className='wrapperRoom'>
       <p className={`number ${room.checkIn ? "unavailable" : "" }`}>{room.room}</p>
       <div onChange={onChangeValue}>
          <input 
            className={`input ${room.checkIn ? "unavailable" : "" }`} 
            type="radio" 
            disabled={ room.checkIn  ? true : false}
            value={room.room}
            name="room"
          />
       </div>       
    </div>
  )
}

export default Reservation;