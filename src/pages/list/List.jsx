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
import { getAllProperties } from './../../features/propertySlice';

const List = () => {
  const properties = useSelector((state) => state.property.entities);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllProperties())
  }, [dispatch]);

  
  return (
    <div className="list">
      <Navbar />
      <Header />
       <div className="listContainer">
        <div className="listWrapper">
          <div className="listContainer">
            <div className="listWrapper">
              <YellowSearchBox
                isOptionsOpen={isOptionsOpen}
                setIsOptionsOpen={setIsOptionsOpen} 
              />
              {properties && <div className="listResult"  >
                <h2>Australia: 14,710 properties found</h2>
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
