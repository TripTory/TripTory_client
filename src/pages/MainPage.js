import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TripList from "../components/TripList";
import React from "react";

const MainPage = () => {
  return (
    <StMainPage>
      <IntroDiv>
        <HiP>이채영님&nbsp;반가워요!</HiP>
        <WelcomeP>트립토리와 함께 여행을 기록해요.</WelcomeP>
      </IntroDiv>
      <MainDiv>
        <MyTripDiv>
          <UpDiv>
            <DivNameP>내 여행</DivNameP>
            <AddBtn variant="contained">+ 추가하기</AddBtn>
          </UpDiv>
          <DownDiv>
            <TripList />
          </DownDiv>
        </MyTripDiv>
        <RecomDiv>
          <DivNameP>맞춤 여행지</DivNameP>
        </RecomDiv>
        <TagDiv>
          <DivNameP>태그 별 사진 보기</DivNameP>
        </TagDiv>
      </MainDiv>
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
  ${SharedContent}
  flex-direction: column;
  width: 100%;
  height: 20%;
`;

const MainDiv = styled.div`
  ${SharedContent}
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 1rem 1rem 0rem 0rem;
`;

const MyTripDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 33%;
  flex-direction: column;
  border: 1px solid black;
`;

const UpDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 20%;
  justify-content: space-between;
  border: 1px solid red;
`;

const DivNameP = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  font-family: var(--inter-extrabold);
`;

const AddBtn = styled(Button)`
  display: flex;
  background-color: ${COLOR.MAIN_GREEN};
  border-radius: 1rem;
  font-size: 0.8rem;
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
  width: 100%;
  height: 33%;
`;

const TagDiv = styled.div`
  ${SharedContent};
  width: 100%;
  height: 33%;
`;

const HiP = styled.p`
  font-size: 1.5rem;
  color: white;
  font-family: var(--inter-extrabold);
  font-weight: 700;
`;

const WelcomeP = styled.p`
  font-size: 1rem;
  color: white;
`;

export default MainPage;
