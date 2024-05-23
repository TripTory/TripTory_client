import React, { useState, useEffect } from "react";
import { COLOR } from "../styles/color";
import styled from "styled-components";
import DiaryList from "../components/common/DiaryList";
import Greenbar from "../assets/icons/greenbar.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Busan from "../assets/images/busan.jpg";
import Gunsan from "../assets/images/gunsan.jpg";
import Pencil from "../assets/images/pencil.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BottomNav from "../layout/BottomNav";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { tripNameState } from "../recoil/commonState";

export default function DiaryListPage() {
  const tripName = useRecoilValue(tripNameState);
  const navigate = useNavigate();
  //여행 id location으로 받음
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let completed = false;

    // eslint-disable-next-line func-style
    async function get() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/diary/travel/${location.state.id}`,
          { withCredentials: true },
        );
        if (!completed) {
          // console.log("diarys:", result.data.diarys_info);
          setData(result.data.diarys_info);
          setLoading(true);
        }
      } catch (error) {
        if (!completed) {
          setError(error);
          setLoading(true);
        }
        console.error("데이터 가져오기 중 에러가 발생했습니다:", error);
      }
    }

    get();
    return () => {
      completed = true;
    };
  }, [location.state.id]);

  const goToAdd = () => {
    navigate("/invitefriend", { state: { id: location.state.id } });
  };
  const goToCreate = () => {
    navigate("/diary", { state: { id: location.state.id } });
  };
  return (
    <StDiaryListPage>
      <TitleDiv>
        <img src={Greenbar} style={{ height: "2.7rem" }} />
        <TitleP>{tripName}</TitleP>
      </TitleDiv>
      <MainDiv>
        <FriendDiv>
          <FriendAvt
            sx={{ position: "absolute", left: "56%" }}
            alt="1"
            src={Busan}
          />
          <FriendAvt
            sx={{ position: "absolute", left: "63%" }}
            alt="2"
            src={Gunsan}
          />
          <AddFriendBtn variant="contained" onClick={goToAdd}>
            + 일행 추가
          </AddFriendBtn>
        </FriendDiv>
        <DiaryDiv>
          <SemiHeaderDiv>
            <SemititleDiv>
              <FormatListBulletedIcon
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  color: `${COLOR.MAIN_GREEN}`,
                }}
              />
              <SemititleP>일기목록</SemititleP>
            </SemititleDiv>
            <PencilImg src={Pencil} onClick={goToCreate} />
          </SemiHeaderDiv>
          <DiaryListDiv>
            {error ? (
              <div></div>
            ) : data.length === 0 && loading ? (
              <div>데이터가 없습니다.</div>
            ) : (
              <DiaryList data={data} />
            )}
          </DiaryListDiv>
        </DiaryDiv>
      </MainDiv>
      <BottomNav />
    </StDiaryListPage>
  );
}

const StDiaryListPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-left: 1rem;
`;

const TitleP = styled.p`
  font-size: 2rem;
  padding-left: 1rem;
  font-weight: bold;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 90%;
`;

const FriendDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const FriendAvt = styled(Avatar)`
  width: 3.5rem;
  height: 3.5rem;
  border: 1.5px solid white;
`;

const AddFriendBtn = styled(Button)`
  position: absolute;
  right: 5%;
  left: 70%;
  height: 3.5rem;
  width: 9rem;
  background-color: ${COLOR.MAIN_EMER};
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 3rem;
  &:hover {
    background-color: ${COLOR.MAIN_EMER};
  }
  &:active {
    background-color: ${COLOR.MAIN_EMER};
  }
`;

const DiaryDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

const SemiHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const SemititleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SemititleP = styled.p`
  font-size: 1.7rem;
  margin-left: 1rem;
`;

const PencilImg = styled.img`
  width: 3rem;
  height: 3rem;
`;

const DiaryListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85%;
`;
