import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import goback from "../assets/icons/goback.svg";
import DiaryInfo from "../components/common/DiaryInfo";
import DiaryContent from "../components/common/DiaryContent";
import ImageSlider from "../components/common/ImageSlider";
import BottomNav from "../layout/BottomNav";
import { COLOR } from "../styles/color";
import axios from "axios";

const DiaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { diaryid } = location.state;

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [img, setImg] = useState(); // [img1, img2, img3 ...]
  const [username, setUsername] = useState();
  const [userimg, setUserimg] = useState();
  const [diaryInfo, setDiaryInfo] = useState({ _id: "", title: "", content: "", date: "", travel: "", userId: "", userName: "", url: [], userUrl: "",});

  const { state } = useLocation();
  const [id, setId] = useState(state.diaryid);

  useEffect(() => {
    axios.get(`http://localhost:5000/diary/${id}`, { withCredentials: true})
  .then((res) => {
    console.log(res.data.diaryImgUrl);
    const data = res.data.diaryinfo;
    setDiaryInfo({
      _id: data.id, // 얜 굳이 get 안 해와도 ㄱㅊ을 거 같기도???
      title: data.title,
      content: data.content,
      date: data.date,
      travel: data.travel,
      userId: data.userId,
      userName: data.userName,
      url: res.data.diaryImgUrl,
      userUrl: res.data.userUrl,
    });
  })
  .catch((error) => {
    console.log(error);
  });
  }, []);


  const goToTriptable = () => {
    navigate("/triptable");
  };

  const goToEditDiary = () => {
    navigate(`/diary/${id}`); // {diaryid} 추가
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
      <DiaryInfo title={diaryInfo.title} date={diaryInfo.date} username={diaryInfo.userName} userimg={diaryInfo.userUrl} ></DiaryInfo>
      <DiaryContent content={diaryInfo.content}></DiaryContent>
      <ImageSlider images={diaryInfo.url}/>
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
