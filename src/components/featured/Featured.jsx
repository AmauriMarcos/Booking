import React, { useEffect } from "react";
import "../../sass/components/_featured.scss";
import { Link } from "react-router-dom";
import { countByCity } from "../../features/infoSlice";
import { useSelector, useDispatch } from "react-redux";

const Featured = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.info.entities);

  useEffect(() => {
    dispatch(countByCity());
  }, [dispatch]);

  const selectedProperties = properties.filter((property) => {
    return (
      property.location === "Hawaii" ||
      property.location === "Tokyo" ||
      property.location === "New York" ||
      property.location === "San Francisco" ||
      property.location === "Paris"
    );
  });
  const arr = [2, 3, 4, 0, 1];
  const newOrder = arr.map((i) => selectedProperties[i]);

  const urlArr = [
    "https://www.onde-e-quando.net/site/images/illustration/hawai_642.jpg",
    "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/12/08/563892f2121e4dc0b60e1d64ddd9f5f7_Michelin+Guide+Tokyo+2021+header.jpg",
    "https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1",
    "https://www.conexaoparis.com.br/wp-content/uploads/2019/08/nova-iorque-e1564657966489.jpg",
    "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/san-francisco-california/overview/san-francisco-california-golden-gate-bridge.jpg?$750x320$",
  ];

  const displayProperties = newOrder.map((property, i) => {
    return { ...property, url: urlArr[i] };
  });

  const classes = ["a", "b", "c", "d", "e"];
  console.log(displayProperties)
  return (
    <div className="featured">
      {displayProperties.map((property, i) => {
        return (
          <Link to="/properties" className={classes[i]} key={property?.location}>
            <div className={`featuredItem `}>
              <img
                className="featuredItem__img"
                src={property.url}
                alt={property?.location}
              />
              <div className="featuredItem__title">
                <h1>{property?.location}</h1>
                <h2>{property?.numberOfProperties} properties</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Featured;
