import React, { useState } from "react";
import styled from "styled-components";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Busan from "../../../assets/images/busan.jpg";
import MARKERFRAME from "../../../assets/icons/markericon.svg";
// import CustomMarker from "./CustomMarker";
import Drawer from "@mui/material/Drawer";
import MapDrawer from "../../../components/common/map/MapDrawer";
import TripData from "../../../data/TripData.json";

const MapComponent = () => {
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (newOpen, data) => () => {
    setIsOpen(newOpen);
    setData(data);
  };
  // const handleDrawer = (data) => {
  //   setData(data);
  //   toggleDrawer(true);
  // };

  return (
    <StMap>
      <Map
        center={{ lat: 36.34, lng: 127.77 }}
        style={{ width: "100%", height: "93.2%" }}
        level={13}
        zoomable={false}
        disableDoubleClickZoom={true}
      >
        {TripData.TripData.map((it) => {
          return (
            <CustomOverlayMap
              key={it._id}
              position={{
                lat: it.location.latitude,
                lng: it.location.longitude,
              }}
            >
              <div>
                <MarkerImg src={MARKERFRAME} />
                <TripImg
                  src={Busan}
                  // onClick={() => {
                  //   handleDrawer(it);
                  // }}
                  onClick={toggleDrawer(true, it)}
                />
              </div>
            </CustomOverlayMap>
          );
        })}
      </Map>
      <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false)}>
        <MapDrawer data={data} />
      </Drawer>
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
