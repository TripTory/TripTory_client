import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import PlaceList from "../components/common/PlaceList";
import jsonData from "../data/PlaceData.json";

const SearchPlacePage = () => {
  const navigate = useNavigate();

  const navigateToCreateTrip = () => {
    navigate("/createTrip");
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

  return (
    <div>
      <SearchBoxContainer>
        <GoBack onClick={navigateToCreateTrip} />
        <InputBox
          placeholder="어디로 떠날까요?"
          onChange={handleInputChange}
          value={searchText}
        />
        <SearchIcon></SearchIcon>
      </SearchBoxContainer>
      <PlaceList places={filteredPlaces}/>
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
`;

const GoBack = styled(GoArrowLeft)`
  width: 45px;
  height: 45px;
  padding: 3px;
  color: #016360;
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
  color: #016360;
  margin: 3px 3px;
`;
