import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { COLOR } from "../styles/color";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfilUploader from "../components/common/ProfilUploader";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import BottomNav from "../layout/BottomNav";
import { useLocation } from "react-router";
import axios from "axios";

const EditProfilPage = () => {
  const { state } = useLocation();
  const [user, setUser] = useState(state.name);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const moveBack = () => {
    navigate("/mypage");
  };

  const handleEdit = (e) => {
    setUser(e.target.value);
  };
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    //db에 바뀐 이름 post해서 반영
    //db에 이미지 formdata로 반영
    //변경된 이름은 메인페이지, 작성자, 등에서 모두 바뀌어야 하는데.. 되는 건가? 그렇다!
    const formData = new FormData();
    formData.append("name", user);
    if (selectedFile) {
      formData.append("profileImg", selectedFile);
    }


    axios.put("http://localhost:5000/user", formData,
      { withCredentials: true })
      .then((res) => {
        if (res === 404) {
          setMessage("사용자를 찾을 수 없습니다.");
        } else if (res === 401) {
          setMessage("로그인이 필요합니다.");
        } else if (res === 500) {
          setMessage("서버 오류가 발생했습니다.");
        } else {
          setMessage("알 수 없는 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("요청 실패:", error);
      });

    navigate("/mypage");

  };
  return (
    <StEditProfilPage>
      <BackDiv>
        <BackIcon onClick={moveBack} />
      </BackDiv>
      <ProfilDiv>
        <ProfilUploader onFileSelect={handleFileSelect} />
        <TextField
          variant="standard"
          color="common"
          sx={{ width: "40%" }}
          inputProps={{ style: { fontSize: "1.3rem" } }}
          placeholder="이름을 입력하세요"
          value={user}
          onChange={handleEdit}
        />
        <SubmitBtn onClick={handleSubmit}>완료</SubmitBtn>
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

const SubmitBtn = styled(Button)`
  background-color: ${COLOR.MAIN_EMER};
  width: 35%;
  height: 3.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.8rem;
  color: white;
  font-weight: bolder;
  margin-top: 2.2rem;
  &:hover {
    background-color: ${COLOR.MAIN_EMER};
  }
  &:visited {
    background-color: ${COLOR.MAIN_EMER};
  }
  &:active {
    background-color: ${COLOR.MAIN_EMER};
  }
`;

const BackIcon = styled(KeyboardArrowLeftOutlinedIcon)`
  color: ${COLOR.MAIN_GREEN};
  width: 3.5rem;
  height: 3.5rem;
`;
export default EditProfilPage;
