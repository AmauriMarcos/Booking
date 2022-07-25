import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import '../../sass/pages/_home.scss';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Featured from '../../components/featured/Featured';
import Explore from '../../components/explore/Explore';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Hero/>
      <div className="homeContainer">
        <Explore/>
        <Featured/>
      </div>
    </div>
  )
}

export default Home