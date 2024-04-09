import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import goback from "../assets/icons/goback.svg";
import DiaryInfo from "../components/common/DiaryInfo";
import DiaryContent from "../components/common/DiaryContent";
import ImageSlider from "../components/common/ImageSlider";
import jsonData from "../data/DiaryInfoData.json";
import { COLOR } from "../styles/color";
import image1 from "../assets/images/gunsan.jpg";
import image2 from "../assets/images/ulsan.jpg";
import image3 from "../assets/images/jeju.jpg";

const DiaryPage = () => {
  const navigate = useNavigate();

  const images = [image1, image2, image3];

  const goToTriptable = () => {
    navigate("/triptable");
  };

  return (
    <div>
      <HeaderConatiner>
        <GoBackIcon src={goback} onClick={goToTriptable}></GoBackIcon>
        <BtnContainer>
          <EditBtn>수정</EditBtn>
          <Bar>|</Bar>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContainer>
      </HeaderConatiner>
      <DiaryInfo diaryInfo={jsonData.diary_info}></DiaryInfo>
      <DiaryContent></DiaryContent>
      <ImageSlider images={images}/>
    </div>
  );
};

export default DiaryPage;

const HeaderConatiner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const GoBackIcon = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  margin: 2rem 0.5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EditBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  color: ${COLOR.MAIN_GREEN};
`;

const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  color: ${COLOR.MAIN_GREEN};
`;

const Bar = styled.p`
  font-size: 2rem;
  color: ${COLOR.MAIN_GREEN};

`;
