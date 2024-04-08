import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { COLOR } from "../styles/color";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import ProfilUploader from "../components/common/ProfilUploader";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import BottomNav from "../layout/BottomNav";

const EditProfilPage = () => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate("/mypage");
  };

  return (
    <StEditProfilPage>
      <BackDiv>
        <BackIcon onClick={moveBack}/>
      </BackDiv>
      <ProfilDiv>
        <ProfilUploader/>
        <TextField
          variant="standard"
          color="common"
          sx={{ width: "40%"}}
          inputProps={{ style: { fontSize: "1.3rem" } }}
          placeholder="이름을 입력하세요"
        />
        <Button>완료</Button>
      </ProfilDiv>
      <BottomNav />
    </StEditProfilPage>
  );
};

const StEditProfilPage = styled.div`
  width: 100%;
  height: 100%;
`;

const BackDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-left: 2rem;
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
  width: 12rem;
  height: 12rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${COLOR.MAIN_EMER};
  width: 35%;
  height: 3.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.8rem;
  color: white;
  font-weight: bolder;
  margin-top: 2.2rem;
`;

const BackIcon = styled(KeyboardArrowLeftOutlinedIcon)`
  color: ${COLOR.MAIN_GREEN};
  width: 3.5rem;
  height: 3.5rem;
`;
export default EditProfilPage;
