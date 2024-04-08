import React, { useState } from "react";
import styled, { css } from "styled-components";
import { COLOR } from "../styles/color";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {

  const [activeButton, setActiveButton] = useState("/");
  const location = useLocation();
  const history = useNavigate();

  React.useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <NavDiv>
      <NavBtn onClick={() => history("/")} active={activeButton === "/"}><CalendarMonthIcons /></NavBtn>
      <NavBtn onClick={() => history("/home")} active={activeButton === "/home"}><HomeIcons /></NavBtn>
      <NavBtn onClick={() => history("/")} active={activeButton === "/"}><PlaceIcons /></NavBtn>
      <NavBtn onClick={() => history("/mypage")} active={activeButton === "/mypage"}><PersonIcons /></NavBtn>
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
  
  ${({ active }) =>
    active &&
    css`
      box-shadow: 0px 3px 3px 0px inset rgba(0, 0, 0, 0.3);
    `}

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
