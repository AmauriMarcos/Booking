import React, { useState } from "react";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import "../../sass/pages/_list.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import YellowSearchBox from '../../components/yellowSearchBox/YellowSeachBox';
import {useSelector} from 'react-redux';
import CardHotel from "../../components/cardHotel/CardHotel";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const List = () => {
  const hotels = useSelector((state) => state.hotel.hotels);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  
  return (
    <div className="list">
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listContainer">
            <div className="listWrapper">
              <YellowSearchBox
                isOptionsOpen={isOptionsOpen}
                setIsOptionsOpen={setIsOptionsOpen} 
              />
              <div className="listResult">
                <h2>Australia: 14,710 properties found</h2>
                {hotels.map((hotel) => {
                  return (
                    <CardHotel hotel={hotel} key={hotel.id}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default List;
