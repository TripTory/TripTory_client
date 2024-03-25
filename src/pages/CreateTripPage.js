import styled from "styled-components";
import React, { useState } from "react";
import Input from "../components/common/Input";
import SelectDateRange from "../components/common/SelectDateRange";
import ImageUploader from "../components/common/ImageUploader";
import { RiErrorWarningFill } from "react-icons/ri";

const CreateTripPage = () => {
  // 사용자 입력 정보(여행이름, 여행장소)
  const [state, setState] = useState({
    tripName: "",
    tripPlace: "",
  });
  //사용자 입력 정보(여행날짜)
  const [dateRange, setDateRange] = useState([null, null]);

  // input값 유효성 검사
  const [errorMessage, setErrorMessage] = useState("");

  //여행이름, 여행장소 값 변경
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  //여행장소 값 변경
  const handleDateChange = (e) => {
    setDateRange(e);
  };

  // 여행떠나기 버튼 클릭
  const handleSubmit = () => {
    const [startDate, endDate] = dateRange;
    if (!state.tripName.trim() || !state.tripPlace.trim() || !startDate || !endDate){
      setErrorMessage("여행 정보를 빠짐 없이 입력해주세요.");
      return;
    }else{
      setErrorMessage("");
    }
    alert(`여행 이름: ${state.tripName} // 여행 날짜: ${startDate}~${endDate} // 여행 장소: ${state.tripPlace}` );
  };


  return (
    <div className="CreateTripPage">
      <Title>어떤 여행을 만들까요?</Title>
      <EmptyContainer />
      <div>
        <ImageUploader />
      </div>
      <EmptyContainer />
      <div></div>
      <InputContainer>
        <Label>여행 이름</Label>
        <Input
          name="tripName"
          value={state.tripName}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
      </InputContainer>
      <InputContainer>
        <Label>여행 일정</Label>
        <SelectDateRange
          onDateChange={handleDateChange}
        />
      </InputContainer>
      <InputContainer>
        <Label>여행 장소</Label>
        <Input
          name="tripPlace"
          value={state.tripPlace}
          onChange={handleChange}
          placeholder="장소를 검색하세요"
        />
      </InputContainer>
      <Button onClick={handleSubmit}>여행 떠나기</Button>
      {/* 에러 메시지 표시 */}
      {errorMessage &&
      <ErrorMessageContainer>
        <RiErrorWarningFill
          style={{
            color: "red",
            width: "2.5rem",
            height: "2.5rem",
            padding: "0.1rem",
          }}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorMessageContainer>}
    </div>
  );
};
export default CreateTripPage;

const Title = styled.h1`
  color: #016360;
  font-weight: 900;
  font-size: 23px;
  padding: 30px 20px 30px;
`;


const Button = styled.button`
  background-color: #2eaba1;
  width: 90%;
  height: 4rem;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  right: 5%;
  left: 5%;

  &:active {
    background-color: #016360; /* 바뀔 색상 */
  }
`;

const Label = styled.div`
  font-size: 15px;
  width: 90%;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0px;
  font-weight: bolder;
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 3rem;
`;

const InputContainer = styled.div`
  margin: 2rem;
`;

const ErrorMessage = styled.div`
  width: 29rem;
  color: red;
  font-size: 1.5rem;
  display: flex;
  text-align : center;
  flex-grow: 1;
  padding: 0.5rem 0.5rem 0.1rem 0.5rem;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
