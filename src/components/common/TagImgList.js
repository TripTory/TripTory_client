import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TagImgListItem from "./TagImgListItem";
import PropTypes from "prop-types";

export default function TagImgList() {
  return (
    <StTagImgList
      sx={{
        bgcolor: "background.paper",
        scrollbarWidth: "none",
      }}
    >
      <TagImgListItem tagName="바다"/>
      <TagImgListItem tagName="산"/>
      <TagImgListItem tagName="강아지"/>
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


const TagImgListItems = ({ tagNames }) => {
  return (
    <StyledTagImgListItem>
      <p>#{tagNames}</p>
    </StyledTagImgListItem>
  );
};

const StyledTagImgListItem = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  &:hover {
    background-color: lightgray;
  }
`;

TagImgListItems.propTypes = {
  tagNames: PropTypes.string.isRequired,
};
