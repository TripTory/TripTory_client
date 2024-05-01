import styled from "styled-components";
import { COLOR } from "../styles/color";
import tagData from "../data/TagData.js";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import goback from "../assets/icons/goback.svg";
import xicon from "../assets/icons/x-icon.svg";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function TagPage() {
  const navigate = useNavigate();
  const { tagName } = useParams();

  const tag = tagData.tags.find((tag) => tag.tagName === tagName);
  //const [expandedImage, setExpandedImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const goToHome = () => {
    navigate("/home");
  };

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <EntireDiv>
      <GoBack>
        <img src={goback} style={{ height: "2.7rem" }} onClick={goToHome} />
      </GoBack>
      <div>
        <TagP>#{tagName}</TagP>
        <ImageContainer>
          {tag &&
            tag.imagePaths.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                alt={`${tagName}`}
                onClick={() => handleImageClick(index)}
                style={{ width: "30%" }}
              />
            ))}
        </ImageContainer>
      </div>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          {modalImageIndex !== null && (
            <img
              src={tag.imagePaths[modalImageIndex]}
              alt={`${tagName}`}
              style={{ padding: "1rem", width: "100%" }}
            />
          )}
          <img src={xicon} style={{ height: "2.7rem" }} onClick={handleClose} />
        </ModalContent>
      </Modal>
    </EntireDiv>
  );
}

const EntireDiv = styled.div`
  margin: 2%;
`;
const GoBack = styled.div`
  margin-bottom: 3rem;
`;

const TagP = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const ModalContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  

  img {
    flex: 0 0 calc(33.333% - 0.4rem);
    margin: 0.2rem;
    cursor: pointer;
    object-fit: cover;
    aspect-ratio: 1 / 1; // 종횡비 1:1
    transition: width 0.3s ease-in-out;
  }
`;
