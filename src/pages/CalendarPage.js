import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TripCalendar from "../components/common/TripCalendar";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";
import axios from "axios";
import { Typography } from "@mui/material";
const CalendarPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [diaryInfo, setDiaryInfo] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 추적하는 새로운 상태

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/diary`, { withCredentials: true })
      .then((res) => {
        const transformedData = res.data.diarys_info.map((item) => {
          return {
            date: item.diary.date,
            username: item.diary.userName,
            diaryTitle: item.diary.title,
            imagePath: item.url,
            diaryID: item.diary._id,
            travelID: item.diary.travel,
          };
        });
        setDiaryInfo(transformedData);
        setLoading(false); // 데이터를 가져온 후 로딩 상태를 false로 설정
      })
      .catch((error) => {
        console.error("에러:", error);
        setLoading(false); // 오류 발생 시 로딩 상태를 false로 설정
      });
  }, []);


  return (
    <StCalendarPage>
      <TitleDiv>
        <TitleTypo>내 캘린더</TitleTypo>
      </TitleDiv>
      {!loading && <TripCalendar diaryInfo={diaryInfo} />}
      <BottomNav></BottomNav>
    </StCalendarPage>
  );
};
export default CalendarPage;

const StCalendarPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-left: 2rem;
`;

const TitleTypo = styled(Typography)`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 1000;
  font-size: 2.5rem;
  font-family: var(--pretendard-bold);
`;
