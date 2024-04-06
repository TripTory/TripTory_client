import React from "react";
import COLOR from "../../styles/color";
import styled from "styled-components";
import TripTableItem from "./TripTableItem";
export default function TripTable() {
  return (
    <StTripTable
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        scrollbarWidth: "none",
      }}
    >
      <TripTableItem item="1" />
      <TripTableItem item="2" />
      <TripTableItem item="3" />
      <TripTableItem item="4" />
      <TripTableItem item="5" />
      <TripTableItem item="6" />
      <TripTableItem item="6" />
      <TripTableItem item="6" />
      <TripTableItem item="6" />
    </StTripTable>
  );
}

const StTripTable = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
