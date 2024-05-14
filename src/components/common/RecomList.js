import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import RecomListItem from "./RecomListItem";
import RecomData from "../../data/RecomData.json";

export default function RecomList() {
  return (
    <StRecomList
      sx={{
        bgcolor: "background.paper",
        scrollbarWidth: "none",
      }}
    >
      {RecomData.RecomData.map((it) => {
        return <RecomListItem key={it.destination} data={it} />;
      })}
    </StRecomList>
  );
}

const StRecomList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
`;
