import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
            <AddBtn variant="contained"><AddIcon/>추가하기</AddBtn>
          </UpDiv>
          <DownDiv></DownDiv>
        </MyTripDiv>
        <RecomDiv></RecomDiv>
        <TagDiv></TagDiv>
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
`;

const UpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivNameP = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
`;

const AddBtn = styled(Button)`
  background: ${COLOR.MAIN_GREEN};
`;

const DownDiv = styled.div`
`;

const RecomDiv = styled.div``;

const TagDiv = styled.div``;

const HiP = styled.p`
  font-size: 1.5rem;
  color: white;
  font:;
`;

const WelcomeP = styled.p`
  font-size: 1rem;
  color: white;
`;

export default MainPage;
