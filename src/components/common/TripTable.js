import React from "react";
import styled from "styled-components";
import TripTableItem from "./TripTableItem";
export default function TripTable() {
  return (
    <StTripTable>
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
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  scrollbar-width: none;
`;
