import React from "react";
import "../../sass/components/_cardHotel.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddIcon from "@mui/icons-material/Add";
import {Link} from 'react-router-dom';

const CardHotel = ({ hotel }) => {
  
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <div className="cardHotel">
        <div className="cardHotelContainer">
          <div className="left">
            <img className="img" src={hotel.url} alt={hotel.name} />
          </div>
          <div className="middle">
            <div className="header">
              <h1 className="title">{hotel.name}</h1>

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
            <div className="information">
              <div className="accomodation">
                <h2 className="subtitle">{hotel.info.acommodation}</h2>
                <p className="text">{hotel.info.rooms}</p>
              </div>

              <h2 className="subtitle green">Breakfast included</h2>

              <div className="freeCancelation">
                <h2 className="subtitle green">
                  Free Calcelation{" "}
                  {hotel.noPaymentNeeded ? " - No prepayment needed" : ""}
                </h2>
                <p className="text green">
                  You can cancel later, so lock in this great price today.
                </p>
              </div>
              <h2 className="subtitle red">
                Only 5 left at this price on our site
              </h2>
            </div>
          </div>

          <div className="right">
            <div className="review">
              <div className="overall">
                <div className="wrapper">
                  <h1 className="overallTitle">{hotel.evaluation.overall}</h1>
                  <p className="numberOfReviews">{hotel.review.reviewQtd}</p>
                </div>

                <div className="rating">
                  <span className="ratingNumber">{hotel.review.rating}</span>
                </div>
              </div>
              <h2 className="impressionTitle">
                {hotel.evaluation.installation.impression}{" "}
                {hotel.evaluation.installation.rating}
              </h2>
            </div>

            <div className="priceAndDetails">
              <p className="text">11 nights, 1 adult</p>
              <h2 className="price">EUR {hotel.price}</h2>
              <p className="text">Includes taxes and charges</p>
              <div className="credit">Earn EUR {Math.floor((5 / hotel.price) * 100)} Credits</div>
              <button className="button">
                See availability <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardHotel;
