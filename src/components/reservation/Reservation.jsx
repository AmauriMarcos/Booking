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

  let myRoomColor = '';
  if(room.roomType === 'Deluxe room') {
    myRoomColor = 'deluxe';
  }else if(room.roomType === 'Master Executive Room'){
    myRoomColor = 'master'
  }else if(room.roomType === 'Standard room'){
    myRoomColor = 'standard'
  }

  return (
    <div className='wrapperRoom'>
      <div className="reservationBloc">
        <div className="wrapperTypes">
            <p className={myRoomColor}>{room.roomType}</p>
            <p className="includes">{room.includes}</p>
        </div>
        
        <div className="wrapperPrice">
            <p className={myRoomColor}>&euro; {room.price}</p>
        </div>
        
        <div onChange={onChangeValue} className='wrapperRoomChecker'>
            <p className={`number ${room.checkIn ? "unavailable" : "" }`}>{room.room}</p>
            <input 
              className={`input ${room.checkIn ? "unavailable" : "" }`} 
              type="radio" 
              disabled={ room.checkIn  ? true : false}
              value={room.room}
              name="room"
            />
        </div> 
      </div>
             
    </div>
  )
}

export default Reservation;