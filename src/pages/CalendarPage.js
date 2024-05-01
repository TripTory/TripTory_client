import React from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TripCalendar from "../components/common/TripCalendar";
import BottomNav from "../layout/BottomNav";

const CalendarPage = () => {
  return (
    <div>
      <TripCalendar></TripCalendar>
      <BottomNav></BottomNav>
    </div>
  );
};
export default CalendarPage;
