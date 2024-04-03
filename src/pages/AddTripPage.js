import styled, { css } from "styled-components";
import React, { useState } from "react";
import SelectDateRange from "../components/common/SelectDateRange";
import ImageUploader from "../components/common/ImageUploader";
import SearchPlaceModal from "../components/common/SearchPlaceModal";
import { PiMapPinFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";

const AddTripPage = () => {
  const navigate = useNavigate();

  //모달창(여행지 검색) 관리 변수
  const [isModal, setIsModal] = useState(false);

  // 사용자 입력 정보(여행이름)
  const [tripName, setTripName] = useState("");
  console.log(tripName);
  //사용자 입력 정보(여행지역)
  const [tripPlace, setTripPlace] = useState("");
  //사용자 입력 정보(여행날짜)
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // 여행 이름값 변경
  const handleNameChange = (e) => {
    setTripName(e.target.value);
  };
  // 여행 장소 값 변경
  const handlePlaceChange = (e) => {
    setTripPlace(e.target.value);
  };
  // 여행 날짜 값 변경
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
      `여행 이름: ${tripName} // 여행 날짜: ${startDate}~${endDate} // 여행 장소: ${tripPlace}`,
    );
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <div className="CreateTripPage">
      {isModal && <SearchPlaceModal setIsModal={setIsModal} setTripPlace={setTripPlace}/>}
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
          value={tripName}
          onChange={handleNameChange}
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
            daterange={dateRange}
          />
        </DateWrapper>
      </InputContainer>
      <InputContainer>
        <Label>여행 장소</Label>
        <SearchPlaceBtn onClick={openModal}>
          <Input
            name="tripPlace"
            value={tripPlace}
            onChange={handlePlaceChange}
            placeholder="장소를 검색하세요"
            autoComplete="off"
          />
        </SearchPlaceBtn>
      </InputContainer>
      <Button
        disabled={
          !tripName.trim() || !tripPlace.trim() || !startDate || !endDate
        }
        type="submit"
        onClick={handleSubmit}
      >
        여행 떠나기
      </Button>
    </div>
  );
};
AddTripPage.propTypes = {
  location: PropTypes.object,
};
export default AddTripPage;

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