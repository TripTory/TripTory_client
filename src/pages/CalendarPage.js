import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TripCalendar from "../components/common/TripCalendar";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";
import axios from "axios";

const CalendarPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [diaryInfo, setDiaryInfo] = useState([]);
  const [sendData, setSendData] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/diary`, { withCredentials: true })
      .then((res) => {
        setDiaryInfo(res.data.diarys_info);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  }, []);

  useEffect(() => {
    const transformedData = diaryInfo.map((item) => {
      const { diary, url } = item;
      return { ...diary, url };
    });
    setSendData(transformedData);
  }, [diaryInfo]);


  // {
  //   year: 2024,
  //   month: 5,
  //   day: 20,
  //   place: "인천 광역시",
  //   author: "카리나",
  //   diaryTitle: "신나는 바다 여행",
  //   imagePath:
  //     "https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg",
  // },

  return (
    <div>
      <Title>내 캘린더</Title>
      <TripCalendar diaryInfo={sendData}></TripCalendar>
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
