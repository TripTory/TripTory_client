import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Default from "../assets/images/defaultavatar.svg";
import { COLOR } from "../styles/color";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";

const MypagePage = () => {
  const Menu = [
    { icon: <ModifyIcon />, text: "프로필 편집" },
    { icon: <LogoutIcon />, text: "로그아웃" },
    { icon: <CancelIcon />, text: "계정 탈퇴" },
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
        <List>
          {Menu.map((it) => {
            return (
              <div key={it.text}>
                <MenuLstItem disablePadding>
                  <MenuLIBtn>
                    {it.icon}
                    <MenuP>{it.text}</MenuP>
                  </MenuLIBtn>
                </MenuLstItem>
              </div>
            );
          })}
        </List>
      </MenuDiv>
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
  /* border: 1px solid black; */
  width: 100%;
  height: 5rem;
`;

const MenuLIBtn = styled(ListItemButton)`
  /* border: 1px solid blue; */
  display: flex;
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

export default MypagePage;
