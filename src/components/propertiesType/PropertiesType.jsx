import React, { useEffect } from "react";
import "../../sass/components/_propertiesType.scss";
import { useNavigate } from "react-router-dom";
import { countByType } from "../../features/infoSlice";
import { useSelector, useDispatch } from "react-redux";

const PropertiesType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propertiesType = useSelector((state) => state.info.typeEntities);

  useEffect(() => {
    dispatch(countByType());
  }, [dispatch]);

  const listPropertyType = (e, propertyType) => {
    e.preventDefault();
    navigate(`/properties/search/${propertyType}`);
  };

  return (
    <div className="propertiesType">
      <h1 className="title">Browse by property type</h1>
      <ul className="propertiesList">
        {propertiesType.map((property) => {
          return (
            <li
              onClick={(e) => listPropertyType(e, property.propertyType)}
              className="item"
              key={property.propertyType}
            >
              <img
                className="img"
                src={property.propertyURL}
                alt={property.propertyType}
              />
              <div className="info">
                <h2 className="typeOfProperty">{property.propertyType}</h2>
                <h3 className="propertiesDesc">
                  {property.numberOfpropertiesType}{" "}
                  {property.numberOfpropertiesType > 1
                    ? `${property.propertyType}s`
                    : `${property.propertyType}`}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PropertiesType;
