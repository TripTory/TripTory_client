import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { COLOR } from "../styles/color.js";
import FriendList from "../components/common/FriendList.js";
import copyIcon from "../assets/icons/copy.svg";
import xicon from "../assets/icons/x-icon.svg";
import BottomNav from "../layout/BottomNav";
import { useNavigate, useLocation } from "react-router-dom";

const InviteFriendPage = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  // navigate 하면서 받은 travel id 값
  const location = useLocation();
  const travelID = location.state.travelID;
  // travel의 정보
  const [invitecode, setInvitecode] = useState("");
  const [title, setTitle] = useState("");
  const [friendList, setFriendList] = useState([]);

  // 서버로부터 invite code 받아오기
  axios
    .get(`${SERVER_URL}/travel/${travelID}`)
    .then((res) => {
      setInvitecode(res.data.ivtoken);
      setTitle(res.data.title);
      setFriendList(res.data.invited);
    })
    .catch((error) => {
      console.log(error);
    });

  // 취소 버튼
  const handleCancel = () => {
    navigate("/triptable", { state: { travelID: travelID } });
  };

  // 코드 복사 버튼
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(invitecode);
      alert("copied");
    } catch (e) {
      alert("failed");
    }
  };

  return (
    <div>
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
        <FriendList friends={friendList}></FriendList>
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
  font-weight: 900;
  width: 40%;
  height: 3.5rem;
  border-radius: 5rem;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

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

const FriendListContainer = styled.div`
  padding-top: 35rem;
  padding-bottom: 5rem;
`;

const CopyIconImg = styled.img`
  margin: 0.2rem;
`;
