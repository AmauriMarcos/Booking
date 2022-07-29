import React from "react";
import OptionsBox from "../../components/optionsBox/OptionsBox";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useSelector } from "react-redux";
import '../../sass/components/_yellowSearchBox.scss';

const YellowSeachBox = ({isOptionsOpen, setIsOptionsOpen, type}) => {
  const search = useSelector((state) => state.search.options);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={type === "hotel" ? "listSearch noSticky" : "listSearch"}>
      <h1 className="title">Search</h1>
      <form className="form" onSubmit={submit}>
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
          <div
            className="wrapper"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            <p>
              {search[0]?.qtd} adults - {search[1]?.qtd} children -{" "}
              {search[2]?.qtd} room
            </p>
            <KeyboardArrowDownIcon className="arrowIcon" />
          </div>

          {isOptionsOpen && <OptionsBox type="list" />}
        </div>

        <div className="smallFilterSelection">
          <div className="smallFilterSelectionWrapper">
            <div className="smallFilterSelectionSelector">
              <input type="checkbox" className="checkbox" />
              <p>Entire homes & apartments</p>
            </div>

            <HelpOutlineOutlinedIcon className="questionIcon" />
          </div>

          <div className="smallFilterSelectionWrapper">
            <div className="smallFilterSelectionSelector">
              <input type="checkbox" className="checkbox" />
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
  );
};

export default YellowSeachBox;
