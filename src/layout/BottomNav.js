import React from "react";
import styled from "styled-components";
import { COLOR } from "../styles/color";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate } from "react-router-dom";



const BottomNav = () => {

  const history = useNavigate();
  const handleNavigation = (path) => {
    history(path);
  };

  return (
    <NavDiv>
      <NavBtn onClick={() => handleNavigation("/")}><CalendarMonthIcons /></NavBtn>
      <NavBtn onClick={() => handleNavigation("/home")}><HomeIcons /></NavBtn>
      <NavBtn onClick={() => handleNavigation("/")}><PlaceIcons /></NavBtn>
      <NavBtn onClick={() => handleNavigation("/mypage")}><PersonIcons /></NavBtn>
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
  border-top: 1px solid #C3C3C3;
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
