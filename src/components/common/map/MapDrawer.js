import styled from "styled-components";
import React from "react";
import { COLOR } from "../../../styles/color";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { tripIdState } from "../../../recoil/commonState";
const MapDrawer = (props) => {
  const navigate = useNavigate();
  const [tripId, setTripId] = useRecoilState(tripIdState);
  const goToDiary = () => {
    setTripId(props.data._id);
    navigate("/triptable");
  };
  return (
    <StMapDrawer>
      <TripImg src={props.url} />
      <InfoDiv>
        <TitleP>{props.data.title}</TitleP>
        <DataP>{props.data.startdate.slice(0,10)}~{props.data.enddate.slice(0,10)}</DataP>
        <LocationDiv>
          <LocationOnIcon sx={{ fontSize: 14, color: COLOR.MAIN_GREEN }} />
          <LocationP>{props.data.location.region}</LocationP>
        </LocationDiv>
      </InfoDiv>
      <GoToTripBtn onClick={goToDiary}>여행 보러 가기</GoToTripBtn>
    </StMapDrawer>
  );
};
MapDrawer.propTypes = {
  data: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  location: PropTypes.node.isRequired,
  region: PropTypes.string.isRequired,
  travelimg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const StMapDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35rem;
  background-color: white;
  border-radius: 2rem 2rem 0rem 0rem;
  border: 1px solid rgb(200, 200, 200);
`;

const TripImg = styled.img`
  width: 90%;
  height: 45%;
  border-radius: 1.5rem;
  object-fit: cover;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 20%;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

const TitleP = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  font-family: var(--pretendard-medium);
  margin-bottom: 0.2rem;
  letter-spacing: 1px;
`;

const DataP = styled.p`
  color: rgba(119, 119, 119);
  font-size: 1.3rem;
  font-family: var(--pretendard-regular);
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding-top: 0.3rem;
`;

const LocationP = styled.p`
  font-size: 1.2rem;
  color: rgba(119, 119, 119);
  margin-left: 0.3rem;
  font-family: var(--pretendard-medium);
`;

const GoToTripBtn = styled(Button)`
  color: ${COLOR.MAIN_WHITE};
  font-size: 1.5rem;
  background-color: ${COLOR.MAIN_EMER};
  width: 90%;
  height: 4rem;
  border-radius: 10rem;
  font-weight: 800;
  font-family: var(--pretendard-semibold);
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(180, 180, 180);
  margin-top: 2rem;
  &:hover {
    background-color: ${COLOR.MAIN_EMER};
  }
  &:visited {
    background-color: ${COLOR.MAIN_EMER};
  }
  &:active {
    background-color: ${COLOR.MAIN_EMER};
  }
`;

export default MapDrawer;
