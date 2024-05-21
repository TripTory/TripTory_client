import React from "react";
import styled from "styled-components";
import MARKERFRAME from "../../../assets/icons/markericon.svg";
import Busan from "../../../assets/images/busan.jpg";
const CustomMarker = () => {
  return (
    <StCustomMarker>
      <MarkerImg src={MARKERFRAME} />
      <TripImg src={Busan} />
    </StCustomMarker>
  );
};

const StCustomMarker = styled.div``;

const MarkerImg = styled.img`
  position: absolute;
  width: 5rem;
`;

const TripImg = styled.img`
  position: relative;
  width: 5rem;
  height: 5.5rem;
  border-radius: 100%;
  margin-left: 0.7rem;
  margin-top: 0.3rem;
`;
export default CustomMarker;
