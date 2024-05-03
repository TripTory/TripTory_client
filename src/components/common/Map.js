import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Map = () => {
  const mapRef = useRef(null);
  const lat = 37.6107674999935; // 위도 숫자로 넣어주기
  const lng = 126.996964708804; // 경도 숫자로 넣어주기

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
      // new naver.maps.Marker({
      //   position: location,
      //   map,
      // });
    }
  }, []);

  return <StMap ref={mapRef}></StMap>;
};

const StMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
