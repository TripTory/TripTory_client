import React from "react";
import styled from "styled-components";
import { COLOR } from "../styles/color";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";

const BottomNav = () => {
  return (
    <NavDiv>
      <NavBtn><CalendarMonthIcons /></NavBtn>
      <NavBtn><HomeIcons /></NavBtn>
      <NavBtn><PlaceIcons /></NavBtn>
      <NavBtn><PersonIcons /></NavBtn>
    </NavDiv>
  );
};

const NavDiv = styled.div`
  overflow: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

const NavBtn = styled.button`
  text-align: center;
  float: left;
  width: 25%;
  height: 5rem;
  border: none;
  border-top: 1px solid grey;
  background-color: white;
`;

const CalendarMonthIcons= styled(CalendarMonthIcon)`
  height: 3rem;
  width: 3rem;
  color: ${COLOR.MAIN_GREEN};
`;
const HomeIcons = styled(HomeIcon)`
  height: 3rem;
  width: 3rem;
  color: ${COLOR.MAIN_GREEN};
`;
const PlaceIcons = styled(PlaceIcon)`
  height: 3rem;
  width: 3rem;
  color: ${COLOR.MAIN_GREEN};
`;
const PersonIcons= styled(PersonIcon)`
  height: 3rem;
  width: 3rem;
  color: ${COLOR.MAIN_GREEN};
`;

export default BottomNav;
