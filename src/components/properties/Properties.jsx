import React from "react";
import "../../sass/components/_properties.scss";
import { Link } from "react-router-dom";

const Properties = () => {
  return (
    <div className="properties">
      <h1 className="title">Browse by property type</h1>
      <Link to="/hotels">
        <ul className="propertiesList">
          <li className="item">
            <img
              className="img"
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Hotel"
            />
            <div className="info">
              <h2 className="typeOfProperty">Hotels</h2>
              <h3 className="propertiesDesc">876,361 hotels</h3>
            </div>
          </li>

          <li className="item">
            <img
              className="img"
              src="https://psgroup.in/blog/wp-content/uploads/2021/03/pexels-tamil-king-3214064-1024x683.jpg"
              alt="Apartments"
            />
            <div className="info">
              <h2 className="typeOfProperty">Apartments</h2>
              <h3 className="propertiesDesc">892,549 apartments</h3>
            </div>
          </li>

          <li className="item">
            <img
              className="img"
              src="https://media.cntraveler.com/photos/56b39ace6e3fe7686ad8af03/master/pass/springs-villa-nayara-springs-cr-courtesy.jpg"
              alt="Resort"
            />
            <div className="info">
              <h2 className="typeOfProperty">Resorts</h2>
              <h3 className="propertiesDesc">17,976 resorts</h3>
            </div>
          </li>

          <li className="item">
            <img
              className="img"
              src="https://media.istockphoto.com/photos/luxury-mediterranean-style-villa-picture-id629625894?b=1&k=20&m=629625894&s=170667a&w=0&h=C8N_0kudzKxud2z0QeTJaTcxaIPOR4hzUXYNfmbkmjQ="
              alt="Villas"
            />
            <div className="info">
              <h2 className="typeOfProperty">Villas</h2>
              <h3 className="propertiesDesc">468,055 villas</h3>
            </div>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default Properties;
