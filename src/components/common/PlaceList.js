import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PiMapPinFill } from "react-icons/pi";

const PlaceList = ({ places, onSelectPlace }) => {
  return (
    <div>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <PlaceItemDiv>
              <PinIcon/>
              <PlaceTextDiv>
                <PlaceNameDiv>{place.placeName}</PlaceNameDiv>
                <LocationDiv>{place.location}</LocationDiv>
              </PlaceTextDiv>
              <ButtonDiv>
                <SelectBtn onClick={() => onSelectPlace(place)}>선택</SelectBtn>
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
  onSelectPlace: PropTypes.func.isRequired,
};

export default PlaceList;

const PlaceItemDiv = styled.div`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

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
  padding: 0.2rem;
  margin: 0.2rem;
`;

const LocationDiv = styled.div`
  color: #767676;
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0.2rem;
  margin: 0.2rem;
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
const PinIcon = styled(PiMapPinFill)`
  width: 2.5rem;
  height: 2.5rem;
  color: #797979;
  margin: 0rem 0rem 0rem 0.5rem;
`;
