import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { COLOR } from "../styles/color.js";
import FriendList from "../components/common/FriendList.js";
import copyIcon from "../assets/icons/copy.svg";
import xicon from "../assets/icons/x-icon.svg";
import BottomNav from "../layout/BottomNav";
import { useNavigate } from "react-router-dom";
import Modal from "../components/common/Modal";
import { tripIdState } from "../recoil/commonState";
import { useRecoilValue } from "recoil";
import SuccessCopyContent from "../components/common/SuccessCopyContent.js";

const InviteFriendPage = () => {
  const tripId = useRecoilValue(tripIdState);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  // travel의 정보
  const [invitecode, setInvitecode] = useState("");

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState([]);
  const [userimg, setUserimg] = useState([]);

  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  // 서버로부터 여행 정보 받아오기
  useEffect(() => {
    let usernames = [];
    let userimgs = [];
    axios
      .get(`${SERVER_URL}/travel/${tripId}`)
      .then((res) => {
        console.log(res);
        // 초대 코드 저장
        setInvitecode(res.data.travel.ivtoken);
        // 여행 제목 저장
        setTitle(res.data.travel.title);
        // 여행 참여자 이름 저장
        res.data.travel.invited.forEach((item) => {
          usernames.push(item.name);
        });
        setUsername(usernames);
        // 여행 참여자 프로필사진 저장
        res.data.invited_profile.forEach((item) => {
          userimgs.push(item.url);
        });
        setUserimg(userimgs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 취소 버튼
  const handleCancel = () => {
    navigate("/triptable");
  };

  // 코드 복사 버튼
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(invitecode);
      openModal();
    } catch (e) {
      alert("failed");
    }
  };

  return (
    <div>
      {isModal && (
        <Modal
          content={<SuccessCopyContent />}
          closeModals={closeModal}
          buttons={
            <ButtonContainer>
              <OkBtn onClick={closeModal}>확인</OkBtn>
            </ButtonContainer>
          }
          w="80%"
          h="22%"
        />
      )}
      <FixedDiv>
        <div>
          <XButton onClick={handleCancel}>
            <img src={xicon} />
          </XButton>
        </div>
        <CopyCodeContainer>
          <Text className="tripName">{title}</Text>
          <Text className="tripFriend">트립토리 친구</Text>
          <Text className="explain">
            함께 여행간 친구나 가족을 초대해보세요.
          </Text>
          <Text className="explain">
            여행 일기를 함께 기록하고 공유할 수 있습니다.
          </Text>
          <ButtonWrapper>
            <CopyCodeButton onClick={copyCode}>
              <CopyIconImg src={copyIcon} />
              <p>랜덤코드 복사</p>
            </CopyCodeButton>
          </ButtonWrapper>
        </CopyCodeContainer>
      </FixedDiv>
      <FriendListContainer>
        <FriendList usernames={username} userimgs={userimg}></FriendList>
      </FriendListContainer>
      <BottomNav />
    </div>
  );
};

export default InviteFriendPage;

const FixedDiv = styled.div`
  width: 100%;
  position: fixed;
  background-color: white;
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
  width: 40%;
  height: 3.5rem;
  border-radius: 5rem;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--pretendard-semibold);

  &:active {
    background-color: ${COLOR.MAIN_GREEN};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Text = styled.p`
  &.tripName {
    font-size: 2.3rem;
    font-weight: 900;
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
    font-size: 1.2rem;
    color: #747474;
    padding: 0.5rem 1rem;
    margin: 0rem 2.5rem;
    font-family: var(--pretendard-medium);
  }
`;

const FriendListContainer = styled.div`
  padding-top: 35rem;
  padding-bottom: 5rem;
`;

const CopyIconImg = styled.img`
  margin: 0.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
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
