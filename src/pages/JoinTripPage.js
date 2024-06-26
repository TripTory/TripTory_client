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
import SuccessJoinContent from "../components/common/SuccessJoinContent.js";

const JoinTripPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState("");
  const [travelID, setTravelID] = useState("");
  const [isCheckModal, setIsCheckModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const [inviter, setInviter] = useState("");
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
    setIsCheckModal(false);
    axios
      .put(
        `${SERVER_URL}/travel/invite`,
        { travelid: travelID },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          openSuccessModal();
        } else {
          openFailModal();
        }
      })
      .catch((error) => {
        openFailModal();
        console.log(error);
      });
  };

  // 확인하기 버튼 클릭
  const handleSubmit = () => {
    axios
      .post(
        `${SERVER_URL}/travel/invite`,
        { ivtoken: inputCode },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          setInviter(res.data.auth);
          setTravelID(res.data.travelid);
          openCheckModal();
        } else {
          openFailModal();
        }
      })
      .catch((error) => {
        console.log(error);
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
  };
  //fail modal 열기
  const openFailModal = () => {
    setIsFailModal(true);
  };
  //fail modal 닫기
  const closeFailModal = () => {
    setIsFailModal(false);
  };

  //success join modal 열기
  const openSuccessModal = () => {
    setIsSuccessModal(true);
  };

  //success join modal 닫기
  const closeSuccessModal = () => {
    setIsSuccessModal(false);
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
      {isSuccessModal && (
        <Modal
          content={<SuccessJoinContent />}
          closeModals={closeSuccessModal}
          buttons={
            <ButtonContainer>
              <OkBtn onClick={closeSuccessModal}>확인</OkBtn>
            </ButtonContainer>
          }
          w="80%"
          h="22%"
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
    font-size: 2.2rem;
    padding: 1rem;
    margin: 1rem 2rem;
    font-family: var(--pretendard-bold);
  }

  &.tripFriend {
    font-size: 1.7rem;
    font-weight: 900;
    padding: 0.7rem 1rem;
    margin: 2rem 2.5rem;
    font-family: var(--pretendard-medium);
  }

  &.explain {
    font-size: 1.4rem;
    font-weight: 800;
    color: #747474;
    padding: 0.5rem 1rem;
    margin: 0rem 2.5rem;
    font-family: var(--pretendard-medium);
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
  font-family: var(--pretendard-medium);

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
  font-size: 1.6rem;
  font-family: var(--pretendard-medium);
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

const OkBtn = styled.button`
  background-color: ${COLOR.MAIN_GREEN};
  color: white;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: bolder;
`;
