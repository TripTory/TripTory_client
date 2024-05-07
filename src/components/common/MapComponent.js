import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const MapComponent = () => {
  return (
    <StMap>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
      </Map>
    </StMap>
  );
};

const StMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapComponent;
