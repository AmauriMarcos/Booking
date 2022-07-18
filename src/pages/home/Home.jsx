import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import '../../sass/pages/_home.scss';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Hero/>
    </div>
  )
}

export default Home