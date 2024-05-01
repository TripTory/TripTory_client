import styled from "styled-components";
import { COLOR } from "../styles/color";
import tagData from "../data/TagData.js";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import goback from "../assets/icons/goback.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function TagPage() {
  const navigate = useNavigate();
  const { tagName } = useParams();

  const tag = tagData.tags.find((tag) => tag.tagName === tagName);
  const [expandedImage, setExpandedImage] = useState(null);

  const goToHome = () => {
    navigate("/home");
  };

  const handleImageClick = (index) => {
    setExpandedImage(index);
  };

  return (
    <EntireDiv>
      <GoBack>
        <img src={goback} style={{ height: "2.7rem" }} onClick={goToHome}/>
      </GoBack>
      <div>
        <TagP>#{tagName}</TagP>
        <ImageContainer>
          {tag && tag.imagePaths.map((imagePath, index) => (
            <img
              key={index}
              src={imagePath}
              alt={`${tagName}`}
              onClick={() => handleImageClick(index)}
              style={{ width: expandedImage === index ? "100%" : "30%" }}
            />
          ))}
        </ImageContainer>
      </div>
    </EntireDiv>
  );
}


const EntireDiv = styled.div`
  margin: 1%;
`;
const GoBack = styled.div`
  margin-bottom: 3rem;
`;

const TagP = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;

  img {
    width: 10rem;
    height: 10rem;
    margin: 0.2rem;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
`;
