import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TagImgListItem from "./TagImgListItem";

export default function TagImgList() {
  return (
    <StTagImgList
      sx={{
        bgcolor: "background.paper",
        scrollbarWidth: "none",
      }}
    >
      <TagImgListItem/>
      <TagImgListItem/>
      <TagImgListItem/>
      <TagImgListItem/>
      <TagImgListItem/>
      <TagImgListItem/>
      <TagImgListItem/>
    </StTagImgList>
  );
}

const StTagImgList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
`;
