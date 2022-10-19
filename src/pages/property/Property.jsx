import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import YellowSeachBox from "../../components/yellowSearchBox/YellowSeachBox";
import "../../sass/pages/_property.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProperty} from "../../features/propertySlice";
import { setLocationID} from "../../features/searchSlice";
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
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsletter/Newsletter";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import differenceBetweenDatesInDays from "../../utils/differenceBetweenDatesInDays";
import Modal from '../../components/Modal';

const Property = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const propertybyID = useSelector((state) => state.property.uniqueProperty);
  const {price, days} = useSelector((state) => state.search);
  const {checkIn, checkOut} = useSelector((state)=> state.search);
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLocationID(id));
    dispatch(getProperty(id));
    try{
      const getRooms =  async () => {
        const res = await axios.get(`http://localhost:8000/api/rooms/${id}`);
        setRooms(res.data)
        console.log(res.data)
      }
      getRooms();
    }catch(error){
      console.log(error.response);
    }
   
  }, [id, dispatch]);


  const handleSlider = (index) => {
    setSlideNumber(index);
    setIsSlideOpen(true);
  };

 function closeSlider(e){
  console.log(user)

  setIsSlideOpen(false);
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation();

 }


 
const {property, gallery} = propertybyID;


/* let days = differenceBetweenDatesInDays(checkIn, checkOut); */

let myGallery = [].concat.apply([], gallery);

 let lastIndex = myGallery?.length -1; 
  const forward = () => {
  setSlideNumber(slideNumber === lastIndex ? 0 : slideNumber + 1 );
 }
 const back = () => {
  setSlideNumber(slideNumber === 0 ? lastIndex : slideNumber - 1);
 } 

  const classes = ["a", "b", "c", "d", "e", "f"];

  const openModal = () => {
    window.scrollTo(0, 0);
    document.body.classList.add('noScrolling');
    setIsModalOpen(true);
  }

  const goLogin = () => {
    if(!user[0]?.username){
      navigate('/login');
    }
  }

  return (
    <div className="property">
      <Navbar />
      <Header />
      {isModalOpen && <Modal rooms={rooms} setIsModalOpen={setIsModalOpen}/>}
      <div className="propertyContainer">
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
            src={myGallery ? myGallery[slideNumber].imageURL : ''}
            alt="hotel"
          />
      </div> 
      <div className="slideButton" onClick={() => forward()}>
        <ArrowForwardIosIcon  className="icon"/>
      </div> 
      </div>)}
      
        <div className="searchAndGallery">
          <div className="gallery">
            <div className="galleryHeader">
              <div className="galleryHeaderLeft">
                {property && <div className="acomodation">{property[0]?.typeOfAccommodation}</div>}

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
                <button onClick={!user[0]?.username ? goLogin: openModal} className="button">Reserve</button>
              </div>
            </div>
            
            {property && (
              <>
                <h2 className="title">{property[0]?.propertyName}</h2>
                <p className="text">{property[0]?.address}</p> 
              </>
            )}
            
            <div className="photos">
              {myGallery && myGallery.map((photo, i) => {
                return (
                  <div key={i} onClick={() => handleSlider(i)} className={classes[i]}>
                    <img className="img" src={photo?.imageURL} alt="hotel" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="info">
          <div className="content">
            <div className="infoProperty">
              <p className="infoPropertyText">
                Gosamara Apartments offer self-contained accommodation just a
                5-minute walk from the Byron Bay's Belongil Beach, Main Beach
                and town centre. The property features a heated saltwater
                swimming pool, tropical gardens and free parking.
              </p>
              <p className="infoPropertyText">
                Some units at Gosamara come with kitchen and laundry facilities.
                An air-conditioned, flat-screen satellite TV and DVD player are
                provided. Some apartments offer pool views.
              </p>
              <p className="infoPropertyText">
                Guests at Gosamara Byron Bay can relax in the spa pool, or enjoy
                a barbecue with friends. The tour desk can assist with travel
                arrangements. Luggage storage facilities and free covered
                parking are provided.
              </p>
              <p className="infoPropertyText">
                Coolangatta (Gold Coast) Airport is a 50-minute drive from
                Gosamara Apartments. Cape Byron Lighthouse is 8 minutes’ drive
                away. The famous Byron Bay Markets are just 2 minutes away by
                car.
              </p>
              <p className="infoPropertyText">
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

              <div className="priceAndDays">
                <p>&euro; {price} <span>({days} {days <= 1 ? "night" : "nights"})</span></p>
              </div>
            </div>
            
            <button onClick={!user[0]?.username ? goLogin : openModal} className="button">Reserve</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Property;
