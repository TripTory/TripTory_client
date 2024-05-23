import React from "react";
import styled from "styled-components";
import DiaryListItem from "./DiaryListItem";
import { PropTypes } from "prop-types";

export default function TripTable(props) {
  return (
    <StTripTable>
      {props.data && props.data.map((it)=> {
        return <DiaryListItem key={it._id} data={it}/>;
      })}
    </StTripTable>
  );
}

TripTable.propTypes = {
  data: PropTypes.node.isRequired,
};

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
