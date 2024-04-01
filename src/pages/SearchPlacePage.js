import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import PlaceList from "../components/common/PlaceList";
import jsonData from "../data/PlaceData.json";
import { COLOR } from "../styles/color";

const SearchPlacePage = () => {
  const navigate = useNavigate();

  //선택 버튼 클릭시 페이지 이동
  const navigateToCreateTrip = (location) => {
    navigate("/createtrip", { state: { tripPlace: location } });
  };
  //뒤로 가기 버튼 클릭시 페이지 이동
  const goBackToCreateTrip = () => {
    navigate("/createtrip");
  };
  //전체 지역 데이터 -> 나중에는 백에서 받아와야 함
  const allPlaces = jsonData.places;

  // 사용자 검색 내용
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  //검색된 지역 리스트
  const filteredPlaces = allPlaces.filter((place) =>
    place.placeName.toLowerCase().includes(searchText.toLowerCase()),
  );

  //지역 선택시 실행되는 함수
  const handleSelectPlace = (place) => {
    console.log(place.location);
    navigateToCreateTrip(place.location);
  };

  return (
    <div>
      <SearchBoxContainer>
        <GoBack onClick={goBackToCreateTrip} />
        <InputBox
          placeholder="어디로 떠날까요?"
          onChange={handleInputChange}
          value={searchText}
        />
        <SearchIcon></SearchIcon>
      </SearchBoxContainer>
      <PlaceListContainer>
        <PlaceList places={filteredPlaces} onSelectPlace={handleSelectPlace} />
      </PlaceListContainer>
    </div>
  );
};

export default SearchPlacePage;

const SearchBoxContainer = styled.div`
  width: 98%;
  height: 50px;
  border-bottom: solid #bfbfbf 1px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  background-color: white;
`;

const GoBack = styled(GoArrowLeft)`
  width: 45px;
  height: 45px;
  padding: 3px;
  color: ${COLOR.MAIN_GREEN};
  margin: 3px 3px 3px 5px;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 0.2rem;
  margin: 0.3rem 0rem 0rem 0rem;
  border: none;
  font-size: 1.5rem;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 45px;
  height: 45px;
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
  color: ${COLOR.MAIN_GREEN};
  margin: 3px 3px;
`;

const PlaceListContainer = styled.div`
  padding-top: 50px;
`;
