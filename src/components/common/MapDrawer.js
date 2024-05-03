import styled from "styled-components";
import React, { useState } from "react";
import { COLOR } from "../../styles/color";
import Jeju from "../../assets/images/jeju.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MapDrawer = () => {
  return (
    // <Box sx={{width: 250 }}  role="presentation"></Box>
    <StMapDrawerBox role="presentation">
      <TripImg src={Jeju} />
      <InfoDiv>
        <TitleP>한옥 마을 탐방기!</TitleP>
        <DataP>2024.03.01~2024.03.04</DataP>
        <LocationDiv>
          <LocationOnIcon sx={{ fontSize: 14, color: COLOR.MAIN_GREEN }} />
          <LocationP>전북특별자치도 전주시</LocationP>
        </LocationDiv>
      </InfoDiv>
      <GoToTripBtn>여행 보러 가기</GoToTripBtn>
    </StMapDrawerBox>
  );
};

const StMapDrawerBox = styled(Box)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid rgb(120, 120, 120);
  border-radius: 2rem;
`;

const TripImg = styled.img`
  width: 90%;
  height: 45%;
  border-radius: 1.5rem;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 20%;
  justify-content: space-evenly;
  /* border: 1px solid blue; */
  margin-top: 1rem;
`;

const TitleP = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
`;

const DataP = styled.p`
  color: rgba(119, 119, 119);
  font-size: 1.3rem;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding-top: 0.3rem;
`;

const LocationP = styled.p`
  font-size: 1rem;
  color: rgba(119, 119, 119);
  margin-left: 0.3rem;
`;


const GoToTripBtn = styled(Button)`
  color: ${COLOR.MAIN_WHITE};
  font-size: 1.2rem;
  background-color: ${COLOR.MAIN_EMER};
  width: 90%;
  height: 10%;
  border-radius: 10rem;
  font-weight: 800;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(180, 180, 180);
  margin-top: 2rem;
`;

export default MapDrawer;