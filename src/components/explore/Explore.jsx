import React from "react";
import "../../sass/components/_explore.scss";
import {Link} from 'react-router-dom';

const Explore = () => {
  return (
    
    <div className="explore">
      <div className="exploreTitle">
        <h1 className="title">Explore Australia</h1>
        <h2 className="subtitle">These popular destinations have a lot to offer</h2>
      </div>
      <Link to="/properties">
      <ul className="exploreList">
        <li className="item">
          <img
            className="img"
            src="https://images7.alphacoders.com/716/thumb-1920-716104.jpg"
            alt="Sidney"
          />
          <div className="info">
            <h2 className="cityName">Sidney</h2>
            <h3 className="properties">219 Properties</h3>
          </div>
        </li>

        <li className="item">
          <img
            className="img"
            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTEv9gdycEKSYtq4KTlbZt-Ekp-Aq9u9xzjQu9qiSFw31eSDBKRM_0wGPWAemXCcMyi"
            alt="Melbourne"
          />
          <div className="info">
            <h2 className="cityName">Melbourne</h2>
            <h3 className="properties">183 Properties</h3>
          </div>
        </li>

        <li className="item">
          <img
            className="img"
            src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSEN1buOToNxaSMQ3-s37qfOYnXW4uJwq6Hq9tf841BwsYUi0kV37k0cMLb78amSK2k"
            alt="Newcastle"
          />
          <div className="info">
            <h2 className="cityName">Newcastle</h2>
            <h3 className="properties">93 Properties</h3>
          </div>
        </li>

        <li className="item">
          <img
            className="img"
            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQrSEpVMf4VQFxJLVmW7A08WJTSVCVoQXIWyzRA4czThu4-89m--sPZLVPTSjIqwkR6"
            alt="Gold Coast"
          />
          <div className="info">
            <h2 className="cityName">Gold Coast</h2>
            <h3 className="properties">112 Properties</h3>
          </div>
        </li>

        <li className="item">
          <img
            className="img"
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSfzkWhvq6wX9vdU-3A_ItQTZFMKi0l-0sU2Gphv9L6zgM7E6NMDOQ85WXGCzEWglMZ"
            alt="Launceston"
          />
          <div className="info">
            <h2 className="cityName">Launceston</h2>
            <h3 className="properties">67 Properties</h3>
          </div>
        </li>

        <li className="item">
          <img
            className="img"
            src="https://media.gettyimages.com/photos/canberra-australian-capital-territory-picture-id685389168?s=612x612"
            alt="Camberra"
          />
          <div className="info">
            <h2 className="cityName">Camberra</h2>
            <h3 className="properties">119 Properties</h3>
          </div>
        </li>
      </ul>
      </Link>
    </div>
    
  );
};

export default Explore;
