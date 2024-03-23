import * as React from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import List from "@mui/material/List";
import TripListItem from "./TripListItem";

export default function TripList() {
  return (
    <StList
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        height: "80%",
      }}
    >
      <TripListItem item="1"/>
      <TripListItem item="2"/>
      <TripListItem item="3"/>
      <TripListItem item="4"/>
      <TripListItem item="5"/>
      <TripListItem item="6"/>
    </StList>
  );
}

const StList = styled(List)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
