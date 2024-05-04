import React from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TripCalendar from "../components/common/TripCalendar";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";

const CalendarPage = () => {

  // DB에서 일기의 년,월,일,사진 정보 가져오기
  const diaryInfo = [
    {
      "year": 2024,
      "month": 3,
      "day": 6,
      "place" : "인천 광역시",
      "author" : "카리나",
      "diaryTitle" : "신나는 바다 여행",
      "imagePath": "https://health.chosun.com/site/data/img_dir/2023/05/31/2023053102582_0.jpg"
    },
    {
      "year": 2024,
      "month": 4,
      "day": 15,
      "place" : "인천 광역시",
      "author" : "카리나",
      "diaryTitle" : "신나는 바다 여행",
      "imagePath": "http://giljabi.net/newwp/wp-content/uploads/2017/06/764fd69872ff5b764c21066a1a24d6e2-768x512.jpg"
    },
    {
      "year": 2024,
      "month": 4,
      "day": 16,
      "place" : "인천 광역시",
      "author" : "카리나",
      "diaryTitle" : "신나는 바다 여행",
      "imagePath": "https://mediaim.expedia.com/destination/1/aaa0934df627fdf9d5ae9d1863195d63.jpg"
    },
    {
      "year": 2024,
      "month": 5,
      "day": 20,
      "place" : "인천 광역시",
      "author" : "카리나",
      "diaryTitle" : "신나는 바다 여행",
      "imagePath": "https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg"
    }
  ];
  return (
    <div>
      <Title>내 캘린더</Title>
      <TripCalendar diaryInfo={diaryInfo}></TripCalendar>
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
