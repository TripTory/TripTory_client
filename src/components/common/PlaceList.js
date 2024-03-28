import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import beachImg from "../../assets/images/beach.png";

const PlaceList = ({ places }) => {
  return (
    <div>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <PlaceItemDiv>
              <PlacePicDiv>
                <PlaceImg src={beachImg}></PlaceImg>
              </PlacePicDiv>
              <PlaceTextDiv>
                <PlaceNameDiv>{place.placeName}</PlaceNameDiv>
                <LocationDiv>{place.location}</LocationDiv>
              </PlaceTextDiv>
              <ButtonDiv>
                <SelectBtn>선택</SelectBtn>
              </ButtonDiv>
            </PlaceItemDiv>
          </li>
        ))}
      </ul>
    </div>
  );
};
PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeName: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PlaceList;

const PlaceItemDiv = styled.div`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const PlacePicDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceTextDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlaceNameDiv = styled.div`
  color: black;
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.2rem 0.8rem;
  margin: 0.2rem;
`;

const LocationDiv = styled.div`
  color: #767676;
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0.2rem 0.8rem;
  margin: 0.2rem;
`;

const PlaceImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  margin: 1rem;
`;

const ButtonDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBtn = styled.button`
  width: 5.3rem;
  height: 3.2rem;
  border: none;
  background-color: #ececec;
  border-radius: 20px;

  &:active {
    background-color: #aaaaaa;
  }
`;
