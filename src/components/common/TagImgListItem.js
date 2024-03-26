import styled from "styled-components";
import React from "react";
// import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import Jeju from "../../assets/images/jeju.jpg";
export default function TagImgListItem(props) {
  return (
    <StTagImgListItem>
      <ListItem
        sx={{
          width: "100%",
          height: "100%",
          padding: "0.2rem 0.6rem 0.2rem 0.6rem",
        }}
      >
        <ImgDiv style={{ backgroundImage: `url(${Jeju})` }}>
          <TagP>#바다</TagP>
        </ImgDiv>
      </ListItem>
    </StTagImgListItem>
  );
}

//TripListItem.propTypes = {
//  item: PropTypes.string.isRequired,
//};

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
