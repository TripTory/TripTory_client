import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Busan from "../../../assets/images/busan.jpg";
import MARKERFRAME from "../../../assets/icons/markericon.svg";
import CustomMarker from "./CustomMarker";
const MapComponent = () => {
  //dummy data(추후 api 연결하여 lat, lng 지정 예정)
  const positions = [
    {
      title: "대전",
      latlng: { lat: 36.75, lng: 127.36 },
    },
    {
      title: "서울",
      latlng: { lat: 38, lng: 127 },
    },
    {
      title: "대구",
      latlng: { lat: 36.25, lng: 128.55 },
    },
    {
      title: "제주",
      latlng: { lat: 33.6, lng: 126.55 },
    },
  ];

  return (
    <StMap>
      <Map
        center={{ lat: 36.34, lng: 127.77 }}
        style={{ width: "100%", height: "93.2%" }}
        level={13}
      >
        {positions.map((position) => (
          <CustomOverlayMap
            key={position.title}
            position={{
              lat: position.latlng.lat,
              lng: position.latlng.lng,
            }}
          >
            <div>
              <MarkerImg src={MARKERFRAME} onClick={console.log(position.title)}/>
              <TripImg src={Busan} />
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
    </StMap>
  );
};

const StMap = styled.div`
  width: 100%;
  height: 100%;
`;

const MarkerImg = styled.img`
  position: absolute;
  width: 5rem;
`;

const TripImg = styled.img`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  margin-left: 0.8rem;
  margin-top: 0.3rem;
`;

export default MapComponent;
