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
            diaryID: item.diary._id
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
    <div>
      <Title>내 캘린더</Title>
      {!loading && <TripCalendar diaryInfo={diaryInfo} />}
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
