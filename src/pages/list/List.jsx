import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import "../../sass/pages/_list.scss";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const List = () => {
  return (
    <div className="list">
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="title">Search</h1>
            <form className="form">
              <div className="item">
                <label htmlFor="search" className="searchLabel">
                  Destination/property name:
                </label>
                <div className="wrapper">
                  <SearchIcon className="searchIcon" />
                  <input
                    type="text"
                    placeholder="Budapest"
                    name="search"
                    className="search"
                  />
                </div>
              </div>

              <div className="item">
                <p>Check-in date</p>
                <div className="wrapper">
                  <CalendarTodayIcon className="calendarIcon" />
                  <p>Wednesday 27 July 2022</p>
                  <KeyboardArrowDownIcon className="arrowIcon" />
                </div>
              </div>

              <div className="item">
                <p>Check-out date</p>
                <div className="wrapper">
                  <CalendarTodayIcon className="calendarIcon" />
                  <p>Saturday 30 July 2022</p>
                  <KeyboardArrowDownIcon className="arrowIcon" />
                </div>
                <p>3-night stay</p>
              </div>

              <div className="item">
                <div className="wrapper">
                  <p>1 adult - 0 children - 1 room</p>
                  <KeyboardArrowDownIcon className="arrowIcon" />
                </div>
              </div>

              <div className="options">
                <div className="optionsWrapper">
                  <div className="optionsSelector">
                  <input type="checkbox" className="checkbox"/>
                    <p>Entire homes & apartments</p>
                  </div>

                  <HelpOutlineOutlinedIcon  className="questionIcon"/>
                </div>

                <div className="optionsWrapper">
                  <div className="optionsSelector">
                    <input type="checkbox" className="checkbox"/>
                    <p>I'm traveling for work</p>
                  </div>
                  <HelpOutlineOutlinedIcon className="questionIcon" />
                </div>
              </div>

              <button type="submit" className="button">
                Search
              </button>
            </form>
          </div>

          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
