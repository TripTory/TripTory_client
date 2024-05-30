import React, { useState, useEffect } from "react";
import { COLOR } from "../styles/color";
import styled from "styled-components";
import DiaryList from "../components/common/DiaryList";
import Greenbar from "../assets/icons/greenbar.svg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Pencil from "../assets/images/pencil.svg";
import { useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BottomNav from "../layout/BottomNav";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { tripIdState } from "../recoil/commonState";
import defaultImageSrc from "../assets/images/defaultProfileImg.svg";

export default function DiaryListPage() {
  const [tripName, setTripName] = useState("");
  const tripId = useRecoilValue(tripIdState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userimg, setUserimg] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let completed = false;
    let userimgs = [];

    const fetchImages = async () => {
      try {
        const Img = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/travel/${tripId}`,
          { withCredentials: true },
        );
        if (!completed) {
          Img.data.invited_profile.forEach((item) => {
            userimgs.push(item.url);
          });
          setUserimg(userimgs);
          setTripName(Img.data.travel.title);

        }
      } catch (error) {
        if (!completed) {
          setError(error);
          console.error("사진 가져오기 중 에러가 발생했습니다:", error);
        }
      }
    };

    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/diary/travel/${tripId}`,
          { withCredentials: true }
        );
        if (!completed) {
          setData(result.data.diarys_info);
          setLoading(true);
        }
      } catch (error) {
        if (!completed) {
          setError(error);
          setLoading(true);
          console.error("데이터 가져오기 중 에러가 발생했습니다:", error);
        }
      }
    };

    fetchImages();
    fetchData();

    return () => {
      completed = true;
    };
  }, [tripId]);

  const goToAdd = () => {
    navigate("/invitefriend");
  };
  const goToCreate = () => {
    navigate("/diary");
  };
  return (
    <StDiaryListPage>
      <TitleDiv>
        <img src={Greenbar} style={{ height: "2.7rem" }} />
        <TitleP>{tripName}</TitleP>
      </TitleDiv>
      <MainDiv>
        <FriendDiv>
          {userimg[1]!==undefined && (
            <FriendAvta
              sx={{ position: "absolute", left: "56%" }}
              alt="1"
              src={userimg[1] ? userimg[1] : defaultImageSrc }
            />
          )}
          <FriendAvtb
            sx={{ position: "absolute", left: "63%" }}
            alt="2"
            src={userimg[0]===null ? defaultImageSrc :userimg[0]}
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
  font-family: var(--pretendard-medium);
  font-weight: 800;
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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const FriendAvta = styled(Avatar)`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border: 1.5px solid white;
  z-index: 1;
  left: calc(100% - 146px);
`;

const FriendAvtb = styled(Avatar)`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border: 1.5px solid white;
  z-index: 2;
  left: calc(100% - 123px);

`;

const AddFriendBtn = styled(Button)`
  position: absolute;
  left: calc(100% - 100px);
  height: 3.5rem;
  width: 10rem;
  background-color: ${COLOR.MAIN_EMER};
  color: white;
  font-size: 1.2rem;
  font-family: var(--pretendard-regular);
  z-index: 3;
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
  font-family: var(--pretendard-medium);
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
