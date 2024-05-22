import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";
import { COLOR } from "../../styles/color";
import nextButtonImage from "../../assets/icons/calendar_next_btn.svg";
import prevButtonImage from "../../assets/icons/calendar_prev_btn.svg";
import DiaryModal from "../common/DiaryModal";
import DiaryPreviewContent from "../common/DiaryPreviewContent";
import Drawer from "@mui/material/Drawer";

const TripCalendar = ({ diaryInfo }) => {
  const [selectedDiary, setSelectedDiary] = useState(null); // 선택된 일기 정보 상태 추가
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
    if (newOpen === false) {
      setSelectedDiary(null);
    }
  };
  // 선택된 일기 정보 업데이트
  const showDiary = (diary) => {
    // 선택된 날짜에 해당하는 모든 일기를 뽑아서 리턴하기
    const selected = diaryInfo.filter(
      (item) =>
        moment(item.date).format("YYYY") === moment(diary.date).format("YYYY") &&
        moment(item.date).format("M") === moment(diary.date).format("M") &&
        moment(item.date).format("D") === moment(diary.date).format("D"),
    );
    // 찾은 일기들을 상태에 저장
    setSelectedDiary(selected);
    setIsOpen(true);
  };

  // 일기가 존재하는 날짜의 div에 클래스명 부여
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      // diaryInfo 요소를 순회하며 일기가 존재하는 날짜 검사
      const diary = diaryInfo.find(
        (item) =>
          moment(item.date).format("YYYY") === date.getFullYear().toString() &&
          moment(item.date).format("M") === (date.getMonth() + 1).toString() &&
          moment(item.date).format("D") === date.getDate().toString(),
      );
      if (diary) {
        return "hasDiary";
      }
    }
  };
  // 일기가 있는 날짜에 사진 삽입
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      // diaryInfo 요소를 순회하며 일기가 존재하는 날짜 검사
      const diary = diaryInfo.find(
        (item) =>
          moment(item.date).format("YYYY") === date.getFullYear().toString() &&
          moment(item.date).format("M") === (date.getMonth() + 1).toString() &&
          moment(item.date).format("D") === date.getDate().toString(),
      );

      if (diary) {
        return (
          <div
            style={{
              backgroundImage: `url(${diary.imagePath})`,
              backgroundSize: "cover",
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "1.75rem",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              position: "absolute",
            }}
            onClick={() => showDiary(diary)} // 선택된 일기 정보 업데이트
          >
            {diary.day}
          </div>
        );
      }
    }
    return null;


  };

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
        tileContent={tileContent}
        tileClassName={tileClassName}
      />
      <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false)}>
        <DiaryModal
          content={<DiaryPreviewContent diaries={selectedDiary} />}
        />
      </Drawer>
    </CalendarWrapper>
  );
};

export default TripCalendar;

TripCalendar.propTypes = {
  diaryInfo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      diaryID: PropTypes.string.isRequired,
      diaryTitle: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const CalendarStyle = styled(Calendar)`
  margin-top: 8rem;
  border: none !important;

  .react-calendar {
    border: 3px solid red;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: var(--festie-gray-800, #3a3a3a);
  }

  .react-calendar__navigation__next-button {
    color: transparent;
    background-image: url(${nextButtonImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: transparent !important;
  }

  .react-calendar__navigation__prev-button {
    color: transparent;
    background-image: url(${prevButtonImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: transparent !important;
  }

  .react-calendar__navigation {
    //년, 월 간격
    width: 65%;
    margin: auto;
    display: flex;
    justify-content: center !important;
    align-items: center;
  }
  .react-calendar__navigation__label {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .react-calendar__tile {
    // 날짜(숫자)
    padding: 2rem 0rem;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    // 요일
    padding: 3rem 0rem 2rem 0rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="Sunday"] {
    //일요일에 빨간 폰트
    color: red;
  }

  .react-calendar__month-view__weekdays__weekday--weekend
    abbr[title="Saturday"] {
    //토요일에 파란 폰트
    color: blue;
  }
  .react-calendar__tile--now {
    //오늘 날짜
    color: ${COLOR.MAIN_GREEN};
    background-color: transparent;
  }
  .react-calendar__tile--active {
    // 클릭된 날짜
    color: black;
    background-color: transparent !important;
    border-radius: 1rem;
  }

  .hasDiary abbr {
    display: none;
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;
`;


