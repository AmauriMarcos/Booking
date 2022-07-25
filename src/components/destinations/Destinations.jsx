import React from "react";
import "../../sass/components/_destinations.scss";
import CitiesNames from "./citiesName";

const Destinations = () => {
  return (
    <div className="destinations">
      <h1 className="title">Destinations we love</h1>
      <div className="destionationsContainer">
        <div className="btnGroup">
          <button>Regions</button>
          <button>Cities</button>
          <button>Places of interest</button>
        </div>
        <ul className="list">
          {CitiesNames.map((city) => {
            return (
              <li className="item" key={city.id}>
                <h2 className="name">{city.city}</h2>
                <p className="numberOfProperties">{city.properties}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Destinations;
