import React from 'react';
import '../../sass/sections/_hero.scss';
import SearchBar from '../searchbar/SearchBar';

const Hero = () => {
  return (
    <div className="hero">
        <div className="heroContainer">
            <h1 className='title'>Find your next stay</h1>
            <p className='subtitle'>Search deals on hotels, homes, and much more...</p>
        </div>
        <SearchBar/>
    </div>
  )
}

export default Hero