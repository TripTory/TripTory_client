import React, { useState } from "react";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import PlaceList from "./PlaceList";
import jsonData from "../../data/PlaceData.json";
import { COLOR } from "../../styles/color";
import PropTypes from "prop-types";
import { PiMapPinFill } from "react-icons/pi";

const SearchPlaceModal = ({ setIsModal, setTripPlace, setLongitude, setLatitude}) => {
  const allPlaces = jsonData.places;

  // 사용자 검색 내용
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  //검색된 지역 리스트
  const filteredPlaces = allPlaces.filter((place) =>
    place.city.toLowerCase().includes(searchText.toLowerCase()),
  );

  //지역 선택시 실행되는 함수
  const handleSelectPlace = (place) => {
    setTripPlace(place.city);
    setLongitude(place.longitude);
    setLatitude(place.latitude);
    closeModal();
  };

  //모달창 닫기 함수
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <ModalContainer>
        <SearchBoxContainer>
          <GoBack onClick={closeModal} />
          <InputBox
            placeholder="어디로 떠날까요?"
            onChange={handleInputChange}
            value={searchText}
          />
          <SearchIcon></SearchIcon>
        </SearchBoxContainer>
        <PlaceListContainer>
          <PlaceList
            places={filteredPlaces}
            onSelectPlace={handleSelectPlace}
          />
        </PlaceListContainer>
      </ModalContainer>
    </div>
  );
};

SearchPlaceModal.propTypes = {
  setIsModal: PropTypes.func,
  setTripPlace: PropTypes.func,
  setLongitude : PropTypes.func,
  setLatitude : PropTypes.func,
};

export default SearchPlaceModal;

const SearchBoxContainer = styled.div`
  width: 98%;
  height: 5rem;
  border-bottom: solid #bfbfbf 1px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position: fixed;
  background-color: white;
`;

const GoBack = styled(GoArrowLeft)`
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.3rem;
  color: ${COLOR.MAIN_GREEN};
  margin: 0.3rem 0.3rem 0.3rem 0.5rem;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 0.2rem;
  margin: 0.3rem 0rem 0rem 0rem;
  border: none;
  font-size: 1.5rem;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
  color: ${COLOR.MAIN_GREEN};
  margin: 0.3rem 0.3rem;
`;

const PlaceListContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 6rem;
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  overflow-y: auto;
`;

