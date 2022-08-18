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
import {useSelector, useDispatch} from 'react-redux';
import changeDateFormat from '../../utils/formatDate.js';
import {useNavigate} from 'react-router-dom';
import { handleDate } from "../../features/searchSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.options)
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);


  let currentStartDate = date[0]?.startDate;
  let currentEndDate = date[0]?.endDate;

/*   const checkIn = changeDateFormat(currentStartDate);
  const checkOut = changeDateFormat(currentEndDate); */

  const dates = {
    checkIn: currentStartDate,
    checkOut: currentEndDate
  }

  console.log(dates);

  const submit = (e) => {
    if(location.trim() !== ''){
      e.preventDefault();
      dispatch(handleDate(dates));
      navigate(`/properties/search/${location}`);
    }else{
      setError('Please enter a destination to start searching.')
    }   
  }

  return (
    <div className="searchBar">
      <div className="searchBarItem">
        <BedOutlinedIcon className="icon" />
        <input
          className="input"
          type="search"
          placeholder="Where are you going?"
          onChange={(e) => setLocation(e.target.value)}
        />
    
{/*         {error && <div><p>{error}</p></div> } */}
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
      <button className="button" onClick={submit}>Search</button>
    </div>
  );
};

export default SearchBar;
