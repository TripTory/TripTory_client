import styled, { css } from "styled-components";
import React, { useState } from "react";
import SelectDateRange from "../components/common/SelectDateRange";
import ImageUploader from "../components/common/ImageUploader";
import { PiMapPinFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";

const CreateTripPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 사용자 입력 정보(여행이름, 여행장소)
  const [state, setState] = useState({
    tripName: location.state ? location.state.tripName : "",
    tripPlace: location.state ? location.state.tripPlace : "",
  });
  //사용자 입력 정보(여행날짜)
  const [dateRange, setDateRange] = useState(
    location.state ? location.state.dateRange : [null, null],
  );
  const [startDate, setStartDate] = useState(
    location.state ? location.state.dateRange[0] : null,
  );
  const [endDate, setEndDate] = useState(
    location.state ? location.state.dateRange[1] : null,
  );

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
    alert(
      `여행 이름: ${state.tripName} // 여행 날짜: ${startDate}~${endDate} // 여행 장소: ${state.tripPlace}`,
    );
  };

  const navigateToSearchPlace = () => {
    navigate("/searchplace", {
      state: { tripName: state.tripName, tripDate: dateRange },
    });
  };

  const handleCancel = () => {
    setDateRange([null,null]);
    setStartDate(null);
    setEndDate(null);
    navigate("/home");
  };

  return (
    <div className="CreateTripPage">
      <TitleContainer>
        <Title>어떤 여행을 만들까요?</Title>
        <CancelBtn onClick={handleCancel}>취소</CancelBtn>
      </TitleContainer>
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
          autoComplete="off"
        />
      </InputContainer>
      <InputContainer>
        <Label>여행 일정</Label>
        <DateWrapper>
          <PinIcon />
          <SelectDateRange
            onDateChange={handleDateChange}
            daterange={dateRange} />
        </DateWrapper>
      </InputContainer>
      <InputContainer>
        <Label>여행 장소</Label>
        <SearchPlaceBtn onClick={navigateToSearchPlace}>
          <Input
            name="tripPlace"
            value={state.tripPlace}
            onChange={handleChange}
            placeholder="장소를 검색하세요"
            autoComplete="off"
          />
        </SearchPlaceBtn>
      </InputContainer>
      <Button
        disabled={
          !state.tripName.trim() ||
          !state.tripPlace.trim() ||
          !startDate ||
          !endDate
        }
        type="submit"
        onClick={handleSubmit}
      >
        여행 떠나기
      </Button>
    </div>
  );
};
CreateTripPage.propTypes = {
  location: PropTypes.object,
};
export default CreateTripPage;

const Title = styled.h1`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 900;
  font-size: 23px;
  padding: 30px 20px 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: ${COLOR.MAIN_EMER};
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

const CancelBtn = styled.button`
  height: 3rem;
  margin: auto;
  background-color: transparent;
  border: none;
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

const Input = styled.input`
  background-color: none;
  width: 90%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SearchPlaceBtn = styled.button`
  background-color: transparent;
  width: 100%;
  border: none;
  font-size: 15px;
  padding: 0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const PinIcon = styled(PiMapPinFill)`
  width: 1.7rem;
  height: 1.7rem;
  color: #545454;
`;

const DateWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  border-bottom: solid #bfbfbf 1px;
  margin: auto;
  font-size: 0;
`;
