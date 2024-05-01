import React from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TripCalendar from "../components/common/TripCalendar";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";

const CalendarPage = () => {
  return (
    <div>
      <Title>내 캘린더</Title>
      <TripCalendar></TripCalendar>
      <BottomNav></BottomNav>
    </div>
  );
};
export default CalendarPage;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: ${COLOR.MAIN_GREEN};
  padding: 3rem 2rem;
`;
