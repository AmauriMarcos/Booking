import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import '../../sass/pages/_home.scss';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home