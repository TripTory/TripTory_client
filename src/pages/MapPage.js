import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { COLOR } from "../styles/color";
import BottomNav from "../layout/BottomNav";
import MapComponent from "../components/common/map/MapComponent";
const MapPage = () => {
  return (
    <StMapPage>
      <TitleDiv>
        <TitleTypo variant="h4">나의 여행 지도</TitleTypo>
      </TitleDiv>
      <MapComponent style={{ zIndex: 999 }} />
      <BottomNav style={{ zIndex: 900 }} />
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

const TitleDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 10%;
  padding-left: 2rem;
  z-index: 1000;
`;

const TitleTypo = styled(Typography)`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 1000;
`;

export default MapPage;
