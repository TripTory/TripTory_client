import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import moment from "moment";
import { COLOR } from "../../styles/color";
import nextButtonImage from "../../assets/icons/calendar_next_btn.svg";
import prevButtonImage from "../../assets/icons/calendar_prev_btn.svg";

const TripCalendar = () => {
  return (
    <CalendarWrapper>
      <CalendarStyle
        locale="en"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory" // 일요일부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        next2Label={null} // 년 단위 이동 버튼 숨기기(+)
        prev2Label={null} // 년 단위 이동 버튼 숨기기(-)
      ></CalendarStyle>
    </CalendarWrapper>
  );
};
export default TripCalendar;

const CalendarStyle = styled(Calendar)`
margin-top: 8rem;
  .react-calendar{
    border: 3px solid red;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: var(--festie-gray-800, #3a3a3a);
  }

  .react-calendar__navigation__next-button{
    color: transparent;
    background-image: url(${nextButtonImage});
    background-repeat: no-repeat;
    background-position: center center;
  }

  .react-calendar__navigation__prev-button{
    color: transparent;
    background-image: url(${prevButtonImage});
    background-repeat: no-repeat;
    background-position: center center;

  }

  .react-calendar__navigation {
    //년, 월 간격
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
  }
  .react-calendar__navigation__label {
    font-size: 2rem;
  }

  .react-calendar__tile {
    // 날짜(숫자)
    padding: 2rem 0rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .react-calendar__month-view__weekdays__weekday {
    // 요일
    padding: 2rem 0rem;
    font-size: 1.5rem;
    text-align: center;
    
  }
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="Sunday"] {
    //일요일에 빨간 폰트
    color: red;
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="Saturday"] {
    //토요일에 파란 폰트
    color: blue;
  }
  .react-calendar__tile--now {
    //오늘 날짜
    color: ${COLOR.MAIN_GREEN};
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;

`;
