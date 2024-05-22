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
import Modal from "../components/common/Modal";
import { useRecoilState } from "recoil";
import { tripIdState } from "../recoil/commonState";

const DiaryPage = () => {
  const navigate = useNavigate();
  const [diaryInfo, setDiaryInfo] = useState({ _id: "", title: "", content: "", date: "", travel: "", userId: "", userName: "", url: [], userUrl: "",});

  const { state } = useLocation();
  const [id, setId] = useState(state);
  const [tripId, setTripId] = useRecoilState(tripIdState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/diary/${id.diaryid}`, { withCredentials: true})
    .then((res) => {
      const data = res.data.diaryinfo;
      setDiaryInfo({
        _id: data.id,
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
    setTripId(diaryInfo.travel);
    // navigate("/triptable", {state: { id: setDiaryInfo.travel }});
    navigate("/triptable");
  };

  const goToEditDiary = () => {

    const formData = new FormData();
    formData.append("title", diaryInfo.title);
    formData.append("content", diaryInfo.content);
    formData.append("date", diaryInfo.date);
    formData.append("images", diaryInfo.url);

    axios.put(`http://localhost:5000/diary/${id.diaryid}`, formData, { withCredentials: true})
    .catch((error) => {
      console.log(error);
    });

    navigate("/editdiary", { state: { diaryInfo } });
  };


  const goToDelDiary = () => {
    setIsModalOpen(true);
  };

  const justcloseModal = () => {
    setIsModalOpen(false);
  };

  const closeModal = () => {
    axios.delete(`http://localhost:5000/diary/${id}`, { withCredentials: true})
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
    setIsModalOpen(false);
    // navigate("/triptable"), { state: { id: diaryInfo._id, title: diaryInfo.title } }; // 모달 닫으면서 페이지 이동
    navigate("/triptable");
  };

  return (
    <div>
      <HeaderConatiner>
        <GoBackIcon src={goback} onClick={goToTriptable}></GoBackIcon>
        <BtnContainer>
          <EditBtn onClick={goToEditDiary}>수정</EditBtn>
          <Bar>|</Bar>
          <DeleteBtn onClick={goToDelDiary}>삭제</DeleteBtn>
        </BtnContainer>
      </HeaderConatiner>
      <DiaryInfo title={diaryInfo.title} date={diaryInfo.date} username={diaryInfo.userName} userimg={diaryInfo.userUrl} ></DiaryInfo>
      <DiaryContent content={diaryInfo.content}></DiaryContent>
      <ImageSlider images={diaryInfo.url}/>
      <BottomNav />

      {isModalOpen && (
        <Modal
          content={
            <ContentDiv>
              일기를 삭제하시겠습니까?
            </ContentDiv>
          }
          w="70%"
          h="15rem"
          buttons={
            <OkayDiv>
              <OkayBtn className="no" onClick={justcloseModal}>아니오</OkayBtn>
              <OkayBtn className="yes" onClick={closeModal}>예</OkayBtn>
            </OkayDiv>
          }
        />
      )}
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

const ContentDiv = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 4rem;
`;

const OkayDiv = styled.div`
  margin-top: 3rem;
`;

const OkayBtn = styled.button`
  height: 2.5rem;
  width: 10rem;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  vertical-align: center;
  color: white;
  border: none;
  border-radius: 3rem;
  &.no {
    color: black;
    background-color: #D9D9D9;
    margin-right: 1rem;
  }
  &.yes {
    background-color: ${COLOR.MAIN_GREEN};
  }
`;
