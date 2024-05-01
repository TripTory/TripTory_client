import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import Jeju from "../../assets/images/jeju.jpg";
import { Link } from "react-router-dom";

export default function TagImgListItem({ tagName }) {
  return (
    <Link to={`/tag/${tagName}`} style={{ width: "100%", height: "100%",}}>
      <StTagImgListItem>
        <ListItem
          sx={{
            width: "100%",
            height: "100%",
            padding: "0.2rem 0.6rem 0.2rem 0.6rem",
          }}
        >
          <ImgDiv style={{ backgroundImage: `url(${Jeju})` }}>
            <TagP>#{tagName}</TagP>
          </ImgDiv>
        </ListItem>
      </StTagImgListItem>
    </Link>
  );
}

TagImgListItem.propTypes = {
  tagName: PropTypes.string.isRequired,
};

const StTagImgListItem = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgDiv = styled.div`
  border-radius: 1rem;
  width: 15rem;
  height: 100%;
  padding: 1.5rem;
`;

const TagP = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
