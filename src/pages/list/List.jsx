import React, { useState } from "react";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import "../../sass/pages/_list.scss";
/* import { DateRange } from "react-date-range"; */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import OptionsBox from "../../components/optionsBox/OptionsBox";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useSelector } from "react-redux";

const List = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const search = useSelector((state) => state.search.options);
 console.log(search);
  return (
    <div className="list">
      <Navbar/>
      <Header/>
    </div>
  )
}

export default List