import React, { useState } from "react";
import "../../sass/components/_searchbar.scss";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import OptionsBox from "../optionsBox/OptionsBox";
import {useSelector} from 'react-redux';

const SearchBar = () => {
  const search = useSelector((state) => state.search.options)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

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
        <span
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          className="text"
        >
          {
            `${search[0]?.qtd} adults - 
             ${search[1]?.qtd} children - 
             ${search[2]?.qtd} room`
          }
        </span>
        {isOptionsOpen && <OptionsBox />}
      </div>
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
