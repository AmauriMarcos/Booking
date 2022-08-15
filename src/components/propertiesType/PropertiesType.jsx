import React, {useEffect} from "react";
import "../../sass/components/_propertiesType.scss";
import { Link } from "react-router-dom";
import {countByType} from '../../features/infoSlice';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

const PropertiesType = () => {
  const dispatch = useDispatch();
  const propertiesType = useSelector((state) => state.info.entities);

  useEffect(() => {
    dispatch(countByType());

  }, [dispatch]);


  return (
    <div className="propertiesType">
      <h1 className="title">Browse by property type</h1>
      <Link to="/properties">
        <ul className="propertiesList">
          {propertiesType.map((property) => {
            return (<li className="item" key={property.propertyType}>
            <img
              className="img"
              src={property.propertyURL}
              alt="Hotel"
            />
            <div className="info">
              <h2 className="typeOfProperty">{property.propertyType}</h2>
              <h3 className="propertiesDesc">{property.numberOfpropertiesType} {property.propertyType}</h3>
            </div>
          </li>)
          })}
        </ul>
      </Link>
    </div>
  );
};

export default PropertiesType;
