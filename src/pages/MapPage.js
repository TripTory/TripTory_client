import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../styles/color";
import BottomNav from "../layout/BottomNav";
import Drawer from "@mui/material/Drawer";
import MapComponent from "../components/common/map/MapComponent";
import MapDrawer from "../components/common/map/MapDrawer";
import CustomMarker from "../components/common/map/CustomMarker";
const MapPage = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <StMapPage>
      <button style={{color: "black"}} onClick={toggleDrawer(true)}>open</button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <MapDrawer />
      </Drawer>
      <MapComponent style={{ zIndex: 1 }} />
      {/* <CustomMarker/> */}
      <BottomNav style={{ zIndex: 2 }} />
    </StMapPage>
  );
};

const StMapPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  height: 100%;
`;

export default MapPage;
