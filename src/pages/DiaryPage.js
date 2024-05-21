import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import goback from "../assets/icons/goback.svg";
import DiaryInfo from "../components/common/DiaryInfo";
import DiaryContent from "../components/common/DiaryContent";
import ImageSlider from "../components/common/ImageSlider";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";
import { useRecoilState } from "recoil";
import { TITLE, CONTENT, DATE, IMG, USERNAME, USERIMG } from "../recoil/commonState";

const DiaryPage = () => {
  const navigate = useNavigate();

  // const images = [image1, image2, image3];
  const [title, setTitle] = useRecoilState(TITLE);
  const [content, setContent] = useRecoilState(CONTENT);
  const [date, setDate] = useRecoilState(DATE);
  const [img, setImg] = useRecoilState(IMG);
  const [username, setUsername] = useRecoilState(USERNAME);
  const [userimg, setUserimg] = useRecoilState(USERIMG);

  const goToTriptable = () => {
    navigate("/triptable");
  };

  const goToEditDiary = () => {
    navigate("/diary"); // {diaryid} 추가
  };

  return (
    <div>
      <HeaderConatiner>
        <GoBackIcon src={goback} onClick={goToTriptable}></GoBackIcon>
        <BtnContainer>
          <EditBtn onClick={goToEditDiary}>수정</EditBtn>
          <Bar>|</Bar>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContainer>
      </HeaderConatiner>
      <DiaryInfo title={title} date={date} username={username} userimg={userimg} ></DiaryInfo>
      <DiaryContent content={content}></DiaryContent>
      <ImageSlider images={img}/>
      <BottomNav />
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
  height: 3rem;
  display: flex;
  align-items: center;
  margin-top: 2.8rem;
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
