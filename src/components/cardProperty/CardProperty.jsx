import React from "react";
import "../../sass/components/_cardProperty.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddIcon from "@mui/icons-material/Add";
import {Link} from 'react-router-dom';
import { daysInWeek } from "date-fns/constants/index";
import {useSelector} from 'react-redux';

const CardProperty = ({ property, days }) => {
  days = days >= 1 ? days : 1;
  const options = useSelector((state) => state.search.options)
  console.log(days)
  return (
    <Link to={`/properties/${property.id}`}>
      <div className="cardProperty">
        <div className="cardPropertyContainer">
          <div className="left">
            <img className="img" src={property.propertyURL} alt={property.propertyName} />
          </div>
          <div className="middle">
            <div className="header">
              <h1 className="title">{property.propertyName}</h1>

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
                <h2 className="subtitle">{property.typeOfAccommodation}</h2>
                <p className="text">{property.roomDescription}</p>
              </div>

              <h2 className="subtitle green">Breakfast included</h2>

              <div className="freeCancelation">
                <h2 className="subtitle green">
                  Free Calcelation{" "}
                  {property.noPaymentNeeded ? " - No prepayment needed" : ""}
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
                  <h1 className="overallTitle">{property.customerOpinion}</h1>
                  <p className="numberOfReviews">{property.reviewQuantity} reviews</p>
                </div>

                <div className="rating">
                  <span className="ratingNumber">{property.reviewRating}</span>
                </div>
              </div>
              <h2 className="impressionTitle">
                {property.roomCustomerOpinion}{" "}
                {property.roomRating}
              </h2>
            </div>

            <div className="priceAndDetails">
              {days >= 1 && <p className="text"> {days} {days <= 1 ? "night" : "nights"}</p>}

              <div className="optionsGroup">
                <p className="optionsItem">{options[0].name} {options[0].qtd},</p>
                <p className={`optionsItem ${options[1].qtd < 1 ? "invisible": ""}`}>{options[1].name} {options[1].qtd},</p>
                <p className="optionsItem">{options[2].name} {options[2].qtd}</p>
              </div>
             
              <h2 className="price">EUR {property.price * days}</h2>
              <p className="text">Includes taxes and charges</p>
              <div className="credit">Earn EUR {(property.price * days) * (13/100)} Credits</div>
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

export default CardProperty;
