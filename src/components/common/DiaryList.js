import React from "react";
import styled from "styled-components";
import DiaryListItem from "./DiaryListItem";
export default function TripTable() {
  return (
    <StTripTable>
      <DiaryListItem item="1" />
      <DiaryListItem item="2" />
      <DiaryListItem item="3" />
      <DiaryListItem item="4" />
      <DiaryListItem item="5" />
      <DiaryListItem item="1" />
      <DiaryListItem item="2" />
      <DiaryListItem item="3" />
      <DiaryListItem item="4" />
      <DiaryListItem item="5" />
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
