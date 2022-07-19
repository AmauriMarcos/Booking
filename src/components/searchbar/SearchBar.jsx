import React from 'react';
import '../../sass/components/_searchbar.scss';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <div className="searchBarItem">
            <BedOutlinedIcon className='icon'/>
            <input className="input" type="search" placeholder="Where are you going?"/>
        </div>
        <div className="searchBarItem">
            <CalendarMonthOutlinedIcon className='icon'/>
            <span className='text'>Check in - Check out</span>
        </div>
        <div className="searchBarItem">
            <PersonOutlineOutlinedIcon className='icon'/>
            <span className='text'>1 adult. 1 child. 1 room</span>
        </div>
        <button className="button">Search</button>
    </div>
  )
}

export default SearchBar