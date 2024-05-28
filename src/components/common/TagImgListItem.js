import styled from "styled-components";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TagImgListItem({ tagName, tagImages }) {
  console.log("t1: ",tagName);
  const handleTagPage = () => {
    axios.get("http://localhost:5000/tag",{ withCredentials: true}, {tag: tagName}) // 태그의 모든 이미지 받아오는 것에서 에러
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("t2: ",tagName);
  return (
    <Link to={`/tag/${tagName}`} style={{ width: "100%", height: "100%" }}>
      <StTagImgListItem>
        <ListItem
          sx={{
            width: "100%",
            height: "100%",
            padding: "0.2rem 0.6rem 0.2rem 0.6rem",
          }}
        >
          <ImgDiv onClick={handleTagPage} style={{ backgroundImage: `url(${tagImages[tagName]})`}}>
            <TagP># {tagName}</TagP>
          </ImgDiv>
        </ListItem>
      </StTagImgListItem>
    </Link>
  );
}

TagImgListItem.propTypes = {
  tagName: PropTypes.string.isRequired,
  tagImages: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const StTagImgListItem = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgDiv = styled.div`
  border-radius: 1rem;
  width: 15rem;
  height: 100%;
  padding: 1.3rem;
`;

const TagP = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bolder;
  border: 1px red;
  border-radius: 1.5rem;
  background-color: white;
  width: auto;
  max-width: 100%;
  height: 2.4rem;
  padding-left: 0.5rem;
  padding-right: 0.6rem;
  padding-top: 0.5rem;

`;
