import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Button } from "@mui/material";
import TripList from "../components/common/TripList";
import RecomList from "../components/common/RecomList";
import TagImgList from "../components/common/TagImgList";
import AddTripDialog from "../components/common/AddTripDialog";
import { React, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dialogState, userNameState } from "../recoil/commonState";
import BottomNav from "../layout/BottomNav";
import axios from "axios";

const MainPage = () => {

  const [userName, setUserName] = useRecoilState(userNameState);

  const [dialog, setDialog] = useRecoilState(dialogState);
  const handleOpen = () => {
    setDialog(true);
  };

  const [tagNames, setTagNames] = useState([]);
  const [tagImages, setTagImages] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, { withCredentials: true})
    .then((res) => {
      setUserName(res.data.userinfo.name);
    })
  .catch((error) => {
    console.log(error);
  });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/tag`, { withCredentials: true})
    .then((res) => {
      const data = res.data.imageTags;

      const newTagNames = [...tagNames];
      const newTagImages= [...tagImages];
      for (const tag in data) {
        newTagNames.push(tag);
        newTagImages.push(data);
      }
      setTagNames(newTagNames);
      setTagImages(newTagImages);
    })
  .catch((error) => {
    console.log(error);
  });
  }, []);

  return (
    <StMainPage>
      <IntroDiv>
        <HiP>{userName}님&nbsp;반가워요!</HiP>
        <WelcomeP>트립토리와 함께 여행을 기록해요.</WelcomeP>
      </IntroDiv>
      <MainDiv>
        <AddTripDialog />
        <MyTripDiv>
          <UpDiv>
            <DivNameP>내 여행</DivNameP>
            <AddBtn variant="contained" onClick={handleOpen}>
              + &nbsp;여행 추가
            </AddBtn>
          </UpDiv>
          <DownDiv>
            <TripList />
          </DownDiv>
        </MyTripDiv>
        <RecomDiv>
          <UpRDiv>
            <DivNameP>맞춤 여행지</DivNameP>
          </UpRDiv>
          <DownRDiv>
            <RecomList />
          </DownRDiv>
        </RecomDiv>
        <TagDiv>
          <UpTDiv>
            <DivNameP>태그 별 사진 보기</DivNameP>
          </UpTDiv>
          <DownRDiv>
            {tagNames.length === 0 ? (
              <NoTagsDiv>일기를 추가해보세요!</NoTagsDiv>
            ) : (
              <TagImgList tagNames={tagNames} tagImages={tagImages} />
            )}
          </DownRDiv>
        </TagDiv>
      </MainDiv>
      <BottomNav />
    </StMainPage>
  );
};

const SharedContent = `
display: flex;
justify-content: center;
align-items: center;
`;

const StMainPage = styled.div`
  ${SharedContent}
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MAIN_GREEN};
`;

const IntroDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  /* height: 20rem; */
  margin-top: 20rem;
  padding-left: 2rem;
  padding-bottom: 1.7rem;
`;

const HiP = styled.p`
  font-size: 2rem;
  color: white;
  font-family: var(--pretendard-bold);
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const WelcomeP = styled.p`
  font-size: 1.3rem;
  color: white;
  font-family: var(--pretendard-extralight);
  letter-spacing: 1px;
`;

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 1rem 1rem 0rem 0rem;
`;

const MyTripDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 24rem;
  flex-direction: column;
`;

const UpDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 20%;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`;

const DivNameP = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: var(--pretendard-medium);
  margin-left: 2rem;
`;

const AddBtn = styled(Button)`
  display: flex;
  background-color: ${COLOR.MAIN_GREEN};
  font-family: var(--pretendard-extralight);
  width: 9rem;
  height: 3rem;
  border-radius: 3rem;
  font-size: 1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: ${COLOR.MAIN_GREEN};
  }
  &:visited {
    background-color: ${COLOR.MAIN_GREEN};
  }
  &:active {
    background-color: ${COLOR.MAIN_GREEN};
  }
`;

const DownDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 80%;
`;

const RecomDiv = styled.div`
  ${SharedContent};
  flex-direction: column;
  width: 100%;
  height: 24rem;
  padding-top: 1rem;
  /* border: 1px solid blue; */
`;

const UpRDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

const DownRDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 80%;
`;

const TagDiv = styled.div`
  ${SharedContent};
  flex-direction: column;
  width: 100%;
  height: 24rem;
  margin-bottom: 5rem;
`;

const UpTDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
`;

const NoTagsDiv = styled.div`
  ${SharedContent};
  font-size: 1.2rem;
  color: ${COLOR.MAIN_GREEN};
  font-family: var(--pretendard-medium);
  border-radius: 1rem;
  color: #e4e4e4;
  font-size: 2rem;
`;

export default MainPage;
