import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import YellowSeachBox from "../../components/yellowSearchBox/YellowSeachBox";
import "../../sass/pages/_hotel.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotelById } from "../../features/hotelSlice";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Footer from "./../../components/footer/Footer";
import Newsletter from "./../../components/newsletter/Newsletter";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const hotel = useSelector((state) => state.hotel.uniqueHotel);
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHotelById(id));
  }, [id, dispatch]);

  const handleSlider = (index) => {
    setSlideNumber(index);
    setIsSlideOpen(true);
  };

 function closeSlider(e){
 
  setIsSlideOpen(false);
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation();
 
 }


 let lastIndex = hotel[0]?.gallery.length -1;
 const forward = () => {
  setSlideNumber(slideNumber === lastIndex ? 0 : slideNumber + 1 );
 }
 const back = () => {
  setSlideNumber(slideNumber === 0 ? lastIndex : slideNumber - 1);
 }

  return (
    <div className="hotel">
      <Navbar />
      <Header />
         

      <div className="hotelContainer">
      {isSlideOpen && (<div className="backSlide" > 
      <div onClick={(e) => closeSlider(e)} className="closeButton">
        <CloseIcon className="icon" />
      </div>
      <div className="slideButton left" onClick={() => back()}>
        <ArrowBackIosIcon className="icon" />
      </div>
      <div className="slider">
          <img
            className="img"
            src={hotel[0]?.gallery[slideNumber]}
            alt="hotel"
          />
      </div>
      <div className="slideButton" onClick={() => forward()}>
        <ArrowForwardIosIcon  className="icon"/>
      </div>
      </div>)}
      
      

        <div className="searchAndGallery">
          <div className="search">
            <YellowSeachBox type="hotel" />
          </div>

          <div className="gallery">
            <div className="galleryHeader">
              <div className="galleryHeaderLeft">
                <div className="acomodation">{hotel[0]?.info.acommodation}</div>

                <div className="icons">
                  <div className="stars ">
                    {[...Array(5)].map((star) => {
                      return <StarIcon className="starIcon" />;
                    })}
                  </div>

                  <div className="prefferedProperty">
                    <ThumbUpAltIcon className="icon" />
                    <AddIcon className="icon" />
                  </div>
                </div>
              </div>

              <div className="galleryHeaderRight">
                <FavoriteBorderIcon className="icon" />
                <ShareIcon className="icon" />
                <button className="button">Reserve</button>
              </div>
            </div>

            <h2 className="title">{hotel[0]?.name}</h2>
            <p className="text">{hotel[0]?.address}</p>
            <div className="photos">
              {hotel[0]?.gallery.map((photo, i) => {
                return (
                  <div key={i} onClick={() => handleSlider(i)}>
                    <img className="img" src={photo} alt="hotel" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="property">
          <div className="content">
            <div className="contentProperty">
              <p className="contentPropertyText">
                Gosamara Apartments offer self-contained accommodation just a
                5-minute walk from the Byron Bay's Belongil Beach, Main Beach
                and town centre. The property features a heated saltwater
                swimming pool, tropical gardens and free parking.
              </p>
              <p className="contentPropertyText">
                Some units at Gosamara come with kitchen and laundry facilities.
                An air-conditioned, flat-screen satellite TV and DVD player are
                provided. Some apartments offer pool views.
              </p>
              <p className="contentPropertyText">
                Guests at Gosamara Byron Bay can relax in the spa pool, or enjoy
                a barbecue with friends. The tour desk can assist with travel
                arrangements. Luggage storage facilities and free covered
                parking are provided.
              </p>
              <p className="contentPropertyText">
                Coolangatta (Gold Coast) Airport is a 50-minute drive from
                Gosamara Apartments. Cape Byron Lighthouse is 8 minutes’ drive
                away. The famous Byron Bay Markets are just 2 minutes away by
                car.
              </p>
              <p className="contentPropertyText">
                This is our guests' favourite part of Byron Bay, according to
                independent reviews.
              </p>
            </div>
          </div>

          <div className="reservationCard">
            <div className="top">
              <h2 className="title">Property highlights</h2>
            </div>

            <div className="middle">
              <h3 className="subtitle">Perfect for a 3-night stay!</h3>
              <div className="situatedContent">
                <FavoriteIcon className="icon" />
                <p className="text">
                  Situated in the best rated area in Byron Bay, this property
                  has an excellent location score of 9.3
                </p>
              </div>
              <p className="text">Popular with solo travellers</p>
            </div>

            <div className="bottom">
              <h3 className="subtitle">Apartments with:</h3>
              <div className="featuresContent">
                <div className="item">
                  <DeckOutlinedIcon className="icon" />
                  <span className="text">Terrace</span>
                </div>

                <div className="item">
                  <FoundationOutlinedIcon className="icon" />
                  <span className="text">Landmark view</span>
                </div>

                <div className="item">
                  <LocalFloristOutlinedIcon className="icon" />
                  <span className="text">Garden view</span>
                </div>
              </div>
              <div className="parking">
                <LocalParkingIcon className="icon" />
                <span className="text">
                  Free private parking available on-site
                </span>
              </div>
            </div>
            <button className="button">Reserve</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Hotel;
