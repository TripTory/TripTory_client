import styled,{css} from "styled-components";
import React, { useState } from "react";
import Input from "../components/common/Input";
import SelectDateRange from "../components/common/SelectDateRange";
import ImageUploader from "../components/common/ImageUploader";

const CreateTripPage = () => {
  // 사용자 입력 정보(여행이름, 여행장소)
  const [state, setState] = useState({
    tripName: "",
    tripPlace: "",
  });
  //사용자 입력 정보(여행날짜)
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //여행이름, 여행장소 값 변경
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  //여행날짜 값 변경
  const handleDateChange = (e) => {
    setDateRange(e);
    const [start, end] = e;
    setStartDate(start);
    setEndDate(end);
  };

  // 여행떠나기 버튼 클릭
  const handleSubmit = () => {
    const [startDate, endDate] = dateRange;
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
      <Button disabled={!state.tripName.trim() || !state.tripPlace.trim() || !startDate || !endDate}
        type="submit"
        onClick={handleSubmit}>여행 떠나기</Button>
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
  
  //버튼 비활성화일때 색상
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc; /* 비활성화된 상태일 때의 배경색 */
      color: #666; /* 비활성화된 상태일 때의 글자색 */
      cursor: not-allowed; /* 비활성화된 상태일 때의 커서 스타일 변경 */
    `}
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

