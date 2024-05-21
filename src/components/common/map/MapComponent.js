import React, { useState } from "react";
import styled from "styled-components";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import Busan from "../../../assets/images/busan.jpg";
import MARKERFRAME from "../../../assets/icons/markericon.svg";
import { PropTypes } from "prop-types";
import Drawer from "@mui/material/Drawer";
import MapDrawer from "../../../components/common/map/MapDrawer";

const MapComponent = (props) => {
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (newOpen, data) => () => {
    setIsOpen(newOpen);
    setData(data);
  };

  return (
    <StMap>
      <Map
        center={{ lat: 36.34, lng: 127.77 }}
        style={{ width: "100%", height: "93.2%" }}
        level={13}
        zoomable={false}
        disableDoubleClickZoom={true}
      >
        {props.data.map((it) => {
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
      <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false, data)}>
        <MapDrawer data={data} />
      </Drawer>
    </StMap>
  );
};

MapComponent.propTypes = {
  data: PropTypes.node.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  location: PropTypes.node.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  travelimg: PropTypes.string.isRequired,
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
