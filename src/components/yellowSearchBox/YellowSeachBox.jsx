import React, {useState,useEffect, useMemo} from "react";
import OptionsBox from "../../components/optionsBox/OptionsBox";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import '../../sass/components/_yellowSearchBox.scss';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { handleDate } from "../../features/searchSlice";

const YellowSeachBox = ({isOptionsOpen, setIsOptionsOpen, type, location}) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.options);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const {checkIn, checkOut} = useSelector((state) => state.search);
  const submit = (e) => {
    e.preventDefault();
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  let currentStartDate = date[0]?.startDate;
  let currentEndDate = date[0]?.endDate;


    const dates = useMemo(() => ({
    checkIn: currentStartDate,
    checkOut: currentEndDate
  }), [currentStartDate, currentEndDate]);

  useEffect(() => {
     if(currentStartDate && currentEndDate){
       dispatch(handleDate(dates))
      }
 
  }, [dispatch, currentStartDate, currentEndDate, dates]) 

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
              placeholder={location}
              name="search"
              className="search"
            />
          </div>
        </div>

        <div className="item">
          <p>Check-in date</p>
          <div className="wrapper">
            <CalendarTodayIcon className="calendarIcon" />
            {checkIn ? (
          <span
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="date"
          >
            {`${format(checkIn, "EEE dd MMM")} - ${format(
              checkOut,
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

            <KeyboardArrowDownIcon className="arrowIcon" />
          </div>
        </div>
        

        <div className="item optionsContainer">
          <div
            className="wrapper"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            <p>
              {search[0]?.qtd} adults - {search[1]?.qtd} children - {" "}
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
