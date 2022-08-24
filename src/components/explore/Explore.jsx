import React, {useEffect} from "react";
import "../../sass/components/_explore.scss";
import {useNavigate} from 'react-router-dom';
import {countByCity} from '../../features/infoSlice';
import {useSelector,useDispatch} from 'react-redux';


const Explore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cities = useSelector((state) => state.info.cityEntities);

  useEffect(() => {
    dispatch(countByCity());
  },[dispatch])

  const listLocation = (e, location) => {
    e.preventDefault();
    navigate(`/properties/search/${location}`);
  }

  return (
    <div className="explore">
      <div className="exploreTitle">
        <h1 className="title">Explore the World</h1>
        <h2 className="subtitle">These popular destinations have a lot to offer</h2>
      </div>
 
      <ul className="exploreList">
        {cities?.slice(0,6).map((city) => {
          return (
          <li className="item" key={city.location} onClick={(e) => listLocation(e, city.location)}>
            <img
              className="img"
              src={city.propertyURL}
              alt="Sidney"
            />
            <div className="info">
              <h2 className="cityName">{city.location}</h2>
              <h3 className="properties">{city.numberOfProperties} {city.numberOfProperties > 1 ? "properties" : "property"}</h3>
            </div>
          </li>
          )
        })}
        
      </ul>
    </div>
    
  );
};

export default Explore;
