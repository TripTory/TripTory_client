import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Busan from "../../../assets/images/busan.jpg";
import MARKERFRAME from "../../../assets/icons/markericon.svg";
import CustomMarker from "./CustomMarker";
const MapComponent = () => {
  return (
    <StMap>
      <Map
        center={{ lat: 36.34, lng: 127.77 }}
        style={{ width: "100%", height: "93.2%" }}
        level={13}
      >
        {/* <MapMarker
          position={{ lat: 35.1795543, lng: 129.0756416 }}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
            size: { width: 30, height: 35 },
          }}
        /> */}
        <CustomOverlayMap
          position={{
            lat: 37.4562557,
            lng: 126.7052062,
          }}
        >
          <div>
            <MarkerImg src={MARKERFRAME} />
            <TripImg src={Busan} />
          </div>
        </CustomOverlayMap>
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
