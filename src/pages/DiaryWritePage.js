import styled from "styled-components";
import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../assets/images/calendar.svg";
import mapPing from "../assets/images/mapPing.svg";

const DiaryWritePage = () => {

  const [startDate, setStartDate] = useState();

  var arrInput = new Array(0);
  var arrInputValue = new Array(0);

  const addInput = function() {
    arrInput.push(arrInput.length);
    arrInputValue.push("");
    display();
  };

  const display = function(){
    document.getElementById("parah").innerHTML="";
    for (let intI=0;intI<arrInput.length;intI++) {
      document.getElementById("parah").innerHTML+=createInput(arrInput[intI], arrInputValue[intI]);
    }
  };

  const createInput = function(id, value){
    return "<input type='text' id='test "+ id +"' onChange='javascript:saveValue("+ id +",this.value)' value='"+value +"'><br>";
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

    <ImageUploadDiv>
      <ImgUploadBtn onClick={addInput}></ImgUploadBtn>
      <div id="parah"></div>
    </ImageUploadDiv>
  </div>;
};

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  width: 70%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
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
  width: 70%;
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

const ImageUploadDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-left: 12%;
  margin-right: 12%;
`;
const ImgUploadBtn = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  border: none;
  border-radius: 0.8rem;
  height: 7rem;
  width: 7rem;
`;


export default DiaryWritePage;
