import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import '../../sass/pages/_home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <p>Home</p>
    </div>
  )
}

export default Home