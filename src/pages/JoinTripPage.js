import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import { COLOR } from "../styles/color.js";
import Modal from "../components/common/Modal";
import AcceptJoinContent from "../components/common/AcceptJoinContent.js";
import FailJoinContent from "../components/common/FailJoinContent.js";
import xicon from "../assets/icons/x-icon.svg";
import BottomNav from "../layout/BottomNav";

const JoinTripPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState("");
  const [isCheckModal, setIsCheckModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);

  const [inviter, setInviter] = useState("");
  const [travelId, setTravelId] = useState("");

  // X 버튼 클릭
  const handleCancel = () => {
    navigate("/home");
  };

  // input 값 저장
  const handleChange = (e) => {
    setInputCode(e.target.value);
  };

  // 초대 수락시 실행되는 함수
  const joinTrip = () => {
    alert(`${inviter} 님의 여행에 참여되었습니다.`);
    setIsCheckModal(false);
    navigate("/triptable", { state: { travelID: `${travelId}` } });
  };

  // 확인하기 버튼 클릭
  const handleSubmit = () => {
    axios
      .put(`${SERVER_URL}/travel/invite`, {ivtoken: inputCode}, {withCredentials: true} )
      .then((res) => {
        if (res.status === 200) {
          setInviter(res.invited[0]);
          setTravelId(res._id);
          openCheckModal();
        } else {
          openFailModal();
        }
      })
      .catch((error) => {
        openFailModal();
      });
  };

  // check modal 열기
  const openCheckModal = () => {
    setIsCheckModal(true);
  };
  //check modal 닫기
  const closeCheckModal = () => {
    setIsCheckModal(false);
    setInviter("");
    setTravelId("");
  };
  //fail modal 열기
  const openFailModal = () => {
    setIsFailModal(true);
  };
  //fail modal 닫기
  const closeFailModal = () => {
    setIsFailModal(false);
  };

  return (
    <div>
      {isCheckModal && (
        <Modal
          content={<AcceptJoinContent inviter={inviter} />}
          closeModals={closeCheckModal}
          buttons={
            <ButtonContainer>
              <NoBtn onClick={closeCheckModal}>아니오</NoBtn>
              <YesBtn onClick={joinTrip}>예</YesBtn>
            </ButtonContainer>
          }
          w="80%"
          h="25%"
        />
      )}
      {isFailModal && (
        <Modal
          content={<FailJoinContent />}
          closeModals={closeFailModal}
          buttons={
            <ButtonContainer>
              <CloseBtn onClick={closeFailModal}>닫기</CloseBtn>
            </ButtonContainer>
          }
          w="80%"
          h="25%"
        />
      )}
      <div>
        <XButton onClick={handleCancel}>
          <img src={xicon} />
        </XButton>
        <EmptyDiv></EmptyDiv>
        <InputContainer>
          <Text className="tripName">친구 여행 참여하기</Text>
          <Text className="tripFriend">트립토리 친구</Text>
          <Text className="explain">공유받은 랜덤코드를 입력하면</Text>
          <Text className="explain">
            친구나 가족의 여행에 참여할 수 있습니다.
          </Text>
          <InputWrapper>
            <InputCode
              placeholder="랜덤코드를 입력하시오."
              value={inputCode}
              onChange={handleChange}
            ></InputCode>
          </InputWrapper>
          <ButtonWrapper>
            <SubmitButton onClick={handleSubmit} disabled={!inputCode.trim()}>
              <p>확인하기</p>
            </SubmitButton>
          </ButtonWrapper>
        </InputContainer>
      </div>
      <BottomNav />
    </div>
  );
};

export default JoinTripPage;

const XButton = styled.button`
  font-size: 2rem;
  background-color: transparent;
  margin: 2rem;
  border: none;
`;
const EmptyDiv = styled.div`
  width: 100%;
  height: 3rem;
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
    font-size: 1.2rem;
    font-weight: 800;
    color: #747474;
    padding: 0.5rem 1rem;
    margin: 0rem 2.5rem;
  }
`;
const InputContainer = styled.div``;

const SubmitButton = styled.button`
  border: none;
  background-color: ${COLOR.MAIN_EMER};
  font-weight: 900;
  width: 80%;
  height: 3.5rem;
  color: white;
  font-weight: 800;
  border-radius: 5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  //버튼 비활성화일때 색상
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  margin: 2rem;
`;
const InputCode = styled.input`
  width: 90%;
  background-color: transparent;
  border: none;
  border-bottom: solid ${COLOR.MAIN_GREEN} 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0rem 0rem 0rem;
  font-size: 1.5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
`;
const YesBtn = styled.button`
  background-color: ${COLOR.MAIN_GREEN};
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: white;
  font-weight: bolder;
`;

const NoBtn = styled.button`
  background-color: #d9d9d9;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: black;
  font-weight: bolder;
`;

const CloseBtn = styled.button`
  background-color: ${COLOR.MAIN_GREEN};
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: white;
  font-weight: bolder;
`;
