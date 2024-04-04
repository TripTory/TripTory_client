import styled from "styled-components";
import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../assets/images/calendar.svg";
import mapPing from "../assets/images/mapPing.svg";

import Modal from "../components/common/Modal";
import Uploader from "../components/common/MultipleImageUploader";

import { COLOR } from "../styles/color";


const DiaryWritePage = () => {

  const [startDate, setStartDate] = useState();
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // Cancel 버튼을 위한 모달 상태
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false); // Save 버튼을 위한 모달 상태
  const [imagePreview, setImagePreview] = useState(null);

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
  };
  const openSaveModal = () => {
    setIsSaveModalOpen(true);
  };

  const closeModal = () => {
    setIsCancelModalOpen(false);
    setIsSaveModalOpen(false);
  };

  const handleImageUpload = (preview) => {
    setImagePreview(preview);
  };

  return <div>
    <div>
      <DateDiv>
        <CalenderImage src={calendar} />
        <StyledDatePicker>
          <DatePicker
            placeholderText="날짜를 선택하세요"
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
          />
        </StyledDatePicker>
      </DateDiv>
      <PlaceDiv>
        <MapImage src={mapPing} />
        <PlaceBox placeholder="장소를 검색하세요" />
      </PlaceDiv>
    </div>

    <DiaryDiv>
      <TitleBox placeholder="제목을 입력하세요" />
      <ContentBox type="text" placeholder="내용을 입력하세요" maxLength={1000}/>
    </DiaryDiv>

    <Uploader handleImageUpload={handleImageUpload} />

    {/* 이미지 미리보기 */}
    {imagePreview && (
      <ImagePreview>
        <img src={imagePreview} alt="Uploaded" />
      </ImagePreview>
    )}

    <BtnDiv>
      <CancelBtn onClick={openCancelModal}>취소</CancelBtn>
      <SaveBtn onClick={openSaveModal}>저장</SaveBtn>
    </BtnDiv>

    {isCancelModalOpen && (
      <Modal
        content={
          <ContentDiv>
            작성을 취소하시겠습니까?
          </ContentDiv>
        }
        w="70%"
        h="15rem"
        buttons={
          <OkayDiv>
            <OkayBtn className="no" onClick={closeModal}>아니오</OkayBtn>
            <OkayBtn className="yes">예</OkayBtn>
          </OkayDiv>
        }
      />
    )}

    {isSaveModalOpen && (
      <Modal
        content={
          <ContentDiv>
            일기를 저장할까요?
          </ContentDiv>
        }
        w="70%"
        h="15rem"
        buttons={
          <OkayDiv>
            <OkayBtn className="no" onClick={closeModal}>취소</OkayBtn>
            <OkayBtn className="yes">확인</OkayBtn>
          </OkayDiv>
        }
      />
    )}

  </div>;
};

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  width: 80%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
`;
const CalenderImage = styled.img`
  padding: 1.2%;
`;

const StyledDatePicker = styled.div`
  .react-datepicker-wrapper{
    width: 70%;
  }
  .react-datepicker__input-container{
    width: 100%;
  }
  .react-datepicker__input-container input {
    background-color: none;
    width: 100%;
    border: none;
    font-size: 15px;
    &::placeholder {
      color: #bfbfbf;
    }
  }
`;

const MapImage = styled.img`
`;

const PlaceBox = styled.input`
  background-color: none;
  width: 70%;
  border: none;
  font-size: 15px;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const PlaceDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  width: 80%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
`;

const TitleBox = styled.input`
  display: flex;
  background-color: none;
  width: 92%;
  border: none;
  font-size: 15px;
  border-bottom: solid ${COLOR.MAIN_SKY} 1px;
  margin: auto;
  margin-top: 2rem;
  padding-bottom: 1rem;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const ContentBox = styled.textarea`
  display: flex;
  background-color: none;
  width: 92%;
  height: 39rem;
  border: none;
  font-size: 15px;
  margin: auto;
  margin-top: 1rem;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const DiaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: none;
  font-size: 15px;
  color: #BFBFBF;
  border: 1px solid ${COLOR.MAIN_SKY};
  border-radius: 1.8rem;
  margin-top: 2rem;
  margin-left: 8%;
  margin-right: 8%;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  margin-top: 10%;
`;
const CancelBtn = styled.button`
  height: 4rem;
  width: 14.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: white;
  border: none;
  border-radius: 3rem;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.3);
  margin-right: 3%;
`;
const SaveBtn = styled.button`
  height: 4rem;
  width: 14.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: #2EABA1;
  border: none;
  border-radius: 3rem;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.4); 
  margin-left: 3%;
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
const OkayDiv = styled.div`
  margin-top: 3rem;
`;

const ContentDiv = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 4rem;
`;

const ImagePreview = styled.div`
`;

export default DiaryWritePage;
