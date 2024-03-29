import styled from "styled-components";
import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DiaryWritePage = () => {

  const [startDate, setStartDate] = useState();

  return <div>
    <div>
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
      <PlaceBox placeholder="장소를 검색하세요" />
    </div>

    <DiaryDiv>
      <TitleBox placeholder="제목을 입력하세요" />
      <ContentBox type="text" placeholder="내용을 입력하세요" maxLength={1000}/>
    </DiaryDiv>
  </div>;
};

const StyledDatePicker = styled.div`
  .react-datepicker-wrapper{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
  .react-datepicker__input-container{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__input-container input {
    background-color: none;
    width: 100%;
    border: none;
    font-size: 15px;
    border-bottom: solid #bfbfbf 1px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PlaceBox = styled.input`
  background-color: none;
  width: 70%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;

const TitleBox = styled.input`
  display: flex;
  background-color: none;
  width: 92%;
  border: none;
  font-size: 15px;
  border-bottom: solid #AACCD2 1px;
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
  height: 45rem;
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
  border: 1px solid #AACCD2;
  border-radius: 1.8rem;
  margin-top: 3rem;
  margin-left: 8%;
  margin-right: 8%;
`;

export default DiaryWritePage;
