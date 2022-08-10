import React from "react";
import "../../sass/components/_featured.scss";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured">
      <Link to="/hotels" className="a">
        <div className="featuredItem a">
          <img
            className="featuredItem__img"
            src="https://www.onde-e-quando.net/site/images/illustration/hawai_642.jpg"
            alt="Hawaii"
          />
          <div className="featuredItem__title">
            <h1>Hawaii</h1>
            <h2>87 properties</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotels" className="b">
        <div className="featuredItem">
          <img
            className="featuredItem__img"
            src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/12/08/563892f2121e4dc0b60e1d64ddd9f5f7_Michelin+Guide+Tokyo+2021+header.jpg"
            alt="Tokyo"
          />
          <div className="featuredItem__title">
            <h1>Tokyo</h1>
            <h2>176 properties</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotels" className="c">
        <div className="featuredItem ">
          <img
            className="featuredItem__img"
            src="https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2019/11/paris-in-winter.jpg?ssl=1"
            alt="Paris"
          />
          <div className="featuredItem__title">
            <h1>Paris</h1>
            <h2>131 properties</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotels" className="d">
        <div className="featuredItem">
          <img
            className="featuredItem__img"
            src="https://www.conexaoparis.com.br/wp-content/uploads/2019/08/nova-iorque-e1564657966489.jpg"
            alt="New York"
          />
          <div className="featuredItem__title">
            <h1>New York</h1>
            <h2>235 properties</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotels" className="e">
        <div className="featuredItem">
          <img
            className="featuredItem__img"
            src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/san-francisco-california/overview/san-francisco-california-golden-gate-bridge.jpg?$750x320$"
            alt="San Francisco"
          />
          <div className="featuredItem__title">
            <h1>San Francisco</h1>
            <h2>177 properties</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
