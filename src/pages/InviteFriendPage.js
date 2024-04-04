import React from "react";
import styled from "styled-components";
import { COLOR } from "../styles/color.js";

const InviteFriendPage = () => {
  return (
    <div>
      <div><XButton>X</XButton></div>
      <EmptyDiv></EmptyDiv>
      <CopyCodeContainer>
        <Text className="tripName">마루와 함께하는 부산</Text>
        <Text className="tripFriend">트립토리 친구</Text>
        <Text className="explain">함께 여행간 친구나 가족을 초대해보세요.</Text>
        <Text className="explain">
          여행 일기를 함께 기록하고 공유할 수 있습니다.
        </Text>
        <ButtonWrapper>
          <CopyCodeButton>랜덤코드 복사</CopyCodeButton>
        </ButtonWrapper>
      </CopyCodeContainer>
    </div>
  );
};

export default InviteFriendPage;


const EmptyDiv = styled.div`
  width: 100%;
  height: 3rem;
`;

const XButton = styled.button`
  font-size: 2rem;
  background-color: transparent;
  margin: 2rem;
  border: none;
`;

const CopyCodeContainer = styled.div`
  border-bottom: solid ${COLOR.MAIN_SKY} 1px;
`;

const CopyCodeButton = styled.button`
  border: none;
  background-color: ${COLOR.MAIN_EMER};
  font-weight: 900;
  width: 40%;
  height: 3.5rem;
  border-radius: 5rem;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Text = styled.p`
  &.tripName {
    font-size: 2rem;
    font-weight: 900;
    padding: 1rem;
    margin: 1rem 2rem;
  }

  &.tripFriend {
    font-size: 1.5rem;
    font-weight: 900;
    padding: 0.7rem 1rem;
    margin: 2rem 2.5rem;
  }

  &.explain {
    font-size: 1rem;
    font-weight: 800;
    color: #747474;
    padding: 0.5rem 1rem;
    margin: 0rem 2.5rem;
  }
`;
