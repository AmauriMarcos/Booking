import React, { useState } from "react";
import "../../sass/components/_searchbar.scss";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, locale } from "date-fns";

const SearchBar = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);


  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name, action) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: action === "increment" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  
  return (
    <div className="searchBar">
      <div className="searchBarItem">
        <BedOutlinedIcon className="icon" />
        <input
          className="input"
          type="search"
          placeholder="Where are you going?"
        />
      </div>
      <div className="searchBarItem">
        <CalendarMonthOutlinedIcon className="icon" />

        {date[0]?.endDate ? (
          <span
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="date"
          >
            {`${format(date[0].startDate, "EEE dd MMM")} - ${format(
              date[0]?.endDate,
              "EEE dd MMM"
            )}`}
          </span>
        ) : (
          <p
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="text"
          >
            Check-in Check-out
          </p>
        )}

        {isCalendarOpen && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="calendar"
          />
        )}
      </div>
      <div className="searchBarItem">
        <PersonOutlineOutlinedIcon className="icon" />
        <span onClick={() => setIsOptionsOpen(!isOptionsOpen)} className="text">{`${options.adults} adults - ${options.children} children - ${options.rooms} room`}</span>
        {isOptionsOpen && <div className="options">
          <div className="optionItem">
            <span>Adults</span>
            <div className="optionSelect">
              <button
                onClick={() => handleOption("adults", "decrement")}
                className={`${options.adults <= 1 ? "btn notAllowed" : "btn"}`}
                disabled={options.adults <= 1 ? true : false}
              >
                -
              </button>
              <p>{options.adults}</p>
              <button
                onClick={() => handleOption("adults", "increment")}
                className="btn"
              >
                +
              </button>
            </div>
          </div>
          <div className="optionItem">
            <span>Children</span>
            <div className="optionSelect">
              <button
                onClick={() => handleOption("children", "decrement")}
                className={`${
                  options.children <= 0 ? "btn notAllowed" : "btn"
                }`}
                disabled={options.children <= 0 ? true : false}
              >
                -
              </button>
              <p>{options.children}</p>
              <button
                onClick={() => handleOption("children", "increment")}
                className="btn"
              >
                +
              </button>
            </div>
          </div>
          <div className="optionItem">
            <span>Rooms</span>
            <div className="optionSelect">
              <button
                onClick={() => handleOption("rooms", "decrement")}
                className={`${options.rooms <= 1 ? "btn notAllowed" : "btn"}`}
                disabled={options.rooms <= 1 ? true : false}
              >
                -
              </button>
              <p>{options.rooms}</p>
              <button
                onClick={() => handleOption("rooms", "increment")}
                className="btn"
              >
                +
              </button>
            </div>
          </div>
        </div>}
      </div>
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
