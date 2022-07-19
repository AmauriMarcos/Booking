import React from 'react';
import '../../sass/layout/_header.scss';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import BedOutlined from '@mui/icons-material/BedOutlined';
import TimeToLeaveOutlined from '@mui/icons-material/TimeToLeaveOutlined';
import HailOutlined from '@mui/icons-material/HailOutlined';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <ul className='list'>
            <li className='item'>
              <BedOutlinedIcon className='icon'/>
              <span className='text'>Stays</span>
            </li>
            <li className='item'>
              <AirplanemodeActiveOutlinedIcon className='icon'/>
              <span className='text'>Flights</span>
            </li>
            <li className='item'>
              <TimeToLeaveOutlinedIcon className='icon'/>
              <span className='text'>Car rentals</span>
            </li>
            <li className='item'>
              <AttractionsOutlinedIcon className='icon'/>
              <span className='text'>Attractions</span>
            </li>
            <li className='item'>
              <HailOutlined className='icon'/>
              <span className='text'>Airport taxis</span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header