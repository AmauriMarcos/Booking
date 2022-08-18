import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import "../../sass/pages/_list.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import YellowSearchBox from '../../components/yellowSearchBox/YellowSeachBox';
import {useSelector, useDispatch} from 'react-redux';
import CardProperty from "../../components/cardProperty/CardProperty";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from 'react-router-dom';
import { getPropertiesByLocation } from './../../features/searchSlice';
import { capitalize } from "@mui/material";

const List = () => {
  const navigate = useNavigate();
  const params = useParams();
  const properties = useSelector((state) => state.search.entities);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); 
  const dispatch = useDispatch();

  const location = params.location;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPropertiesByLocation(location))
  }, [dispatch, location]);

  console.log(properties);

  return (
    <div className="list">
      <Navbar />
      <Header />
       <div className="listContainer">
        <div className="listWrapper">
          <div className="listContainer">
            <div className="listWrapper">
              <YellowSearchBox
                location={location}
                isOptionsOpen={isOptionsOpen}
                setIsOptionsOpen={setIsOptionsOpen} 
              />
              {properties && <div className="listResult"  >
                <h2 style={{"textTransform":"capitalize"}}>{location}: {properties.length} {properties.length > 1 ? "properties found" : "property found"}</h2>
                {properties.map((property) => {
                  return (
                    <CardProperty property={property} key={property.id} />
                  )
                })}
              </div>}
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default List;
