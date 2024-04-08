import React, { useState } from "react";
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

const MypagePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToEdit = () => {
    navigate("/editprofil");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const Menu = [
    { icon: <ModifyIcon />, text: "프로필 편집", action: goToEdit },
    { icon: <LogoutIcon />, text: "로그아웃", action: goToLogin },
    {
      icon: <CancelIcon />,
      text: "계정 탈퇴",
      action: toggleModal,
    },
  ];
  return (
    <StMyPagePage>
      <TitleDiv>
        <TitleTypo variant="h4">마이 페이지</TitleTypo>
      </TitleDiv>
      <ProfilDiv>
        <ProfilAvatar alt="default" src={Default} />
        <NameP>이채영</NameP>
        <MailP>cy1234@naver.com</MailP>
      </ProfilDiv>
      <MenuDiv>
        <List sx={{ width: "100%" }}>
          {Menu.map((it) => {
            return (
              <div key={it.text}>
                <MenuLstItem disablePadding>
                  <MenuLIBtn onClick={it.action}>
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
          content={<CancelContent/>}
          closeModals={closeModal}
          buttons={<StCancelButtons>
            <NoBtn onClick={closeModal}>아니오</NoBtn>
            <YesBtn onClick={goToLogin}>네</YesBtn>
          </StCancelButtons>}
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
`;

const MailP = styled.p`
  font-size: 1.4rem;
  color: #868686;
  font-weight: 400;
  margin-top: 1.2rem;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: end;
  padding-bottom: 4rem;
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

const CancelModal = styled(Modal)`
`;

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
`;

const NoBtn = styled.button`
  background-color: #D9D9D9;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: black;
  font-weight: bolder;
`;
export default MypagePage;
