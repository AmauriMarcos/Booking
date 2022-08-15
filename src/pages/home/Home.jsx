import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import '../../sass/pages/_home.scss';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Featured from '../../components/featured/Featured';
import Explore from '../../components/explore/Explore';
import PropertiesType from './../../components/propertiesType/PropertiesType';
import Destinations from '../../components/destinations/Destinations';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Hero/>
      <div className="homeContainer">
        <Explore/>
        <Featured/>
        <PropertiesType/>
        <Destinations/>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home