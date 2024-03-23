import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import RecomListItem from "./RecomListItem";

export default function RecomList() {
  return (
    <StRecomList
      sx={{
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        height: "100%",
      }}
    >
      <RecomListItem />
      <RecomListItem />
      <RecomListItem />
      <RecomListItem />
      <RecomListItem />
    </StRecomList>
  );
}

const StRecomList = styled(List)`
  //display: flex;
 // align-items: center;
  //flex-direction: row;
  width: 100%;
`;
