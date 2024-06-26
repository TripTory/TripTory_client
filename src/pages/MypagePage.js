import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Default from "../assets/images/defaultavatar.svg";
import { COLOR } from "../styles/color";
import { useNavigate } from "react-router-dom";
import Modal from "../components/common/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import CancelContent from "../components/common/CancelContent";
import BottomNav from "../layout/BottomNav";
import axios from "axios";
import { useRecoilState } from "recoil";
import { tripIdState, diaryIdState } from "../recoil/commonState";

const MypagePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "", profileimg: "" });
  const [tripId, setTripId] = useRecoilState(tripIdState);
  const [diaryID, setDiaryId] = useRecoilState(diaryIdState);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToEdit = () => {
    navigate("/editprofil", {
      state: {
        name: userInfo.name,
        email: userInfo.email,
        profileimg: userInfo.profileimg,
      },
    });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    handleUserInfo();
  }, []);

  const handleUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.userinfo;
        setUserInfo({
          _id: data._id,
          name: data.name,
          email: data.email,
          profileimg: res.data.url,
          authprovider: data.authprovider,
        });
      })
      .catch((error) => {
        const status = error.status;
        if (status === 404) {
          setMessage("사용자를 찾을 수 없습니다.");
        } else if (status === 401) {
          setMessage("로그인이 필요합니다.");
        } else if (status === 500) {
          setMessage("서버 오류가 발생했습니다.");
        } else {
          setMessage("알 수 없는 오류가 발생했습니다.");
        }
        console.error("요청 실패:", error);
      });
  };

  const handleLogout = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/user/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          setTripId("");
          setDiaryId("");
          setMessage("로그아웃 성공");
        } else if (status === 401) {
          setMessage("로그인이 필요합니다.");
        } else if (status === 500) {
          setMessage("서버 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("요청 실패:", error);
        setMessage("서버 요청 중 오류가 발생했습니다.");
      });
  };

  const DelAccount = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/user`, {
        withCredentials: true,
      })
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          setTripId("");
          setDiaryId("");
          setMessage("계정이 성공적으로 삭제되었습니다.");
        } else if (status === 404) {
          setMessage("사용자를 찾을 수 없습니다.");
        } else if (status === 401) {
          setMessage("로그인이 필요합니다.");
        } else if (status === 500) {
          setMessage("서버 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("요청 실패:", error);
        setMessage("서버 요청 중 오류가 발생했습니다.");
      });

    goToLogin();
  };
  const Menu = [
    { icon: <ModifyIcon />, text: "프로필 편집", action: goToEdit },
    {
      icon: <LogoutIcon />,
      text: "로그아웃",
      action: [handleLogout, goToLogin],
    },
    {
      icon: <CancelIcon />,
      text: "계정 탈퇴",
      action: toggleModal,
    },
  ];
  return (
    <StMyPagePage>
      <TitleDiv>
        <TitleTypo>마이 페이지</TitleTypo>
      </TitleDiv>
      <ProfilDiv>
        <ProfilAvatar alt="default" src={userInfo.profileimg || Default} />
        <NameP>{userInfo.name}</NameP>
        <MailP>{userInfo.email}</MailP>
      </ProfilDiv>
      <MenuDiv>
        <List sx={{ width: "100%" }}>
          {Menu.map((it) => {
            return (
              <div key={it.text}>
                <MenuLstItem disablePadding>
                  <MenuLIBtn
                    onClick={
                      Array.isArray(it.action)
                        ? () => it.action.forEach((actionFunc) => actionFunc())
                        : it.action
                    }
                  >
                    {it.icon}
                    <MenuP>{it.text}</MenuP>
                  </MenuLIBtn>
                </MenuLstItem>
              </div>
            );
          })}
        </List>
      </MenuDiv>
      {isModalOpen && (
        <CancelModal
          content={<CancelContent />}
          closeModals={closeModal}
          buttons={
            <StCancelButtons>
              <NoBtn onClick={closeModal}>아니오</NoBtn>
              <YesBtn onClick={DelAccount}>네</YesBtn>
            </StCancelButtons>
          }
          w="80%"
          h="20%"
        />
      )}
      <BottomNav />
    </StMyPagePage>
  );
};

const StMyPagePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-left: 2rem;
`;

const TitleTypo = styled(Typography)`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 1000;
  font-size: 2.5rem;
  font-family: var(--pretendard-bold);
`;

const ProfilDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 40%;
  margin-top: 3rem;
`;

const ProfilAvatar = styled(Avatar)`
  width: 13rem;
  height: 13rem;
`;

const NameP = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  font-family: var(--pretendard-medium);
`;

const MailP = styled.p`
  font-size: 1.4rem;
  color: #868686;
  font-weight: 400;
  margin-top: 1.2rem;
  font-family: var(--pretendard-medium);
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: end;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
`;

const MenuLstItem = styled(ListItem)`
  width: 100%;
  height: 5rem;
  margin-left: 0.2rem 0rem 0.2rem 1.2rem;
`;

const MenuLIBtn = styled(ListItemButton)`
  display: flex;
  width: 100%;
`;

const MenuP = styled.p`
  font-size: 1.6rem;
  margin-left: 1.8rem;
  font-family: var(--pretendard-medium);
`;

const SharedAttr = `
color: ${COLOR.MAIN_GREEN};
width: 2.2rem;
height: 2.2rem;

`;

const ModifyIcon = styled(CreateOutlinedIcon)`
  ${SharedAttr};
`;

const CancelIcon = styled(DoDisturbOutlinedIcon)`
  ${SharedAttr};
`;

const LogoutIcon = styled(LogoutOutlinedIcon)`
  ${SharedAttr};
`;

const CancelModal = styled(Modal)``;

const StCancelButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const YesBtn = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: white;
  font-weight: bolder;
  font-family: var(--pretendard-medium);
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
  font-family: var(--pretendard-medium);
`;
export default MypagePage;
