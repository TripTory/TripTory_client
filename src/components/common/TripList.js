import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TripListItem from "./TripListItem";
import TripData from "../../data/TripData.json";
export default function TripList() {
  return (
    <StTripList
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        height: "100%",
        scrollbarWidth: "none",
      }}
    >
      {TripData.TripData.map((it)=> {
        return(
          <TripListItem key={it._id} data={it}/>
        );
      })}
    </StTripList>
  );
}

const StTripList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
