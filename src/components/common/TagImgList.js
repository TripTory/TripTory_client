import * as React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TagImgListItem from "./TagImgListItem";
import PropTypes from "prop-types";

export default function TagImgList( { tagNames, tagImages } ) {
  return (
    <StTagImgList
      sx={{
        bgcolor: "background.paper",
        scrollbarWidth: "none",
      }}
    >

      {tagNames.map((tagName, index) => (
        <TagImgListItem key={index} tagName={tagName} tagImages={tagImages[index]} />
      ))}
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


TagImgList.propTypes = {
  tagNames: PropTypes.string.isRequired,
  tagImages: PropTypes.string.isRequired,
};
