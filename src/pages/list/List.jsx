import React, { useState } from "react";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import "../../sass/pages/_list.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import YellowSearchBox from '../../components/yellowSearchBox/YellowSeachBox';
import {useSelector, useDispatch} from 'react-redux';
import CardHotel from "../../components/cardHotel/CardHotel";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import {createHotel} from '../../features/hotelSlice';
import { getAllHotels } from './../../features/hotelSlice';

const List = () => {
 /*  const hotels = useSelector((state) => state.hotel.hotels);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); */
  const dispatch = useDispatch();
  const data =  {
    hotelName: "Marine Parade",
    stars: 4.7,
    price: 1.109,     
    reviewQuantity: 112,
    reviewRating: 9.8,    
    city: 'Manly',
    address: 'Manly NSW 2095, Austrália', 
    hotelURL: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/347935470.jpg?k=b9098b11b783574107aba2a5ed65ab59de03fea5e7245f0b47bb4f712d7a2fa6&o=&hp=1",
    customerOpinion: "Very good",
    typeOfAccommodation: "Deluxe Queen Studio",
    roomDescription: "1 double bed",
    roomRating: 8.2,
    roomCustomerOpinion: "Comfort",      
    freeCancelation: true,
    breakfastIncluded: true,
    preferredPlusProperty: true,
    noPaymentNeeded: false,
  }
  
  const fakeSubmit = () => {
    dispatch(createHotel(data));
  }

  const fakeGetAllHotels = () => {
    dispatch(getAllHotels())
  }
  
  return (
    <div className="list">
      <Navbar />
      <Header />
      {/* <div className="listContainer">
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
      </div> */}
      <button onClick={fakeSubmit}>Submit</button>
      <button onClick={fakeGetAllHotels}>Get all hotels</button>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default List;
